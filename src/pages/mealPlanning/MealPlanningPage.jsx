import './MealPlanningPage.css';
import { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MealCard from '../../components/mealCard/MealCard.jsx';
import Checkbox from '../../components/checkbox/Checkbox.jsx';
import useSavedRecipes from '../../helpers/useSavedRecipes';
import { AuthContext } from '../../context/AuthContext.jsx';
import getCombinedGroceryList from '../../helpers/getCombinedGroceryList.js';
import handleCheckboxChange from '../../helpers/handleCheckboxChange.js';

function MealPlanning() {
    const { recipes, loading, error, deleteRecipe } = useSavedRecipes();
    const { isAuth } = useContext(AuthContext);
    const [groceryList, setGroceryList] = useState({});
    const [formValues, setFormValues] = useState({ groceries: [] });
    const [loadingGroceries, setLoadingGroceries] = useState(false);
    const [errorGroceries, setErrorGroceries] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth || recipes.length === 0) {
            setGroceryList({});
            setFormValues({ groceries: [] });
            return;
        }

        const fetchGroceries = async () => {
            setLoadingGroceries(true);
            setErrorGroceries(false);

            try {
                const externalIds = recipes.map(r => r.externalRecipeId);
                const groceries = await getCombinedGroceryList(externalIds);
                setGroceryList(groceries);

                // Zet alle checkboxes standaard aan
                setFormValues({
                    groceries: Object.values(groceries).map(item => item.name)
                });
            } catch (e) {
                console.error(e);
                setErrorGroceries(true);
            } finally {
                setLoadingGroceries(false);
            }
        };

        fetchGroceries();
    }, [recipes, isAuth]);

    const handleDownload = () => {
        const groceryText = Object.values(groceryList)
            .filter(item => formValues.groceries.includes(item.name))
            .map(item => `${item.name}, ${item.totalAmount} ${item.unit}`)
            .join('\n');

        if (!groceryText) return; // niks geselecteerd

        const blob = new Blob([groceryText], { type: "text/plain" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = "boodschappenlijst.txt";
        a.click();

        URL.revokeObjectURL(url);
    };

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
                        If you have an account go to <Link to="/signin">the login page</Link>.
                        Otherwise register at the <Link to="/signup">registration page</Link>.
                    </p>
                </section>
            ) : (
                <main className="weekplan-section">
                    <p>These are the recipes you chose. You can add up to 7 recipes for every day of the week. To choose another recipe, click the trashcan.</p>

                    <article className="weekplan-container">
                        {loading ? (
                            <p>Loading your meal planning...</p>
                        ) : recipes.length === 0 ? (
                            <p>No recipes added yet. Do <Link to="/signin"> the quiz </Link>to add your favorite recipes.</p>
                        ) : (
                            recipes.map(recipe => (
                                <MealCard
                                    key={recipe.id}
                                    title={recipe.title}
                                    imageUrl={recipe.image}
                                    onClick={() => navigate(`/recipe/${recipe.externalRecipeId}`)}
                                    onDelete={() => deleteRecipe(recipe.id)}
                                />
                            ))
                        )}
                    </article>

                    {error && <p>Er is iets misgegaan bij het ophalen van je meal planning.</p>}

                    <section className="grocerylist-section">
                        <h2>Grocery list</h2>
                        <p className="explanation-grocerylist"> Simply uncheck ingredients based on what you have in your pantry.
                            When you're ready, just click the button to download your grocery list! </p>

                        {loadingGroceries ? (
                            <p>Loading groceries...</p>
                        ) : errorGroceries ? (
                            <p>Er is iets misgegaan bij het ophalen van de grocery list.</p>
                        ) : Object.keys(groceryList).length === 0 ? (
                            <p>There is no grocery list yet. Add recipes to you weekplan first.</p>
                        ) : (
                            <div className="grocerylist-checkboxes">
                                {Object.values(groceryList).map(item => (
                                    <Checkbox
                                        key={item.name}
                                        name="groceries"
                                        value={item.name}
                                        label={`${item.name}: ${item.totalAmount} ${item.unit}`}
                                        checked={formValues.groceries.includes(item.name)}
                                        onChange={e =>
                                            handleCheckboxChange(
                                                setFormValues,
                                                "groceries",
                                                item.name,
                                                e.target.checked
                                            )
                                        }
                                    />
                                ))}

                                <button
                                    className="download-grocerylist-button"
                                    onClick={handleDownload}
                                    type="button"
                                >
                                    Download my grocery list
                                </button>
                            </div>
                        )}
                    </section>
                </main>
            )}
        </>
    );
}

export default MealPlanning;
