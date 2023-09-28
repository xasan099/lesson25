let body = document.querySelector('body')
let nav = document.createElement('nav')
let home = document.createElement('p')
let contacts = document.createElement('p')
let about = document.createElement('p')
let colorBtn = document.createElement('button')

nav.append(home, contacts, about)
body.append(nav, colorBtn)

home.innerHTML = "Home"
contacts.innerHTML = "Contacts"
about.innerHTML = "About"
colorBtn.innerHTML = "Dark"

nav.style.background = "darkviolet"
nav.style.width = "60%"
nav.style.margin = "0 auto"
nav.style.borderRadius = "30px"
nav.style.color = "white"
nav.style.display = "flex"
nav.style.justifyContent = "center"
nav.style.gap = "70px"
nav.style.fontFamily = "sans-serif"

colorBtn.style.padding = '9px 20px'
colorBtn.style.borderRadius = '10px'
colorBtn.style.border = '1px solid darkviolet'
colorBtn.style.background = 'transparent'
colorBtn.style.position = 'fixed'
colorBtn.style.top = '50%'
colorBtn.style.width = '300px'
colorBtn.style.height = "150px"
colorBtn.style.left = '700px'


let btnClicked = false

colorBtn.addEventListener('click', () => {
    if (btnClicked === false) {
        body.style.background = "darkviolet"
        nav.style.background = "white"
        nav.style.color = "darkviolet"
        colorBtn.style.color = "white"
        colorBtn.style.borderColor = "white"
        btnClicked = true
        colorBtn.textContent = "ligt"
    } else {
        body.style.background = "white"
        nav.style.background = "darkviolet"
        nav.style.color = "white"
        colorBtn.style.color = "darkviolet"
        colorBtn.style.borderColor = "darkviolet"
        btnClicked = false
        colorBtn.textContent = "dark"
    }
})


















