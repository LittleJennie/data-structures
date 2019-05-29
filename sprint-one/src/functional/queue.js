var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage);
    var keysCount = keys.length;

    storage[keysCount] = value;
  };

  someInstance.dequeue = function() {
    var originalFirst = storage[0];



    return originalFirst;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
