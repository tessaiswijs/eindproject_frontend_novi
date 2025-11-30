import {createContext, useState} from 'react';

export const CounterContext = createContext({});


function CounterContextProvider({ children }) {
    const [clicks, setClicks] = useState(0);

    function incrementCount() {
        if (clicks < 7) {
            setClicks(clicks + 1);
        }
    }

    function decrementCount() {
        setClicks(clicks - 1);

    }

    const data = {
        count: clicks,
        incrementCount: incrementCount,
        decrementCount: decrementCount,
        banaan: 3,
    }

    return (
        <CounterContext.Provider value={data}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider;

