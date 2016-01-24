app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'app/components/home/homeView.html',
      controller: 'homeController'
    }).
    when('/index', {
      templateUrl: 'app/components/index/indexView.html',
      controller: 'indexController'
    }).
    when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
