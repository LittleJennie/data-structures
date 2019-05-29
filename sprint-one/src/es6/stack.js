class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var self = this.storage;
    var itemCount = (Object.keys(self)).length;

    self[itemCount] = value;
  };

  pop() {
    var self = this.storage;
    var itemCount = (Object.keys(self)).length;
    var lastItem = self[itemCount - 1];

    delete self[itemCount - 1];

    return lastItem;
  };

  size() {
    return (Object.keys(this.storage)).length;
  };
}