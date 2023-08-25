/* Desenvolva sua lógica aqui ... */

const buttonDark = document.querySelector(".button-Dark")
const html = document.querySelector("html")
const img = document.querySelector(".theme__img")

const darkMode = localStorage.getItem("@openMusic:darkMode")
if (darkMode) {
    html.classList.add("dark-mode")
    img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
}

buttonDark.addEventListener('click', () => {
    html.classList.toggle("dark-mode")
    if (html.classList.contains("dark-mode")) {
        img.src = "https://media.graphassets.com/BgTFGDVvRdymZmzAgg9t"
        localStorage.setItem("@openMusic:darkMode", true)
    } else {
        img.src = "https://media.graphassets.com/AWCWFFLPSEWh4lhYs68c"
        localStorage.removeItem("@openMusic:darkMode")
    }
})



