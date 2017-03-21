// @flow
import React, {Component} from 'react';

export type Option = {
    value: any,
    label: string,
};

class SelectItem extends Component {
    state = {
        hovered: false,
    }

    componentDidMount() {
        this.updateFocus();
    }

    componentDidUpdate() {
        this.updateFocus();
    }

    itemRef: HTMLElement

    props: {
        option: Option,
        checked: boolean,
        focused?: boolean,
        onSelectionChanged: (checked: bool) => void,
        onClick: (event: MouseEvent) => void,
    }

    onChecked = (e: {target: {checked: bool}}) => {
        const {onSelectionChanged} = this.props;

        const checked = e.target.checked;
        onSelectionChanged(checked);
    }

    toggleChecked = () => {
        const {checked, onSelectionChanged} = this.props;
        onSelectionChanged(!checked);
    }

    handleClick = (e: MouseEvent) => {
        const {onClick} = this.props;
        this.toggleChecked();
        onClick(e);
    }

    updateFocus() {
        const {focused} = this.props;

        if (focused && this.itemRef) {
            this.itemRef.focus();
        }
    }

    handleKeypress = (e: KeyboardEvent) => {
        switch (e.which) {
            case 13: // Enter
            case 32: // Space
                this.toggleChecked();
                break;
            default:
                return;
        }

        e.preventDefault();
    }

    render() {
        const {option, checked, focused} = this.props;
        const {hovered} = this.state;

        const focusStyle = (focused || hovered)
            ? styles.itemContainerHover
            : undefined;

        return <div
            role="option"
            aria-selected={checked}
            selected={checked}
            tabIndex="-1"
            style={{...styles.itemContainer, ...focusStyle}}
            onClick={this.handleClick}
            ref={ref => this.itemRef = ref}
            onKeyDown={this.handleKeypress}
            onMouseOver={() => this.setState({hovered: true})}
            onMouseOut={() => this.setState({hovered: false})}
        >
            <input
                type="checkbox"
                onChange={this.onChecked}
                checked={checked}
                tabIndex="-1"
            />
            <span style={styles.label}>
                {option.label}
            </span>
        </div>;
    }
}

const styles = {
    itemContainer: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        color: '#666666',
        cursor: 'pointer',
        display: 'block',
        padding: '8px 10px',
    },
    itemContainerHover: {
        backgroundColor: '#f0f0f0',
        outline: 0,
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'middle',
        borderBottomRightRadius: '2px',
        borderTopRightRadius: '2px',
        cursor: 'default',
        padding: '2px 5px',
    },
};

export default SelectItem;
