#pragma once
#include "keycodes.h"
#include "process_combo.h"
#include "quantum_keycodes.h"
#include QMK_KEYBOARD_H

// NOTE: HD Pothenium combos
const uint16_t PROGMEM combo_new_lsuper[] = {KC_S, KC_TAB, COMBO_END};
const uint16_t PROGMEM combo_new_lshift[] = {KC_S, KC_N, COMBO_END};
const uint16_t PROGMEM combo_new_lalt[] = {KC_S, KC_T, COMBO_END};
const uint16_t PROGMEM combo_new_lcontrol[] = {KC_S, KC_H, COMBO_END};
const uint16_t PROGMEM combo_new_lhypr[] = {KC_V, KC_N, COMBO_END};
const uint16_t PROGMEM combo_new_lmeh[] = {KC_V, KC_W, COMBO_END};

const uint16_t PROGMEM combo_new_rsuper[] = {KC_C, KC_ENTER, COMBO_END};
const uint16_t PROGMEM combo_new_rshift[] = {KC_C, KC_I, COMBO_END};
const uint16_t PROGMEM combo_new_ralt[] = {KC_C, KC_E, COMBO_END};
const uint16_t PROGMEM combo_new_rcontrol[] = {KC_C, KC_A, COMBO_END};
const uint16_t PROGMEM combo_new_rhypr[] = {KC_SLASH, KC_I, COMBO_END};
const uint16_t PROGMEM combo_new_rmeh[] = {KC_SLASH, KC_EQUAL, COMBO_END};

combo_t key_combos[] = {
    COMBO(combo_new_lsuper, KC_LEFT_GUI),
    COMBO(combo_new_lshift, KC_LEFT_SHIFT),
    COMBO(combo_new_lcontrol, KC_LEFT_CTRL),
    COMBO(combo_new_lalt, KC_LEFT_ALT),
    COMBO(combo_new_lhypr, KC_HYPR),
    COMBO(combo_new_lmeh, KC_MEH),

    COMBO(combo_new_rsuper, KC_RIGHT_GUI),
    COMBO(combo_new_rshift, KC_RIGHT_SHIFT),
    COMBO(combo_new_rcontrol, KC_RIGHT_CTRL),
    COMBO(combo_new_ralt, KC_RIGHT_ALT),
    COMBO(combo_new_ralt, KC_RIGHT_ALT),
    COMBO(combo_new_rhypr, KC_HYPR),
    COMBO(combo_new_rmeh, KC_MEH),
};
