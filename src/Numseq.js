"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numseq = /** @class */ (function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtc2VxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTnVtc2VxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQVlBLENBQUM7SUFUaUIsV0FBSSxHQUFsQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBRWEsWUFBSyxHQUFuQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFWYyxXQUFJLEdBQUcsQ0FBQyxDQUFDO0lBVzVCLGFBQUM7Q0FBQSxBQVpELElBWUM7QUFaWSx3QkFBTSJ9