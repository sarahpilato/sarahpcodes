let number = 0
const stamps = [
  "./styles/assets/circles.svg",
  "./styles/assets/heart.svg",
  "./styles/assets/moon.svg",
  "./styles/assets/rainbow.svg",
  "./styles/assets/shooting-star.svg",
  "./styles/assets/waves.svg"
]

const stampsTag = document.querySelector("div.stamps")

const addStamp = function (x, y) {
  const img = document.createElement("img")
  img.setAttribute("src", stamps[number])
  
  // remove half the window width
  img.style.left = (x - window.innerWidth / 2) + "px"
  img.style.top = y + "px"
  
  stampsTag.appendChild(img)
  
  number = number + 1
  if (number > stamps.length - 1) {
    number = 0
  }
}

document.addEventListener("click", function (event) {
  addStamp(event.pageX, event.pageY)
})