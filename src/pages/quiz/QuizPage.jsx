function Quiz() {
    return (
        <>
            <main className="quiz-container">
                <img className="yellow-logo-container" src="/src/assets/logo_yellow.png" alt="klok"/>

                <h1>Welke recepten vind je lekker</h1>;

                <h2>Welke wensen heb je?</h2>
                <input type="checkbox" id="intolerance1" name="intolerance1" value="maxReadyTime=20"/> max. 20 minuten
                kooktijd
                <input type="checkbox" id="intolerance2" name="intolerance2" value="maxCalories=500"/> max. 500 kcal per
                portie
                <input type="checkbox" id="intolerance3" name="intolerance3" value="minProtein=30"/> 30+ gram eiwitten
                per portie
                <input type="checkbox" id="diet3" name="diet3" value="diet=vegetarian"/> Vegetarisch
                <input type="checkbox" id="diet4" name="diet4" value="diet=vegan"/> Vegan
                <input type="checkbox" id="diet5" name="diet5" value="diet=pescetarian"/> Geen vlees wel vis

                <h2>Welke keukens vind je lekker?</h2>
                <p>Meerdere opties mogelijk</p>
                <input type="checkbox" id="cuisine1" name="cuisine1" value="cuisine=asian"/> Aziatisch
                <input type="checkbox" id="cuisine2" name="cuisine2" value="cuisine=american"/> Amerikaans
                <input type="checkbox" id="cuisine3" name="cuisine3" value="cuisine=british"/> Brits
                <input type="checkbox" id="cuisine4" name="cuisine4" value="cuisine=chinese"/> Chinees
                <input type="checkbox" id="cuisine6" name="cuisine6" value="cuisine=european"/> Europees
                <input type="checkbox" id="cuisine7" name="cuisine7" value="cuisine=french"/> Frans
                <input type="checkbox" id="cuisine8" name="cuisine8" value="cuisine=german"/> Duits
                <input type="checkbox" id="cuisine9" name="cuisine9" value="cuisine=mediterranean"/> Mediterraans
                <input type="checkbox" id="cuisine10" name="cuisine10" value="cuisine=mexican"/> Mexicaans
                <input type="checkbox" id="cuisine12" name="cuisine12" value="cuisine=vietnamese"/> Vietnamees

                <h2>Heb je een allergie?</h2>
                <input type="checkbox" id="intolerance1" name="intolerance1" value="gluten"/> Gluten
                <input type="checkbox" id="intolerance2" name="intolerance2" value="dairy"/> Zuivel
                <input type="checkbox" id="intolerance3" name="intolerance3" value="egg"/> Ei
                <input type="checkbox" id="intolerance4" name="intolerance4" value="peanut"/> Pinda
                <input type="checkbox" id="intolerance5" name="intolerance5" value="soy"/> Soja
                <input type="checkbox" id="all-intolerance" name="all-intolerance" value="all"/> Geen allergieën
            </main>
        </>

    )
}

export default Quiz;