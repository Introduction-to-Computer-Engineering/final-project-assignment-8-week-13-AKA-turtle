//I2C Write
basic.forever(function () {
    pins.i2cWriteNumber(0x1e,19, NumberFormat.Int32BE, true)
    pins.i2cWriteNumber(0x1e, 61, NumberFormat.Int32BE, false)
}) 
