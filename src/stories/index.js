// @flow
import React, {Component} from 'react';
import {storiesOf} from '@storybook/react';
import MultiSelect from '../index.js';

import type {
    Option,
} from '../select-item.js';

const shortList = [
    {label: "Brian Genisio", value: 1},
    {label: "John Doe", value: 2},
    {label: "Jane Doe", value: 3},
];

const longList = [...Array(26).keys()]
    .map(value => {
        const label = String.fromCharCode(97 + value); // A-Z
        return {label, value};
    });

const states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming",
};

const statesList = Object.keys(states)
    .map(key => ({
        value: key,
        label: states[key],
    }));

const students = [
    {id: 0, name: "Zach Morris"},
    {id: 1, name: "Kelly Kapowski"},
    {id: 2, name: "A.C. Slater"},
    {id: 3, name: "Lisa Turtle"},
    {id: 4, name: "Jessie Spano"},
    {id: 5, name: "Samuel Powers"},
    {id: 6, name: "Tori Scott"},
];

const studentsList = students.map(s => ({
    value: s,
    label: s.name,
}));

type SMSProps = {
    options: Option[],
    valueRenderer?: (values: Array<any>, options: Array<Option>) => string,
    ItemRenderer?: Function,
    selectAllLabel?: string,
    isLoading?: boolean,
    disabled?: boolean,
    disableSearch?: boolean,
    filterOptions?: (options: Array<Option>, filter: string) => Array<Option>,
    overrideStrings?: {[string]: string}
};
type SMSState = {
    selected: Array<Option>
};

class StatefulMultiSelect extends Component<SMSProps, SMSState> {
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
        const {
            ItemRenderer,
            options,
            selectAllLabel,
            valueRenderer,
            isLoading,
            disabled,
            disableSearch,
            filterOptions,
            overrideStrings,
        } = this.props;
        const {selected} = this.state;

        return <div>
            <MultiSelect
                options={options}
                onSelectedChanged={this.handleSelectedChanged.bind(this)}
                selected={selected}
                valueRenderer={valueRenderer}
                ItemRenderer={ItemRenderer}
                selectAllLabel={selectAllLabel}
                isLoading={isLoading}
                disabled={disabled}
                disableSearch={disableSearch}
                filterOptions={filterOptions}
                overrideStrings={overrideStrings}
            />

            <h2>Selected:</h2>
            {selected.join(', ')}
        </div>;
    }
}

function studentValueRenderer(selected, options) {
    if (selected.length === 0) {
        return "Select some students...";
    }

    if (selected.length === options.length) {
        return "All students selected";
    }

    return `Selected ${selected.length} Students`;
}

type SIRProps = {
    checked: boolean,
    option: Option,

    onClick: (event: MouseEvent) => void
};

class StudentItemRenderer extends Component<SIRProps> {
    render() {
        const {checked, option, onClick} = this.props;

        return <span>
            <span>
                {option.label}
            </span>
            <input
                type="checkbox"
                onChange={onClick}
                checked={checked}
                tabIndex="-1"
                style={{float: 'right'}}
            />
        </span>;
    }
}

const customFilter = (options: Array<Option>, filter: string) => {
    const optionIncludesText = (option: Option) => {
        const label = option.label || "";
        return label.toLowerCase().includes(filter);
    };

    return options.filter(optionIncludesText);
};

storiesOf('MultiSelect', module)
    .add('default view', () => <StatefulMultiSelect options={shortList} />)
    .add('long list view', () => <StatefulMultiSelect options={longList} />)
    .add('United States', () => <StatefulMultiSelect options={statesList} />)
    .add('Custom Heading Renderer', () => <StatefulMultiSelect
        options={studentsList}
        valueRenderer={studentValueRenderer}
        selectAllLabel="All students"
    />)
    .add('Tabbing test (accessibility)', () => <div>
        <input/>
        <StatefulMultiSelect options={shortList} />
        <input type="checkbox" />
    </div>)
    .add('Item Renderer Override', () => <StatefulMultiSelect
        options={studentsList}
        ItemRenderer={StudentItemRenderer}
    />)
    .add('With loading indicator', () => <StatefulMultiSelect
        options={[]}
        isLoading={true}
    />)
    .add('Disable Search', () => <StatefulMultiSelect
        options={studentsList}
        disableSearch={true}
    />)
    .add('Disabled', () => <MultiSelect
        options={studentsList}
        selected={[students[1], students[2]]}
        disabled={true}
    />)
    .add('Custom Filter', () => <StatefulMultiSelect
        options={studentsList}
        filterOptions={customFilter}
    />)
    .add('Custom Strings', () => <StatefulMultiSelect
        options={studentsList}
        overrideStrings={{
            selectSomeItems: "SeLeCt SoMe iTeMs...",
            allItemsAreSelected: "ALl ItEmS aRe SeLeCtEd",
            selectAll: "SeLeCt AlL",
            search: "SeArCh",
        }}
    />);
