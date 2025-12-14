import './RecipeOverviewPage.css';
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import RecipeCard from "../../components/recipeCard/RecipeCard.jsx";
import { QuizContext } from "../../context/QuizContext.jsx";

function RecipeOverview() {
    const navigate = useNavigate();
    const { quizData } = useContext(QuizContext);

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (!quizData) return;

        const controller = new AbortController();

        async function fetchRecipes() {
            setLoading(true);
            setError(false);

            try {
                const params = new URLSearchParams();

                if (quizData.maxReadyTime) params.append('maxReadyTime', quizData.maxReadyTime);
                if (quizData.maxCalories) params.append('maxCalories', quizData.maxCalories);
                if (quizData.minProtein) params.append('minProtein', quizData.minProtein);
                if (quizData.diet && quizData.diet.length > 0) params.append('diet', quizData.diet.join(','));
                if (quizData.cuisine && quizData.cuisine.length > 0) params.append('cuisine', quizData.cuisine.join(','));
                if (quizData.intolerances && quizData.intolerances.length > 0) params.append('intolerances', quizData.intolerances.join(','));

                params.append('addRecipeNutrition', 'true');
                params.append('number', '10');

                const { data } = await axios.get(
                    `https://api.spoonacular.com/recipes/complexSearch?${params.toString()}&tags=main%20course&apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`,
                    { signal: controller.signal }
                );

                setRecipes(data.results || []);
            } catch (e) {
                console.error("Error fetching recipes:", e);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipes();

        return () => controller.abort();
    }, [quizData]);

    return (
        <>
            <div className="recipe-overview-container">
            <section className="recipe-overview-header-section">
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>
                <h1>Recipes based on your preferences</h1>
            </section>

            {!quizData && (
                <section className="alternative-recipe-article-section">
                <p> Do<Link to="/quiz"> the quiz </Link>to see your recipes.</p>
                </section>
                )}

            {quizData && (
            <section className="recipe-article-section">
                {loading && <p>Loading recipes...</p>}
                {error && <p>Oeps.. we were not able to show the recipes</p>}

                        {recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                title={recipe.title}
                                image={recipe.image}
                                time={recipe.readyInMinutes}
                                kcal={recipe.summary}
                                onClick={() => navigate(`/recipe/${recipe.id}`)}
                            />
                        ))}
            </section>
            )}
            </div>
        </>
    );
}

export default RecipeOverview;
