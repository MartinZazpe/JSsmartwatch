window.addEventListener('load', function () {

    console.log('JS working')


    let startBtn = document.getElementById('start-btn')
    let stopBtn = document.getElementById('stop-btn')
    let resetBtn = document.getElementById('reset-btn')
    let miliseconds = document.getElementById('miliseconds')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')
    var Interval
    let lastTime = document.querySelector('.last-time')



    let milisecondsAdd = "00"
    let secondsAdd = 00
    let minutesAdd = 00


    startBtn.addEventListener('click', () => {


        clearInterval(Interval)
        Interval = setInterval(start, 10)


        function start() {
            milisecondsAdd++
            if (milisecondsAdd <= 9) {
                miliseconds.innerHTML = "0" + milisecondsAdd
            }
            if (milisecondsAdd > 9) {
                miliseconds.innerHTML = milisecondsAdd
            }
            if (milisecondsAdd == 100) {
                secondsAdd += 1
                seconds.innerHTML = "0" + secondsAdd
                milisecondsAdd = "00"
                miliseconds.innerHTML = "00"
            }
            if (secondsAdd >= 10) {
                seconds.innerHTML = secondsAdd
            }
            if (secondsAdd == 60) {
                milisecondsAdd = "00"
                secondsAdd = 00
                seconds.innerHTML = "00"
                minutesAdd += 1
                minutes.innerHTML = "0" + minutesAdd
            }
            if (minutesAdd >= 10) {
                minutes.innerHTML = minutesAdd
            }
        }


        stopBtn.onclick = () => {
            clearInterval(Interval)

            lastTime.innerHTML = "Your last time was " + secondsAdd + ":" + milisecondsAdd
        }


        resetBtn.onclick = () => {
            clearInterval(Interval)
            miliseconds.innerHTML = "00"
            seconds.innerHTML = "00"
        }





    })




})