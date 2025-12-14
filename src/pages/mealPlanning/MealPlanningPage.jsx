import './MealPlanningPage.css';
import {useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import MealCard from '../../components/mealCard/MealCard.jsx';
import useSavedRecipes from '../../helpers/useSavedRecipes';
import {AuthContext} from '../../context/AuthContext.jsx';

function MealPlanning() {
    const {recipes, loading, error, deleteRecipe} = useSavedRecipes();
    const {isAuth} = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <>
            <header className="page-header-mealplanpage">
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo Mealtap"/>
                <h1>My weekplan</h1>
            </header>

            {!isAuth ? (
                <section className="not-auth-mealplan-container">
                    If you want to make or see your meal planning, please login first.
                    <p className="login-sentence-mealplan-container">
                        If you have an account go to <Link to="/signin"> the login page</Link>.
                        Otherwise register at the <Link to="/signup"> the registration page</Link>.
                    </p>
                </section>
            ) : (

                <main className="weekplan-section">
                    <article className="weekplan-container">
                        {loading ? (
                            <p>Loading your meal planning...</p>
                        ) : recipes.length === 0 ? (
                            <p>No recipes added yet.</p>
                        ) : (
                            recipes.map(recipe => (
                                <MealCard
                                    key={recipe.id}
                                    title={recipe.title}
                                    imageUrl={recipe.image}
                                    onClick={() => navigate(`/recipe/${recipe.externalRecipeId}`)}
                                    onDelete={() => deleteRecipe(recipe.id)}  // Gebruik deleteRecipe van de hook
                                />
                            ))
                        )}
                    </article>

                    {error && <p>Er is iets misgegaan bij het ophalen van je meal planning.</p>}
                </main>
            )}
        </>
    );
}

export default MealPlanning;
