"use strict";
var Numseq = (function () {
    function Numseq() {
    }
    Numseq.next = function () {
        Numseq._seq++;
        return Numseq._seq;
    };
    Numseq.reset = function () {
        Numseq._seq = 0;
    };
    Numseq._seq = 0;
    return Numseq;
}());
module.exports = Numseq;
