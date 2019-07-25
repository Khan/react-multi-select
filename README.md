# React Multi Select Component

React Multi Select Component

![Animated GIF demo](react-multi-select.gif)

[Storybook Demo](https://khan.github.io/react-multi-select/)

## Installation:
`npm install --save @khanacademy/react-multi-select`
`yarn add @khanacademy/react-multi-select`

## Usage:
See the examples in `/src/stories/index.js` for how to use the component, but here is a minimum required setups:

```js
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

```js
<StatefulMultiSelect
    overrideStrings={{
        selectSomeItems: "Select Some items...",
        allItemsAreSelected: "All Items are Selected",
        selectAll: "Select All",
        search: "Search",
    }}
/>
```
