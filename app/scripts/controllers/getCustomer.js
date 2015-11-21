'use strict';

angular.module('customerUiApp')
  .controller('GetCtrl', ['$scope', '$http', function ($scope, $http) {

     $scope.getCustomer = function(){
       var url = 'http://localhost:8080/customers?name=' + $scope.name;
       $http({
          url : url,
          method : 'GET'
       }).then(function(response) {
          $scope.info = response.data;
          alert('Get '+$scope.name+' successfully!');
        },function(response) {
          $scope.info = response.data || "Request failed";
          alert($scope.info);
       });
     };
  }]);
