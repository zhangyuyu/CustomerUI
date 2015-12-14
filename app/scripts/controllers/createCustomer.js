'use strict';

angular.module('customerUiApp')
  .controller('CreateCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.createCustomer = function(){
       $http({
          url : 'http://localhost:8080/customers',
          method : 'POST',
          data: {
              name : $scope.name,
              age : $scope.age
          },
          headers: {
              'Authorization': 'Basic dXNlcjpwYXNzd29yZA=='
          },
          withCredentials: true
       }).then(function(response) {
          $scope.info = response.data;
          alert('Create '+$scope.name+' successfully!');
        },function(response) {
          $scope.info = response.data || "Request failed";
          alert($scope.info);
       });
    };

  }]);
