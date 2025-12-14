import {useNavigate} from 'react-router-dom';
import './HomePage.css';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import Button from '../../components/button/Button.jsx';
import MealplanSteps from '../../components/mealplanSteps/MealplanSteps.jsx';
import SpoonacularRecipes from '../../services/api.js';



function Home() {
    const navigate = useNavigate();
    const endpoint = `https://api.spoonacular.com/recipes/random?number=3&tags=main%20course&addRecipeNutrition=true&apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`;
    const {recipe, loading, error} = SpoonacularRecipes(endpoint);
    const recipes = recipe?.recipes ?? [];

    console.log(recipe);

    return (
        <>
            <header className="page-header">
                <div className="title-section">
                    <h1>Easy Meal planning</h1>
                    <p className="header_text">Our meal plan website helps you enjoy healthy, balanced, and stress-free
                        meals every single day. Whether your goal is to lose weight, build muscle, save time, or simply
                        find fresh inspiration in the kitchen — we make it easy.
                        Discover personalized weekly menus, smart shopping lists, and delicious recipes that fit your
                        taste, goals, and schedule. Enjoy more free time while still eating nutritious and flavorful
                        meals.
                        Start today and experience how simple good eating can be!</p>
                </div>

                <ol className="header-section">

                    <li className="steps">
                        <MealplanSteps
                            image="/src/assets/quiz_icon.png"
                            altText="quiz icoon"
                            step={1}
                            text="Do the quiz"
                        />
                    </li>

                    <li className="steps">
                        <MealplanSteps
                            image="/src/assets/cooking_icon.png"
                            altText="pan icoon"
                            step={2}
                            text="Choose recipe"
                        />
                    </li>

                    <li className="steps">
                        <MealplanSteps
                            image="/src/assets/weekplan_icon.png"
                            altText="planning icoon"
                            step={3}
                            text="Add your recipes"
                        />
                    </li>

                    <li className="steps">
                        <MealplanSteps
                            image="/src/assets/list_icon.png"
                            altText="list icon"
                            step={4}
                            text="Make your grocerylist"
                        />
                    </li>
                </ol>

                <Button
                    type="button"
                    className="quiz-button"
                    onClick={() => navigate('/Quiz')}>
                    Doe de quiz!
                </Button>

            </header>


            <main>

                <section className="recipe-header-section">
                    <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>

                    <h2 className="title_recipe-header">
                        A selection of our recipes
                    </h2>
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
                            kcal={recipe.summary}
                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                        />

                    ))}
                </section>

            </main>

        </>
    )
        ;
}

export default Home;