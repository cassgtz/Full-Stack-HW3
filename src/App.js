import React, { Component } from 'react';
import './App.css';
import recipesJson from "./asset/data/recipe.json";
import Recipe from "./components/recipes/Recipe"


// console.log(recipesJson);
const recipes = recipesJson.recipes;
// console.log(recipes);


// map function to create Recipe component for each JSON object in the array
const recipeComponent = recipes.map( recipe => {
 // console.log(recipe);
 return <Recipe key={recipe.title} recipe={recipe} />
})


// comment
class App extends Component {
  // Constructor
 constructor(props){
   super(props);
  
   this.state = {
     searchQuery: "",
   };
 }


 // Handle search function
 handleSearchChange = (event) => {
   this.setState({ searchQuery: event.target.value});
 }
  render(){


   const { searchQuery } = this.state;
   const filteredRecipes = recipesJson.recipes.filter(recipe =>
     recipe.title.toLocaleLowerCase().includes(searchQuery.toLowerCase())
   );


   const recipeComponent = filteredRecipes.map(recipe =>
     (<Recipe key={recipe.title} recipe={recipe}/>)
   );




   return(
     <div className="App">
       <div>
         <h1>Search for Recipes</h1>
         <input
           type="text"
           placeholder="Search for a Recipe title"
           value={searchQuery}
           onChange={this.handleSearchChange}
         />


         {recipeComponent}
       </div>
     </div>
   );
 }
}


export default App;
