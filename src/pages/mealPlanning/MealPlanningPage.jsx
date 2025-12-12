import './MealPlanningPage.css'
import MealCard from '../../components/mealCard/MealCard.jsx';
// import Button from "../../components/button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {RecipeContext} from "../../context/RecipeContext.jsx";
import {useContext, useEffect} from "react";
import {CounterContext} from "../../context/CounterContext.jsx";


function MealPlanning() {
    const { selectedRecipes, deleteRecipe } = useContext(RecipeContext);
    const {decrementCount} = useContext(CounterContext);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("token");

    const handleDeleteRecipe = (recipe) => {
        decrementCount();
        deleteRecipe(recipe)
    };

    useEffect(() => {
        console.log("Selected recipes in context:", selectedRecipes);
    }, [selectedRecipes]);

    return (
        <>
            <header className="page-header-mealplanpage">

                <h1>My weekplan</h1>

                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>

                <p>these are the recipes you choose. You can add up to 7 recipes for every day of de week.
                    If jou want to choose another recipe you can click on the trashcan.</p>
            </header>

            {!isLoggedIn ? (
                <section className="login-link-container"> If you want to make or see your meal planning, please login
                    first.

                    <p className="login-sentence">If you have an account go to<Link
                        to="/signin"> the inlog page. </Link>
                        Otherwise register at the<Link
                            to="/signup"> the registration page.</Link></p>
                </section>
            ) : (


                <main className="weekplan-section">
                        <article className="weekplan-container">

                            {selectedRecipes.length === 0 ? (<p>No recipes added yet.</p>) :
                                (selectedRecipes.map(recipe => (
                                        <MealCard
                                            key={recipe.id}
                                            title={recipe.title}
                                            image={recipe.image}
                                            onClick={() => navigate(`/recipe/${recipe.id}`)}
                                            onDelete={() => handleDeleteRecipe(recipe)}
                                        />
                                    ))
                                )}

                        </article>

                    <section className="grocerylist-section">
                        <h2> Grocery list</h2>
                        <ul className="ingredient-list">
                            <li>eif f</li>
                            <li>eidfg</li>
                            <li>ei dg</li>
                            <li>ei dg</li>
                            <li>ei gdf</li>
                            <li>eig df</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei dsfvsdrgrgrgrtg rtgrgrt trhrthrts</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                        </ul>

                        {/*<Button*/}
                        {/*    type="button"*/}
                        {/*    className="send-grocery-list-button"*/}
                        {/*    onClick={handleSubmit}>*/}
                        {/*<span>*/}
                        {/*    send grocery list to my email address*/}
                        {/*</span>*/}
                        {/*</Button>*/}


                    </section>


                </main>

            )}
        </>
    );
}

export default MealPlanning;