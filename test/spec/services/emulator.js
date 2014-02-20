'use strict';

describe('Service: Emulator', function () {

  // load the service's module
  beforeEach(module('sensingApp'));

  // instantiate service
  var Emulator;
  beforeEach(inject(function (_Emulator_) {
    Emulator = _Emulator_;
  }));

  it('should do something', function () {
    expect(!!Emulator).toBe(true);
  });

});
