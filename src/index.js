// @flow
import React, {Component} from 'react';

import Dropdown from './dropdown.js';
import SelectPanel from './select-panel.js';

import type {
    Option,
} from './select-item.js';

class MultiSelect extends Component {
    props: {
        options: Array<Option>,
        selected: Array<any>,
        onSelectedChanged: (selected: Array<any>) => void,
        valueRenderer?: (
            selected: Array<any>,
            options: Array<Option>
        ) => string,
    }

    getSelectedText() {
        const {options, selected} = this.props;

        const selectedOptions = selected
            .map(s => options.find(o => o.value === s));

        const selectedLabels = selectedOptions.map(s => s ? s.label : "");

        return selectedLabels.join(", ");
    }

    renderHeader() {
        const {
            options,
            selected,
            valueRenderer,
        } = this.props;

        const noneSelected = selected.length === 0;
        const allSelected = selected.length === options.length;

        const customText = valueRenderer
            ? valueRenderer(selected, options)
            : undefined;

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
                ? "All items were selected"
                : this.getSelectedText()
            }
        </span>;
    }

    render() {
        const {options, selected, onSelectedChanged} = this.props;

        return <Dropdown
            contentComponent={SelectPanel}
            contentProps={{options, selected, onSelectedChanged}}
        >
            {this.renderHeader()}
        </Dropdown>;
    }
}

const styles = {
    noneSelected: {
        color: "#aaa",
    },
};

export default MultiSelect;
