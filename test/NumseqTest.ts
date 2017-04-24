import Numseq = require('../src/Numseq');

import chai = require('chai');
const assert = chai.assert;

describe('Numseq', () => {
    let assert = chai.assert;

    describe('#next', () => {
        it('starts at 1 and returns the next integer on each call', (done) => {
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            assert.strictEqual(Numseq.next(), 2);
            assert.strictEqual(Numseq.next(), 3);
            assert.strictEqual(Numseq.next(), 4);
            assert.strictEqual(Numseq.next(), 5);
            done();
        });
    });

    describe('#reset', () => {
        it('resets the sequence to zero (0)', (done) => {
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            assert.strictEqual(Numseq.next(), 2);
            Numseq.reset();
            assert.strictEqual(Numseq.next(), 1);
            done();
        });
    });
});
