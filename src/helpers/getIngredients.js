import axios from "axios";

async function getIngredientsForRecipe(externalId) {
    const endpoint = `https://api.spoonacular.com/recipes/${externalId}/ingredientWidget.json?apiKey=${import.meta.env.VITE_API_KEY_SPOONACULAIR}`;

    try {
        const { data } = await axios.get(endpoint);
        return data.ingredients.map(ingredient => ({
            name: ingredient.name,
            amount: ingredient.amount.metric.value,
            unit: ingredient.amount.metric.unit
        }));
    } catch (e) {
        console.error("Error fetching ingredients for recipe", externalId, e);
        return [];
    }
}

export default getIngredientsForRecipe;