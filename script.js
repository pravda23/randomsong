// HTML SELECTORS

const mouseoverAudio = document.querySelector('.mouseover-audio')
const button = document.querySelector('.button')
const buttonBox = document.querySelector('.button-box')
const audioPlayer = document.querySelector('.audioplayer')
const customAudioPlayer = document.querySelector('.custom-audio-player')
const randomSongSelector = document.querySelector('.random-song-selector')
const randomPlayer = document.createElement('div')
const randomPlayerSub = document.createElement('div')
const playBtn = document.querySelector(".play-btn")
const pauseBtn = document.querySelector(".pause-btn")
const forwardBtn = document.querySelector(".forward-btn")
const trackTitle = document.querySelector(".track-title")

// get track data

fetch("https://johnbartmann.com/track/php.php").then(content => {
    // console.log(content.json())
    return content.json()
}).then(data => {
    // --------APP: MOUSEOVER AUDIO--------


    // loop through array

    let numOfTracks = 3
    for (let i = 0; i < numOfTracks; i++) {

        // generate an HTML player for each item in array

        const mouseoverAudioPlayer = document.createElement('div')
        mouseoverAudioPlayer.classList.add('mouseoverAudioPlayer')
        mouseoverAudioPlayer.innerHTML = `<audio  controls> <source src = \"https://johnbartmann.com/track/${data[i]}\" type = \"audio/ogg\" >`
        mouseoverAudio.appendChild(mouseoverAudioPlayer)
            // console.log(mouseoverAudioPlayer)

        // mouseover
        mouseoverAudioPlayer.addEventListener('mouseout', function(e) {
            e.target.pause()
        })

        mouseoverAudioPlayer.addEventListener('mouseover', function(e) {
            e.target.play()
        })
    }


    // -------APP: CUSTOM AUDIO PLAYER--------- 

    // retrieve track titles and convert to initial caps

    for (let i = 0; i < data.length; i++) {
        let trackName = data[i]
            // console.log(data[i].split('-').length)
            // console.log(word[0])
            // for (let j = 0; j < data[i].split('-').length; j++) {
        let words = data[i].split('-')
            // console.log(words)
            // words.forEach(e => {
            // console.log(e.charAt(0).toUpperCase())
            // })
            // console.log(e)




        // console.log(words[0] + " " + words[1])
        // let trackTitleCaps = word[j].charAt(0).toUpperCase() + word[j].slice(1)

        // console.log(trackTitleCaps)
        // }
    }
    // -------APP: RANDOM SONG SELECTOR--------- 

    // html audio player with random file generated on click


    buttonBox.addEventListener('click', function() {
        let count = 0
        let max = data.length
        let min = 0
        let random = (Math.floor(Math.random() * (max - min) + min))

        if (count === 0) {

            randomPlayer.id = 'container'
            randomPlayer.innerHTML = `<audio controls> <source src = \"https://johnbartmann.com/track/${data[random]}\" type = \"audio/ogg\" >`

            // console.log(document.body.randomPlayerDiv)
            randomSongSelector.appendChild(randomPlayer)
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