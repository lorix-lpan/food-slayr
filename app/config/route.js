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
    when('/details', {
      templateUrl: 'app/components/details/detailsView.html',
      controller: 'detailsController'
    }).
    when('/about', {
      templateUrl: 'app/components/about/aboutView.html',
      controller: 'aboutController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);
