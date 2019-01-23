import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import {ItemList} from './itemList.js';

class App extends Component {
  // Initialize items to an empty array
  state = {
    items: []
  }

  // Initialize a counter that will increment
  // for each item ID
  nextItemId = 0;

  makeItem() {
    // Use the next item ID and increment it,
    // and a random number as the value
    return {
      id: this.nextItemId++,
      value: Math.random()
    };
  }

  // The Right Way:
  // copy the existing items and add a new one
  addItemImmutably = () => {
    this.setState({
      items: [
        ...this.state.items,
        this.makeItem()
      ]
    });
  }

  // The Wrong Way:
  // mutate items and set it back
  addItemMutably = () => {
    this.state.items.push(this.makeItem());
    this.setState({ items: this.state.items });
  }

  render() {
    return (
      <div>
        <button id="immutable-add" onClick={this.addItemImmutably}>
          Add item immutably (good)
        </button>
        <button id="mutable-add" onClick={this.addItemMutably}>
          Add item mutably (bad)
        </button>
        <ItemList items={this.state.items}/>
      </div>
    );
  }
}

class ItemList extends React.PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  render() {
    return (
      <ul>
        {this.props.items.map(item =>
          <li key={item.id}>{item.value}</li>
        )}
      </ul>
    );
  }
}


export default App;
