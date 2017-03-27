// @flow
/**
 * This component represents an unadorned list of SelectItem (s).
 */
import React, {Component} from 'react';

import SelectItem from './select-item.js';

import type {
    Option,
} from './select-item.js';

class SelectList extends Component {
    props: {
        focusIndex: number,
        ItemRenderer?: Function,
        options: Array<Option>,
        selected: Array<Object>,
        onSelectedChanged: (selected: any) => void,
        onClick: (event: MouseEvent, index: number) => void,
    }

    handleSelectionChanged = (option: Option, checked: boolean) => {
        const {selected, onSelectedChanged} = this.props;

        if (checked) {
            onSelectedChanged([...selected, option.value]);
        } else {
            const index = selected.indexOf(option.value);
            const removed = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1),
            ];
            onSelectedChanged(removed);
        }
    }

    renderItems() {
        const {
            ItemRenderer,
            options,
            selected,
            focusIndex,
            onClick,
        } = this.props;

        return options.map((o, i) =>
            <li style={styles.listItem} key={i}>
                <SelectItem
                    focused={focusIndex === i}
                    option={o}
                    onSelectionChanged={c => this.handleSelectionChanged(o, c)}
                    checked={selected.includes(o.value)}
                    onClick={e => onClick(e, i)}
                    ItemRenderer={ItemRenderer}
                />
            </li>
        );
    }

    render() {
        return <ul style={styles.list}>
            {this.renderItems()}
        </ul>;
    }
}

const styles = {
    list: {
        margin: 0,
        paddingLeft: 0,
    },
    listItem: {
        listStyle: 'none',
    },
};

export default SelectList;
