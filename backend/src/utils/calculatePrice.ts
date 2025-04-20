export const calculateProductPrice = (
    popularityScore: number,
    weight: number,
    goldPrice: number
) : number => {
    const price = (popularityScore + 1 ) * weight * goldPrice;
    return parseFloat(price.toFixed(2));
}