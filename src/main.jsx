import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom';
import AuthContextProvider from '../src/context/AuthContext.jsx';
import App from './App.jsx'
import './index.css'
import QuizContextProvider from './context/QuizContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
        <Router>
            <AuthContextProvider>
                    <QuizContextProvider>
                            <App/>
                     </QuizContextProvider>
            </AuthContextProvider>
        </Router>
)
