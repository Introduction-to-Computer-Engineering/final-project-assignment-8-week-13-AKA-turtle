//I2C Write
basic.forever(function () {
    pins.i2cWriteNumber(0x1E,2055, NumberFormat.Int8LE)
}) 
