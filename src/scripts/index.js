
import { products } from "./productsData.js";
import { categories } from "./productsData.js";

function createCard(product, value = 100) {
    const ul = document.querySelector(".filter__card")
    ul.innerHTML = ""

    if (product.length <= 0) {
        const messageNoteFound = document.createElement("p")
        messageNoteFound.innerText = "Nenhum album foi encontrado nessa categoria"
        messageNoteFound.classList = "erro"
        ul.appendChild(messageNoteFound)
    } else {
        product.forEach((product) => {

            if (product.price <= value) {

                const card = document.createElement("li")
                const imagem = document.createElement("img")
                const paragraph = document.createElement("p")
                const title = document.createElement("h2")
                const span = document.createElement("span")
                const paragraph3 = document.createElement("p")
                const button = document.createElement("button")

                card.classList = "item"
                button.classList = "buy"
                paragraph.classList = "paragraph-item1"
                title.classList = "title-item"
                paragraph3.classList = "paragraph-price"
                button.classList = "button-item"


                imagem.src = product.img
                imagem.alt = product.title
                paragraph.innerText = `${product.band} ${product.year}`
                title.innerText = product.title
                paragraph3.innerText = `R$${product.price.toFixed(2)}`
                button.innerText = "Comprar"

                card.appendChild(imagem)
                card.appendChild(paragraph)
                card.appendChild(title)
                card.appendChild(span)

                span.appendChild(paragraph3)
                span.appendChild(button)

                ul.appendChild(card)
            }
        });
    }
}

createCard(products)


let newProducts = products

function createButton(categories) {

    const input = document.querySelector("#inputRange")
    const span = document.querySelector("#price")
    input.addEventListener("input", () => {

        span.innerText = Number(input.value).toFixed(2)
        createCard(newProducts, Number(input.value))
        let rMin = input.min;
        let rMax = input.max;
        let rStep = input.step;
        let prop = (rMax - rMin) / rStep; // calcula o número de steps
        let perc = 100 * ((input.value - rMin) / rStep) / prop; // calcula o percentual proporcional

        // aplica o background
        input.style.background = 'linear-gradient(to right, #9747ff 0%, #9747ff ' + perc + '%, #ced4da ' + perc + '%, #ced4da 100%)';

    })
    const list = document.querySelector(".button__filter")


    categories.forEach((categorie, index) => {
        const button = document.createElement('button')
        button.classList = "filter__button"
        button.id = index
        button.innerText = categorie

        list.appendChild(button)

    })

    const buttons = document.querySelectorAll(".filter__button")
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (Number(button.id) === 0) {
                newProducts = products
            } else {
                newProducts = products.filter(product => product.category === Number(button.id))
            }
            createCard(newProducts, Number(input.value))
        })
    })
}

createButton(categories)


