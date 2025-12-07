import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css';
import Button from '../../components/button/Button.jsx';
import InputField from '../../components/inputField/InputField.jsx';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [registered, setRegistered] = useState(false);


    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setLoading(true);


        try {
            const response = await axios.post(
                'https://novi-backend-api-wgsgz.ondigitalocean.app/api/users',
                {
                    email: email,
                    password: password,
                },
                {
                    headers: {
                        'novi-education-project-id': import.meta.env.VITE_API_KEY_NOVI,
                    },
                }
            );

            if (response.status === 201) {
                // Gebruiker is succesvol aangemaakt, doorsturen naar login
                setRegistered(true);
            }
        } catch (e) {
            console.error(e);
            if (e.response) {
                // De server heeft een fout teruggegeven
                if (e.response.status === 400) {
                    setError('This account already exists. Please try another email address or log in.');
                } else if (e.response.status === 401) {
                    setError('Unauthorized request.');
                } else if (e.response.status === 403) {
                    setError('You are not allowed to create a user.');
                } else {
                    setError('An unknown error occurred. Please try again.');
                }
            } else {
                // Geen response van de server, bijvoorbeeld netwerkfout
                setError('Unable to connect to the server. Please try again later.');
            }
        }

        setLoading(false);
    }

    return (
        <div className="sign-up-page">
            <div className="registration-signup-button-container">
                <Button
                    type="button"
                    className="registration-button"
                    onClick={() => navigate('/signup')}
                >
                    Register
                </Button>

                <Button
                    type="button"
                    className="login-button"
                    onClick={() => navigate('/signin')}
                >
                    Login
                </Button>
            </div>

            <div className="signup-container">
                <section className="signup-header-section">
                    <img src="/src/assets/logo_yellow.png" alt="MealTap logo" />
                    <h1>Registreren</h1>
                    <p>
                        Register to MealTap and create your own weekly meal plan. Your
                        recipes will be easily accessible in your account.
                    </p>
                </section>


                {/* ⭐ SUCCES BLOK (zoals jij vroeg) */}
                {registered ? (
                    <section className="signup-successfully-container">
                        <h2 className="successfully-sentence">Registration successful!</h2>
                        <p className="what-next-container">
                            You are one step away from your meal planning! <br />
                            <span>Go to the <Link to="/signin">login page</Link> to log in.</span>
                        </p>
                    </section>
                ) : (



                <form className="signup-form" onSubmit={handleSubmit}>
                    <InputField
                        name="email-field"
                        label="Email Address"
                        type="email"
                        id="email-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                        name="password-field"
                        label="Password"
                        type="password"
                        id="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="error">{error}</p>}

                    <Button type="submit" className="form-button" disabled={loading}>
                        {loading ? 'Registering...' : 'Register'}
                    </Button>
                </form>
                )}

                <p>
                    Do you have an account already? Then you can <Link to="/signin">login</Link>
                </p>

            </div>
        </div>
    );
}

export default SignUp;
