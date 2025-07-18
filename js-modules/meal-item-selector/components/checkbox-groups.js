const starters = document.querySelectorAll("[data-checkbox-starters]")
const mains = document.querySelectorAll("[data-checkbox-mains]")
const vegetables = document.querySelectorAll("[data-checkbox-vegetables]")
const desserts = document.querySelectorAll("[data-checkbox-desserts]")
const drinks = document.querySelectorAll("[data-checkbox-drinks]")

export const checkboxGroups = [
  { elements: starters, selector: "[data-checkbox-starters]", limit: 2 },
  { elements: mains, selector: "[data-checkbox-mains]", limit: 1 },
  { elements: vegetables, selector: "[data-checkbox-vegetables]", limit: 3 },
  { elements: desserts, selector: "[data-checkbox-desserts]", limit: 1 },
  { elements: drinks, selector: "[data-checkbox-drinks]", limit: 1 },
]
