import { useEffect, useState } from "react";
import axios from "axios";

function useGetRecipeData(endpoint) {
    const [recipe, setRecipe] = useState(null);
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
            } catch (e) {
                console.error(e);
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

export default useGetRecipeData;