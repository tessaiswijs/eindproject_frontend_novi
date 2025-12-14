import './RecipePage.css';
import { useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/button/Button.jsx';
import useGetRecipeData from "../../helpers/useGetRecipeData.js";
import getNutritionInfo from '../../helpers/getNutrient.js';
import useSavedRecipes from '../../helpers/useSavedRecipes.js';
import { AuthContext } from '../../context/AuthContext.jsx';

function Recipe() {
    const { id } = useParams();
    const endpoint = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`;
    const { recipe, loading, error } = useGetRecipeData(endpoint);

    const [disabled, setDisabled] = useState(false);
    const { isAuth } = useContext(AuthContext);
    const { recipes: savedRecipes, addRecipe: addRecipeToDatabase } = useSavedRecipes();

    const isAlreadyAdded = recipe
        ? savedRecipes.some(recipeToAdd => recipeToAdd.externalRecipeId === recipe.id)
        : false;

    const handleClick = async () => {
        if (!recipe) {
            console.log("No recipe loaded yet.");
            return;
        }

        if (isAlreadyAdded) {
            alert("This recipe is already added!");
            setDisabled(true)
            return;
        }

        if (savedRecipes.length >= 7) {
            alert("You already added 7 recipes. Remove one first.");
            return;
        }

        setDisabled(true);

        try {
            await addRecipeToDatabase({
                externalRecipeId: recipe.id,
                title: recipe.title,
                image: recipe.image,
            });
            console.log("Recipe successfully added to the database");
            console.log("Updated savedRecipes after adding:", savedRecipes);
        } catch (e) {
            console.error("Error adding recipe to database:", e);
        }
    };

    if (loading) return <p className="loading-statement">Loading recipe...</p>;
    if (error || !recipe) return <p className="error-statement">Oeps. Something went wrong loading the recipe</p>;

    return (
        <article className="recipe-description-container">

            <section className="general-info-container">
                <picture className="image-container-recipe-page">
                    <img className="food-image" src={recipe.image} alt={recipe.title} />
                </picture>

                <div className="recipe-info-container">
                    <h2>{recipe.title}</h2>

                    <div className="recipe-summary">
                        <div className="recipe-summary-item">
                            <img src="/src/assets/bord_icon.png" alt="plate" />
                            <span>{recipe.servings} portions</span>
                        </div>

                        <div className="recipe-summary-item">
                            <img src="/src/assets/time_icon.png" alt="time" />
                            <span>{recipe.readyInMinutes} minutes</span>
                        </div>

                        <div className="recipe-summary-item">
                            <img src="/src/assets/kcal_icon.png" alt="calories" />
                            <span>{getNutritionInfo(recipe, "calories")}</span>
                        </div>
                    </div>

                    <div className="nutrition-info">
                        <p>Nutrition information</p>
                        <span>carbohydrates: {getNutritionInfo(recipe, "carbohydrates")}</span>
                        <span>protein: {getNutritionInfo(recipe, "protein")}</span>
                        <span>fat: {getNutritionInfo(recipe, "fat")}</span>
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
                    {isAuth ? (
                        savedRecipes.length < 7 ? (
                        <Button
                            type="button"
                            className="add-recipe-button"
                            onClick={handleClick}
                            disabled={disabled || isAlreadyAdded}
                        >
                            <span>
                                {disabled || isAlreadyAdded
                                    ? "Recipe is added"
                                    : `Add recipe to weekmenu`}
                            </span>
                        </Button>
                    ) : (
                        <p className="seven-recipes-added">
                            You cannot add more recipes because you already added 7 recipes. Go to
                            <Link to="/mealplanning"> your meal planning</Link> to see or change your recipes.
                        </p>
                        )
                    ) : (
                        <p className="seven-recipes-added">
                            To save recipes <Link to="/signin"> log in </Link> or <Link to="/signup"> register </Link>.
                        </p>
                    )}
                </div>
            </section>
        </article>
    );
}

export default Recipe;
