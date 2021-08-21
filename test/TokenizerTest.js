const Tokenizer = require('../classes/Tokenizer');
const expect = require('chai').expect;

describe('Tokenize', function () {
    it('Sinlge Digit Number Token', function () {
        //Setup
        let t = new Tokenizer('./test/test.txt');
        t.tokenize();
        result = t.getToken();

        //Assertions
        expect(result).to.be.an('object');
        expect(result.getId()).to.equal(1);
        expect(result.getValue()).to.equal(1);
    })
})