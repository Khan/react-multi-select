// @flow
/**
 * This component is designed to be a multi-selct component which supports
 * the selection of several items in a picklist.  It was meant to mimic the
 * style of react-select but the multi-select behavior didn't work for our
 * our needs.
 *
 * Arguments:
 * - options: The {value, label}[] options to be displayed
 * - values: The currently selected values []
 * - onSelectedChanged: An event to notify the caller of new values
 * - valueRenderer: A fn to support overriding the message in the component
 * - isLoading: Show a loading indicator
 */
import React, {Component} from 'react';

import Dropdown from './dropdown.js';
import SelectPanel from './select-panel.js';

import type {
    Option,
} from './select-item.js';

type Props = {
    options: Array<Option>,
    selected: Array<any>,
    onSelectedChanged?: (selected: Array<any>) => void,
    valueRenderer?: (
        selected: Array<any>,
        options: Array<Option>
    ) => string,
    ItemRenderer?: Function,
    smallSummaryLabel?: boolean,
    selectAllLabel?: string,
    isLoading?: boolean,
    disabled?: boolean,
    disableSearch?: boolean,
    shouldToggleOnHover: boolean,
    hasSelectAll: boolean,
    filterOptions?: (options: Array<Option>, filter: string) => Array<Option>
};

class MultiSelect extends Component<Props> {
    static defaultProps = {
        hasSelectAll: true,
        shouldToggleOnHover: false,
    }

    getSelectedText() {
        const {options, selected, smallSummaryLabel} = this.props;
        const selectedLabels = selected
            .map(s => options.find(o => o.value === s));
        if (smallSummaryLabel) {
            return `${selectedLabels.length} selected`;
        } else {
            return selectedLabels.join(", ");
        }
    }

    renderHeader() {
        const {
            options,
            selected,
            valueRenderer,
        } = this.props;

        const noneSelected = selected.length === 0;
        const allSelected = selected.length === options.length;

        const customText = valueRenderer && valueRenderer(selected, options);

        if (noneSelected) {
            return <span style={styles.noneSelected}>
                {customText || "Select some items..."}
            </span>;
        }

        if (customText) {
            return <span>{customText}</span>;
        }

        return <span>
            {allSelected
                ? "All items are selected"
                : this.getSelectedText()
            }
        </span>;
    }

    handleSelectedChanged = (selected: Array<any>) => {
        const {onSelectedChanged, disabled} = this.props;

        if (disabled) {
            return;
        }

        if (onSelectedChanged) {
            onSelectedChanged(selected);
        }
    }

    render() {
        const {
            ItemRenderer,
            options,
            selected,
            selectAllLabel,
            isLoading,
            disabled,
            disableSearch,
            filterOptions,
            shouldToggleOnHover,
            hasSelectAll,
        } = this.props;

        return <div className="multi-select">
            <Dropdown
                isLoading={isLoading}
                contentComponent={SelectPanel}
                shouldToggleOnHover={shouldToggleOnHover}
                contentProps={{
                    ItemRenderer,
                    options,
                    selected,
                    hasSelectAll,
                    selectAllLabel,
                    onSelectedChanged: this.handleSelectedChanged,
                    disabled,
                    disableSearch,
                    filterOptions,
                }}
                disabled={disabled}
            >
                {this.renderHeader()}
            </Dropdown>
        </div>;
    }
}

const styles = {
    noneSelected: {
        color: "#aaa",
    },
};

export default MultiSelect;
export {Dropdown};
