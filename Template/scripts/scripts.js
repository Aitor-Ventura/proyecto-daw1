function billingInfoValidation() {
    /* Asignación de variables */
    var newAddressCheckout = document.getElementById("newAddressCheckout")
    var checkboxDifferentAddress = document.getElementById("differentAddress")
    var arrowDownCheckout = document.querySelector('#arrow-down-checkout')
    var arrowRightCheckout = document.querySelector('#arrow-right-checkout')

    var address = document.getElementById("address")
    var country = document.getElementById("country")
    var city = document.getElementById("city")
    var postcode = document.getElementById("postcode")

    var newAddress = document.getElementById("newAddress")
    var newCountry = document.getElementById("newCountry")
    var newCity = document.getElementById("newCity")
    var newPostcode = document.getElementById("newPostcode")

    checkboxDifferentAddress.checked == true ? checkboxDifferentAddress.checked = false : checkboxDifferentAddress.checked = true

    if(checkboxDifferentAddress.checked == true) {
        arrowDownCheckout.classList.add('visible')
        arrowDownCheckout.classList.add('block')
        arrowDownCheckout.classList.remove('invisible')
        arrowDownCheckout.classList.remove('hidden')
        arrowRightCheckout.classList.remove('visible')
        arrowRightCheckout.classList.remove('block')
        arrowRightCheckout.classList.add('invisible')
        arrowRightCheckout.classList.add('hidden')
        newAddressCheckout.style.display = ""

        /* Atributos no requeridos */
        address.required = false
        country.required = false
        city.required = false
        postcode.required = false

        /* Atributos requeridos */
        newAddress.required = true
        newCountry.required = true
        newCity.required = true
        newPostcode.required = true

        /* Atributos no editables */
        address.disabled = true
        country.disabled = true
        city.disabled = true
        postcode.disabled = true

        /* Estilo de los atributos no editables */
        address.style.fontStyle = "italic"
        address.style.color = "gray"
        address.style.cursor = "not-allowed"
        
        country.style.fontStyle = "italic"
        country.style.color = "gray"
        country.style.cursor = "not-allowed"
        
        city.style.fontStyle = "italic"
        city.style.color = "gray"
        city.style.cursor = "not-allowed"
        
        postcode.style.fontStyle = "italic"
        postcode.style.color = "gray"
        postcode.style.cursor = "not-allowed"

    } else {
        arrowDownCheckout.classList.remove('visible')
        arrowDownCheckout.classList.remove('block')
        arrowDownCheckout.classList.add('invisible')
        arrowDownCheckout.classList.add('hidden')
        arrowRightCheckout.classList.add('visible')
        arrowRightCheckout.classList.add('block')
        arrowRightCheckout.classList.remove('invisible')
        arrowRightCheckout.classList.remove('hidden')
        newAddressCheckout.style.display = "none"

        /* Atributos requeridos */
        address.required = true
        country.required = true
        city.required = true
        postcode.required = true

        /* Atributos no requeridos */
        newAddress.required = false
        newCountry.required = false
        newCity.required = false
        newPostcode.required = false

        /* Atributos no editables */
        address.disabled = false
        country.disabled = false
        city.disabled = false
        postcode.disabled = false

        /* Estilo de los atributos no editables */
        address.style.fontStyle = "normal"
        address.style.color = "black"
        address.style.cursor = "initial"
        
        country.style.fontStyle = "normal"
        country.style.color = "black"
        country.style.cursor = "initial"
        
        city.style.fontStyle = "normal"
        city.style.color = "black"
        city.style.cursor = "initial"
        
        postcode.style.fontStyle = "normal"
        postcode.style.color = "black"
        postcode.style.cursor = "initial"
    }
}

function toggleWishlist(id) {
    var noWishlist = $('#'.concat(id)).children('.no_wishlist')
    var wishlist = $('#'.concat(id)).children('.wishlist')
    if (wishlist.css('visibility') == 'hidden') {
        wishlist.css('visibility', '')
        wishlist.css('display', '')
        noWishlist.css('visibility', 'hidden')
        noWishlist.css('display', 'none')
    } else {
        noWishlist.css('visibility', '')
        noWishlist.css('display', '')
        wishlist.css('visibility', 'hidden')
        wishlist.css('display', 'none')
    }
}

const html = document.querySelector("html");

const toggleDarkMode = function() {
    const checkbox = document.getElementById('checkbox');
    if (sessionStorage.getItem("darkMode") == "true"){
        html.classList.remove("dark");
        sessionStorage.setItem("darkMode","false");
    } else {
        html.classList.add("dark")
        sessionStorage.setItem("darkMode", "true")
    } 
}

const checkDarkMode = function () {
    if (sessionStorage.getItem("darkMode") == "true") {
        html.classList.add("dark")
    } else {
        html.classList.remove("dark");
    }
}

checkDarkMode()

const loadNavBarContents = async function() {
    var htmlContents = ""
    await $.getJSON("./json/categories.json", function(json){
        Object.entries(json.categories).forEach((entry) => {
            const [key, value] = entry
            htmlContents += `<div class="category-element" onmouseenter='document.getElementById("navCat${key}").style.display=""' onmouseleave='document.getElementById("navCat${key}").style.display="none"'>
            <div class="category-button">
                <a href="category.html">${value.name}</a>
                <svg class="cursor-pointer" fill="black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z"></path></svg>
            </div>
            <div class="nav-subcategory" style="display: none;" id="navCat${key}">`
            Object.entries(value.subcategories).forEach((entry) => {
                const [key,value] = entry
                htmlContents += `<a href="category.html">${value}</a>`
            })
            htmlContents += `</div>
            </div>`
        })
    })
    console.log(document.querySelector('.nav-category'))
    document.querySelector('.nav-category').innerHTML = htmlContents
}