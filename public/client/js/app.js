var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
  console.log($routeProvider);
  $routeProvider.
    when('/', {templateUrl: '/client/templates/home.html', controller:'homeController'}).
    when('/d3', {templateUrl: '/client/templates/d3.html'}).
    when('/login', { templateUrl: '/client/templates/login.html'}).
    when('/signup', { templateUrl: '/client/templates/signup.html'}).
    when('/logout', { templateUrl: '/client/templates/logout.html'});

}]);

app.controller('homeController',['$scope', function($scope, $route, $routeParams){
  console.log('Inside of controller');
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
}]);

app.controller('d3Controller',['$scope', function($scope, $route, $routeParams){
  console.log('Inside of D3 controller');
  $scope.$route = $route;
  $scope.$routeParams = $routeParams;
}]);

app.service('getLink', function($http){
  // var  fac = {};
  this.getLinks = function(){
    return $http({method: 'GET', url: '/links'});
  };
  // return fac;
});


app.controller('linksController', function($scope, $http, getLink){
  $scope.links = getLink.getLinks().then(function(data, status, headers, config, statusText) {
    // debugger;
    $scope.links = data.data;
  });
  $scope.predicate = "'visits';";

  $scope.flipPredicate = function() {
    if($scope.predicate === "'-visits';") {
      $scope.predicate = "'visits';";
    } else {
      $scope.predicate = "'-visits';";
    }
    // console.log('i was called');
  };

});




// angular.module('app', ['appServices'])
//     .config(['$routeProvider', function($routeProvider) {
//         $routeProvider.
//                 when('/home', {templateUrl: 'home.html',   controller: HomeCtrl}).
//                 when('/list', {templateUrl: 'list.html',   controller: ListCtrl}).
//                 when('/detail/:itemId', {templateUrl: 'detail.html',   controller: DetailCtrl}).
//                 when('/settings', {templateUrl: 'settings.html',   controller: SettingsCtrl}).
//                 otherwise({redirectTo: '/home'});
// }]);
