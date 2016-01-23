app.controller('homeController', ['$scope', '$fetchRecipe', function ($scope, $fetchRecipe) {
  keywords = encodeURIComponent('chicken cheese');
  $fetchRecipe.fetchJson(keywords, function (recipes) {
    $scope.data = recipes;
  });
}]);
