//I2C Read
basic.forever(function () {
pins.i2cReadNumber(0x1E,  NumberFormat.Int8LE) //call to signed byte integer
})  
