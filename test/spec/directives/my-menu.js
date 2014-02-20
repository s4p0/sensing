'use strict';

describe('Directive: myMenu', function () {

  // load the directive's module
  beforeEach(module('sensingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<my-menu></my-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the myMenu directive');
  }));
});
