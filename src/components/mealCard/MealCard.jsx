import './MealCard.css'

function Mealcard({onClick, title, image}) {
    return (
        <>
            <article className="added-recipe-card" onClick={onClick}>
                <img className="added-recipe-image" src={image} alt={title}/>

                <span className="trashcan-container">
                    <img className="trashcan-icon" src="/src/assets/trashcan_icon.png" alt="trashcan"/>
                </span>

                <div className="added-recipe-titel-container">
                    <h4 className="added-recipe-title">{title}</h4>
                </div>
            </article>
        </>
    )
}

export default Mealcard;