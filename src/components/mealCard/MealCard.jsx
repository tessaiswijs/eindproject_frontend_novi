import './MealCard.css'

function Mealcard({onClick, title, image}) {
    return (
        <>
            <article className="recipe-card" onClick={onClick}>
                <img className="recipe-image" src={image} alt={title}/>

                <span className="trashcan-container">
                    <img className="trashcan-icon" src="/src/assets/trashcan_icon.png" alt="trashcan"/>
                </span>

                <div className="recipe-titel-container">
                    <h4 className="recipe-title">{title}</h4>
                </div>
            </article>
        </>
    )
}

export default Mealcard;