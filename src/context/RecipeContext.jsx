// import { createContext, useState } from "react";
//
// export const RecipeContext = createContext();
//
// function RecipeProvider({ children }) {
//     const [selectedRecipes, setSelectedRecipes] = useState(() => {
//         const saved = localStorage.getItem("selectedRecipes");
//         return saved ? JSON.parse(saved) : [];
//     });
//
//     const addRecipe = (recipe) => {
//         setSelectedRecipes(array => {
//             if (array.length >= 7) {
//                 console.log("Already adding the maximum of 7 recipes");
//                 return array;
//             }
//
//             if (!array.some(r => r.id === recipe.id)) {
//                 const updated = [...array, recipe];
//                 localStorage.setItem("selectedRecipes", JSON.stringify(updated));
//                 return updated;
//             }
//
//             return array;
//         });
//     };
//
//     const deleteRecipe = (recipeId) => {
//         setSelectedRecipes(array => {
//             const updated = array.filter(r => r.id !== recipeId);
//             localStorage.setItem("selectedRecipes", JSON.stringify(updated));
//             return updated;
//         });
//     };
//
//     return (
//         <RecipeContext.Provider value={{ selectedRecipes, addRecipe, deleteRecipe }}>
//             {children}
//         </RecipeContext.Provider>
//     );
// }
//
// export default RecipeProvider;
