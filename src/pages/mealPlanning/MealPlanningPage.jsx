import './MealPlanningPage.css';
import axios from "axios";

import { useEffect, useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import MealCard from '../../components/mealCard/MealCard.jsx';
import { AuthContext } from '../../context/AuthContext.jsx';

function MealPlanning() {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(false);
    const { user, isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!isAuth || !user) return;

        async function fetchMealPlanning() {
            setError(false);

            try {
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${user.userId}/recipes`,
                    {
                        headers: {
                            'novi-education-project-id': import.meta.env.VITE_API_KEY_NOVI,
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );

                console.log("Meal planning fetched:", response.data);
                setRecipes(response.data);

            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        fetchMealPlanning();
    }, [isAuth, user]);

    const handleDeleteRecipe = async (recipeId) => {
        try {
            await axios.delete(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/recipes/${recipeId}`,
                {
                    headers: {
                        'novi-education-project-id': import.meta.env.VITE_API_KEY_NOVI,
                        'Authorization': `Bearer ${token}`
                    }
                }
            );

            setRecipes(prev => prev.filter(r => r.id !== recipeId));

        } catch (e) {
            console.error("Error deleting recipe:", e);
        }
    };

    if (!isAuth) {
        return (
            <section className="login-link-container">
                If you want to make or see your meal planning, please login first.
                <p className="login-sentence">
                    If you have an account go to <Link to="/signin"> the login page </Link>.
                    Otherwise register at the <Link to="/signup"> the registration page </Link>.
                </p>
            </section>
        );
    }

    return (
        <>
            <header className="page-header-mealplanpage">
                <h1>My weekplan</h1>
            </header>

            <main className="weekplan-section">
                <article className="weekplan-container">
                    {recipes.length === 0 ? (
                        <p>No recipes added yet.</p>
                    ) : (
                        recipes.map(recipe => (
                            <MealCard
                                key={recipe.id}
                                title={recipe.title}
                                imageUrl={recipe.image}
                                onClick={() => navigate(`/recipe/${recipe.externalRecipeId}`)}
                                onDelete={() => handleDeleteRecipe(recipe.id)}
                            />
                        ))
                    )}
                </article>

                {error && <p>Er is iets misgegaan bij het ophalen van je meal planning.</p>}
            </main>
        </>
    );
}

export default MealPlanning;
