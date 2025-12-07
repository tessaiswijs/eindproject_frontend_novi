import './RecipePage.css';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import {CounterContext} from '../../context/CounterContext.jsx';
import axios from 'axios';

function extractNutrition(summary, nutrient) {
    if (!summary) return null;
    const nutrientSort = new RegExp(`(\\d+\\s*\\w*)\\s*${nutrient}`, 'i');
    const match = summary.match(nutrientSort);
    return match ? match[1] : null;
}


function Recipe() {
    const { id } = useParams();
    const { incrementCount, count } = useContext(CounterContext);

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        incrementCount();
        setDisabled(true);
    };


    useEffect(() => {
        async function fetchRecipe() {
            try {
                const {data} = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`);

                setRecipe(data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipe();
    }, [id]);


    if (loading) return <p className="loading-statement">Loading recipe...</p>;
    if (error || !recipe) return <p className="error-statement">Oeps. Something went wrong loading the recipe</p>;

    return (
        <article className="recipe-description-container">

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
                            <span>{extractNutrition(recipe.summary, "calories")} calories</span>
                        </div>
                    </div>

                    <div className="nutrition-info">
                        <p>Nutrition info:</p>
                        {extractNutrition(recipe.summary, "protein")} protein,
                        {extractNutrition(recipe.summary, "fat")} fat and
                        {extractNutrition(recipe.summary, "calories")} calories.
                    </div>

                </div>
            </section>

            <section className="ingredients-method-container">
                <div className="ingredient-container">
                    <h2>Ingredients</h2>
                    <ol className="ingredients">
                        {recipe.extendedIngredients.map(ing => (
                            <li key={ing.id}>{ing.original}</li>
                        ))}
                    </ol>
                </div>

                <div className="method-container">
                    <h2>Method</h2>
                    <ol className="method-steps">
                        {recipe.analyzedInstructions[0]?.steps.map(step => (
                            <li key={step.number}>{step.step}</li>
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