import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';
import Button from '../../components/button/Button.jsx';
import InputField from '../../components/inputField/InputField.jsx';

function SignUp() {
    // state voor het formulier
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();


    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:3000/register', {
                email: email,
                password: password,
                username: username,
            });

            // Let op: omdat we geen axios Canceltoken gebruiken zul je hier een memory-leak melding krijgen.
            // Om te zien hoe je een canceltoken implementeerd kun je de bonus-branch bekijken!

            // als alles goed gegaan is, linken we door naar de login-pagina
            navigate('/signin');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
        <>

            <div className="sign-up-page">

                <div className="registration-signup-button-container">

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

                <div className="signup-container">

                    <section className="signup-header-section">
                        <img src="/src/assets/logo_yellow.png" alt="MealTap logo"/>
                        <h1>Registreren</h1>
                        <p>Wordt lid van MealTap en maak jouw makkelijk weekplanning. De recepten kun je makkelijk
                            terugvinden in jouw account.
                        </p>
                    </section>


                    <form className="signup-form" onSubmit={handleSubmit}>

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

                        <InputField
                            name="password-confirm"
                            label="Wachtwoordcontrole"
                            type="password"
                            id="password-confirm"
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                        />

                        {error && <p className="error">Dit account bestaat al. Probeer een ander e-mailadres.</p>}

                        <Button
                            type="submit"
                            className="form-button"
                            disabled={loading}>
                            Registeren
                        </Button>

                    </form>


                    <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
                </div>
            </div>
        </>
    );
}

export default SignUp;