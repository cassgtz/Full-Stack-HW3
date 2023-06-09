import React, { Component } from 'react';
import './App.css';
import recipesJson from "./asset/data/recipe.json";
import Recipe from "./components/recipes/Recipe"


const recipes = recipesJson.recipes;

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
   this._keyPressed = this._keyPressed.bind(this);
   this._filterRecipes = this._filterRecipes.bind(this);
  
   this.state = {
     filtersSet: false,
     filteredRecipes: null,
     searchQuery: "",
     calories: "",
     diet: "Any",
     category: "Any",
   };

 }

  // Handle search functions
  handleSearchChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  }
  
  handleCaloriesChange = (event) => {
    this.setState({ calories: event.target.value});
  }

  handleDietChange = (event) => {
      this.setState({ diet: event.target.value });
  }

  handleCategoryChange = (event) => {
    this.setState({ category: event.target.value });
  }
  
  _filterRecipes(){
    //console.log("filtering");
    let lowerCalories = 0;
    let uppperCalories = Infinity;

   switch(this.state.calories){
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

    const filteredRecipes = recipes.filter(recipe =>
      // Filtering title
      recipe.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()) &&
       
      // Filtering calories
      recipe.calories >= lowerCalories &&
      recipe.calories <= uppperCalories &&
   
      // Filtering diet
      (this.state.diet === "Any" || recipe.dietLabel === this.state.diet) &&
   
      // Filtering category
      (this.state.category === "Any" || recipe.recipeCategory === this.state.category)
    );

    this.setState({ filteredRecipes: filteredRecipes});
    this.setState({filtersSet: true});
  }

  _keyPressed(event){
    if(event.key === "Enter"){
      this.setState({searchQuery: event.target.value});
      //console.log(this.state.searchQuery);
      this._filterRecipes();
    }
  } 

  render(){
   const { searchQuery } = this.state;
    /*
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
   }*/

   
/*
   // Filtering all of the recipes
   const filteredRecipes = recipes.filter(recipe =>
     // Filtering title
     recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    
     // Filtering calories
     recipe.calories >= lowerCalories &&
     recipe.calories <= uppperCalories &&

     // Filtering diet
     (diet === "Any" || recipe.dietLabel === diet) &&

     // Filtering category
     (category === "Any" || recipe.recipeCategory === category)
   );*/

/*
   const recipeComponent = filteredRecipes.map(recipe =>
     (<Recipe key={recipe.title} recipe={recipe}/>)
   );*/

   const recipeComponent = recipes.map(recipe =>
    (<Recipe key={recipe.title} recipe={recipe}/>)
  );
  const filteredRecipeComponent = this.state.filteredRecipes && this.state.filteredRecipes.map(recipe =>
    (<Recipe key={recipe.title} recipe={recipe}/>)
  );

   return(
     <div className="App">
       <div className="body">

        <img id="logo" src="https://www.pngitem.com/pimgs/m/623-6238143_free-recipe-pedia-is-a-site-for-sharing.png" alt="Unavailable"/>

         <div id="search-section">
            <h1>Search for Recipes!</h1>

             {/* Search by title */}
             <div id="search-by-text">
              <input
                type="text"
                id="text-search-box"
                placeholder="Search for a Recipe title..."
                value={searchQuery}
                onChange={this.handleSearchChange}
                onKeyDown={this._keyPressed}
              />
              <img id="search-icon" src='https://st.depositphotos.com/2868925/3523/v/600/depositphotos_35237803-stock-illustration-search-icon-vector-set.jpg' alt="search icon"/>
             </div>

            <div id="drop-down-options">
              {/* Calories dropdown */}
              <div>
                <label>Calories</label>
                <select className="drop-down" onChange={this.handleCaloriesChange}>
                  <option value="">All calories</option>
                  <option value="200-600">200-600</option>
                  <option value="600-1000">600-1000</option>
                  <option value="1000-2000">1000-2000</option>
                </select>
              </div>
              {/* Diet dropdown */}
              <div>
              <label>Diet Preference</label>
              <select className="drop-down" onChange={this.handleDietChange}>
                <option value="Any">Any</option>
                <option value="Low-Fat">Low-Fat</option>
                <option value="Low-Sodium">Low-Sodium</option>
                <option value="Low-Carb">Low-Carb</option>
                <option value="Medium-Carb">Medium-carb</option>
                <option value="High-Carb">High-Carb</option>
                <option value="Balanced">Balanced</option>
                <option value="Vegetarian">Vegetarian</option>
              </select>
              </div>
               {/* Category dropdown */}
              <div>
              <label>Category</label>
              <select className="drop-down" onChange={this.handleCategoryChange}>
                <option value="Any">Any</option>
                <option value="Dessert">Dessert</option>
                <option value="Entree">Entree</option>
                <option value="Appetizer">Appetizer</option>
              </select>
              </div>
            </div>

            <button 
              id='search-button'
              onClick={this._filterRecipes}>
                Search
            </button>

         </div>
         
         {/* Show Results */}
         {this.state.filtersSet ? filteredRecipeComponent : recipeComponent}

       </div>
     </div>
   );
 }
}


export default App;
