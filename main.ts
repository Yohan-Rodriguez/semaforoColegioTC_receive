enum RadioMessage {
    message1 = 49434
}
let distancia = 0
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        distancia = sonar.ping(
        DigitalPin.P3,
        DigitalPin.P4,
        PingUnit.Centimeters
        )
        basic.showNumber(distancia)
        while (distancia <= 15) {
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
            basic.pause(2500)
        }
        basic.showNumber(distancia)
        while (distancia > 15) {
            basic.showIcon(IconNames.No)
            pins.digitalWritePin(DigitalPin.P0, 1)
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
    } else if (receivedNumber == 0) {
        basic.showLeds(`
            # . . . #
            # # . # #
            . . # . .
            # . . . #
            . # # # .
            `)
        basic.pause(5000)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
})
