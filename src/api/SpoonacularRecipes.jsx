import { useEffect, useState } from "react";
import axios from "axios";

function SpoonacularRecipes(endpoint) {
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchRecipes() {
            setLoading(true);
            setError(false);

            try {
                const { data } = await axios.get(endpoint, {
                    signal: controller.signal,
                });
                setRecipe(data);
            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        if (endpoint) {
            fetchRecipes();
        }

        return () => controller.abort();}, [endpoint]);

    return { recipe, loading, error };
}

export default SpoonacularRecipes;