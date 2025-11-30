import './MealplanSteps.css'

function MealplanSteps({ image, altText, step, text }) {
    return (
        <>
        <img src={image} alt={altText}/>
    <p className="step-text"><span>{step}</span>
        {text}</p>
        </>
    )
}

export default MealplanSteps




