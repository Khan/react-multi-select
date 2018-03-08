// @flow
import React, {Component} from 'react';
import {storiesOf} from '@kadira/storybook';
import SelectPanel from '../select-panel.js';

const options = [
    {label: "Brian Genisio", value: 1},
    {label: "John Doe", value: 2},
    {label: "Jane Doe", value: 3},
];

import type {Option} from "../select-item.js";

type State = {
    selected: Array<Option>
};

class StatefulSelectPanel extends Component<{}, State> {
    constructor() {
        super();
        this.state = {
            selected: [],
        };
    }

    handleSelectedChanged(selected) {
        this.setState({selected});
    }

    render() {
        const {selected} = this.state;

        return <div>
            <SelectPanel
                options={options}
                onSelectedChanged={this.handleSelectedChanged.bind(this)}
                hasSelectAll
                selected={selected}
            />

            <h2>Selected:</h2>
            {selected.join(', ')}
        </div>;
    }
}

storiesOf('SelectPanel', module)
    .add('default view', () => <StatefulSelectPanel />);
