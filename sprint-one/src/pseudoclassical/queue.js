var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var self = this.storage;

  var keys = Object.keys(self);
  var itemCount = keys.length;

  self[itemCount] = value;
};

Queue.prototype.dequeue = function() {
  var self = this.storage;

  var firstItem = self[0];
  delete self[0];

  for (var prop in self) {
    self[prop - 1] = self[prop];
    if (!self[prop + 1]) {
      delete self[prop];
    }
  }

  return firstItem;
};

Queue.prototype.size = function() {
  var self = this.storage;

  var keys = Object.keys(self);
  return keys.length;
};


