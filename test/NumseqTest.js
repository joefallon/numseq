"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Numseq_1 = require("../src/Numseq");
var assert = require("assert");
describe('Numseq', function () {
    describe('#next', function () {
        it('starts at 1 and returns the next integer on each call', function (done) {
            Numseq_1.Numseq.reset();
            assert.strictEqual(Numseq_1.Numseq.next(), 1);
            assert.strictEqual(Numseq_1.Numseq.next(), 2);
            assert.strictEqual(Numseq_1.Numseq.next(), 3);
            assert.strictEqual(Numseq_1.Numseq.next(), 4);
            assert.strictEqual(Numseq_1.Numseq.next(), 5);
            done();
        });
    });
    describe('#reset', function () {
        it('resets the sequence to zero (0)', function (done) {
            Numseq_1.Numseq.reset();
            assert.strictEqual(Numseq_1.Numseq.next(), 1);
            assert.strictEqual(Numseq_1.Numseq.next(), 2);
            Numseq_1.Numseq.reset();
            assert.strictEqual(Numseq_1.Numseq.next(), 1);
            done();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTnVtc2VxVGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk51bXNlcVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3Q0FBcUM7QUFDckMsK0JBQWtDO0FBRWxDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7SUFFZixRQUFRLENBQUMsT0FBTyxFQUFFO1FBQ2QsRUFBRSxDQUFDLHVEQUF1RCxFQUFFLFVBQUMsSUFBSTtZQUM3RCxlQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsUUFBUSxFQUFFO1FBQ2YsRUFBRSxDQUFDLGlDQUFpQyxFQUFFLFVBQUMsSUFBSTtZQUN2QyxlQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxlQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9