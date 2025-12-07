import RecipeCard from "../../components/recipeCard/RecipeCard.jsx";
import getNutritionInfo from "../../helpers/getNutrient.js";
import {useNavigate, useParams} from "react-router-dom";
import SpoonacularRecipes from "../../services/api.js";

function RecipeOverview() {

    const navigate = useNavigate();
    const {recipe, loading, error} = SpoonacularRecipes(endpoint);
    const recipes = recipe?.recipes ?? [];

    const {cuisine, diet, intolerance, time, kcal, protein} = useParams();

    const endpoint = `https://api.spoonacular.com/recipes/complexSearch?` +
        `cuisine=${cuisine}&diet=${diet}&intolerances=${intolerance}` +
        `maxReadyTime=${time}&maxCalories=${kcal}&minProtein=${protein}&` +
        `addRecipeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`;

    return (
        <>
            <section className="recipe-overview-header-section">
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>

                <h1>Recepten op basis van jouw voorkeuren</h1>;
            </section>


            <section className="recipe-article-section">
                {loading && <p>loading recipes...</p>}
                {error && <p>Oeps.. we where not able to show the recipes</p>}

                {recipes.length > 0 && recipes.map(recipe => (
                    <RecipeCard
                        key={recipe.id}
                        title={recipe.title}
                        image={recipe.image}
                        time={recipe.readyInMinutes}
                        kcal={getNutritionInfo(recipe, "calories")}
                        onClick={() => navigate(`/recipe/${recipe.id}`)}
                    />

                ))}
            </section>


        </>

    )


}

export default RecipeOverview;


