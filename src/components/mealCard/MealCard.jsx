import './MealCard.css'

function MealCard({ onClick, onDelete, title, image }) {
    return (
        <article className="added-recipe-card" onClick={onClick}>
            <img className="added-recipe-image" src={image} alt={title}/>

            <button
                type="button"
                className="trashcan-container"
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete && onDelete();
                }}
            >
                <img className="trashcan-icon" src="/src/assets/trashcan_icon.png" alt="Delete recipe"/>
            </button>

            <div className="added-recipe-titel-container">
                <h4 className="added-recipe-title">{title}</h4>
            </div>
        </article>
    )
}

export default MealCard;
