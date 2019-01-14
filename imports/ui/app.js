import React, { Component } from 'react';

import Recipe from './recipe.js';

export default class App extends Component {

	getRecipes() {
		return [
			{ _id: 1, text: 'This is recipe 1' },
      		{ _id: 2, text: 'This is recipe 2' },
     		{ _id: 3, text: 'This is recipe 3' },
		];
	}

	renderRecipes() {
		return this.getRecipes().map((recipe) => (<Recipe key={recipe._id} recipe={recipe}/>));
	}

	render() {
		return (
			<div className="container">
				<header>
					<h1>Recipes</h1>
				</header>

				<ul>
					{this.renderRecipes()}
				</ul>
			</div>
		);
	}
}
