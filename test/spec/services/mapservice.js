'use strict';

describe('Service: Mapservice', function () {

  // load the service's module
  beforeEach(module('sensingApp'));

  // instantiate service
  var Mapservice;
  beforeEach(inject(function (_Mapservice_) {
    Mapservice = _Mapservice_;
  }));

  it('should do something', function () {
    expect(!!Mapservice).toBe(true);
  });

});
