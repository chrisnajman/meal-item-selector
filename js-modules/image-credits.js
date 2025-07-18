import lazyLoadImages from "./helpers/lazy-load-images.js"
export default function imageCredits() {
  // body id for image-credits.html:
  const imageCredits = document.getElementById("image-credits")

  if (!imageCredits) return

  const images = document.querySelectorAll("img")
  images.forEach((image) => {
    lazyLoadImages(image)
  })
}
