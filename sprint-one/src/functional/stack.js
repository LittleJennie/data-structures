var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    //get current length of keys in storage to see how many items are in storage
    var keys = Object.keys(storage);
    //get the total item counts in storage
    var itemCount = keys.length;

    storage[itemCount] = value;
  };

  someInstance.pop = function() {
    //get current length of keys in storage to see how many items are in storage
    var keys = Object.keys(storage);
    //get the total item counts in storage
    var itemCount = keys.length;
    var toBeRemoved = storage[itemCount - 1];
    delete storage[itemCount - 1];
    return toBeRemoved;
  };

  someInstance.size = function() {
    var keys = Object.keys(storage);
    return keys.length;
  };

  return someInstance;
};
