// @flow
import React, {Component} from 'react';
import {storiesOf} from '@kadira/storybook';
import SelectItem from '../select-item.js';

import type {
    Option,
} from '../select-item.js';

const option: Option = {
    label: "one",
    value: 1,
};

class StatefulSelectItem extends Component {
    constructor() {
        super();
        this.state = {
            option: option,
            checked: false,
        };
    }

    handleChange(checked) {
        this.setState({checked});
    }

    render() {
        const {option, checked} = this.state;

        return <div>
            <SelectItem
                option={option}
                checked={checked}
                onSelectionChanged={this.handleChange.bind(this)}
                onClick={() => {}}
            />

            <h2>Selected:</h2>
            {checked ? 'true' : 'false'}
        </div>;
    }
}

storiesOf('SelectItem', module)
    .add('default view', () => <StatefulSelectItem />);
