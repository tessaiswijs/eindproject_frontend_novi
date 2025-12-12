import { createContext, useState } from 'react';

export const CounterContext = createContext({});

function CounterContextProvider({ children }) {
    const [clicks, setClicks] = useState(() => {
        const saved = localStorage.getItem('clickCount');
        return saved ? JSON.parse(saved) : 0;
    });

    function incrementCount() {
        if (clicks < 7) {
            const updated = clicks + 1;
            setClicks(updated);

            localStorage.setItem('clickCount', JSON.stringify(updated));
        }
    }

    function decrementCount() {
        const updated = clicks - 1;
        setClicks(updated);

        localStorage.setItem('clickCount', JSON.stringify(updated));
    }

    const data = {
        count: clicks,
        incrementCount,
        decrementCount,
    };

    return (
        <CounterContext.Provider value={data}>
            {children}
        </CounterContext.Provider>
    );
}

export default CounterContextProvider;
