#include "keycodes.h"
#include "keymap_us.h"
#include "modifiers.h"
#include "quantum_keycodes.h"
#include QMK_KEYBOARD_H
#include "combos.h"
#include "definitions.h"

// clang-format off
const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {

//  Base Layer (QWERTY)
[_BASE] = LAYOUT_ortho_4x12(
    KC_F13,       KC_Q,    KC_W,     KC_E,    KC_R,   KC_T,   KC_Y,       KC_U,    KC_I,    KC_O,    KC_P,   KC_DEL,
    KC_TAB,       KC_A,    KC_S,     KC_D,    KC_F,   KC_G,   KC_BSPC,    KC_H,    KC_J,    KC_K,    KC_L,   KC_ENT,
    KC_LSFT,      KC_Z,    KC_X,     KC_C,    KC_V,   KC_B,   KC_B,       KC_N,    KC_M,    KC_COMM, KC_DOT, KC_RSFT,
    KC_CAPS_LOCK, KC_LEFT, KC_RIGHT, KC_LALT, KC_SPC, KC_ESC, MO(_RAISE), KC_RSFT, KC_RCTL, KC_DOWN, KC_UP,  KC_RGUI
),

[_RAISE] = LAYOUT_ortho_4x12(
    KC_GRV,  KC_0,    KC_1,     KC_2,         KC_3,         KC_4,          KC_5,            KC_6,     KC_7,     KC_8,    KC_9,    _______,
    KC_TILD, KC_LBRC, KC_LABK,  KC_LPRN,      KC_LCBR,      KC_UNDERSCORE, _______,         KC_RCBR,  KC_RPRN,  KC_RABK, KC_RBRC, _______,
    _______, KC_EQL,  KC_MINUS, KC_BACKSLASH, KC_SEMICOLON, KC_QUOTE,      KC_DOUBLE_QUOTE, KC_COLON, KC_SLASH, _______, _______, _______,
    _______, _______, _______,  _______,      _______,      _______,       _______,         _______,  _______,  _______, _______, _______
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
    KC_Q,    KC_F,    KC_P,       KC_D,    KC_L,     KC_X,   KC_SEMICOLON,    KC_U,     KC_O,            KC_Y,             KC_B,     KC_Z,
    KC_TAB,  KC_S,    KC_N,       KC_T,    KC_H,     KC_K,   KC_BACKSPACE,    KC_A,     KC_E,            KC_I,             KC_C,     KC_ENTER,
    KC_LSFT, KC_V,    KC_W,       KC_G,    KC_M,     KC_J,   KC_COMMA,        KC_EQUAL, KC_DOUBLE_QUOTE, KC_MINUS,         KC_SLASH, KC_RSFT,
    KC_F13,  KC_LGUI, MO(_LOWER), KC_LALT, KC_SPACE, KC_ESC, MO(_NEWSPECIAL), KC_R,     KC_LCTL,         MO(_NEWFUNCTION), KC_RGUI,  TO(_BASE)
),

// NewTop Layer (Numbers & Brackets)
[_NEWSPECIAL] = LAYOUT_ortho_4x12(
    _______, KC_0,    KC_1,    KC_2,    KC_3,     KC_4,    KC_5,    KC_6,     KC_7,     KC_8,    KC_9,    _______,
    _______, KC_LBRC, KC_LABK, KC_LPRN, KC_LCBR,  _______, _______, KC_RCBR,  KC_RPRN,  KC_RABK, KC_RBRC, _______,
    _______, KC_LEFT, KC_DOWN, KC_UP,   KC_RIGHT, _______, KC_DOT,  KC_COLON, KC_QUOTE, KC_GRAVE, KC_BACKSLASH, _______,
    _______, _______, _______, _______, _______,  _______, _______, _______,  _______,  _______, _______, _______
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
