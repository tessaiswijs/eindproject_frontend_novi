import {useContext, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';
import './SignInPage.css';
import Button from '../../components/button/Button.jsx';
import InputField from "../../components/inputField/InputField.jsx";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("token");

    async function handleSubmit(error) {
        error.preventDefault();
        toggleLoading(true);
        toggleError(false);

        try {
            const respons = await axios.post('https://novi-backend-api-wgsgz.ondigitalocean.app/api/login', {
                email: email,
                password: password,
            }, {
                headers: {
                    'novi-education-project-id': `${import.meta.env.VITE_API_KEY_NOVI}`,
                }
            });

            login(respons.data);

        } catch (e) {
            if (axios.isCancel(e)) {
                console.error("Request is canceled...", e);
            } else {
                console.error("Request failed:", e);
                toggleError(true);
            }
        } finally {
            toggleLoading(false);
        }
    }

    return (

        <div>
            <>

                <div className="sign-in-page">

                    <div className="registration-login-button-container">
                        <Button
                            type="button"
                            className="registration-button"
                            onClick={() => navigate('/signup')}>
                            Register
                        </Button>

                        <Button
                            type="button"
                            className="login-button"
                            onClick={() => navigate('/signin')}>
                            Login
                        </Button>
                    </div>

                    <div className="login-container">

                        <section className="login-header-section">
                            <img src="/src/assets/logo_yellow.png" alt="MealTap logo"/>

                            <h1>Login</h1>

                            <p>Log in to MealTap and create your own weekly meal plan. Your recipes wil be easily
                                accessible in your account.</p>

                        </section>

                        {isLoggedIn ? (
                            <section className="login-successfully-container"> <span className={"successfully-sentence"}>Successfully logged in!</span>

                                <p className="what-next-container">What do you want to do?
                                    <span>Go to <Link to="/"> home </Link></span>
                                    <span>Do <Link to="/quiz"> the quiz </Link></span>
                                    <span>See your <Link to="/mealplanning"> weekplan </Link></span>
                                </p>

                            </section>

                        ) : (



                        <form className="login-form" onSubmit={handleSubmit}>
                            <InputField
                                name="email-field"
                                label="email address"
                                type="email"
                                id="email-field"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <InputField
                                name="password-field"
                                label="password"
                                type="password"
                                id="password-field"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {error &&
                                <p className="error">The combination of email address and password is incorrect. Please
                                    try again.</p>}

                            <Button
                                type="submit"
                                className="form-button">
                                Login
                            </Button>
                            <p>Don't have an account yet? <Link to="/signup">register</Link> first.</p>
                        </form>
                        )}


                    </div>

                </div>

            </>
            {loading && <p>Loading...</p>}
        </div>
    );
}

export default SignIn;