import './RecipeCard.css'
import extractCalories from "../../helpers/extractCalories.js";

function Recipecard({onClick, title, image, time, kcal}) {
    return (
        <>
            <article className="recipe-card" onClick={onClick}>
                <img className="recipe-image" src={image} alt={title}/>

                <div className="recipe-specification">
                    <h4 className="recipe-title">{title}</h4>

                    <span className="cooking-time">
                    <img className="detail-icon" src="/src/assets/time_icon.png" alt="klok"/>
                        {time} min
                </span>

                    <span className="kcal-info">
                    <img className="detail-icon" src="/src/assets/kcal_icon.png" alt="kcal"/>
                        {extractCalories(kcal)}
                </span>
                </div>
            </article>
        </>
    )
}

export default Recipecard;