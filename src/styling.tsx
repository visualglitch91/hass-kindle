export function px(...values: (number | string)[]) {
  return values
    .map((value) => (typeof value === "string" ? value : `${value * 2.2}px`))
    .join(" ");
}
