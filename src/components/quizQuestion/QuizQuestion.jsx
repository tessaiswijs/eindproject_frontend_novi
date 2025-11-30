import './QuizQuestion.css'

function QuizQuestion({ variable, value, label }) {
    return (
        <>

        <label className="custom-checkbox">
            <input type="checkbox" name={variable} value={value} />
            <span></span>
            {label}</label>
        </>
    )
}

export default QuizQuestion