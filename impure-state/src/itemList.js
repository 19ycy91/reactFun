import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemList extends React.PureComponent {
    static propTypes = {
        items: PropTypes.array.isRequired
    }


    render () {
        return (
            <ul>
                {this.props.items.map(item => 
                    <li key = {item.id}>{item.value}</li>
                )}
            </ul>
        );
    }
}

export {ItemList};