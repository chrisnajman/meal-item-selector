export default function themeSwitcher() {
  const LOCAL_STORAGE_PREFIX = "MEAL-ITEM-SELECTOR"
  const THEME_KEY = `${LOCAL_STORAGE_PREFIX}-theme`

  const themeToggler = document.querySelector(".theme-toggler")
  const lightSpan = themeToggler.querySelector(".light .visually-hidden")
  const darkSpan = themeToggler.querySelector(".dark .visually-hidden")
  const toggleButton = themeToggler.querySelector("button")

  function getStoredTheme() {
    try {
      const storedTheme = localStorage.getItem(THEME_KEY)
      return storedTheme !== null ? JSON.parse(storedTheme) : true // default to dark mode
    } catch (error) {
      console.error("Error parsing theme from localStorage:", error)
      return true // default to dark mode on error
    }
  }

  let theme = getStoredTheme()

  function setTheme(newTheme) {
    theme = newTheme
    document.documentElement.classList.toggle("darkmode", theme)
    localStorage.setItem(THEME_KEY, theme)

    updateUI()
  }

  function handleMode() {
    setTheme(!theme)
  }

  function updateUI() {
    lightSpan.textContent = theme ? " theme active" : " theme inactive"
    darkSpan.textContent = theme ? " theme inactive" : " theme active"
    toggleButton.setAttribute("aria-pressed", theme ? "false" : "true")
  }

  toggleButton.addEventListener("click", handleMode)

  setTheme(theme)
}
