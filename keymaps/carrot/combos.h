#include "keycodes.h"
#include "keymap_us.h"
#include QMK_KEYBOARD_H

/* Combos: press two keys together to trigger another key */
/* Base layer combos (QWERTY) */
const uint16_t PROGMEM combo_lshift[] = {KC_A, KC_S, COMBO_END};
const uint16_t PROGMEM combo_rshift[] = {KC_K, KC_L, COMBO_END};

/* New layer combos (Caster layout) */
const uint16_t PROGMEM combo_new_lshift[] = {KC_C, KC_S, COMBO_END};
const uint16_t PROGMEM combo_new_rshift[] = {KC_I, KC_L, COMBO_END};
const uint16_t PROGMEM combo_new_esc[] = {KC_B, KC_W, COMBO_END};

combo_t key_combos[] = {
    COMBO(combo_lshift, KC_LSFT), /* A + S = Left Shift (Base) */
    COMBO(combo_rshift, KC_RSFT), /* K + L = Right Shift (Base) */

    COMBO(combo_new_lshift, KC_LSFT), /* C + S = Left Shift (New) */
    COMBO(combo_new_rshift, KC_RSFT), /* I + L = Right Shift (New) */
    COMBO(combo_new_esc, KC_ESC)      /* B + W = Esc (New) */
};
