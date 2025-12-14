async function getCombinedGroceryList(recipeIds) {
    const groceries = {};

    for (const id of recipeIds) {
        const ingredients = await getIngredientsForRecipe(id);
        for (const ing of ingredients) {
            const name = ing.name.toLowerCase();
            const unit = ing.unit;
            const amount = ing.amount;

            if (groceries[name] && groceries[name].unit === unit) {
                groceries[name].amount += amount;
            } else if (groceries[name] && groceries[name].unit !== unit) {
                const keyWithUnit = `${name}_${unit}`;
                if (groceries[keyWithUnit]) {
                    groceries[keyWithUnit].amount += amount;
                } else {
                    groceries[keyWithUnit] = {
                        amount: amount,
                        unit: unit,
                        name: ing.name,
                    };
                }
            } else {
                groceries[name] = {
                    amount: amount,
                    unit: unit,
                    name: ing.name,
                };
            }
        }
    }

    return groceries;
}

export default getCombinedGroceryList;