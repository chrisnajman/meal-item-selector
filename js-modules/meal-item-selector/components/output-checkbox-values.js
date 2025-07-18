import setMultipleAttributes from "../../helpers/set-multiple-attributes.js"
import lazyLoadImages from "../../helpers/lazy-load-images.js"

export default function outputCheckboxValues(elements, dataAttribute) {
  const foodContainer = document.createElement("div")
  foodContainer.classList.add("food-container", "flow")
  const foodHeader = document.createElement("h2")
  const foodList = document.createElement("ul")

  elements.forEach((el) => {
    if (el.checked && dataAttribute) {
      const foodGroup = el.closest("fieldset").id
      foodHeader.textContent = foodGroup.slice(0, -1)

      const li = document.createElement("li")

      const foodType = el.value.split("-").join(" ")

      const div = el.closest("div")
      const price = div.querySelector("[data-price]").textContent

      const image = document.createElement("img")
      setMultipleAttributes(image, {
        src: `./img/${foodGroup}/${el.value}.png`,
        width: 175,
        alt: "",
      })

      // Lazy-load all except the first image
      lazyLoadImages(image)

      const p = document.createElement("p")
      p.textContent = `${foodType} / £${price}`

      li.append(image, p)
      foodList.append(li)
      foodContainer.append(foodHeader, foodList)
      output.append(foodContainer)
    }
  })
}
