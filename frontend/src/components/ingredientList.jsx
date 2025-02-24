
export default function ingredientList(props){
    const ingredientListItems = props.ingredients.map(ingredient => (
        <li>{ingredient}</li>
    ))
    return(
        <section>
            <div className="get-recipe-container">
                <div>         
                <h3>Ready for Recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
                </div>

                <div>
                    <button onClick={props.onClick}>Get a Recipe</button>
                </div>

            </div>
            </section>
    )
}