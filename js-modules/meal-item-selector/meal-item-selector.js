import setMultipleAttributes from "../helpers/set-multiple-attributes.js"
import { checkboxGroups } from "./components/checkbox-groups.js"
import removeNoCheckboxSelectedWarning from "./components/remove-no-checkbox-selected-warning.js"
import enforceCheckboxLimit from "./components/enforce-checkbox-limit.js"
import outputCheckboxValues from "./components/output-checkbox-values.js"
import outputTotalPrice from "./components/output-total-price.js"

export default function mealItemSelector() {
  // body id for index.html:
  const home = document.getElementById("home")

  if (!home) return

  const form = document.getElementById("form")
  const btnSubmit = document.getElementById("submit")
  const output = document.getElementById("output")

  checkboxGroups.forEach((group) => {
    enforceCheckboxLimit(group.elements, group.selector, group.limit)
  })

  removeNoCheckboxSelectedWarning()

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    const totalGroups = 5

    for (let i = 0; i < totalGroups; i++) {
      outputCheckboxValues(
        checkboxGroups[i].elements,
        checkboxGroups[i].selector
      )
    }

    // Guard clause if no checkboxes selected but form submitted
    if (output.childNodes.length === 0) {
      if (!document.querySelector("[data-warning='no-selection']")) {
        const warning = document.createElement("p")
        setMultipleAttributes(warning, {
          class: "warning",
          role: "alert",
          "data-warning": "no-selection",
        })
        warning.textContent = `You must select at least 1 item before you submit the form`
        btnSubmit.after(warning)
      }
      return
    }

    // Successful submission
    const mainHeading = document.getElementById("main-heading")
    mainHeading.textContent = "You chose:"
    const button = document.createElement("button")
    button.textContent = "Start again?"
    button.type = "button"
    button.addEventListener("click", () => window.location.reload())
    outputTotalPrice(output)
    output.after(button)

    // Accessibility: announce change and move focus
    setMultipleAttributes(output, {
      class: "output flow",
      role: "alert",
      tabindex: "-1",
    })
    output.focus()

    // Remove form
    e.target.remove()
  })
}
