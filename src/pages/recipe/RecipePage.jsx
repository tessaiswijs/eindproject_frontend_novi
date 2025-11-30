import './RecipePage.css';
import { useState, useContext } from 'react';
import Button from '../../components/button/Button.jsx';
import {CounterContext} from '../../context/CounterContext.jsx';


function Recipe() {
    const {incrementCount, count} = useContext(CounterContext);
    // const [added, setAdded] = useState(false)

    const [disabled, setDisabled] = useState(false);

    const handleClick = () => {
        incrementCount();   // je bestaande context functie
        setDisabled(true);  // button disabled maken
    };

    return (
        <>

            <article className="recipe-description-container">

                <section className="general-info-container">
                    <img className="food-image"
                         src="/src/assets/IMG_3101.JPG"
                         alt="afbeelding eten"/>

                    <div className="recipe-info-container">

                        <h2>Noedels met spinazie en ei</h2>

                        <div className="recipe-summary">

                            <div className="recipe-summary-item">
                                <img src="/src/assets/bord_icon.png" alt="bord"/>
                                <span>4 porties</span>
                            </div>

                            <div className="recipe-summary-item">
                                <img src="/src/assets/time_icon.png" alt="klok"/>
                                <span>20 minuten</span>
                            </div>

                            <div className="recipe-summary-item">
                                <img src="/src/assets/kcal_icon.png" alt="calorieën"/>
                                <span>500 kcal</span>
                            </div>

                        </div>

                        <div className="nutrition-info">
                            <p>Voedingswaarden per portie:</p>
                            <p>vetten 12 g | verzadigen vetten 3 g | koolhydraten 49 g | suikers 21 g | eiwitten 4 g</p>
                        </div>

                    </div>

                </section>

                <section className="ingredients-method-container">

                    <div className="ingredient-container">
                        <h2>Ingrediënten</h2>

                        <ol className="ingredients">
                            <li> 100 ml melk</li>
                            <li> 2 eieren</li>
                            <li> 100 ml melk</li>
                            <li> 2 eieren</li>
                            <li> 100 ml melk</li>
                            <li> 2 eiererdfrrrrrrrrrrrrrrrrr reyry rtyrtyt bergdg drgdh rytrynrtyrt retytytr rtytryrt
                                rtyttr tryutry
                            </li>
                            <li> 100 ml melk</li>
                            <li> 2 eieren</li>
                            <li> 100 ml melk</li>
                            <li> 2 eieren</li>
                        </ol>
                    </div>

                    <div className="method-container">
                        <h2>Methode</h2>

                        <ol className="method-steps">
                            <li> Kook de noedels volgens de verpakking en giet af.</li>
                            <li> Kook de noedels volgvgfdhgghgf fghfghfth drhthens de verpakking en giet af.</li>
                            <li> Kook de noedels volgens de verpakking en giet af.</li>
                            <li> Kook de noedels volgens de verpakking en giet af.</li>
                            <li> Kook de noedels volgens de verpakking en giet af.</li>
                            <li> Kook de noedels volgens de verpakking en giet af.</li>
                        </ol>

                        <Button
                            type="button"
                            className="add-recipe-button"
                            onClick={handleClick}
                            disabled={disabled}>
                            <span> {disabled ? "Recept is toegevoegd" : `Voeg recept toe aan weekmenu ${count}/7`} </span>

                        </Button>

                    </div>

                </section>

            </article>

        </>

    );
}

export default Recipe;