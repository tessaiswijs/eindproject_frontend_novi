import './RecipePage.css';
import {useState, useContext} from 'react';
import {useParams} from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import {CounterContext} from '../../context/CounterContext.jsx';
import SpoonacularRecipes from "../../services/api.js";
import getNutritionInfo from '../../helpers/getNutrient.js';


function Recipe() {
    const { id} = useParams();
    const endpoint = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`;
    const {recipe, loading, error} = SpoonacularRecipes(endpoint);

    const {incrementCount, count} = useContext(CounterContext);
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        incrementCount();
        setDisabled(true);
    };

    if (loading) return <p className="loading-statement">Loading recipe...</p>;
    if (error || !recipe) return <p className="error-statement">Oeps. Something went wrong loading the recipe</p>;

    return (
        <article className="recipe-description-container">

            {loading && <p>loading recipes...</p>}
            {error && <p>Oeps.. we where not able to show the recipes</p>}

            <section className="general-info-container">
                <img className="food-image"
                     src={recipe.image}
                     alt={recipe.title}/>

                <div className="recipe-info-container">
                    <h2>{recipe.title}</h2>

                    <div className="recipe-summary">
                        <div className="recipe-summary-item">
                            <img src="/src/assets/bord_icon.png" alt="plate"/>
                            <span>{recipe.servings} portions</span>
                        </div>

                        <div className="recipe-summary-item">
                            <img src="/src/assets/time_icon.png" alt="time"/>
                            <span>{recipe.readyInMinutes} minutes</span>
                        </div>

                        <div className="recipe-summary-item">
                            <img src="/src/assets/kcal_icon.png" alt="calories"/>
                            <span>{getNutritionInfo(recipe, "calories")}</span>
                        </div>
                    </div>

                    <div className="nutrition-info">
                        <p>Nutrition information</p>
                        <span>carbohydrates: {getNutritionInfo(recipe, "carbohydrates")}</span>
                        <span> protein: {getNutritionInfo(recipe, "protein")}</span>
                        <span> fat: {getNutritionInfo(recipe, "fat")}</span>


                    </div>

                </div>
            </section>

            <section className="ingredients-method-container">
                <div className="ingredient-container">
                    <h2>Ingredients</h2>
                    <ol className="ingredients">
                        {recipe.extendedIngredients.map((ing, index) => (
                            <li key={`${ing.id}-${index}`}>{ing.original}</li>
                        ))}
                    </ol>
                </div>

                <div className="method-container">
                    <h2>Method</h2>
                    <ol className="method-steps">
                        {recipe.analyzedInstructions[0]?.steps.map((step, index) => (
                            <li key={`${step.number}-${index}`}>{step.step}</li>
                        ))}
                    </ol>

                    <Button
                        type="button"
                        className="add-recipe-button"
                        onClick={handleClick}
                        disabled={disabled}>
                        <span>
                            {disabled ? "Recipe is added" : `Add recipe to weekmenu ${count}/7`}
                        </span>
                    </Button>
                </div>
            </section>

        </article>
    );
}

export default Recipe;