var allPageContainer = document.querySelector("#main")
var image = document.querySelector("#image")

allPageContainer.addEventListener("mousemove", function(val) {
    gsap.to(".cursor", {
        x: val.x,
        y: val.y,
        duration: .5
    })
})

allPageContainer.addEventListener("mouseleave", function(val) {
    gsap.to(".cursor", {
        scale: 0,
        duration: .8
    })
})

allPageContainer.addEventListener("mouseenter", function() {
    gsap.to(".cursor", {
        scale:1
    })
})

image.addEventListener("mouseenter", function() {
    document.querySelector(".cursor").innerHTML = "View More"
    gsap.to(".cursor", {
        scale: 4
    })
})

image.addEventListener("mouseleave", function() {
    document.querySelector(".cursor").innerHTML = ""
    gsap.to(".cursor", {
        scale: 1
    })
})