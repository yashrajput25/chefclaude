
export default function ingredientList(props){
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