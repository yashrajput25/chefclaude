


export async function getRecipeFromAI(ingredientList) {
    try{
        const response = await fetch("http://localhost:5000/generate-recipe",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ingredients: ingredientList}),
            });

        const rawText = await response.text();
        const data = JSON.parse(rawText);

        return data.recipe || "Sorry, I could not generate a recipe" 
    }catch(error){
        console.error("Error fetching recipe:", error.message);
        return "Error, failed to generate recipe"
    }

}


