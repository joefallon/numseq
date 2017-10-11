"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Numseq = Numseq;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtc2VxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTnVtc2VxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFUaUIsV0FBSSxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFYSxZQUFLLEdBQW5CO1FBQ0ksTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQVZjLFdBQUksR0FBRyxDQUFDLENBQUM7SUFXNUIsYUFBQztDQUFBLEFBWkQsSUFZQztBQVpZLHdCQUFNIn0=