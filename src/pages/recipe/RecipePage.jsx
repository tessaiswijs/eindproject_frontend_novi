import './RecipePage.css';
import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import {CounterContext} from '../../context/CounterContext.jsx';

function Recipe() {
    const { id } = useParams();
    const { incrementCount, count } = useContext(CounterContext);

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        async function fetchRecipe() {
            try {
                const res = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
                const data = await res.json();
                setRecipe(data);
            } catch (err) {
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipe();
    }, [id]);

    const handleClick = () => {
        incrementCount();
        setDisabled(true);
    };

    if (loading) return <p>Loading recipe...</p>;
    if (error || !recipe) return <p>Oeps. Something went wrong loading te recipe</p>;

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
                            <span>{recipe.nutrition?.nutrients?.[0]?.amount || '–'} calories</span>
                        </div>
                    </div>

                    <div className="nutrition-info">
                        <p>Nutrition info:</p>
                        {/* Hier kun je meer nutrition data toevoegen */}
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
                            {disabled ? "Already added this recipe" : `Add recipe to weekmenu ${count}/7`}
                        </span>
                    </Button>
                </div>
            </section>

        </article>
    );
}

export default Recipe;