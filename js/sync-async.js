'use strict'

var gIntervalId = 0

function sayHello() {
    console.log('%cHello', 'color: darkseagreen;')
}

function loop() {
    const rounds = 50_000
    const start = Date.now()

    console.log('%cStarting...', 'color: yellow;')

    for(var i = 0; i < rounds; i++){
        // Do something...
    }
    
    const end = Date.now()
    console.log(`%cLooped ${rounds.toLocaleString()} rounds. Took ${end - start}ms`, 'color: yellow;')
}

function timeout() {
    _updateBtn(1)
    _restartBtnAnimation()
    
    setTimeout(() => {
        console.log('%cTimeout complete.', 'color: orangered;')
        _updateBtn(-1)
    }, 5000)
}

function interval(elBtn) {
    var count = 0

    if(gIntervalId) {
        clearInterval(gIntervalId)
        gIntervalId = count = 0
        elBtn.innerText = 'start'
    } else {
        gIntervalId = setInterval(() => console.log(`%cInterval ${++count}`, 'color: orange;'), 1500)
        elBtn.innerText = 'stop'
    }
}

function toggleBounceAnimation(elBtn) {
    const elBall = document.querySelector('.ball')

    if(elBall.style.animationPlayState === 'paused') {
        elBall.style.animationPlayState = 'running'
        elBtn.innerText = 'Pause'
    } else{
        elBall.style.animationPlayState = 'paused'
        elBtn.innerText = 'Resume'
    }
}

function _updateBtn(diff) {
    const elCount = document.querySelector('button span')
    
    var count = +elCount.innerText || 0
    elCount.innerText = count + diff || ''
}

function _restartBtnAnimation() {
    const animation = document.getAnimations()
        .find(anim => anim.animationName === 'timeout')

    if(!animation) return

    animation.cancel()
    animation.play()
}