input.onButtonPressed(Button.A, function () {
    while (true) {
        pins.servoWritePin(AnalogPin.P1, 180)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P1, 0)
        basic.pause(1000)
    }
})
let pulseWidth: number = 0
basic.forever(function () {
    for (let index = 0; index < 19; index++) {
        pulseWidth = Math.map(index, 0, 19, 50, 1020)
        pins.analogWritePin(AnalogPin.P0, pulseWidth)
        basic.pause(500)
    }
    for (let index = 19; index > 0; index--) {
        pulseWidth = Math.map(index, 0, 19, 50, 1020)
        pins.analogWritePin(AnalogPin.P0, pulseWidth)
        basic.pause(500)
    }

})
