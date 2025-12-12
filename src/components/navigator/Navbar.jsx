import {useContext} from 'react';
import {useNavigate, NavLink} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext.jsx';
import './Navbar.css';
import Button from '../../components/button/Button.jsx';
import {CounterContext} from "../../context/CounterContext.jsx";

function NavBar() {
    const {isAuth, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const { count } = useContext(CounterContext);

    return (
        <nav>
            <NavLink to="/"><span className="logo-container-navbar"><img src="/src/assets/logo.png" alt="MealTap logo"/></span></NavLink>

            <ul className="page-navigation">
                <li>
                    <NavLink to="/Quiz" className={({ isActive }) => isActive === true ?
                        "active-link" : "default-link"}>
                        Do the quiz
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/RecipeOverview" className={({ isActive }) => isActive === true ?
                        "active-link" : "default-link"}>
                        Recipes
                    </NavLink>
        </li>
                <li>
                    <NavLink to="/MealPlanning" className={({ isActive }) => isActive === true ?
                        "active-link" : "default-link"}>
                        Meal planning
                    </NavLink>

                    {count !== 0 && (
                        <span className="recipe-counter">{count}/7</span>
                    )}

                </li>
            </ul>

            {isAuth ? <button type="button" onClick={logout}>Log uit</button> :
                <div className="button-container">
                    <Button
                        type="button"
                        className="inlog-button"
                        onClick={() => navigate('/signin')}
                    >
                        Log in
                    </Button>
                </div>
            }

        </nav>
    );
}

export default NavBar;