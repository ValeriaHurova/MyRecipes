import { useState } from 'react';
function MyRecipesComponents (  {label, mealType, image, link, ingredients, calories}) {

    const[showMore, setShowMore]=useState(false)
    return(
        <div className="singlcontainer"> 
        
            <div className='container'>
                <h2>{label}</h2>
            </div>
             <div className='container list'>
                <h3>{mealType}</h3>
                <h4>{calories.toFixed()} calories</h4>
             </div>

             <div className='container'>
                <img src={image} alt="food" width="300px"/>
             </div>

             <div className='container'>
                <h3> Сooking method and full recipe <a href={link} target="blank">here</a>.</h3>
             </div>

             
         <ul className="container list">
         
            {showMore ? ingredients.map((ingredient, index) =>(
                <li key={index}>
                    {ingredient}
                </li>   
            )): <button className="btningredients"onClick ={() => setShowMore(ingredients)}>Ingredients</button>}
        
            
         </ul>
        </div>
    )
    
}

export default MyRecipesComponents;