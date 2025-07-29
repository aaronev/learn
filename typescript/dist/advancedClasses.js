"use strict";
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    ;
}
;
const max = new User('aaron', 'vill');
console.log(max.fullName);
//# sourceMappingURL=advancedClasses.js.map