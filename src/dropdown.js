// @flow
/**
 * A generic dropdown component.  It takes the children of the component
 * and hosts it in the component.  When the component is selected, it
 * drops-down the contentComponent and applies the contentProps.
 */
import React, {Component} from 'react';

class Dropdown extends Component {

    state = {
        expanded: false,
        hasFocus: false,
    }

    componentWillUpdate() {
        document.addEventListener('touchstart', this.handleDocumentClick);
        document.addEventListener('mousedown', this.handleDocumentClick);
    }

    componentWillUnmount() {
        document.removeEventListener('touchstart', this.handleDocumentClick);
        document.removeEventListener('mousedown', this.handleDocumentClick);
    }

    props: {
        children?: Object,
        contentComponent: Object,
        contentProps: Object,
    }

    wrapper: Object

    handleDocumentClick = (event: Event) => {
        if (this.wrapper && !this.wrapper.contains(event.target)) {
            this.setState({expanded: false});
        }
    }

    handleKeyDown = (e: KeyboardEvent) => {
        switch (e.which) {
            case 27: // Escape
                this.toggleExpanded(false);
                break;
            case 38: // Up Arrow
                this.toggleExpanded(false);
                break;
            case 40: // Down Arrow
                this.toggleExpanded(true);
                break;
            default:
                return;
        }

        e.preventDefault();
    }

    handleFocus = (e: {target: any}) => {
        const {hasFocus} = this.state;

        if (e.target === this.wrapper && !hasFocus) {
            this.setState({hasFocus: true});
        }
    }

    handleBlur = (e: {target: any}) => {
        const {hasFocus} = this.state;

        if (hasFocus) {
            this.setState({hasFocus: false});
        }
    }

    toggleExpanded = (value: ?boolean) => {
        const {expanded} = this.state;

        const newExpanded = value === undefined ? !expanded : !!value;

        this.setState({expanded: newExpanded});

        if (!newExpanded && this.wrapper) {
            this.wrapper.focus();
        }
    }

    renderPanel() {
        const {contentComponent: ContentComponent, contentProps} = this.props;

        return <div style={styles.panelContainer}>
            <ContentComponent {...contentProps} />
        </div>;
    }

    render() {
        const {expanded, hasFocus} = this.state;
        const {children} = this.props;

        const expandedHeaderStyle = expanded
            ? styles.dropdownHeaderExpanded
            : undefined;

        const focusedHeaderStyle = hasFocus
            ? styles.dropdownHeaderFocused
            : undefined;

        const arrowStyle = expanded
            ? styles.dropdownArrowUp
            : styles.dropdownArrowDown;

        const focusedArrowStyle = hasFocus
            ? styles.dropdownArrowDownFocused
            : undefined;

        return <div
            tabIndex="0"
            role="combobox"
            aria-expanded={expanded}
            aria-readonly="true"
            style={styles.dropdownContainer}
            ref={ref => this.wrapper = ref}
            onKeyDown={this.handleKeyDown}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
        >
            <div
                style={{
                    ...styles.dropdownHeader,
                    ...expandedHeaderStyle,
                    ...focusedHeaderStyle,
                }}
                onClick={() => this.toggleExpanded()}
            >
                <span style={styles.dropdownChildren}>
                    {children}
                </span>
                <span style={styles.dropdownArrow}>
                    <span style={{
                        ...arrowStyle,
                        ...focusedArrowStyle,
                    }}
                    />
                </span>
            </div>
            {expanded && this.renderPanel()}
        </div>;
    }
}

const focusColor = '#78c008';

const styles = {
    dropdownArrow: {
        boxSizing: 'border-box',
        cursor: 'pointer',
        display: 'table-cell',
        position: 'relative',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 25,
        paddingRight: 5,
    },
    dropdownArrowDown: {
        boxSizing: 'border-box',
        borderColor: '#999 transparent transparent',
        borderStyle: 'solid',
        borderWidth: '5px 5px 2.5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative',
    },
    dropdownArrowDownFocused: {
        borderColor: `${focusColor} transparent transparent`,
    },
    dropdownArrowUp: {
        boxSizing: 'border-box',
        top: '-2px',
        borderColor: 'transparent transparent #999',
        borderStyle: 'solid',
        borderWidth: '0px 5px 5px',
        display: 'inline-block',
        height: 0,
        width: 0,
        position: 'relative',
    },
    dropdownChildren: {
        boxSizing: 'border-box',
        bottom: 0,
        color: '#333',
        left: 0,
        lineHeight: '34px',
        paddingLeft: 10,
        paddingRight: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteWpace: 'nowrap',
    },
    dropdownContainer: {
        position: 'relative',
        boxSizing: 'border-box',
        outline: 'none',
    },
    dropdownHeader: {
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderColor: '#d9d9d9 #ccc #b3b3b3',
        borderRadius: 4,
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
        border: '1px solid #ccc',
        color: '#333',
        cursor: 'default',
        display: 'table',
        borderSpacing: 0,
        borderCollapse: 'separate',
        height: 36,
        outline: 'none',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
    },
    dropdownHeaderFocused: {
        borderColor: focusColor,
        boxShadow: 'none',
    },
    dropdownHeaderExpanded: {
        borderBottomRightRadius: '0px',
        borderBottomLeftRadius: '0px',
    },
    panelContainer: {
        borderBottomRightRadius: '4px',
        borderBottomLeftRadius: '4px',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderTopColor: '#e6e6e6',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
        boxSizing: 'border-box',
        marginTop: '-1px',
        maxHeight: '300px',
        position: 'absolute',
        top: '100%',
        width: '100%',
        zIndex: 1,
        overflowY: 'auto',
    },
};

export default Dropdown;
