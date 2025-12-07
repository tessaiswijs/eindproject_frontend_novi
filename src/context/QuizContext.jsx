import {createContext, useState} from 'react';

export const QuizContext = createContext({});

function QuizContextProvider({ children }) {

    const [quizData, setQuizData] = useState(null);

    // Functie om quizdata bij te werken
    const saveQuizData = (data) => {
        setQuizData(data);
    };

    const data = {
        quizData,
        saveQuizData,
    };

    return (
        <QuizContext.Provider value={data}>
            {children}
        </QuizContext.Provider>
    )
}

export default QuizContextProvider;