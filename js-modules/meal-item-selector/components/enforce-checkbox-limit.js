import setMultipleAttributes from "../../helpers/set-multiple-attributes.js"

export default function enforceCheckboxLimit(elements, dataAttribute, limit) {
  if (elements.length <= limit) return // Create a single warning message per group const

  const warning = document.createElement("p")
  setMultipleAttributes(warning, {
    class: "warning",
    role: "alert",
    "data-warning": dataAttribute,
  })

  elements.forEach((el) => {
    el.addEventListener("change", (e) => {
      const checkedItems = document.querySelectorAll(`${dataAttribute}:checked`)

      if (checkedItems.length > limit) {
        e.target.checked = false
        warning.textContent = `Maximum ${limit} items allowed.`

        // Insert warning after the checkbox container, if it's not already in the DOM
        const container = e.target.closest("fieldset")
        if (!container.contains(warning)) {
          container.appendChild(warning)
        }
      } else {
        // Remove warning if it's in the DOM
        /*
            .isConnected is a read-only boolean property of a DOM node
            that tells you whether the node is currently attached to
            the document (i.e. part of the live DOM).
                
          */
        if (warning.isConnected) {
          warning.remove()
        }
      }
    })
  })
}
