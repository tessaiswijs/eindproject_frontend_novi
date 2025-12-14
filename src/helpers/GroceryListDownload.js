function downloadGroceryList(groceryList, filename = "boodschappenlijst.txt") {
    if (!groceryList || Object.keys(groceryList).length === 0) return;

    const groceryText = Object.values(groceryList)
        .map(item => `${item.name}, ${item.totalAmount} ${item.unit}`)
        .join('\n');

    const blob = new Blob([groceryText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();

    URL.revokeObjectURL(url);
}

export default downloadGroceryList;