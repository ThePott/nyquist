// Copyright 2024 haheungju
// SPDX-License-Identifier: GPL-2.0-or-later

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
    COMBO(combo_lshift, KC_LSFT),      /* A + S = Left Shift (Base) */
    COMBO(combo_rshift, KC_RSFT),      /* K + L = Right Shift (Base) */
    COMBO(combo_new_lshift, KC_LSFT),  /* C + S = Left Shift (New) */
    COMBO(combo_new_rshift, KC_RSFT),  /* I + L = Right Shift (New) */
    COMBO(combo_new_esc, KC_ESC)       /* B + W = Esc (New) */
};

enum layer_names {
    _BASE,
    _LOWER,
    _RAISE,
    _ADJUST,
    _NEW,
    _NEWTOP
};

/* Macros from VIA config */
enum custom_keycodes {
    MC_COLN = SAFE_RANGE,  /* : */
    MC_DQUO,               /* " */
    MC_TILD,               /* ~ */
    MC_GT,                 /* > */
    MC_TILD2,              /* ~ */
    MC_LCBR,               /* { */
    MC_RCBR                /* } */
};

// clang-format off
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

/* Base Layer (QWERTY)
 * ,-----------------------------------------------------------------------------------.
 * | F13  |   Q  |   W  |   E  |   R  |   T  |   Y  |   U  |   I  |   O  |   P  | Del  |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Tab  |   A  |   S  |   D  |   F  |   G  | Bksp |   H  |   J  |   K  |   L  |Enter |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Shift|   Z  |   X  |   C  |   V  |   B  |   B  |   N  |   M  |   ,  |   .  |Shift |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |Lower | Ctrl | GUI  | Alt  |Space | Esc  |Raise |Shift | Hypr |   `  |   '  |   NEW  |
 * `-----------------------------------------------------------------------------------'
 */
[_BASE] = LAYOUT_ortho_4x12(
    KC_F13,   KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,    KC_Y,    KC_U,    KC_I,    KC_O,    KC_P,    KC_DEL,
    KC_TAB,   KC_A,    KC_S,    KC_D,    KC_F,    KC_G,    KC_BSPC, KC_H,    KC_J,    KC_K,    KC_L,    KC_ENT,
    KC_LSFT,  KC_Z,    KC_X,    KC_C,    KC_V,    KC_B,    KC_B,    KC_N,    KC_M,    KC_COMM, KC_DOT,  KC_RSFT,
    MO(_LOWER), KC_LCTL, KC_LGUI, KC_LALT, KC_SPC,  KC_ESC,  MO(_RAISE), KC_RSFT, HYPR(KC_NO), KC_GRV, KC_QUOT, TO(_NEW)
),

/* Lower Layer (Navigation + RGB)
 * ,-----------------------------------------------------------------------------------.
 * |RGBTog|RGBMod|      |      |      |      |      |      |      |      |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Hue+ | Sat+ | Val+ |      |      |      |      | Left | Down |  Up  |Right |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Hue- | Sat- | Val- |      |      |      |      |      |      |      |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      |      |      |      |      |      |      |      | Next | Vol- | Vol+ |
 * `-----------------------------------------------------------------------------------'
 */
[_LOWER] = LAYOUT_ortho_4x12(
    RM_TOGG, RM_NEXT, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______,
    RM_HUEU, RM_SATU, RM_VALU, _______, _______, _______, _______, KC_LEFT, KC_DOWN, KC_UP,   KC_RGHT, _______,
    RM_HUED, RM_SATD, RM_VALD, _______, _______, _______, _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______, _______, _______, _______, KC_MNXT, KC_VOLD, KC_VOLU
),

/* Raise Layer (Numbers & Symbols)
 * ,-----------------------------------------------------------------------------------.
 * |   `  |   1  |   2  |   3  |   4  |   5  |   6  |   7  |   8  |   9  |   0  |   \  |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |   ~  |   /  |   :  |   '  |   "  |   -  |   =  |   [  |   ]  |   (  |   )  |   |  |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |   ?  |   ;  |   <  |   >  |   _  |   +  |   {  |   }  |      |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      |      |      |      |      |      |      |      | Next | Vol- | Vol+ |
 * `-----------------------------------------------------------------------------------'
 */
[_RAISE] = LAYOUT_ortho_4x12(
    KC_GRV,  KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_6,    KC_7,    KC_8,    KC_9,    KC_0,    KC_BSLS,
    KC_TILD, KC_SLSH, KC_COLN, KC_QUOT, KC_DQUO, KC_MINS, KC_EQL,  KC_LBRC, KC_RBRC, KC_LPRN, KC_RPRN, KC_PIPE,
    _______, KC_QUES, KC_SCLN, KC_LABK, KC_RABK, KC_UNDS, KC_PLUS, KC_LCBR, KC_RCBR, _______, _______, _______,
    _______, _______, _______, _______, _______, _______, _______, _______, _______, KC_MNXT, KC_VOLD, KC_VOLU
),

/* Adjust Layer (Lower + Raise)
 * ,-----------------------------------------------------------------------------------.
 * |      |      |      |      |      |      |      |      |      |      |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      |      |      |      |      |      |      |      |      |  Up  |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | GUI  |      |      |      |      |      |      |      |      | Left | Down |Right |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      | Alt  |      | Ctrl |Space |      |      |      |      |      |      |QKBoot|
 * `-----------------------------------------------------------------------------------'
 */
[_ADJUST] = LAYOUT_ortho_4x12(
    XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
    XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, KC_UP,   XXXXXXX,
    KC_LGUI, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, KC_LEFT, KC_DOWN, KC_RGHT,
    XXXXXXX, KC_LALT, XXXXXXX, KC_LCTL, KC_SPC,  XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, QK_BOOT
),

/* New Layer (Caster layout)
 * ,-----------------------------------------------------------------------------------.
 * |      |   V  |   F  |   G  |   M  |   ;  |   /  |   .  |   Y  |   ,  |   K  |   -  |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Tab  |   C  |   S  |   T  |   R  |   X  |   Q  |   A  |   N  |   I  |   L  |Enter |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |   \  |   B  |   W  |   D  |   H  |   Z  |   =  |   O  |   P  |   U  |   J  |   '  |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * | Caps |      |      |  GUI |NEWTOP|   E  |Space | Bksp | Hypr |      |      | BASE |
 * `-----------------------------------------------------------------------------------'
 */
[_NEW] = LAYOUT_ortho_4x12(
    XXXXXXX, KC_V,    KC_F,    KC_G,    KC_M,    KC_SCLN, KC_SLSH, KC_DOT,  KC_Y,    KC_COMM, KC_K,    KC_MINS,
    KC_TAB,  KC_C,    KC_S,    KC_T,    KC_R,    KC_X,    KC_Q,    KC_A,    KC_N,    KC_I,    KC_L,    KC_ENT,
    KC_BSLS, KC_B,    KC_W,    KC_D,    KC_H,    KC_Z,    KC_EQL,  KC_O,    KC_P,    KC_U,    KC_J,    KC_QUOT,
    KC_CAPS, XXXXXXX, XXXXXXX, KC_LGUI, MO(_NEWTOP), KC_E, KC_SPC, KC_BSPC, HYPR(KC_NO), XXXXXXX, XXXXXXX, TO(_BASE)
),

/* NewTop Layer (Numbers & Brackets)
 * ,-----------------------------------------------------------------------------------.
 * |      |   0  |   1  |   2  |   3  |   4  |   5  |   6  |   7  |   8  |   9  |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      |      |   `  |   {  |   (  |   )  |   }  |      |      |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      | Left |Right |   <  |   [  |   ]  |   >  | Down |  Up  |      |      |
 * |------+------+------+------+------+------+------+------+------+------+------+------|
 * |      |      |      |      |      |      |      |      |      |      |      |      |
 * `-----------------------------------------------------------------------------------'
 */
[_NEWTOP] = LAYOUT_ortho_4x12(
    XXXXXXX, KC_0,    KC_1,    KC_2,    KC_3,    KC_4,    KC_5,    KC_6,    KC_7,    KC_8,    KC_9,    XXXXXXX,
    XXXXXXX, XXXXXXX, XXXXXXX, KC_GRV,  KC_LCBR, KC_LPRN, KC_RPRN, KC_RCBR, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX,
    XXXXXXX, XXXXXXX, KC_LEFT, KC_RGHT, KC_LABK, KC_LBRC, KC_RBRC, KC_RABK, KC_DOWN, KC_UP,   XXXXXXX, XXXXXXX,
    XXXXXXX, XXXXXXX, XXXXXXX, _______, _______, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX, XXXXXXX
)


};


// clang-format on

#ifdef ENCODER_MAP_ENABLE
const uint16_t PROGMEM encoder_map[][NUM_ENCODERS][NUM_DIRECTIONS] = {
    [_BASE]   = { ENCODER_CCW_CW(KC_VOLD, KC_VOLU), ENCODER_CCW_CW(RM_NEXT, RM_PREV) },
    [_LOWER]  = { ENCODER_CCW_CW(KC_PGUP, KC_PGDN), ENCODER_CCW_CW(KC_MNXT, KC_MPRV) },
    [_RAISE]  = { ENCODER_CCW_CW(_______, _______), ENCODER_CCW_CW(_______, _______) },
    [_ADJUST] = { ENCODER_CCW_CW(_______, _______), ENCODER_CCW_CW(_______, _______) },
    [_NEW]    = { ENCODER_CCW_CW(KC_VOLD, KC_VOLU), ENCODER_CCW_CW(RM_NEXT, RM_PREV) },
    [_NEWTOP] = { ENCODER_CCW_CW(_______, _______), ENCODER_CCW_CW(_______, _______) }
};
#endif
