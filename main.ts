input.onButtonPressed(Button.A, function () {
    while (true) {
        led.plotBarGraph(
        input.lightLevel(),
        255
        )
        if (input.buttonIsPressed(Button.B)) {
            break;
        }
    }
})
input.onButtonPressed(Button.B, function () {
    while (true) {
        led.plotBarGraph(
        input.temperature(),
        100
        )
        if (input.buttonIsPressed(Button.A)) {
            break;
        }
    }
})
basic.forever(function () {
	
})
