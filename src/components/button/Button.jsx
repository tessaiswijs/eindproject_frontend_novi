import './Button.css'

function Button({ type, onClick, className, disabled, children }) {
    return (
        <button
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        >
            {children}


        </button>
    )
}

export default Button