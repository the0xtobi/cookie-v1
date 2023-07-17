const tl = gsap.timeline({defaults: {duration:0.75, ease: "power1.out"}})

tl.fromTo(".cookie-container", {scale:0}, {scale:1, duration: 1.75, delay: 0.35, ease: "elastic.out(1, 0.5)"})
tl.fromTo(".cookie-text", {x: 40, opacity: 0}, {x:0, opacity:1}, "<40%")
tl.fromTo(".cookie-full", {x: -40, opacity: 0, rotation: '-45deg'}, {x:0, opacity:1, rotation: '0deg'}, "<40%")
tl.fromTo(".cookie-full", {y: 0, rotation: '0deg'}, {y:-20, yoyo: true, repeat: -1, rotation: '-15deg'})

const button = document.querySelector(".cookie-btn")

button.addEventListener("click", ()=>{
    gsap.to(".cookie-container", {y: 100, opacity: 0, duration:0.75,  ease: "power1.out"})
})