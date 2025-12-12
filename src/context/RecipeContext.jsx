import { createContext, useState } from "react";

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const addRecipe = (recipe) => {
        setSelectedRecipes(array => {
            if (!array.some(r => r.id === recipe.id)) {
                return [...array, recipe];
            }
            return array;
        });
    };

    return (
        <RecipeContext.Provider value={{ selectedRecipes, addRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;