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

               <section className="quiz-header-container">

                   <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo Mealtap"/>

                   <h1>Quiz</h1>

               </section>



                <form>
                    <fieldset className="quiz-question">
                        <legend>What recipes do you like?</legend>
                        <QuizQuestion name="maxReadyTime" value={20} label="max. 20 minutes"/>
                        <QuizQuestion name="maxCalories" value={500} label="max. 500 calories per portion"/>
                        <QuizQuestion name="minProtein" value={30} label="30+ gram of protien"/>
                        <QuizQuestion name="diet" value="vegetarian" label="Vegetarian"/>
                        <QuizQuestion name="diet" value="vegan" label="Vegan"/>
                        <QuizQuestion name="diet" value="pescetarian" label="No meat, fish is fine"/>
                    </fieldset>

                    <fieldset className="quiz-question">
                        <legend>Add your favorite cuisine</legend>

                        <QuizQuestion name="cuisine" value="asian" label="Asian"/>
                        <QuizQuestion name="cuisine" value="american" label="American"/>
                        <QuizQuestion name="cuisine" value="british" label="British"/>
                        <QuizQuestion name="cuisine" value="chinese" label="Chinese"/>
                        <QuizQuestion name="cuisine" value="european" label="European"/>
                        <QuizQuestion name="cuisine" value="french" label="French"/>
                        <QuizQuestion name="cuisine" value="german" label="German"/>
                        <QuizQuestion name="cuisine" value="mediterranean" label="Mediterranean"/>
                        <QuizQuestion name="cuisine" value="mexican" label="Mexican"/>
                        <QuizQuestion name="cuisine" value="vietnamese" label="Vietnamese"/>

                    </fieldset>

                    <fieldset className="quiz-question">
                        <legend>Do you have allergies?</legend>

                        <QuizQuestion name="intolerances" value="gluten" label="Gluten"/>
                        <QuizQuestion name="intolerances" value="dairy" label="Dairy"/>
                        <QuizQuestion name="intolerances" value="egg" label="Egg"/>
                        <QuizQuestion name="intolerances" value="peanut" label="Peanut"/>
                        <QuizQuestion name="intolerances" value="soy" label="Soy"/>
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