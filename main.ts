for (let index = 0; index < 2; index++) {
    basic.showString("Bonjour")
    basic.pause(500)
    basic.showString("10853")
    basic.pause(500)
    basic.showIcon(IconNames.Sword)
    basic.pause(500)
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
	
})
