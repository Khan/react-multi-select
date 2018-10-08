// @flow
/**
 * This component represents the entire panel which gets dropped down when the
 * user selects the component.  It encapsulates the search filter, the
 * Select-all item, and the list of options.
 */
import {filterOptions} from 'fuzzy-match-utils';
import React, {Component} from 'react';

import SelectItem from './select-item.js';
import SelectList from './select-list.js';
import getString from "./get-string.js";

import type {Option} from './select-item.js';

type Props = {
    ItemRenderer?: Function,
    options: Array<Option>,
    selected: Array<any>,
    selectAllLabel?: string,
    onSelectedChanged: (selected: Array<any>) => void,
    disabled?: boolean,
    disableSearch?: boolean,
    hasSelectAll: boolean,
    filterOptions?: (options: Array<Option>, filter: string) => Array<Option>,
    overrideStrings?: {[string]: string}
};

type State = {
    searchHasFocus: boolean,
    searchText: string,
    focusIndex: number
};

class SelectPanel extends Component<Props, State> {
    state = {
        searchHasFocus: false,
        searchText: "",
        focusIndex: 0,
    }

    selectAll = () => {
        const {onSelectedChanged, options} = this.props;
        const allValues = options.map(o => o.value);

        onSelectedChanged(allValues);
    }

    selectNone = () => {
        const {onSelectedChanged} = this.props;

        onSelectedChanged([]);
    }

    selectAllChanged = (checked: boolean) => {
        if (checked) {
            this.selectAll();
        } else {
            this.selectNone();
        }
    }

    handleSearchChange = (e: {target: {value: any}}) => {
        this.setState({
            searchText: e.target.value,
            focusIndex: -1,
        });
    }

    handleItemClicked = (index: number) => {
        this.setState({focusIndex: index});
    }

    clearSearch = () => {
        this.setState({searchText: ""});
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 38: // Up Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(-1);
                break;
            case 40: // Down Arrow
                if (e.altKey) {
                    return;
                }

                this.updateFocus(1);
                break;
            default:
                return;
        }

        e.stopPropagation();
        e.preventDefault();
    }

    handleSearchFocus = (searchHasFocus: boolean) => {
        this.setState({
            searchHasFocus,
            focusIndex: -1,
        });
    }

    allAreSelected() {
        const {options, selected} = this.props;
        return options.length === selected.length;
    }

    filteredOptions() {
        const {searchText} = this.state;
        const {options, filterOptions: customFilterOptions} = this.props;

        return customFilterOptions ?
            customFilterOptions(options, searchText) :
            filterOptions(options, searchText);
    }

    updateFocus(offset: number) {
        const {focusIndex} = this.state;
        const {options} = this.props;

        let newFocus = focusIndex + offset;
        newFocus = Math.max(0, newFocus);
        newFocus = Math.min(newFocus, options.length);

        this.setState({focusIndex: newFocus});
    }

    render() {
        const {focusIndex, searchHasFocus} = this.state;
        const {
            ItemRenderer,
            selectAllLabel,
            disabled,
            disableSearch,
            hasSelectAll,
            overrideStrings,
        } = this.props;

        const selectAllOption = {
            label: selectAllLabel || getString("selectAll", overrideStrings),
            value: "",
        };

        const focusedSearchStyle = searchHasFocus
            ? styles.searchFocused
            : undefined;

        return <div
            className="select-panel"
            style={styles.panel}
            role="listbox"
            onKeyDown={this.handleKeyDown}
        >
            {!disableSearch && <div style={styles.searchContainer}>
                <input
                    placeholder={getString("search", overrideStrings)}
                    type="text"
                    onChange={this.handleSearchChange}
                    style={{...styles.search, ...focusedSearchStyle}}
                    onFocus={() => this.handleSearchFocus(true)}
                    onBlur={() => this.handleSearchFocus(false)}
                />
            </div>}

            {hasSelectAll &&
              <SelectItem
                  focused={focusIndex === 0}
                  checked={this.allAreSelected()}
                  option={selectAllOption}
                  onSelectionChanged={this.selectAllChanged}
                  onClick={() => this.handleItemClicked(0)}
                  ItemRenderer={ItemRenderer}
                  disabled={disabled}
              />
            }

            <SelectList
                {...this.props}
                options={this.filteredOptions()}
                focusIndex={focusIndex - 1}
                onClick={(e, index) => this.handleItemClicked(index + 1)}
                ItemRenderer={ItemRenderer}
                disabled={disabled}
            />
        </div>;
    }
}

const styles = {
    panel: {
        boxSizing : 'border-box',
    },
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "3px",

        boxSizing : 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid',
        borderColor: '#dee2e4',
        padding: '10px',
        width: "100%",
        outline: "none",
    },
    searchFocused: {
        borderColor: "#78c008",
    },
    searchContainer: {
        width: "100%",
        boxSizing : 'border-box',
        padding: "0.5em",
    },
};

export default SelectPanel;
