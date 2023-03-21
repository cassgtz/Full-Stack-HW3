import React, { Component } from 'react';
import "./Recipe.css"


class Recipe extends Component {
   render(){
       return(
            <div className="recipe">
                <div className="recipe-image">
                    <img src={this.props.recipe.image} alt="Unavailable"/>
                </div>
                <div className="recipe-description">
                    <h3> {this.props.recipe.title}</h3>
                    <ul>
                        <li>
                            Servings: {this.props.recipe.servings}
                        </li>
                        <li>
                            Calories: {this.props.recipe.calories}
                        </li>
                        <li>
                            Diet: {this.props.recipe.dietLabel}
                        </li>
                        <li>
                            Category: {this.props.recipe.recipeCategory}
                        </li>
                    </ul>
                </div>
           </div>
       );
   }
}


export default Recipe;
