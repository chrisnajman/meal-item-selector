export default function outputTotalPrice(output) {
  const checkboxes = document.querySelectorAll("input[type='checkbox']")
  let allPrices = []

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const priceContainer = checkbox.closest("div")
      const price = priceContainer.querySelector("[data-price]")

      allPrices.push(Number(price.textContent))
    }
  })

  const totalPrice = [...allPrices].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  )

  const roundedTotal = totalPrice.toFixed(2)
  const total = document.createElement("p")
  total.classList.add("total")
  total.textContent = `Total: £${roundedTotal}`

  output.append(total)
}
