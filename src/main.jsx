import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from '../src/context/AuthContext.jsx';
import App from './App.jsx'
import './index.css'
import CounterContextProvider from './context/CounterContext.jsx';
import QuizContextProvider from './context/QuizContext.jsx';
import RecipeContextProvider from './context/RecipeContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Router>
            <AuthContextProvider>
                <CounterContextProvider>
                    <QuizContextProvider>
                        <RecipeContextProvider>
                            <App/>
                        </RecipeContextProvider>
                     </QuizContextProvider>
                </CounterContextProvider>
            </AuthContextProvider>
        </Router>
    // </React.StrictMode>
)
