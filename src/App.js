import React, { Component } from 'react';
import './App.css';
import recipesJson from "./asset/data/recipe.json";
import Recipe from "./components/recipes/Recipe"


// console.log(recipesJson);
//const recipes = recipesJson.recipes;
// console.log(recipes);


// map function to create Recipe component for each JSON object in the array
/*
const recipeComponent = recipes.map( recipe => {
 // console.log(recipe);
 return <Recipe key={recipe.title} recipe={recipe} />
})*/

class App extends Component {
  // Constructor
 constructor(props){
   super(props);
  
   this.state = {
     searchQuery: "",
     calories: "",
   };
 }

 // Handle search function
 handleSearchChange = (event) => {
   this.setState({ searchQuery: event.target.value});
 }

 handleCaloriesChange = (event) => {
  this.setState({ calories: event.target.value });
}

  render(){

   const { searchQuery } = this.state;
   const { calories } = this.state;
   let lowerCalories = 0;
   let uppperCalories = Infinity;

   switch(calories){
     case "200-600":
       uppperCalories = 600;
       break;
     case "600-1000":
       lowerCalories = 600;
       uppperCalories = 1000;
       break;
     case "1000-2000":
       lowerCalories = 1000;
       uppperCalories = 2000;
       break;
   }

   const filteredRecipes = recipesJson.recipes.filter(recipe =>
     recipe.title.toLocaleLowerCase().includes(searchQuery.toLowerCase()) &&
     recipe.calories >= lowerCalories &&
     recipe.calories <= uppperCalories
   );


   const recipeComponent = filteredRecipes.map(recipe =>
     (<Recipe key={recipe.title} recipe={recipe}/>)
   );


   return(
     <div className="App">
       <div className="body">

         <div id="search-section">
            <h1>Search for Recipes!</h1>
            <input
              type="text"
              id="text-search-box"
              placeholder="Search for a Recipe title"
              value={searchQuery}
              onChange={this.handleSearchChange}
            />
            <div id="drop-down-options">
              <div>
              <label>Calories: </label>
              <select className="calories" onChange={this.handleCaloriesChange}>
                <option value="">All calories</option>
                <option value="200-600">200-600</option>
                <option value="600-1000">600-1000</option>
                <option value="1000-2000">1000-2000</option>
              </select>
              </div>
              <div></div>
              <div></div>
            </div>
            <button>Search</button>
         </div>


         {recipeComponent}
       </div>
     </div>
   );
 }
}


export default App;
