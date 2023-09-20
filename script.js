content = document.querySelector("#navbar_content")
toggle = document.querySelector("#toggle")
content.style.right = "-100vw"
toggle.addEventListener("click", () => {
    if (content.style.right === "-100vw") {
        content.style.right = "0vw"
    }
    else {
        content.style.right = "-100vw"
    }
})
const header = document.querySelector("header")
const nav = document.querySelector("#navbar_content")
window.addEventListener("scroll", () => {
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100

    // Calculate the RGB value based on the scroll percentage
    // componentValue = initialValue + (scrollPercentage * (finalValue - initialValue))
    const rgbValue = 17 + (scrollPercentage * 0.51)

    // Apply the RGB value to the background color
    header.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`
    nav.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`

})

const navLinks = document.querySelectorAll('nav a,.footer a')
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault() // Prevent the default jump-to behavior

        // Get the target section's ID from the link's href
        const targetId = link.getAttribute('href').substring(1)

        // Find the target section by its ID
        const targetSection = document.getElementById(targetId)

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth',
        })
    })
})
