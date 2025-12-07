export default function HandleCheckboxChange(setFormValues, name, value, isChecked) {
    setFormValues(prevValues => {
        const currentValue = prevValues[name];

        if (Array.isArray(currentValue)) {
            return {
                ...prevValues,
                [name]: isChecked
                    ? [...currentValue, value]
                    : currentValue.filter(v => v !== value)
            };
        } else {
            return {
                ...prevValues,
                [name]: isChecked ? value : null
            };
        }
    });
}