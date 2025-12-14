function extractCalories(summary) {
    if (!summary) return null;
    const match = summary.match(/(\d+)\s*calories/i);
    return match ? match[1] : null;
}

export default extractCalories;