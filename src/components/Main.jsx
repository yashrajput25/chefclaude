
export default function Main(){
    return(
        <main>
            <form className = "add-ingredient-form">
                <input 
                type = "text"
                placeholder="e.g. Oregano"
                aria-label = "Add Ingredient"/>
                <button> + Add Ingredient</button>
            </form>
        </main>
    );
}