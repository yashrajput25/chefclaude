import React from "react";

export default function Main(){
const ingredients = ["Chicken", "Oregano" , "Tomatoes"]


const ingredientListItems = ingredients.map(ingredient => (
    <li>{ingredient}</li>
))

const [ingredientList , setIngredientList] = React.useState([])

/* function handleSubmit(event){
    event.preventDefault() (not needed)
    const formData = new FormData(event.currentTarget) (not needed)
    const newIngredient = formData.get("ingredient")
    setIngredientList(prevList => [...prevList, newIngredient])
 } */

function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    if(newIngredient){
    setIngredientList(prevList => [...prevList, newIngredient])
}
}

    return(
        <main>
            <form action = {addIngredient}/*onSubmit = {handleSubmit} */className = "add-ingredient-form">
                <input 
                type = "text"
                placeholder="e.g. Oregano"
                aria-label = "Add Ingredient"
                name = "ingredient"
                />
                
            <button> + Add Ingredient</button>

            </form>
            <section>
                {ingredientList.length > 0 && (<> <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientList.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ul>
            <div className="get-recipe-container">
                <div>         
                <h3>Ready for Recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
                </div>

                <div>
                    <button>Get a Recipe</button>
                </div>

            </div></>)}

           
            </section>
        </main>
    );
}
