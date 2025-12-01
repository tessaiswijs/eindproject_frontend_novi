import { useEffect, useState } from "react";
import axios from "axios";

export function SpoonacularRecipes(number = 3) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const endpoint = `https://api.spoonacular.com/recipes/random?number=${number}&tags=main%20course&apiKey=${import.meta.env.VITE_API_KEY}`;

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRecipes() {
            setLoading(true);
            setError(false);

            try {
                const { data } = await axios.get(endpoint, {
                    signal: controller.signal,
                });
                setRecipes(data.recipes);
            } catch (e) {
                if (!axios.isCancel(e)) {
                    console.error(e);
                    setError(true);
                }
            } finally {
                setLoading(false);
            }
        }

        fetchRecipes();

        return () => controller.abort();
    }, [endpoint]);

    return { recipes, loading, error };
}

export default SpoonacularRecipes;