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
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('http://localhost:3000/login', {
                email: email,
                password: password,
            });
            // log het resultaat in de console
            console.log(result.data);

            // geef de JWT token aan de login-functie van de context mee
            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
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
                        <p>Log in to MealTap and create your own weekly meal plan. Your recipes wil be easily accessible in your account.</p>

                    </section>

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
                        {error && <p className="error">The combination of email address and password is incorrect. Pleas try again.</p>}

                        <Button
                            type="submit"
                            className="form-button">
                            Login
                        </Button>

                    </form>

                    <p>Don't have an account yet? Then <Link to="/signup">register</Link> first.</p>

                </div>
            </div>
        </>
    );
}

export default SignIn;