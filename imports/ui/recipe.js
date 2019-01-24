import React, { Component } from 'react';
import Ingredients from './ingredients.js';
 
// Task component - represents a single todo item
export default class Recipe extends Component {
  render() {
    return (
    <section>
      <h2>{this.props.recipe.name}</h2>
      <li>{this.props.recipe.ingredients}</li>
      <p>{this.props.recipe.method}</p>
    </section>
    );
  }
}