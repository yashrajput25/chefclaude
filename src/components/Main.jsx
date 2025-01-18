import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./ingredientList";

export default function Main(){
const ingredients = ["Chicken", "Oregano" , "Tomatoes"]

const [recipeShown , setRecipeShown] = React.useState(false); 

function showRecipe(){
    return (
        setRecipeShown(recipeShown => !recipeShown)
    )
}


const ingredientListItems = ingredients.map(ingredient => (
    <li>{ingredient}</li>
))

const [ingredientList , setIngredientList] = React.useState([])

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
            </>)}

            {ingredientList.length>3 &&<IngredientList onClick = {showRecipe}/>}
            </section>

           {recipeShown && <ClaudeRecipe/>}
        </main>
    );
}
