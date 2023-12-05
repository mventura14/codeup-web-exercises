"use strict";

    /* -- Random num gen ---*/
export default function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
