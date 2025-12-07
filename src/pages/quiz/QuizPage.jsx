import './QuizPage.css';
import QuizQuestion from "../../components/quizQuestion/QuizQuestion.jsx";
import Button from "../../components/button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import HandleCheckboxChange from "../../helpers/HandleCheckboxChange.js";
import { QuizContext } from "../../context/QuizContext.jsx";
import { useContext, useState } from "react";

function Quiz() {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("token");
    const { saveQuizData } = useContext(QuizContext);

    const cuisineOptions = [
        { value: "asian", label: "Asian" },
        { value: "american", label: "American" },
        { value: "british", label: "British" },
        { value: "chinese", label: "Chinese" },
        { value: "european", label: "European" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "mediterranean", label: "Mediterranean" },
        { value: "mexican", label: "Mexican" },
        { value: "vietnamese", label: "Vietnamese" },
    ];

    const [formValues, setFormValues] = useState({
        maxReadyTime: null,
        maxCalories: null,
        minProtein: null,
        diet: [],
        cuisine: [],
        intolerances: []
    });

    const intoleranceOptions = [
        { value: "gluten", label: "Gluten" },
        { value: "dairy", label: "Dairy" },
        { value: "egg", label: "Egg" },
        { value: "peanut", label: "Peanut" },
        { value: "soy", label: "Soy" },
    ];

    const handleSubmit = () => {
        console.log("Form values submitted:", formValues);
        saveQuizData(formValues);
        navigate("/recipeoverview");
    };

    return (
        <>
            <main className="quiz-container">
                <section className="quiz-header-container">
                    <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="logo Mealtap"/>
                    <h1>Quiz</h1>

                </section>
                {!isLoggedIn ? (
                    <section className="login-link-container"> I you want to do the quiz, please login first.

                        <p className="login-sentence">If you have an account go to the<Link
                            to="/signin"> inlog page. </Link>
                         Otherwise register at the<Link
                            to="/signup"> registration page.</Link></p>
                    </section>

                ) : (

                    <form>
                        <fieldset className="quiz-question">
                            <legend>What recipes do you like?</legend>

                            <QuizQuestion
                                name="maxReadyTime"
                                value={20}
                                label="max. 20 minutes"
                                checked={formValues.maxReadyTime === 20}
                                onChange={e => HandleCheckboxChange(setFormValues,"maxReadyTime", 20, e.target.checked)}
                            />

                            <QuizQuestion
                                name="maxCalories"
                                value={500}
                                label="max. 500 calories per portion"
                                checked={formValues.maxCalories === 500}
                                onChange={e => HandleCheckboxChange(setFormValues,"maxCalories", 500, e.target.checked)}
                            />

                            <QuizQuestion
                                name="diet"
                                value="vegetarian"
                                label="Vegetarian"
                                checked={formValues.diet.includes("vegetarian")}
                                onChange={e => HandleCheckboxChange(setFormValues,"diet", "vegetarian", e.target.checked)}
                            />

                            <QuizQuestion
                                name="diet"
                                value="vegan"
                                label="Vegan"
                                checked={formValues.diet.includes("vegan")}
                                onChange={e => HandleCheckboxChange(setFormValues,"diet", "vegan", e.target.checked)}
                            />

                            <QuizQuestion
                                name="diet"
                                value="pescetarian"
                                label="No meat, fish is fine"
                                checked={formValues.diet.includes("pescetarian")}
                                onChange={e => HandleCheckboxChange(setFormValues,"diet", "pescetarian", e.target.checked)}
                            />
                        </fieldset>

                        <fieldset className="quiz-question">
                            <legend>Add your favorite cuisine</legend>

                            {cuisineOptions.map(option => (
                                <QuizQuestion
                                    key={option.value}
                                    name="cuisine"
                                    value={option.value}
                                    label={option.label}
                                    checked={formValues.cuisine.includes(option.value)}
                                    onChange={e => HandleCheckboxChange(setFormValues,"cuisine", option.value, e.target.checked)}
                                />
                            ))}
                        </fieldset>

                        <fieldset className="quiz-question">
                            <legend>Do you have allergies?</legend>

                            {intoleranceOptions.map(option => (
                                <QuizQuestion
                                    key={option.value}
                                    name="intolerances"
                                    value={option.value}
                                    label={option.label}
                                    checked={formValues.intolerances.includes(option.value)}
                                    onChange={e => HandleCheckboxChange(setFormValues,"intolerances", option.value, e.target.checked)}
                                />
                            ))}
                        </fieldset>

                        <Button
                            type="button"
                            className="submit-answers"
                            onClick={handleSubmit}>
                            Ga naar jouw recepten
                        </Button>

                    </form>
                )}
            </main>
        </>

    );
}

export default Quiz;