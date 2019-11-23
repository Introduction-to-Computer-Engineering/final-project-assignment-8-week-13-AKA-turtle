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
