#pragma once
#include "keycodes.h"
#include "keymap_us.h"
#include "process_combo.h"
#include "quantum_keycodes.h"
#include QMK_KEYBOARD_H

// NOTE: HD Pothenium combo
const uint16_t PROGMEM combo_lhypr[] = {KC_Z, KC_S, COMBO_END};
const uint16_t PROGMEM combo_rhypr[] = {KC_COMM, KC_K, COMBO_END};
// const uint16_t PROGMEM combo_underscore[] = {KC_SPACE, KC_RIGHT_SHIFT, COMBO_END};

combo_t key_combos[] = {
    COMBO(combo_lhypr, KC_HYPR),
    COMBO(combo_rhypr, KC_HYPR),
    // COMBO(combo_underscore, KC_UNDERSCORE),
};
