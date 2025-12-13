import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import isTokenValid from '../helpers/isTokenValid.js';

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token && isTokenValid(token)) {
            const decodedToken = jwtDecode(token);

            setAuth({
                isAuth: true,
                user: {
                    userId: decodedToken.userId,   // ✅ JUISTE ID
                    email: decodedToken.email,
                    roles: decodedToken.role,
                },
                status: 'done',
            });
        } else {
            logout();
        }
    }, []);

    function login(userDetails) {
        // Alleen token opslaan
        localStorage.setItem('token', userDetails.token);

        const decodedToken = jwtDecode(userDetails.token);

        setAuth({
            isAuth: true,
            user: {
                userId: decodedToken.userId,  // ✅ UIT TOKEN
                email: decodedToken.email,
                roles: decodedToken.role,
            },
            status: 'done',
        });
    }

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('quizData');

        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        navigate('/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
