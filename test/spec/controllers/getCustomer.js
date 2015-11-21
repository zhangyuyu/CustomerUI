'use strict';

describe('Controller: GetCtrl', function () {
  beforeEach(module('customerUiApp'));

  var GetCtrl,scope,$httpBackend;

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    GetCtrl = $controller('GetCtrl', {
      $scope: scope
    });
  }));

  it('should send get request', function () {
    $httpBackend
      .expect('GET', 'http://localhost:8080/customers?name=Alex')
      .respond( {name :'Alex', age:'20'});
    scope.name = 'Alex';

    scope.getCustomer();
    $httpBackend.flush();

    expect(scope.info.name).toBe('Alex');
    expect(scope.info.age).toBe('20');
  });
});
