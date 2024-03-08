export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(code) {
    this._code = code;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  /**
   * Creates the full string representation of this Currency.
  */

    displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
