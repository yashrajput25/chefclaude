import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./ingredientList";
import { getRecipeFromMistral } from "../ai";

export default function Main(){


const [recipeShown , setRecipeShown] = React.useState(false); 
const [ingredientList , setIngredientList] = React.useState([]);
const [recipe , setRecipe] = React.useState("");

const ingredients = ["Chicken", "Oregano" , "Tomatoes"]

// function showRecipe(){
//     return (
//         setRecipeShown(recipeShown => !recipeShown)
//     )
// }

async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredientList)
    setRecipe(recipeMarkdown);

}


function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    if(newIngredient){
    setIngredientList(prevList => [...prevList, newIngredient])
}
}

// async function showRecipe(){
//     try{
//         const recipeResponse = await getRecipeFromMistral(ingredientList);
//         setRecipe(recipeResponse);
//         setRecipeShown(true);
//     }
//     catch(err){
//         console.error("Error fetching recipe: ", err.message);
//     }
// }

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

            {ingredientList.length>3 &&<IngredientList onClick = {getRecipe} ingredients = {ingredientList}/>}
            </section>

           {recipeShown && <ClaudeRecipe recipe = {recipe}/>}
        </main>
    );
}
