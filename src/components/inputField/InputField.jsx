import './InputField.css'

function InputField({ name, label, type = "text", value, onChange }) {
    return (
        <label htmlFor={name} className="label-form">
                {label}

            <input
                type={type}
                id={name}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}


export default InputField;