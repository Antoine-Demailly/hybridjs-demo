'use strict';

function ExampleController() {
  let self = this;

  /// Attributes
  ///////

  self.attribute1 = '';

  /// Init
  ///////

  function init() {
    // You can remove it and init() if you don't need initialization function
  }

  init();

  /// Public Methods
  ///////

  self.getDemo   = getDemo;
  self.postDemo  = postDemo;
  self.patchDemo = patchDemo;

  function getDemo(req, res) {
    res.send({
      message: 'this is a demo',
    });
  }

  function postDemo(req, res) {
    res.send('POST Demo');
  }

  function patchDemo(req, res) {
    res.send('PATCH Demo');
  }

  /// Private Methods
  ///////

  function privateMethodExample() {
    /*
      Do Something
    */
  }
}

module.exports = ExampleController;
