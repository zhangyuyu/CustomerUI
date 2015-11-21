'use strict';

describe('Controller: CreateCtrl', function () {
  beforeEach(module('customerUiApp'));

  var CreateCtrl,scope,$httpBackend;

  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_) {
    scope = $rootScope.$new();
    $httpBackend = _$httpBackend_;
    CreateCtrl = $controller('CreateCtrl', {
      $scope: scope
    });
  }));

  it('should send post request', function () {
    $httpBackend
      .expect('POST', 'http://localhost:8080/customers')
      .respond( {name :'Alex', age:'20'});
    scope.name = 'Alex';

    scope.createCustomer();
    $httpBackend.flush();

    expect(scope.info.name).toBe('Alex');
    expect(scope.info.age).toBe('20');
  });
});
