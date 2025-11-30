import {useNavigate} from 'react-router-dom';
import './HomePage.css';
import RecipeCard from '../../components/recipeCard/RecipeCard.jsx';
import Button from '../../components/button/Button.jsx';

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <header className="page-header">
                <div className="title-section">
                    <h1>Makkelijke maaltijden plannen</h1>
                    <p className="header_text">Weet je ook nooit wat je moet koken? Wil je een keer iets anders
                        proberen? Met MealTap kun je met een
                        paar klikken een weekschema maken zodat jij zonder stress en gedoe je week doorkomt. Zo houd jij
                        meer
                        tijd over voor de echt belangrijke dingen.</p>
                </div>


                <ol className="header-section">
                    <li className="steps">
                        <img src="/src/assets/quiz_icon.png" alt="quiz icon"/>
                        <p className="step-text"><span>1</span>Doe de quiz</p>
                    </li>
                    <li className="steps">
                        <img src="/src/assets/cooking_icon.png" alt="pan icoon"/>
                        <p className="step-text"><span>2</span>Kies je recepten</p>
                    </li>
                    <li className="steps">
                        <img src="/src/assets/weekplan_icon.png" alt="planning icoon"/>
                        <p className="step-text"><span>3</span>Voeg de recepten toe</p>
                    </li>
                    <li className="steps">
                        <img src="/src/assets/list_icon.png" alt="lijst icoon"/>
                        <p className="step-text"><span>4</span>Maak je boodschappenlijst</p>
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
                    <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="klok"/>

                    <h2 className="title_recipe-header">
                        Een selectie van onze recepten
                    </h2>
                </section>

                <section className="recipe-article-section">

                    <RecipeCard
                        title="Salade met gerookte kip"
                        image="/src/assets/IMG_3101.JPG"
                        time={20}
                        kcal={500}
                        onClick={() => navigate('/recipe')}
                    />

                    <RecipeCard
                        title="Salade met gerookte kip"
                        image="/src/assets/IMG_3101.JPG"
                        time={20}
                        kcal={500}
                        onClick={() => navigate('/recipe')}
                    />

                    <RecipeCard
                        title="Salade met gerookte kip"
                        image="/src/assets/IMG_3101.JPG"
                        time={20}
                        kcal={500}
                        onClick={() => navigate('/recipe')}
                    />

                </section>

            </main>

        </>
    )
        ;
}

export default Home;