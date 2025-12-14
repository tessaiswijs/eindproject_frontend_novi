import './QuizPage.css';
import Checkbox from "../../components/checkbox/Checkbox.jsx";
import Button from "../../components/button/Button.jsx";
import {Link, useNavigate} from "react-router-dom";
import handleCheckboxChange from "../../helpers/handleCheckboxChange.js";
import { QuizContext } from "../../context/QuizContext.jsx";
import { useContext, useState } from "react";
import { AuthContext } from '../../context/AuthContext.jsx';

function Quiz() {
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);
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
                {!isAuth ? (
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

                            <Checkbox
                                name="maxReadyTime"
                                value={20}
                                label="max. 20 minutes"
                                checked={formValues.maxReadyTime === 20}
                                onChange={e => handleCheckboxChange(setFormValues,"maxReadyTime", 20, e.target.checked)}
                            />

                            <Checkbox
                                name="maxCalories"
                                value={500}
                                label="max. 500 calories per portion"
                                checked={formValues.maxCalories === 500}
                                onChange={e => handleCheckboxChange(setFormValues,"maxCalories", 500, e.target.checked)}
                            />

                            <Checkbox
                                name="diet"
                                value="vegetarian"
                                label="Vegetarian"
                                checked={formValues.diet.includes("vegetarian")}
                                onChange={e => handleCheckboxChange(setFormValues,"diet", "vegetarian", e.target.checked)}
                            />

                            <Checkbox
                                name="diet"
                                value="vegan"
                                label="Vegan"
                                checked={formValues.diet.includes("vegan")}
                                onChange={e => handleCheckboxChange(setFormValues,"diet", "vegan", e.target.checked)}
                            />

                            <Checkbox
                                name="diet"
                                value="pescetarian"
                                label="No meat, fish is fine"
                                checked={formValues.diet.includes("pescetarian")}
                                onChange={e => handleCheckboxChange(setFormValues,"diet", "pescetarian", e.target.checked)}
                            />
                        </fieldset>

                        <fieldset className="quiz-question">
                            <legend>Add your favorite cuisine</legend>

                            {cuisineOptions.map(option => (
                                <Checkbox
                                    key={option.value}
                                    name="cuisine"
                                    value={option.value}
                                    label={option.label}
                                    checked={formValues.cuisine.includes(option.value)}
                                    onChange={e => handleCheckboxChange(setFormValues,"cuisine", option.value, e.target.checked)}
                                />
                            ))}
                        </fieldset>

                        <fieldset className="quiz-question">
                            <legend>Do you have allergies?</legend>

                            {intoleranceOptions.map(option => (
                                <Checkbox
                                    key={option.value}
                                    name="intolerances"
                                    value={option.value}
                                    label={option.label}
                                    checked={formValues.intolerances.includes(option.value)}
                                    onChange={e => handleCheckboxChange(setFormValues,"intolerances", option.value, e.target.checked)}
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