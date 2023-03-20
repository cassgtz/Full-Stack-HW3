import React, { Component } from 'react';
import "./Recipe.css"


class Recipe extends Component {
   render(){
       // console.log("Props" + this.props);




       return(
           <div className="recipe">


              
               <img src={this.props.recipe.image} alt="Image unavailable"/>
               <h3> {this.props.recipe.title}</h3>


           </div>
       );
   }
}


export default Recipe;
