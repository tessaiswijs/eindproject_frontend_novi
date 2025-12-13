import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext.jsx';

export function SavedRecipes() {
    const { user } = useContext(AuthContext);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!user) {
            setRecipes([]);
            setLoading(false);
            return;
        }

        const fetchRecipes = async () => {
            try {
                setLoading(true);
                const response = await axios.get(
                    `https://novi-backend-api-wgsgz.ondigitalocean.app/api/users/${user.userId}/recipes`,
                    {
                        headers: {
                            'novi-education-project-id': `${import.meta.env.VITE_API_KEY_NOVI}`,
                            'Authorization': `Bearer ${token}`
                        }
                    }
                );
                setRecipes(response.data);
                console.log(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [user]);

    const addRecipe = async (newRecipe) => {
        if (!user) return;
        try {
            const response = await axios.post(
                'https://novi-backend-api-wgsgz.ondigitalocean.app/api/recipes',
                {
                    ...newRecipe,
                    userId: user.userId,
                },
                {
                    headers: {
                        'novi-education-project-id': `${import.meta.env.VITE_API_KEY_NOVI}`,
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            console.log("Recipe added:", response.data);
            setRecipes(prev => [...prev, response.data]);
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    const deleteRecipe = async (recipeId) => {
        if (!user) return;
        try {
            await axios.delete(
                `https://novi-backend-api-wgsgz.ondigitalocean.app/api/recipes/${recipeId}`,
                {
                    headers: {
                        'novi-education-project-id': `${import.meta.env.VITE_API_KEY_NOVI}`,
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            setRecipes(prev => prev.filter(r => r.id !== recipeId));
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    return { recipes, loading, error, addRecipe, deleteRecipe };
}

export default SavedRecipes;