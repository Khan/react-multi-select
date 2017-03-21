import React, {Component} from 'react';

import {filterOptions} from './fuzzy-string-matching.js';
import SelectItem from './select-item.js';
import SelectList from './select-list.js';

import type {
    Option,
} from './select-item.js';

class SelectPanel extends Component {
    state = {
        searchText: "",
        focusIndex: 0,
    }

    props: {
        options: Array<Option>,
        selected: Array<any>,
        onSelectedChanged: (selected: Array<any>) => void,
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

    selectAllChanged = (checked) => {
        if (checked) {
            this.selectAll();
        } else {
            this.selectNone();
        }
    }

    handleSearchChange = (e) => {
        this.setState({
            searchText: e.target.value,
            focusIndex: -1,
        });
    }

    handleItemClicked = index => {
        this.setState({focusIndex: index});
    }

    clearSearch = () => {
        this.setState({searchText: ""});
    }

    handleKeypress = (e: KeyboardEvent) => {
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

    allAreSelected() {
        const {options, selected} = this.props;
        return options.length === selected.length;
    }

    filteredOptions() {
        const {searchText} = this.state;
        const {options} = this.props;

        return filterOptions(options, searchText);
    }

    updateFocus(offset) {
        const {focusIndex} = this.state;
        const {options} = this.props;

        let newFocus = focusIndex + offset;
        newFocus = newFocus < 0 ? 0 : newFocus;
        newFocus = newFocus > options.length ? options.length : newFocus;

        this.setState({focusIndex: newFocus});
    }

    render() {
        const {focusIndex} = this.state;

        const selectAllOption = {
            label: "Select All",
            value: "",
        };
        return <div
            style={styles.panel}
            role="listbox"
            onKeyDown={this.handleKeypress}
        >
            <div style={styles.searchContainer}>
                <input
                    placeholder="Search"
                    type="text"
                    onChange={this.handleSearchChange}
                    style={styles.search}
                />
            </div>

            <SelectItem
                focused={focusIndex === 0}
                checked={this.allAreSelected()}
                option={selectAllOption}
                onSelectionChanged={this.selectAllChanged}
                onClick={() => this.handleItemClicked(0)}
            />

            <SelectList
                {...this.props}
                options={this.filteredOptions()}
                focusIndex={focusIndex - 1}
                onClick={(e, index) => this.handleItemClicked(index + 1)}
            />
        </div>;
    }
}

const styles = {
    panel: {
        boxSizing : 'border-box',
    },
    searchContainer: {
        width: "100%",
        boxSizing : 'border-box',
        padding: "0.5em",
    },
    search: {
        display: "block",

        maxWidth: "100%",
        borderRadius: "3px",

        boxSizing : 'border-box',
        height: '30px',
        lineHeight: '24px',
        border: '1px solid #dee2e4',
        padding: '10px',
        width: "100%",
    },
};

export default SelectPanel;
