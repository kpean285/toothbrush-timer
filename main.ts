input.onButtonPressed(Button.A, function () {
    seconds = 0
    while (seconds < 120) {
        basic.pause(1000)
        seconds += 1
    }
})
let seconds = 0
images.arrowImage(ArrowNames.West).showImage(0)
basic.forever(function () {
    if (seconds > 0 && seconds < 60) {
        led.plotBarGraph(
        seconds,
        60
        )
    } else if (seconds == 60) {
        basic.showIcon(IconNames.Meh)
    } else if (seconds > 60 && seconds < 120) {
        led.plotBarGraph(
        seconds - 60,
        60
        )
    } else if (seconds == 120) {
        basic.showIcon(IconNames.Heart)
    }
})
