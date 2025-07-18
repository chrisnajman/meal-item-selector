let imageCount = 0
export default function lazyLoadImages(image) {
  // lazy load all images, except the first
  if (imageCount > 0) {
    image.loading = "lazy"
  }

  imageCount++
}
