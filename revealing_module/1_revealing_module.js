console.log('\n1. Revealing Module Pattern\n')

var myRevealingModule = (function () {
  var privateVar = 'Ben Cherry'
  var publicVar = 'Hey there!'

  function privateFunction () {
    console.log('Name:' + privateVar)
  }

  function publicSetName (strName) {
    privateVar = strName
  }

  function publicGetName () {
    privateFunction()
  }

  // Reveal public pointers to
  // private functions and properties

  return {
    setName: publicSetName,
    greeting: publicVar,
    getName: publicGetName
  }
})()

myRevealingModule.setName('Paul Kinlan')
console.log(myRevealingModule.greeting)
myRevealingModule.getName()

//

var myRevealingModule2 = (function () {
  var privateCounter = 0

  function privateFunction () {
    privateCounter++
  }

  function publicFunction () {
    publicIncrement()
  }

  function publicIncrement () {
    privateFunction()
  }

  function publicGetCount () {
    return privateCounter
  }

  // Reveal public pointers to
  // private functions and properties

  return {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
  }
})()

myRevealingModule2.start()
