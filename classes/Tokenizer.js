const { error } = require('console');
const Token = require('./Token');
const fs = require('fs');
const path = require('path');

/*
        CURRENT TOKENS
        Integers = 1

        Tokens to think about: keywords, variable, operators, (), [], {}

*/

module.exports = class Tokenizer {
    #tokens = [];
    #tokens_index = 0;
    fileName;

    constructor(fileName) {
        this.fileName = fileName;
    }

    tokenize() {
        try {
            const filePath = path.join(__dirname, '..', this.fileName);
            const file = fs.readFileSync(filePath).toString();

            this.#tokens.push(new Token(1, parseInt(file)));
        } catch (err) {
            console.error(err);
        }
    }

    getToken() {
        return this.#tokens[this.#tokens_index];
    }

    skipToken() {
        if (this.#tokens_index < this.#tokens.length - 1) this.#tokens_index++;
    }
}