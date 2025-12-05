import MealCard from '../../components/mealCard/MealCard.jsx';


function MealPlanning() {
    return (
        <>
            <header className="page-header-mealplanpage">
            <h1>My weekplan</h1>
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo"/>
                <p>these are the recipes you choose. You can add up to 7 recipes for every day of de week.
                If jou want to choose another recipe you can click on the trashcan.</p>
            </header>

            <main className="recipe-article-section">
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

            </main>
        </>
    );
}

export default MealPlanning;