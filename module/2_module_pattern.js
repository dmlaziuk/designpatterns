console.log('\n2. Module Pattern\n')

// Boilerplate template

var testModule = (function () {
  var counter = 0

  return {
    incrementCounter: function () {
      return counter++
    },
    resetCounter: function () {
      console.log('counter value prior to reset: ' + counter)
      counter = 0
    }
  }
})()

// Usage:

// Increment our counter
testModule.incrementCounter()

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
testModule.resetCounter()

// Simple template

var myNamespace = (function () {
  var myPrivateVar, myPrivateMethod

  // A private counter variable
  myPrivateVar = 0

  // A private function which logs any arguments
  myPrivateMethod = function (foo) {
    console.log(foo)
  }

  return {
    // A public variable
    myPublicVar: 'foo',

    // A public function utilizing privates
    myPublicFunction: function (bar) {
      // Increment our private counter
      myPrivateVar++

      // Call our private method using bar
      myPrivateMethod(bar)
    }
  }
})()

// Example

var basketModule = (function () {
  // privates
  var basket = []
  function doSomethingPrivate() {
    // ...
  }
  function doSomethingElsePrivate() {
    // ...
  }

  // Return an object exposed to the public
  return {
    // Add items to our basket
    addItem: function (values) {
      basket.push(values)
    },
    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length
    },
    // Public alias to a private function
    doSomething: doSomethingPrivate,
    // Get the total value of items in the basket
    getTotal: function () {
      var q = this.getItemCount()
      var p = 0
      while (q--) {
        p += basket[q].price
      }
      return p
    }
  }
})()

// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: 'bread',
  price: 0.5
})

basketModule.addItem({
  item: 'butter',
  price: 0.3
})

// Outputs: 2
console.log(basketModule.getItemCount())

// Outputs: 0.8
console.log(basketModule.getTotal())

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log(basketModule.basket)

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
// console.log(basket)
