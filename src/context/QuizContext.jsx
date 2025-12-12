import { createContext, useState } from 'react';

export const QuizContext = createContext({});

function QuizContextProvider({ children }) {

    const [quizData, setQuizData] = useState(() => {
        const saved = localStorage.getItem('quizData');
        return saved ? JSON.parse(saved) : null;
    });

    const saveQuizData = (data) => {
        setQuizData(data);
        localStorage.setItem('quizData', JSON.stringify(data));
    };

    const data = {
        quizData,
        saveQuizData,
    };

    return (
        <QuizContext.Provider value={data}>
            {children}
        </QuizContext.Provider>
    );
}

export default QuizContextProvider;