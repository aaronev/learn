"use strict";
class User {
    constructor() {
        this._firstName = '';
        this._lastName = '';
    }
    set firstName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._firstName = name;
    }
    ;
    set lastName(name) {
        if (name.trim() === '') {
            throw new Error('Invalid name.');
        }
        this._lastName = name;
    }
    ;
    get fullName() {
        return this._firstName + ' ' + this._lastName;
    }
    ;
}
;
const aaronv = new User();
aaronv.firstName = 'Max';
aaronv.lastName = '';
console.log(aaronv.fullName);
//# sourceMappingURL=advancedClasses.js.map