export default class Currency {
  constructor(code, name) {
    if (Object.getPrototypeOf(name) !== String.prototype) throw TypeError('Name must be a string');
    if (Object.getPrototypeOf(code) !== String.prototype) throw TypeError('Code must be a string');
    this._code = code;
    this._name = name;
  }

  // Setters
  set code(newCode) {
    if (Object.getPrototypeOf(newCode) !== String.prototype) throw TypeError('Code must be a string');
    this._code = newCode;
  }

  set name(newName) {
    if (Object.getPrototypeOf(newName) !== String.prototype) throw TypeError('Code must be a string');
    this._name = newName;
  }

  // Getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // Methods
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
