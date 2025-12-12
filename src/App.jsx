import './App.css';
import { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import NavBar from './components/navigator/Navbar.jsx';
import FooterBar from './components/footer/FooterBar.jsx';
import Home from './pages/home/HomePage.jsx';
import MealPlanning from './pages/mealPlanning/mealPlanningPage.jsx';
import Quiz from './pages/quiz/QuizPage.jsx';
import Recipe from './pages/recipe/RecipePage.jsx';
import RecipeOverview from './pages/recipeOverview/RecipeOverviewPage.jsx';
import SignIn from './pages/signIn/SignInPage.jsx';
import SignUp from './pages/signUp/SignUpPage.jsx';
import NotFound from './pages/notFound/NotFoundPage.jsx';

function App() {
    const { isAuth } = useContext(AuthContext);

    return (
        <>
            <NavBar />
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>

                    <Route path="/signin" element={<SignIn />}/>
                    <Route path="/signup" element={ !isAuth ? <SignUp /> : <Navigate to="/signin" />}/>

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
