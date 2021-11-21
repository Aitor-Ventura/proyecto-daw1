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
    document.querySelector('.nav-category').innerHTML = htmlContents
}

const loadProductListNormalCategory = async function () {
    var htmlContents = ""
    await $.getJSON("./json/products.json", function(json){
        Object.entries(json.products).forEach((entry) => {
            const [key, value] = entry
            htmlContents +=`
            <div class="category-panel-products-panel-innerproducts-panel-productentry">
                <div class="category-panel-products-panel-innerproducts-panel-productentry-image">
                    <img src="${value.picture}" class="w-auto" width="240" height="240" alt="Product Image">
                </div>

                <div class="category-panel-products-panel-innerproducts-panel-productentry-panel">
                    <h4 class="category-panel-products-panel-innerproducts-panel-productentry-panel-title">${value.name}</h4>
                    <p class="category-panel-products-panel-innerproducts-panel-productentry-panel-description">${value.description.substr(0,45)}...</p>
                    <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-grid">
                        <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-grid-column">
                            <p>Quality: </p>
                            <p>Company: </p>
                            <p>Delivery: </p>
                            <p>Stock: </p>
                        </div>
                        <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-grid-column">
                            <p class="text-indigo-600">${value.quality}</p>
                            <p>${value.company}</p>
                            <p>${value.delivery}</p>
                            <p class="text-indigo-600">${value.stock} items</p>
                        </div>
                    </div>
                </div>

                <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel">
                    <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-price-panel">
                        <h4 class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-price-panel-price">${value.price} EUR</h4>
                        <p class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-price-panel-pricediscounted" id="discount-prodpage-prod-1">${value.oldPrice} EUR</p>
                    </div>

                    <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-shipping-panel">
                        <p class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-shipping-panel-freeshipping">Free Shipping</p>
                        <p class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-shipping-panel-delivery">Delivery in ${value.delivery_time} day/s</p>
                    </div>

                    <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-buttons-panel">
                        <button class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-buttons-panel-productdetail">
                            <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-buttons-panel-productdetail-text">
                                <a href="product.html" >Product detail</a>
                                <svg fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12.172 12L9.343 9.172l1.414-1.415L15 12l-4.243 4.243-1.414-1.415z"/></svg>
                            </div>
                        </button>
                        
                        <button>
                            <div class="category-panel-products-panel-innerproducts-panel-productentry-panel-rightside-panel-buttons-panel-wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0H24V24H0z"/><path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z"/></svg>
                                <p class="dark:text-black">Add to wishlist</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            `
        })
    })
    document.querySelector('.category-panel-products-panel-innerproducts-panel').innerHTML = htmlContents
}

const loadProductListGridCategory = async function () {
    var htmlContents = ""
    await $.getJSON("./json/products.json", function(json){
        Object.entries(json.products).forEach((entry) => {
            const [key, value] = entry
            htmlContents +=`
            <a href="product.html" class="specific-product-entry">
                <div>
                    <div class="image-container">
                        <img src="${value.picture[0]}" class="product-image" width="240" height="240" alt="Product Image"> 
                    </div>                        
                    <div>
                        <h2 class="product-title">${value.name}</h2>
                        <h4 class="product-description">${value.description.substr(0,45)}...</h4>
                    </div>
                </div>
                <div class="buy-panel">
                    <div class="product-cost-container">
                        <p class="cost">${value.price} EUR</p>
                        <p class="previous-cost" id="discount-prod-3">${value.oldPrice} EUR</p>
                    </div>
                    <button class="buy-now-button">Buy now</button>
                </div>
            </a>
            `
        })
    })
    document.querySelector('.product-entries-panel').innerHTML = htmlContents
}

const loadBestSellingIndex = async function() {
    var htmlContents = ""
    await $.getJSON("./json/products.json", function(json){
        Object.entries(json.products).forEach((entry) => {
            const [key, value] = entry
            if (value.bestSeller) {
                htmlContents +=`
                    <a href="product.html" class="bestselling-product">
                        <div class="bestselling-product-image-container">
                            <img src="${value.picture[0]}" class="bestselling-product-image" width="240" height="240" alt="Product Image"> 
                        </div>                        
                        <div>
                            <h2 class="bestselling-product-title">${value.name}</h2>
                            <h4 class="bestselling-product-description">${value.description.substr(0,45)}...</h4>
                        </div>
                        <div class="buy-container">
                            <div class="cost-panel">
                                <p class="cost">${value.price} EUR</p>
                                <p class="previous-cost" id="discount-prod-3">${value.oldPrice} EUR</p>
                            </div>
                            <button class="buynow-button">Buy now</button>
                        </div>
                    </a>
                `
            }
        })
    })
    document.querySelector('.bestselling-product-card').innerHTML = htmlContents
}

if (this.location.href.includes('category.html')) loadProductListNormalCategory()
if (this.location.href.includes('category_grid.html')) loadProductListGridCategory()
if (this.location.href.includes('index.html')) loadBestSellingIndex()

