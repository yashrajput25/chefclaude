import React from "react";

export default function Main(){
const ingredients = ["Chicken", "Oregano" , "Tomatoes"]


const ingredientListItems = ingredients.map(ingredient => (
    <li>{ingredient}</li>
))

const [ingredientList , setIngredientList] = React.useState([])

function handleSubmit(event){
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredientList(prevList => [...prevList, newIngredient])

}

    return(
        <main>
            <form onSubmit = {handleSubmit} className = "add-ingredient-form">
                <input 
                type = "text"
                placeholder="e.g. Oregano"
                aria-label = "Add Ingredient"
                name = "ingredient"
                />
                
                <button> + Add Ingredient</button>
            </form>

            <ul>
                {ingredientList.map(ingredient=>(
                    <li>{ingredient}</li>
                ))}
            </ul>

        </main>
    );
}
