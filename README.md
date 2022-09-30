# React Multi Select Component

**Note (9/30/2022)**: I clearly haven't maintained this component in years.  I think this is likely a good candidate to transfer the repo to someone else if anyone wants to take it over.  There's likely much better options out there today, but if someone wants this, I expect we can do something here. -- BrianGenisio at Gmail


![Animated GIF demo](react-multi-select.gif)

[Storybook Demo](https://khan.github.io/react-multi-select/)

## Installation:
`npm install --save @khanacademy/react-multi-select`
`yarn add @khanacademy/react-multi-select`

## Usage:
See the examples in `/src/stories/index.js` for how to use the component, but here is a minimum required setups:

```
import React from 'react';
import MultiSelect from "@khanacademy/react-multi-select";

const options = [
  {label: "One", value: 1},
  {label: "Two", value: 2},
  {label: "Three", value: 3},
];

class Consumer extends React.Component {
  state = {
    selected: [],
  }

  render() {
    const {selected} = this.state;

    return <MultiSelect
      options={options}
      selected={selected}
      onSelectedChanged={selected => this.setState({selected})}
    />
  }
}
```


## i18n:
You can override the strings to be whatever you want, including translations for your languages.

```
<StatefulMultiSelect
    overrideStrings={{
        selectSomeItems: "Select Some items...",
        allItemsAreSelected: "All Items are Selected",
        selectAll: "Select All",
        search: "Search",
    }}
/>
```
