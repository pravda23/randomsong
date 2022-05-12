// HTML SELECTORS

const button = document.querySelector('.button')
const buttonBox = document.querySelector('.button-box')
const audioPlayer = document.querySelector('.audioplayer')
const randomPlayer = document.createElement('div')
const randomPlayerSub = document.createElement('div')
const mouseOverPlayer01 = document.querySelector('.mouseOverPlayer01')
const mouseOverPlayer02 = document.querySelector('.mouseOverPlayer02')
const mouseOverPlayer03 = document.querySelector('.mouseOverPlayer03')

// DATABASE OF AUDIO FILES

const tracks = [{

    id: "1",
    title: "song 1",
    path: "https://johnbartmann.com/track/abandoned-subway-sample.mp3"
}, {
    id: "2",
    title: "song 1",
    path: "https://johnbartmann.com/track/8-bit-kung-fu-sample.mp3"
}, {
    id: "3",
    title: "song 1",
    path: "https://johnbartmann.com/track/weird-science-sample.mp3"
}]

// MOUSEOVER AUDIO

// mouseover01
mouseOverPlayer01.addEventListener('mouseout', function(e) {
    e.target.pause()
})

mouseOverPlayer01.addEventListener('mouseover', function(e) {
    e.target.play()
})

// mouseover02
mouseOverPlayer02.addEventListener('mouseout', function(e) {
    e.target.pause()
})

mouseOverPlayer02.addEventListener('mouseover', function(e) {
    e.target.play()
})

// mouseover03
mouseOverPlayer03.addEventListener('mouseout', function(e) {
    e.target.pause()
})

mouseOverPlayer03.addEventListener('mouseover', function(e) {
    e.target.play()
})

// RANDOM SONG GENERATOR

// audio file path generated as html audio player on click

buttonBox.addEventListener('click', function(e) {
    let count = 0
    let max = tracks.length
    let min = 0
    let random = (Math.floor(Math.random() * (max - min) + min))

    if (count === 0) {

        randomPlayer.id = 'container'
        randomPlayer.innerHTML = `<audio controls> <source src = \"${tracks[random].path}\" type = \"audio/ogg\" >`

        document.body.appendChild(randomPlayer)
        console.log(randomPlayer.innerHTML)
        count++
    } else {
        randomPlayer.id = 'container'
        randomPlayerSub.innerHTML = `<audio controls> <source src = \"${tracks[random].path}\" type = \"audio/ogg\" >`

        document.randomPlayer.replaceWith(randomPlayerSub)
        console.log(randomPlayerSub.innerHTML)
        count++
    }



}, false)