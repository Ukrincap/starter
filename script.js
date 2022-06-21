const insta = document.querySelector('.insta')
const yt = document.querySelector('.youtube')

function shadowInstaOn() {
    insta.style.cssText = "filter: drop-shadow(3px 0px 9px #e91e63); transition: all ease 1s;"

    setTimeout(shadowInstaOff, 1500)
}

function shadowInstaOff() {
    insta.style.cssText = "filter: none; transition: all ease 1s;"
}

function shadowYTOn() {
    yt.style.cssText = "filter: drop-shadow(3px 0px 9px #e91e63); transition: all ease 1s;"

    setTimeout(shadowYTOff, 2000)
}

function shadowYTOff() {
    yt.style.cssText = "filter: none; transition: all ease 1s;"
}

let toggleShadowInsta = setInterval(shadowInstaOn, 3000)
let toggleYTnsta = setInterval(shadowYTOn, 4000)