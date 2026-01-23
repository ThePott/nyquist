# AGENTS.md - Keebio Nyquist Keyboard

QMK firmware for the Nyquist split ortholinear keyboard by Keebio.
This repository uses a **4x12 Levinson-style layout** (no top number row).

## Build Commands

```bash
# Build firmware for Nyquist Rev 5 (RP2040)
qmk compile -kb keebio/nyquist/rev5 -km default_4x12
make keebio/nyquist/rev5:default_4x12

# Build for other revisions
make keebio/nyquist/rev3:default_4x12   # ATmega32u4
make keebio/nyquist/rev4:default_4x12   # RP2040

# Build with parallel jobs (faster)
qmk compile -j 0 -kb keebio/nyquist/rev5 -km default_4x12

# Flash firmware
qmk flash -kb keebio/nyquist/rev5 -km default_4x12
make keebio/nyquist/rev5:default_4x12:flash

# Clean build artifacts
qmk clean
make keebio/nyquist/rev5:default_4x12:clean
```

## Test Commands

```bash
# Run all unit tests
qmk test-c

# Run specific test (supports wildcards)
qmk test-c --test <testname>
qmk test-c --test basic
qmk test-c --test tap_hold*

# List available tests
qmk test-c --list

# Run tests with make
make test:all
make test:<testname>
```

## Lint and Format Commands

```bash
# Lint keyboard
qmk lint -kb keebio/nyquist/rev5
qmk lint -kb keebio/nyquist/rev5 --strict   # Treat warnings as errors

# Format C code
qmk format-c <file.c>
qmk format-c -a                              # Format all core code

# Format JSON files
qmk format-json info.json
qmk format-json -i keyboard.json             # In-place formatting
```

## Code Style Guidelines

### Indentation and Formatting
- **4 spaces** for indentation (no tabs) in C code
- **Tabs** for Makefiles and *.mk files
- **2 spaces** for YAML files
- Line endings: LF (Unix-style)
- Trim trailing whitespace
- Insert final newline

### Brace Style (Modified One True Brace Style)
```c
if (condition) {
    return false;
}

// Always include braces, even for single statements
if (condition) {
    do_something();
} else {
    do_other();
}
```

### Includes
```c
// Use QMK_KEYBOARD_H - preferred over specific board headers
#include QMK_KEYBOARD_H

// Use #pragma once instead of include guards
#pragma once
```

### Naming Conventions
- **Functions**: `snake_case` (e.g., `process_record_user`)
- **Layer enums**: Prefixed with underscore (e.g., `_QWERTY`, `_LOWER`)
- **Custom keycodes**: Start from `SAFE_RANGE`
- **Macros/constants**: `UPPER_CASE`
- **Files/directories**: lowercase only, no dashes

```c
enum layer_names {
    _QWERTY,
    _LOWER,
    _RAISE,
    _ADJUST
};

enum custom_keycodes {
    LOWER = SAFE_RANGE,
    RAISE
};
```

### Layout Macros
- Use `LAYOUT_ortho_4x12` for 4x12 layouts (Levinson-style)
- Use `LAYOUT_ortho_5x12` for 5x12 layouts (full Nyquist)
- Protect LAYOUT macros from clang-format:

```c
// clang-format off
[_QWERTY] = LAYOUT_ortho_4x12(
    KC_TAB,  KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    ...
),
// clang-format on
```

### Comments
- Use C-style comments: `/* comment */`
- Explain **why**, not what
- Include ASCII art for keymap visualization

### Error Handling Pattern
```c
bool process_record_user(uint16_t keycode, keyrecord_t *record) {
    switch (keycode) {
        case LOWER:
            if (record->event.pressed) {
                layer_on(_LOWER);
            } else {
                layer_off(_LOWER);
            }
            return false;  // Skip further processing
    }
    return true;  // Continue processing
}
```

### License Header
```c
// Copyright 2024 Your Name (@github)
// SPDX-License-Identifier: GPL-2.0-or-later
```

## File Structure

```
keyboards/keebio/nyquist/
├── info.json              # Shared keyboard metadata
├── readme.md              # Keyboard documentation
├── keymaps/
│   ├── default/           # 5x12 default keymap
│   │   ├── keymap.c
│   │   └── rules.mk
│   ├── default_4x12/      # 4x12 Levinson-style keymap
│   │   ├── keymap.c
│   │   └── rules.mk
│   └── <custom>/          # Custom keymaps
├── rev1/                  # Revision-specific configs
├── rev2/
├── rev3/                  # ATmega32u4
├── rev4/                  # RP2040
└── rev5/                  # RP2040 (latest)
    └── keyboard.json      # Hardware configuration
```

## Key QMK Abstractions

```c
// Timing - use QMK abstractions
wait_ms(100);              // NOT _delay_ms()
timer_read();              // For timing operations
timer_read32();            // For 32-bit timer

// Layer functions
layer_on(_LAYER);
layer_off(_LAYER);
update_tri_layer(_LOWER, _RAISE, _ADJUST);

// Transparent and no-op keys
_______                    // KC_TRNS - transparent
XXXXXXX                    // KC_NO - no operation
```

## Useful Keycodes

```c
// Modifiers
KC_LCTL, KC_LSFT, KC_LALT, KC_LGUI  // Left modifiers
KC_RCTL, KC_RSFT, KC_RALT, KC_RGUI  // Right modifiers
OSM(MOD_LSFT)                       // One-shot modifier

// Layer switching
MO(_LAYER)                 // Momentary layer
TG(_LAYER)                 // Toggle layer
LT(_LAYER, KC_KEY)         // Layer-tap

// Modifier-key combinations
LCTL(KC_C)                 // Ctrl+C
LSFT(KC_1)                 // Shift+1 (!)
S(KC_SLSH)                 // Shift+/ (?)

// System
QK_BOOT                    // Enter bootloader
```

## Hardware Notes

- **Rev 5**: RP2040 processor, USB-C, per-key RGB (72 LEDs)
- **Rev 3/4**: ATmega32u4 / RP2040
- **Split**: Full-duplex serial communication
- **Encoders**: Supported on rev4/rev5
- **Bootloader**: Double-tap reset (RP2040) or reset button
