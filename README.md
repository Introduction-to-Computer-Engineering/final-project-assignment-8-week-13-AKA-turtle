# Assignment 8 - Signal Generation, Oscilliscope, PWM & I2C 
  - Video demo showing workstation built in function generator
    - Video: https://imgur.com/gallery/fXNBtUk
    
  - Video demo showing Rigol signal generator with oscilliscope
    - Video: https://imgur.com/gallery/Q0vApBA
   
  - Video demo showing simple micro:bit code PWM of LED with oscilliscope
    - Video: https://imgur.com/gallery/6ou3KQq
    - file: [pwm.js](pwm.js)
  
  - Video demo showing PWM stepping up and down between 5% - 95% in 5% increments
    - Video: https://imgur.com/gallery/3xs44SJ
    - file: [pwCycle.js](pwCycle.js)
  
  - ***BONUS*** Video demo of PWM duty cycle driving movement of servo.
    - Video: http://imgur.com/gallery/RdFtBsm
    - file: [servoOscilloscope.js](servoOscilloscope.js)

# I2C Warm Up 
**1. What are the disadvantages of the other two serial communication channels, UART and SPI, and how does I2C improve on them?**
 
 - SPI is only intended for short distances, the biggest problem is the pin connection and the number of pins required. Making connections from multiple devices only slaved to one master.  UART is difficult to implent into your software if intended to do so.  This task eats up alot of data and slows the system down.  Where I2C improves in these areas begins with using only 2 wires and being able to connect to 1008 slave devices, the speed isnt as fast as SPI but gets the job done more efficently.

**2. I2C is a two-wire serial communication channel. What are the two wires, SDA and SCL?**
 
 - SCL is a Clock Sigal, & SDA is a Data Signal.

**3. What distinguishes the master and the slaves?**
 
 - The master contains a internal master clock which the slaves read externally and sync to.

**4. How are the two types of protocol frames different?**

- the first being the Addess Frame, is where the master lets the slave know where the message needs to be sent triggering one or multiple frames that are 8 bit. The second one being Data Frames, the data first is sent to the SDA which is chosen by the master or slave dependings of the R/W bit was written or read.

**5. What is the most appropriate trigger for capturing an I2C frame on the oscilloscope?**
 
 - We used a combination of triggering off the SCL and SDA.
    The SDA channel stays low until data is transmitted so the initial rise of the SDA is a good choice in some instances
# First Steps with I2C

**I2C Read & Write Files:**
- Read File: [i2cRead.js](i2cRead.js)
- Write File: [i2cWrite.js](i2cWrite.js)

## section 1: Capturing I2C frame on oscilloscope

*Initial Capture of Oscilliscope shows both the clock signal(in blue) and the data signal(in yellow)*
- Location of Capture of I2C frame: [Capture.jpg](Capture.jpg) 
*Image of micro:bit setup with probe connections*
- Location of Set Up: [SetUp.jpg](SetUp.jpg)


**1. What frame did you capture?**
- address frame
**2. What does the I2C write function do when there is nothing connected?**
- gives a blank scl sample reading when it goes from low to high.
- capture: [writeSignal.jpg](writeSignal.jpg)
**3. Is there a difference in what you capture if you write a number to one of the internal device addresses?**
- much larger amount of data after handshake visable in oscilliscop
- capture: [writeToInternal.jpg](writeToInternal.jpg)
- file: [writeInternalNumber.js](writeInternalNumber.js)
## Section 2: Reading Addresses
***There are three addresses for both the accelerometer and magnetometer because there a 3 different variants of the micro:bit in circulation. Meaning they've had at least 3 production runs in which they tweeked the internal addresses of their sensors***

**Call to varinat 1.3 accelerometer: we dont have first varinat micro-bit, showed no data.** 
- capture: [1.3.jpg](1.3.jpg)
- file: [variant1.3.js](variant1.3.js)

**Call to varinat 1 accelerometer: seems to be communicating with accelerometer.**
- capture: [variant1.jpg](variant1.jpg)
- file: [variant1.js](variant1.js)

**Call to variant 2 accelerometer: call to variant 2 address 0x1E, seems to be communicating with either variant 2s accelerormeter or variant 1 magnetometer.**
- capture: [variant2.jpg](variant2.jpg)
- file: [variant2.js](variant2.js)

**Signed single byte integers:** 
- capture: [signed.jpg](signed.jpg)
- file: [signed.js](signed.js)

**Unsigned single byte integers:** 
- capture: [unsigned.jpg](unsigned.jpg)
- file: [unsigned.js](unsigned.js)

Scroll the values on the LED matrix?
 - Reading:

Can you get different Values from moving thr micro-bit around?

 
 
 
