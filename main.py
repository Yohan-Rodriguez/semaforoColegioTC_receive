let distancia = 0
basic.forever(function () {
    distancia = sonar.ping(
    DigitalPin.P3,
    DigitalPin.P4,
    PingUnit.Centimeters
    )
    basic.showNumber(distancia)
    if (distancia < 86) {
        basic.showIcon(IconNames.Yes)
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
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
        basic.clearScreen()
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(2000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.showIcon(IconNames.No)
        basic.pause(3000)
    } else {
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
        if (distancia < 15) {
            continue;
        } else {
            basic.pause(4000)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P0, 0)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P2, 1)
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
            basic.showIcon(IconNames.No)
            pins.digitalWritePin(DigitalPin.P2, 0)
            pins.digitalWritePin(DigitalPin.P1, 1)
            basic.pause(2000)
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P0, 1)
        }
    }
})
