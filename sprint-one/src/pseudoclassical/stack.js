var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var self = this.storage;

  var keys = Object.keys(self);
  var itemCount = keys.length;

  self[itemCount] = value;
};

Stack.prototype.pop = function() {
  var self = this.storage;

  var keys = Object.keys(self);
  var itemCount = keys.length;

  var lastItem = self[itemCount - 1]
  delete self[itemCount - 1];

  return lastItem;
};

Stack.prototype.size = function() {
  var self = this.storage;

  var keys = Object.keys(self);
  return keys.length;
};