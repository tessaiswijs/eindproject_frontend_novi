import getIngredients from '../helpers/getIngredients.js';

function mergeIngredients(groceries, ingredients) {
    for (const ingredient of ingredients) {
        const key = ingredient.name.toLowerCase();

        if (!groceries[key]) {
            groceries[key] = {
                name: ingredient.name,
                totalAmount: ingredient.amount,
                unit: ingredient.unit
            };
        } else {
            groceries[key].totalAmount += ingredient.amount;
        }
    }
}

async function getCombinedGroceryList(recipeIds) {
    const groceries = {};

    const allIngredients = await Promise.all(
        recipeIds.map(id => getIngredients(id))
    );

    for (const ingredients of allIngredients) {
        mergeIngredients(groceries, ingredients);
    }

    return groceries;
}

export default getCombinedGroceryList;