#include "keycodes.h"
#include QMK_KEYBOARD_H
#include "combos.h"
#include "definitions.h"

// clang-format off
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

//  Base Layer (QWERTY)
[_BASE] = LAYOUT_ortho_4x12(
    KC_F13,     KC_Q,    KC_W,    KC_E,    KC_R,   KC_T,   KC_Y,       KC_U,    KC_I,        KC_O,    KC_P,    KC_DEL,
    KC_TAB,     KC_A,    KC_S,    KC_D,    KC_F,   KC_G,   KC_BSPC,    KC_H,    KC_J,        KC_K,    KC_L,    KC_ENT,
    KC_LSFT,    KC_Z,    KC_X,    KC_C,    KC_V,   KC_B,   KC_B,       KC_N,    KC_M,        KC_COMM, KC_DOT,  KC_RSFT,
    MO(_LOWER), KC_LCTL, KC_LGUI, KC_LALT, KC_SPC, KC_ESC, MO(_RAISE), KC_RSFT, HYPR(KC_NO), KC_GRV,  KC_QUOT, TO(_NEW)
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

// New Layer (HD Promethium)
[_NEW] = LAYOUT_ortho_4x12(
    KC_F13,       KC_F,    KC_P,  KC_D,          KC_L,     KC_X,   KC_SCLN, KC_U,     KC_O,            KC_Y,    KC_B,     KC_Z,
    KC_TAB,       KC_S,    KC_N,  KC_T,          KC_H,     KC_K,   KC_BSPC, KC_A,     KC_E,            KC_I,    KC_C,     KC_Q,
    KC_BACKSLASH, KC_V,    KC_W,  KC_G,          KC_M,     KC_J,   KC_MINS, KC_DOT,   KC_QUOT,         KC_EQL,  KC_SLASH, KC_ENTER,
    KC_CAPS,      KC_DOWN, KC_UP, KC_LEFT_SHIFT, KC_SPACE, KC_ESC, KC_R,    KC_COMMA, MO(_NEWSPECIAL), KC_LEFT, KC_RIGHT, TO(_BASE)
),

// NewTop Layer (Numbers & Brackets)
[_NEWSPECIAL] = LAYOUT_ortho_4x12(
    _______, KC_0,    KC_1,    KC_2,     KC_3,    KC_4,    KC_5,    KC_6,    KC_7,    KC_8,    KC_9,    _______,
    _______, _______, _______, KC_GRAVE, KC_LCBR, KC_LPRN, KC_RPRN, KC_RCBR, _______, _______, _______, _______,
    _______, _______, _______, _______,  KC_LABK, KC_LBRC, KC_RBRC, KC_RABK, _______, _______, _______, _______,
    _______, _______, _______, _______,  _______, _______, _______, _______, _______, _______, _______, _______
),


// NewFunction Layouer (Functions for accessing bios)
[_NEWFUNCTION] = LAYOUT_ortho_4x12(
    _______, KC_F1,   KC_F2,   KC_F3,   KC_F4,   _______, _______, _______, _______, _______, _______, _______,
    _______, KC_F5,   KC_F6,   KC_F7,   KC_F8,   _______, _______, _______, _______, _______, _______, _______,
    _______, KC_F9,   KC_F10,  KC_F11,  KC_F12,  _______, _______, _______, _______, _______, _______, _______,
    _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______, _______
)


};

// NOTE: I have deleted encoder ccw cw part, because I do not use any nobes on keyboard
