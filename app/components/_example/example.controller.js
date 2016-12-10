'use strict';

function ExampleController() {
  let self = this;

  function init() {
    // You can remove it and init() if you don't need initialization function
  }

  init();

  /// Attributes
  ///////

  self.attribute1 = '';

  /// Public Methods
  ///////

  self.getExample   = getExample;
  self.postExample  = postExample;
  self.patchExample = patchExample;

  function getExample(req, res) {
    res.send('GET Example');
  }

  function postExample(req, res) {
    res.send('POST Example');
  }

  function patchExample(req, res) {
    res.send('PATCH Example');
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
