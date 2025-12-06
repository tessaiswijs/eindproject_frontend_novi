import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';
import isTokenValid from '../helpers/isTokenValid';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = jwtDecode(token);
            console.log(decodedToken);

            if (isTokenValid()) {
                setAuth({
                    isAuth: true,
                    user: {
                        email: decodedToken.email,
                        roles: decodedToken.role,
                    },
                    status: 'done',
                });
            } else {
                logout();
            }

        } else {
            setAuth({
                ...auth,
                status: 'done',
            });
        }

    }, []);


    const navigate = useNavigate();

    function login(userDetails) {
        console.log('De login-functie uit de Context heeft ontvangen:', userDetails);
        localStorage.setItem('token', userDetails.token);

        setAuth({
            isAuth: true,
            user: {
                email: userDetails.user.email,
                roles: userDetails.user.roles
            },
            status: 'done',
        });

        // navigate('/home');
    }

    function logout() {
        localStorage.removeItem('token');

        setAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log('Gebruiker is uitgelogd!');
        navigate('/');
    }

    const contextData = {
        isAuth: auth.isAuth,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
