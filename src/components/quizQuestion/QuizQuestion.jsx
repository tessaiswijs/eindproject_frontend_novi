import './QuizQuestion.css'

function QuizQuestion({ name, value, label, checked, onChange }) {
    return (
        <>
            <label className="custom-checkbox">
                <input
                    type="checkbox"
                    name={name}
                    value={value}
                    checked={checked}
                    onChange={onChange}
                />
                <span></span>
                {label}
            </label>
        </>
    );
}

export default QuizQuestion;