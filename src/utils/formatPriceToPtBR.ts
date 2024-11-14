export function formatPriceToPtBR(price: number): string {
  const formatedPriceToPtBR = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return formatedPriceToPtBR;
}
