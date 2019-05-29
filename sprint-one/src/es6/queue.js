class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  };

  enqueue(value) {
    var self = this.storage;

    var itemCount = (Object.keys(self)).length;
    self[itemCount] = value;
  };

  dequeue() {
    var self = this.storage;

    var firstItem = self[0];
    delete self[0];

    for(var prop in self) {
      self[prop - 1] = self[prop];
      if (!self[prop + 1]) {
        delete self[prop];
      }
    };

    return firstItem;
  };

  size(){
    var self = this.storage;

    return (Object.keys(self)).length;
  };
}
