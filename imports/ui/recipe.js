import React, { Component } from 'react';
 
// Task component - represents a single todo item
export default class Recipe extends Component {
  render() {
    return (
      <li>{this.props.recipe.text}</li>
    );
  }
}