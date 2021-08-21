module.exports = class Token {
    #id;
    #value;

    constructor(id, value) {
        this.#id = id;
        this.#value = value;
    }

    //Returns a number used to identify which type of token it is.
    getId() {
        return this.#id;
    }

    //Returns value if any ( could be a string, an interger, or potentially null).
    getValue() {
        return (this.#value) ? this.#value : null;
    }
}