const images = [
  "a-close-up-monochrome-image-of-a-ensign-ful-vue-vintage-balck-and-white-camera-from-the-1940s-2BFHTJX.jpg",
  "bilora-bella-66-1960-german-camera-repurposed-lamp.jpg",
  "download.jpg",
  "how-to-see-black-and-white-01.webp",
  "monochrome-08.webp",
  "monochrome-13-1.webp",
  "pexels-jack-hawley-57905.jpg",
  "photo-1608675873996-4d5f38b7712e.jpg",
  "sepia-photoshop-action.jpg",
  "when-to-use-black-and-white-dsc_7162-824x522.jpg",
  "images.jpg",
]

const ob = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
        entry.target.className = "fadein"
      }
    }
  },
  {
    threshold: 0.1,
  }
)

for (let i = 0; i < images.length * 4; i += 1) {
  const image = images[i % images.length]

  const img = document.createElement("img")
  img.src = `./images/${image}`
  img.onload = () => {
    ob.observe(img)
  }

  document.getElementById(i % 2 === 0 ? "images1" : "images2").appendChild(img)
}
