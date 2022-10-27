enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        getValue = 1
    } else if (receivedNumber == 2) {
        getValue = 2
    } else if (receivedNumber == 3) {
        getValue = 3
    } else if (receivedNumber == 4) {
        getValue = 4
    } else if (receivedNumber == 5) {
        getValue = 5
    }
    basic.pause(25000)
    getValue = 0
})
let getValue = 0
radio.setGroup(100)
basic.forever(function () {
    basic.showIcon(IconNames.No)
    pins.digitalWritePin(DigitalPin.P0, 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.showNumber(8)
    basic.pause(500)
    basic.showNumber(7)
    basic.pause(500)
    basic.showNumber(6)
    basic.pause(500)
    basic.showNumber(5)
    basic.pause(500)
    basic.showNumber(4)
    basic.pause(500)
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.showNumber(0)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.showIcon(IconNames.Square)
    basic.pause(2000)
    if (getValue == 1) {
        basic.showString("Yohan")
    } else if (getValue == 2) {
        basic.showString("Andrea")
    } else if (getValue == 3) {
        basic.showString("Sebastian")
    } else if (getValue == 4) {
        basic.showString("Eymi")
    } else if (getValue == 5) {
        basic.showString("Mao")
    }
    if (getValue == 1 || getValue == 2 || getValue == 3 || getValue == 4 || getValue == 5) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Yes)
        basic.showNumber(10)
        basic.pause(500)
        basic.showNumber(9)
        basic.pause(500)
        basic.showNumber(8)
        basic.pause(500)
        basic.showNumber(7)
        basic.pause(500)
        basic.showNumber(6)
        basic.pause(500)
        basic.showNumber(5)
        basic.pause(500)
        basic.showNumber(4)
        basic.pause(500)
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        basic.showNumber(0)
        basic.pause(500)
        basic.showIcon(IconNames.Square)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.showIcon(IconNames.Yes)
        basic.showNumber(3)
        basic.pause(500)
        basic.showNumber(2)
        basic.pause(500)
        basic.showNumber(1)
        basic.pause(500)
        basic.showNumber(0)
        basic.pause(500)
        basic.showIcon(IconNames.Square)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
    }
})
