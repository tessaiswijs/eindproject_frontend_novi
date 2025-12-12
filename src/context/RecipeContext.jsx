import { createContext, useState } from "react";

export const RecipeContext = createContext();

function RecipeProvider({ children }) {
    const [selectedRecipes, setSelectedRecipes] = useState([]);

    const addRecipe = (recipe) => {
        setSelectedRecipes(array => {
            if (array.length >=7) {
                console.log("Already adding the maximum of 7 recipes");
            }

            if (!array.some(r => r.id === recipe.id)) {
                return [...array, recipe];
            }
            return array;
        });
    };

    const deleteRecipe = (recipe) => {
        setSelectedRecipes(array => array.filter(r => r.id !== recipe));
    };

    return (
        <RecipeContext.Provider value={{ selectedRecipes, addRecipe, deleteRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
}

export default RecipeProvider;