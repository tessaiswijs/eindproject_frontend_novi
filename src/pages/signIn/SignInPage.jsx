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
                        Registreren
                    </Button>

                    <Button
                        type="button"
                        className="login-button"
                        onClick={() => navigate('/signin')}>
                        Inloggen
                    </Button>
                </div>

                <div className="login-container">

                    <section className="login-header-section">
                        <img src="/src/assets/logo_yellow.png" alt="MealTap logo"/>

                        <h1>Inloggen</h1>
                        <p>Log in bij MealTap en maak jouw makkelijk weekplanning. De recepten kun je makkelijk
                            terugvinden in jouw account. </p>

                    </section>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <InputField
                            name="email-field"
                            label="Emailadres"
                            type="email"
                            id="email-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <InputField
                            name="password-field"
                            label="Wachtwoord"
                            type="password"
                            id="password-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="error">Combinatie van e-mailadres en wachtwoord is onjuist</p>}

                        <Button
                            type="submit"
                            className="form-button">
                            Inloggen
                        </Button>

                    </form>

                    <p>Heb je nog geen account? <Link to="/signup">Registreer</Link> je dan eerst.</p>

                </div>
            </div>
        </>
    );
}

export default SignIn;