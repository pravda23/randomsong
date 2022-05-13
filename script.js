// HTML SELECTORS

const app1 = document.querySelector('.app1')
const button = document.querySelector('.button')
const buttonBox = document.querySelector('.button-box')
const audioPlayer = document.querySelector('.audioplayer')
const randomPlayer = document.createElement('div')
const randomPlayerSub = document.createElement('div')

// get track data

fetch("https://johnbartmann.com/track/php.php").then(content => {
    return content.json()
}).then(data => {

    // --------APP 1 MOUSEOVER AUDIO--------

    // loop through array

    let num = 3
    for (let i = 0; i < num; i++) {

        // generate an HTML player for each item in array

        const app1Player = document.createElement('div')
        app1Player.classList.add('app1Player')
        app1Player.classList.add('grid-item')
        app1Player.innerHTML = `<audio  controls> <source src = \"https://johnbartmann.com/track/${data[i]}\" type = \"audio/ogg\" >`
        app1.appendChild(app1Player)
        console.log(app1Player)

        // mouseover
        app1Player.addEventListener('mouseout', function(e) {
            e.target.pause()
        })

        app1Player.addEventListener('mouseover', function(e) {
            e.target.play()
        })
    }

    // // -------APP 2 RANDOM SONG GENERATOR---------

    // html audio player with random file generated on click


    buttonBox.addEventListener('click', function() {
        let count = 0
        let max = data.length
        let min = 0
        let random = (Math.floor(Math.random() * (max - min) + min))

        if (count === 0) {

            randomPlayer.id = 'container'
            randomPlayer.innerHTML = `<audio controls> <source src = \"https://johnbartmann.com/track/${data[random]}\" type = \"audio/ogg\" >`

            document.body.appendChild(randomPlayer)
            console.log(randomPlayer.innerHTML)
            count++
        } else {
            randomPlayer.id = 'container'
            randomPlayerSub.innerHTML = `<audio controls> <source src = \"https://johnbartmann.com/track/${data[random]}\" type = \"audio/ogg\" >`

            document.randomPlayer.replaceWith(randomPlayerSub)
            console.log(randomPlayerSub.innerHTML)
            count++
            // console.log(data[random])
        }

    }, false)

})