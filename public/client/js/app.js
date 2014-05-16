var app = angular.module('myApp', []);

app.controller('linksController', function($scope){
  console.log($scope);

  $http({method: 'GET', url: '/links'})
  .success(function(data, status, headers, config){

    $scope.links = data;
  });

});