import './QuizPage.css';
import QuizQuestion from "../../components/quizQuestion/QuizQuestion.jsx";
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function Quiz() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        // nog nakijken hoe gegevens moeten worden opgeslagen om te gebruiken
        // voor het ophalen van de API, daarvoor hier nog toevoegen
        navigate("/recipeoverview");
    };

    return (
        <>
            <main className="quiz-container">
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="klok"/>

                <h1>Welke recepten vind je lekker?</h1>


                <form>
                    <fieldset className="quiz-question">
                        <legend>Welke wensen heb je?</legend>
                        <QuizQuestion name="maxReadyTime" value={20} label="max. 20 minuten"/>
                        <QuizQuestion name="maxCalories" value={500} label="max. 500 kcal per"/>
                        <QuizQuestion name="minProtein" value={30} label="30+ gram eiwitten"/>
                        <QuizQuestion name="diet" value="vegetarian" label="Vegetarisch"/>
                        <QuizQuestion name="diet" value="vegan" label="Vegan"/>
                        <QuizQuestion name="diet" value="pescetarian" label="Geen vlees wel vis"/>
                    </fieldset>

                    <fieldset className="quiz-question">
                        <legend>Welke keukens vind je lekker?</legend>

                        <QuizQuestion name="cuisine" value="asian" label="Aziatisch"/>
                        <QuizQuestion name="cuisine" value="american" label="Amerikaans"/>
                        <QuizQuestion name="cuisine" value="british" label="Brits"/>
                        <QuizQuestion name="cuisine" value="chinese" label="Chinees"/>
                        <QuizQuestion name="cuisine" value="european" label="Europees"/>
                        <QuizQuestion name="cuisine" value="french" label="Frans"/>
                        <QuizQuestion name="cuisine" value="german" label="Duits"/>
                        <QuizQuestion name="cuisine" value="mediterranean" label="Mediterraans"/>
                        <QuizQuestion name="cuisine" value="mexican" label="Mexicaans"/>
                        <QuizQuestion name="cuisine" value="vietnamese" label="Vietnamees"/>

                    </fieldset>

                    <fieldset className="quiz-question">
                        <legend>Heb je een allergie?</legend>

                        <QuizQuestion name="intolerances" value="gluten" label="Gluten"/>
                        <QuizQuestion name="intolerances" value="dairy" label="Zuivel"/>
                        <QuizQuestion name="intolerances" value="egg" label="Ei"/>
                        <QuizQuestion name="intolerances" value="peanut" label="Pinda"/>
                        <QuizQuestion name="intolerances" value="soy" label="Soja"/>
                    </fieldset>


                    <Button
                        type="button"
                        className="submit-answers"
                        onClick={handleSubmit}>
                        Ga naar jouw recepten
                    </Button>

                </form>




            </main>
        </>

    )
}

export default Quiz;