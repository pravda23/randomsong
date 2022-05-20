fetch("https://johnbartmann.com/track/php.php").then(content => {
    return content.json()
}).then(data => {

    // --------APP: MOUSEOVER AUDIO--------
    // --------DISPLAYS SELECTED NUMBER OF TRACKS WHICH ONLY PLAY ON MOUSEOVER--------

    const mouseoverAudio = document.querySelector('.mouseover-audio')
        // constNumOfTracks = document.querySelector('.num-of-tracks')

    let numOfTracks = 3
    for (let i = 0; i < numOfTracks; i++) {

        // retrieves specified number of tracks and generates an HTML player for each one
        const mouseoverAudioPlayer = document.createElement('div')
        mouseoverAudioPlayer.classList.add('mouseoverAudioPlayer')
        mouseoverAudioPlayer.innerHTML = `<audio  controls> <source src = \"https://johnbartmann.com/track/${data[i]}\" type = \"audio/ogg\" >`
        mouseoverAudio.appendChild(mouseoverAudioPlayer)

        // mouseover starts playback
        mouseoverAudioPlayer.addEventListener('mouseout', function(e) {
            e.target.pause()
        })

        // mouseout ends playback
        mouseoverAudioPlayer.addEventListener('mouseover', function(e) {
            e.target.play()
        })
    }

    // -------APP: RANDOM SONG SELECTOR--------- 
    // -------SELECTS RANDOM TRACK FROM DB, DISPLAYS TITLE AND AUTOPLAYS--------- 

    const buttonBox = document.querySelector('.button-box')
    const randomSongSelector = document.querySelector('.random-song-selector')
    const randomPlayer = document.createElement('div')
    const randomPlayerSub = document.createElement('div')
    const title = document.querySelector(".track-title")
    const audioPlayer = document.querySelector('.audioplayer')

    // retrieve track titles and convert to initial caps
    let trackTitle = []
    for (let i = 0; i < data.length; i++) {
        let words = data[i].split('-')
        let noLast = words.slice(0, -1)
        let wordsCaps = []
        for (let j = 0; j < noLast.length; j++) {
            wordsCaps.push(noLast[j].charAt(0).toUpperCase() + noLast[j].slice(1))
        }
        let wordsString = []
        for (let k = 0; k < wordsCaps.length; k++) {
            wordsString += (`${wordsCaps[k]} `)
        }
        for (let l = 0; l < wordsCaps.length; l++) {
            wordsString = wordsString.trimEnd()
        }
        trackTitle.push(wordsString)
    }

    // HTML audio player with random file generated on click

    buttonBox.addEventListener('click', function() {
        let count = 0
        let max = data.length
        let min = 0
        let random = (Math.floor(Math.random() * (max - min) + min))
            // console.log(trackTitle[random])

        if (count === 0) {

            randomPlayer.id = 'container'
            randomPlayer.innerHTML = `<audio controls autoplay="true"> <source src = \"https://johnbartmann.com/track/${data[random]}\" type = \"audio/ogg\" autoplay>`

            randomSongSelector.appendChild(randomPlayer)
            count++
        } else {
            randomPlayer.id = 'container'
            randomPlayerSub.innerHTML = `<audio controls autoplay="true"> <source src = \"https://johnbartmann.com/track/${data[random]}\" type = \"audio/ogg\" >`

            document.randomPlayer.replaceWith(randomPlayerSub)
            console.log(randomPlayerSub.innerHTML)
            count++
        }

        title.innerHTML = `${trackTitle[random]}`

        // -------APP: CUSTOM AUDIO PLAYER--------- 
        // -------DISPLAYS ANY AUDIO ON PAGE IN A NICE-LOOKING CENTRAL PLAYER (INCOMPLETE)-------
        const customPlayer = document.querySelector('.custom-audio-player')
        const playBtn = document.querySelector(".play-btn")
        const pauseBtn = document.querySelector(".pause-btn")
        const forwardBtn = document.querySelector(".forward-btn")


    }, false)

})