class User {
  protected _firstName: string = '';
  protected _lastName: string = '';

  set firstName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    } 
      this._firstName = name;
  };

  set lastName(name: string) {
    if (name.trim() === '') {
      throw new Error('Invalid name.');
    } 
      this._lastName = name;
  };

  get fullName() {
    return this._firstName + ' ' + this._lastName;
  };

  static eid = 'USER';

  static greet() {
    console.log('Hello');
  };

};

console.log(User.eid);
User.greet();

const aaronv = new User ();
aaronv.firstName = 'Max';
aaronv.lastName = '';

console.log(aaronv.fullName);


class Employee extends User {
  constructor(public jobTitle: stirng) {
    super();
    // super.firstName = 'Max';
  };

  work() {
    // ...
    this._firstName;
    
  };

};

abstract class UIElement {
  constructor(public identifier: string) {};

  clone(targetLocation: string) {
    // logic to duplicate the UI elememt
  }
};

// let uiElement = new UIElement(); 

class SideDrawerElement extends UIElement {
  constructor( public identifier: string, public position: 'left' | 'right'){
    super(identifier);
  }
};