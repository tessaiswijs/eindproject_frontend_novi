import MealCard from '../../components/mealCard/MealCard.jsx';
import Button from "../../components/button/Button.jsx";


function MealPlanning() {
    const handleSubmit = () => {
        // nog nakijken hoe gegevens moeten worden opgeslagen om te gebruiken
        // voor het ophalen van de API, daarvoor hier nog toevoegen
    };

    return (
        <>
            <header className="page-header-mealplanpage">
            <h1>My weekplan</h1>
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>
                <p>these are the recipes you choose. You can add up to 7 recipes for every day of de week.
                If jou want to choose another recipe you can click on the trashcan.</p>
            </header>

            <main className="choosen-recipe-section">
                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <article>
                    <MealCard
                        title= "Noedels met ei en kip"
                        image='src/assets/IMG_3101.JPG'
                        onClick={() => navigate(`/recipe/`)}
                    />
                </article>

                <section className="grocerylist-section">
                    <h2> Grocerylist</h2>
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
                        className="send-grocerylist-button"
                        onClick={handleSubmit}>
                        <span>
                            send grocerylist to my email address
                        </span>
                    </Button>


                </section>


            </main>


        </>
    );
}

export default MealPlanning;