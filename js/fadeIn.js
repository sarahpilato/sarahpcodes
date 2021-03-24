const animatedTags = document.querySelectorAll(".linkNav, h1, p, img")

// fade out on load
animatedTags.forEach(tag => {
    tag.style.opacity = 0
})

const fadeIn = function () {
  // look through all the animated tags and see
  // with the getBoundingClientRect if it's in the window
let delay = 0.30 

animatedTags.forEach(tag => {
    const tagTop = tag.getBoundingClientRect().top
    const tagBottom = tag.getBoundingClientRect().bottom
    
    if (tagTop < window.innerHeight && tagBottom > 0) {
        tag.style.animation = `fadein 1s ${delay}s both`
        delay = delay + 0.10
    } else {
        tag.style.opacity = 0
        tag.style.animation = ""
    }
    })
}

// on load, run fadeIn
fadeIn()

// on scroll, run fadeIn
document.addEventListener("scroll", function () {
    fadeIn()
})

// on browser resize, run fadeIn
window.addEventListener("resize", function () {
    fadeIn()
})


function makeDraggable(evt) {
    var svg = evt.target;
    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    function startDrag(evt) {
    }
    function drag(evt) {
    }
    function endDrag(evt) {
    }
}

