"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function adds(a, b) {
    return a + b;
}
;
adds(1, 2);
function log(message) {
    console.log(message);
}
;
function logAndThrow(errorMessage) {
    console.log(errorMessage);
    throw new Error(errorMessage);
}
;
logAndThrow('error message goes here');
function performJob(cb) {
    // ...
    cb('jobd done');
}
performJob(log);
function process(val) {
    if (typeof val === 'object'
        && !!val
        && 'log' in val
        && typeof val.log === 'function') {
    }
    {
        val.log();
    }
}
;
process({ log });
function processAny(val) {
    // any could get a runtime error;
    val.log();
}
;
processAny('testing');
function generateError(msg) {
    throw new Error(msg);
}
generateError('An error occured!');
// nullish coalescing ?? not ts specific function js also supports it
//# sourceMappingURL=basic.js.map