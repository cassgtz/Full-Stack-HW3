import React, { Component } from 'react';
import "./Recipe.css"


class Recipe extends Component {
   render(){
       // console.log("Props" + this.props);

       return(
            <div className="recipe">
                <div className="recipe-image">
                    <img src={this.props.recipe.image} alt="Image unavailable"/>
                </div>
                <div className="recipe-description">
                    <h3> {this.props.recipe.title}</h3>
                </div>
           </div>
       );
   }
}


export default Recipe;
