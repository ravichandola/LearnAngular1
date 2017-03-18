var mymodule = angular.module('myFirstModule',[]);
mymodule.controller('myFirstController',function($scope){
  $scope.firstName = 'John';
  $scope.lastName='Mathews';
  $scope.fathername='danny';
  $scope.mothername='jiya';
  $scope.phone='9917263313';
  $scope.address1='cpp staff colony';
  $scope.address2='Lalkuan';


  $scope.submitMe = function(){
    console.log($scope);
  }

})
