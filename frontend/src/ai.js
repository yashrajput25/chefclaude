


export async function getRecipeFromAI(ingredientList) {

    try {
        console.log("Sending request to backend with ingredients:", ingredientList);

        const response = await fetch("http://localhost:5000/generate-recipe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ingredients: ingredientList }),
        });

        console.log("Received response:", response);
        if (!response.ok) {
            throw new Error(`Server Error: ${response.status} ${response.statusText}`);
        }
        
        const rawText = await response.text();
        console.log("Raw Response Text:", rawText);

        // Try parsing JSON
        const data = JSON.parse(rawText);
        console.log("Extracted recipe:", data);

        return data.text || "Sorry, I couldn't generate a recipe.";
    } catch (error) {
        console.error("Error fetching recipe:", error.message);
        return "Error: Failed to fetch the recipe.";
    }

}


