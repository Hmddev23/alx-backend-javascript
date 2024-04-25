export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](ht) {
    if (ht === 'number') {
      return this._size;
    }
    if (ht === 'string') {
      return this._location;
    }
    return null;
  }
}
