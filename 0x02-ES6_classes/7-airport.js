export default class Airport {
  constructor(name, code) {
    // Create code and name val
    this._code = code;
    this._name = name;
  }

  // Methods
  get [Symbol.toStringTag]() {
    return `${this._code}`;
  }
}
