//I2C Read
basic.forever(function () {
    pins.i2cReadNumber(0x1D, NumberFormat.UInt8LE)// mirobit 1.3 accelerometer
})  
