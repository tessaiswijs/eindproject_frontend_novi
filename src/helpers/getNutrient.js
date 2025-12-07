function getNutritionInfo(recipe, nutrientName) {
    if (!recipe?.nutrition?.nutrients) return null;
    const nutrient = recipe.nutrition.nutrients.find(n => n.name.toLowerCase() === nutrientName.toLowerCase());
    return nutrient ? `${nutrient.amount} ${nutrient.unit}` : null;
}

export default getNutritionInfo;