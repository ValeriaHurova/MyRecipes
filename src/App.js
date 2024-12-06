import { useEffect, useState } from 'react';
import './App.css';
import image from './food.jpg'
import icon from './icon.png'
import MyRecipesComponents from './MyRecipesComponents';

function App() {

  const MY_ID = "8a7601c2";
  const MY_KEY = "381c1741afd44fac32ef6676aba59172";

  const [mySearch, setMySearch]= useState("");
  const [myRecipes, setMyResipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState();


  
    const getRecipe = async ()=> {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyResipes(data.hits);
    }
   useEffect(() => { 
    if (wordSubmitted ) getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)

  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }
  return (
    <div>
      <div className='container'>
        <img className='background' src={image}alt="food" width="100%"/>
        <h1>Get your recipe</h1>
      </div>

      <div className='container' >
        <form onSubmit={finalSearch}>
          <input placeholder='Search...' onChange ={myRecipeSearch} value={mySearch}/>
          <button className='list form'><img src={icon} alt="icon" width="30px"/></button>
        </form>
      </div>

      <div className='maincontainer' >

      {myRecipes.map((element, index) => (
        <MyRecipesComponents key={index}
        label = {element.recipe.label}
        mealType = {element.recipe.mealType}
        image = {element.recipe.image}
        link = {element.recipe.url}
        ingredients = {element.recipe.ingredientLines}
        calories={element.recipe.calories}/>
      ))}
      </div>

      <div className='container'>
        <div className='par' >
        <p>Here you can find more than 2 million recipes.</p>
        <p>Enter the name of the main ingredient or a list of those products that you have and choose your recipe for today.</p>
        </div>
      </div>
      
        
      
    </div>
  );
}

export default App;
