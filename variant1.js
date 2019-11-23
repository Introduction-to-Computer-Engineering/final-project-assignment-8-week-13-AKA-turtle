//I2C Read
basic.forever(function () {
    pins.i2cReadNumber(0x19, NumberFormat.UInt8LE)// variant 1 accelerometer
})  
