'use strict';

describe('Directive: fcProject', function () {

  // load the directive's module
  beforeEach(module('sensingApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<fc-project></fc-project>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the fcProject directive');
  }));
});
