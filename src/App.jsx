import {useContext, useState} from 'react';
import './App.css';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import NavBar from './components/navigator/Navbar.jsx';
import FooterBar from './components/footer/FooterBar.jsx';
import Home from './pages/home/HomePage';
import MealPlanning from './pages/mealPlanning/mealPlanningPage';
import Quiz from './pages/quiz/QuizPage';
import Recipe from './pages/recipe/RecipePage';
import RecipeOverview from './pages/recipeOverview/RecipeOverviewPage';
import SignIn from './pages/signIn/SignInPage';
import SignUp from './pages/signUp/SignUpPage';
import NotFound from './pages/notFound/NotFoundPage';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>

                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={<SignUp />}/>

                    <Route path="/quiz" element={<Quiz />}/>
                    <Route path="/mealplanning" element={<MealPlanning />}/>

                    <Route path="/recipeoverview" element={<RecipeOverview />}/>
                    <Route path="/recipe/:id" element={<Recipe />}/>

                    <Route path="*" element={<NotFound />}/>
                </Routes>
            </div>
            <FooterBar/>
        </>
    );
}

export default App;
