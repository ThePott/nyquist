#pragma once
#include QMK_KEYBOARD_H

enum layer_names {
    _BASE,
    _LOWER,
    _RAISE,
    _ADJUST,
    _NEW, /* handsdown promethium */
    _NEWSPECIAL,
    _NEWFUNCTION
};

/* Macros from VIA config */
enum custom_keycodes {
    MC_COLN = SAFE_RANGE, /* : */
    MC_DQUO,              /* " */
    MC_TILD,              /* ~ */
    MC_GT,                /* > */
    MC_TILD2,             /* ~ */
    MC_LCBR,              /* { */
    MC_RCBR               /* } */
};
