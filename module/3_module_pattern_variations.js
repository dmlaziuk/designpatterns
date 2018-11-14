console.log('\n3. Module Pattern Variations\n')

// Import mixins

var jsdom = require('jsdom')
var jQuery = require('jquery')(new jsdom.JSDOM().window)
var _ = require('underscore')

// Global module
var myModule = (function (jQ, _) {
  function privateMethod1 () {
    jQ('.container').html('test')
  }

  function privateMethod2 () {
    console.log(_.min([10, 5, 100, 2, 1000]))
  }

  return {
    publicMethod: function () {
      privateMethod1()
      privateMethod2()
    }
  }

  // Pull in jQuery and Underscore
})(jQuery, _)

myModule.publicMethod()

// Exports

// Global module
var mModule = (function () {
  // Module object
  var mmodule = {}
  var privateVariable = 'Hello World'

  function privateMethod () {
    console.log(privateVariable)
  }

  mmodule.publicProperty = 'Foobar'
  mmodule.publicMethod = function () {
    console.log(privateVariable)
    privateMethod()
  }
  return mmodule
})()

mModule.publicMethod()

// jQuery

var $ = jQuery

function library (mmodule) {
  $(function () {
    if (mmodule.init) {
      mmodule.init()
    }
  })
  return mmodule
}

var myLibrary = library(function () {
  return {
    init: function () {
      console.log('myLibrary init')
    },
    print: function () {
      console.log('myLibrary print')
    }
  }
}())

myLibrary.print()
