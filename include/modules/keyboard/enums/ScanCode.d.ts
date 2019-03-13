/**
 * Keyboard scancodes.
 *
 *
 * Scancodes are keyboard layout-independent, so the scancode "w" will be
 * generated if the key in the same place as the "w" key on an American QWERTY
 * keyboard is pressed, no matter what the key is labelled or what the user's
 * operating system settings are.
 *
 *
 * Using scancodes, rather than keycodes, is useful because keyboards with layouts
 * differing from the US/UK layout(s) might have keys that generate 'unknown'
 * keycodes, but the scancodes will still be detected. This however would
 * necessitate having a list for each keyboard layout one would choose to support.
 *
 *
 * One could use textinput or textedited instead, but those only give back the end
 * result of keys used, i.e. you can't get modifiers on their own from it, only
 * the final symbols that were generated.
 * @link [Scancode](https://love2d.org/wiki/Scancode)
 */
declare type Scancode = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | 'return' | 'escape' | 'backspace' | 'tab' | 'space' | '-' | '=' | '[' | ']' | '\\' | 'nonus#' | ';' | "'" | '`' | ',' | '.' | '/' | 'capslock' | 'f1' | 'f2' | 'f3' | 'f4' | 'f5' | 'f6' | 'f7' | 'f8' | 'f9' | 'f10' | 'f11' | 'f12' | 'f13' | 'f14' | 'f15' | 'f16' | 'f17' | 'f18' | 'f19' | 'f20' | 'f21' | 'f22' | 'f23' | 'f24' | 'lctrl' | 'lshift' | 'lalt' | 'lgui' | 'rctrl' | 'rshift' | 'ralt' | 'rgui' | 'printscreen' | 'scrolllock' | 'pause' | 'insert' | 'home' | 'numlock' | 'pageup' | 'delete' | 'end' | 'pagedown' | 'right' | 'left' | 'down' | 'up' | 'nonusbackslash' | 'application' | 'execute' | 'help' | 'menu' | 'select' | 'stop' | 'again' | 'undo' | 'cut' | 'copy' | 'paste' | 'find' | 'kp/' | 'kp*' | 'kp-' | 'kp+' | 'kp=' | 'kpenter' | 'kp1' | 'kp2' | 'kp3' | 'kp4' | 'kp5' | 'kp6' | 'kp7' | 'kp8' | 'kp9' | 'kp0' | 'kp.' | 'international1' | 'international2' | 'international3' | 'international4' | 'international5' | 'international6' | 'international7' | 'international8' | 'international9' | 'lang1' | 'lang2' | 'lang3' | 'lang4' | 'lang5' | 'mute' | 'volumeup' | 'volumedown' | 'audionext' | 'audioprev' | 'audiostop' | 'audioplay' | 'audiomute' | 'mediaselect' | 'www' | 'mail' | 'calculator' | 'computer' | 'acsearch' | 'achome' | 'acback' | 'acforward' | 'acstop' | 'acrefresh' | 'acbookmarks' | 'power' | 'brightnessdown' | 'brightnessup' | 'displayswitch' | 'kbdillumtoggle' | 'kbdillumdown' | 'kbdillumup' | 'eject' | 'sleep' | 'alterase' | 'sysreq' | 'cancel' | 'clear' | 'prior' | 'return2' | 'separator' | 'out' | 'oper' | 'clearagain' | 'crsel' | 'exsel' | 'kp00' | 'kp000' | 'thsousandsseparator' | 'decimalseparator' | 'currencyunit' | 'currencysubunit' | 'app1' | 'app2' | 'unknown';