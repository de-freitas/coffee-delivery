export function zipCodeMask(typedValue: string): string {
  typedValue = typedValue.replace(/\D/g, "");
  typedValue = typedValue.replace(/(\d{5})(\d)/, "$1-$2");
  return typedValue;
}
