function billingInfoValidation() {

    /* Asignación de variables */
    var newAddressCheckout = document.getElementById("newAddressCheckout")

    var address = document.getElementById("address")
    var country = document.getElementById("country")
    var city = document.getElementById("city")
    var postcode = document.getElementById("postcode")

    var newAddress = document.getElementById("newAddress")
    var newCountry = document.getElementById("newCountry")
    var newCity = document.getElementById("newCity")
    var newPostcode = document.getElementById("newPostcode")

    if(document.getElementById("differentAddress").checked == true) {
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

        country.style.fontStyle = "italic"
        country.style.color = "gray"

        city.style.fontStyle = "italic"
        city.style.color = "gray"

        postcode.style.fontStyle = "italic"
        postcode.style.color = "gray"

        

    } else {
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

        country.style.fontStyle = "normal"
        country.style.color = "black"

        city.style.fontStyle = "normal"
        city.style.color = "black"

        postcode.style.fontStyle = "normal"
        postcode.style.color = "black"
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