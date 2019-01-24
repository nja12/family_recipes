import React, { Component } from 'react';

import Recipe from './recipe.js';

export default class App extends Component {

	getRecipes() {
		return [
			{ _id: 1, name:'doohikie',method: 'Add some stuff to some things and then do other things', ingredients: ["flour", "sugar", "apples"]},
      		{ _id: 2, name:'fallases',method: 'Add some stuff to some things and then do other things', ingredients: ["flour", "sugar", "apples"],
     		{ _id: 3, name:'robojo',method: 'Add some stuff to some things and then do other things', ingredients: ["flour", "sugar", "apples"] },
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
