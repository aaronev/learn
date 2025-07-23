var userName;
var userAge;
//... 
userName = 'testing';
userAge = 0;
function add(a, b) {
    if (b === void 0) { b = 5; }
    console.log(a + b);
    return a + b;
}
;
add(10);
add(10, 3);
var age = 36;
age = '34';
age = 3;
var hobbies = ['sports', 'cooking'];
// hobbies.push(9); numbers are not allowed in the array
var users;
users = [1, '23'];
// users = [[]] anything other than strings or numbers are not acceptable.
var arrayUsers;
arrayUsers = ['123', 123];
var possibleResults;
possibleResults = [1, -1];
possibleResults = [4, 10];
possibleResults = [4, 10, 3];
possibleResults = [4, 'asdf'];
possibleResults = [4, 10, 'asdefsadf'];
var userObj = {
    name: "max",
    age: 30,
};
var val = 'some text';
val = null;
// {} means any value that is not null or undefined.
var data;
data = {
    test: 1,
};
data = ''; // not acecptable
// restrict
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Editor"] = 1] = "Editor";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
var userRole = Role.Admin;
userRole = Role.Guest;
