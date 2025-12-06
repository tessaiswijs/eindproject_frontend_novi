import './MealPlanningPage.css'
import MealCard from '../../components/mealCard/MealCard.jsx';
import Button from "../../components/button/Button.jsx";
import {Link} from "react-router-dom";


function MealPlanning() {
    const handleSubmit = () => {
        // nog nakijken hoe gegevens moeten worden opgeslagen om te gebruiken
        // voor het ophalen van de API, daarvoor hier nog toevoegen
    };

    const isLoggedIn = localStorage.getItem("token");

    return (
        <>
            <header className="page-header-mealplanpage">

                <h1>My weekplan</h1>

                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>

                <p>these are the recipes you choose. You can add up to 7 recipes for every day of de week.
                    If jou want to choose another recipe you can click on the trashcan.</p>
            </header>

            {!isLoggedIn ? (
                <p className="login-link-container"> If you want to make or see your meal planning, please login first.

                    <span className="login-sentence">If you have an account go to<Link
                        to="/signin"> the inlog page.</Link></span>
                    <span className="registration-sentence">If you don't have an account go to<Link
                        to="/signup"> the registration page.</Link></span>
                </p>
            ) : (


                <main className="weekplan-section">
                    <div className="weekplan-container">
                        <article>
                            <MealCard
                                title="Noedels met ei en kip en patat en degrgr efrghioag"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                        <article>
                            <MealCard
                                title="Noedels met ei en kip"
                                image='src/assets/IMG_3101.JPG'
                                onClick={() => navigate(`/recipe/`)}
                            />
                        </article>

                    </div>

                    <section className="grocerylist-section">
                        <h2> Grocery list</h2>
                        <ol className="ingredient-list">
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                            <li>ei</li>
                        </ol>

                        <Button
                            type="button"
                            className="send-grocery-list-button"
                            onClick={handleSubmit}>
                        <span>
                            send grocery list to my email address
                        </span>
                        </Button>


                    </section>


                </main>

            )}
        </>
    );
}

export default MealPlanning;