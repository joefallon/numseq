"use strict";
var Numseq = require('../src/Numseq');
var chai = require('chai');
var assert = chai.assert;
describe('Numseq', function () {
    var assert = chai.assert;
    describe('#next', function () {
        it('starts at 1 and returns the next integer on each call', function (done) {
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            assert.strictEqual(Numseq.next(), 2);
            assert.strictEqual(Numseq.next(), 3);
            assert.strictEqual(Numseq.next(), 4);
            assert.strictEqual(Numseq.next(), 5);
            done();
        });
    });
    describe('#reset', function () {
        it('resets the sequence to zero (0)', function (done) {
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            assert.strictEqual(Numseq.next(), 2);
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            done();
        });
    });
});
