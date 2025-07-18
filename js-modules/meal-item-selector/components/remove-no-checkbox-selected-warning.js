export default function removeNoCheckboxSelectedWarning() {
  const allCheckboxes = form.querySelectorAll('input[type="checkbox"]')

  // If form is submitted without selecting at least 1 checkbox,
  // a warning is printed. Once at least 1 checkbox has been selected
  // this removes the warning:
  allCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const anyChecked = [...allCheckboxes].some((checkbox) => checkbox.checked)
      const warning = document.querySelector("[data-warning='no-selection']")
      if (anyChecked && warning) {
        warning.remove()
      }
    })
  })
}
