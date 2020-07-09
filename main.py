basic.show_string("Bonjour")
basic.pause(500)
basic.show_string("10853")
basic.pause(500)
basic.show_icon(IconNames.SWORD)
basic.pause(500)
basic.show_icon(IconNames.HAPPY)
basic.pause(500)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)

def on_forever():
    pass
basic.forever(on_forever)
