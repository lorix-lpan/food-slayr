app.controller('indexController', ['$scope', '$rootScope', function ($scope, $rootScope) {
  $rootScope.$watch('recipes', function (newVal) {
    if (newVal !== 'undefined')
      console.log($rootScope.recipes[0]);
  });
}]);
