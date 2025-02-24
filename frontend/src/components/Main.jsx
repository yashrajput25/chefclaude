import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./ingredientList";
import { getRecipeFromAI } from "../ai";

export default function Main(){


const [recipeShown , setRecipeShown] = React.useState(false); 
const [ingredientList , setIngredientList] = React.useState([]);
const [recipe , setRecipe] = React.useState("");
const [loading, setLoading] = React.useState(false);

const ingredients = ["Chicken", "Oregano" , "Tomatoes"]

// function showRecipe(){
//     return (
//         setRecipeShown(recipeShown => !recipeShown)
//     )
// }

async function getRecipe(){

    if(ingredientList.length == 0){
        return;
    }

    setLoading(true);
    setRecipeShown(false);

    try{
        const recipeMarkdown = await getRecipeFromAI(ingredientList)
        console.log("Setting recipe state:", recipeMarkdown);
        setRecipe(recipeMarkdown);
        setRecipeShown(true);

    }catch(error){
        console.error("Error setting recipe:", error);
        setRecipe("Error: Failed to generate a recipe.");
    }
    setLoading(false);

}


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
                {ingredientList.length > 0 && (<> 
                <h2>Ingredients on hand:</h2>
            <ul>
                {ingredientList.map((ingredient, index)=>(
                    <li key={index} >{ingredient}</li>
                ))}
            </ul>
            </>)}

            {ingredientList.length>3 &&<IngredientList onClick = {getRecipe} ingredients = {ingredientList}/>}
            </section>

            {loading && 
                (<div className="loading-container">
                    <div className="loader"></div>
                    <p>Generating Recipe...</p>
                </div>)
            }

        {recipeShown && <ClaudeRecipe recipe = {recipe}/>}
        </main>
    );
}
