//I2C Read
basic.forever(function () {
    pins.i2cReadNumber(0x1E, NumberFormat.UInt8LE)//call to unsigned byte integer
})  
