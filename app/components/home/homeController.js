app.controller('homeController', [
  '$scope',
  '$rootScope',
  '$location',
  '$fetchRecipe',
  '$photoTags',
  'filterTags',
  function ($scope, $rootScope, $location, $fetchRecipe, $photoTags, filterTags) {
    $scope.gotoPage = function (path) {
      $location.path(path);
    };
    $scope.upload = function (file) {
      $photoTags.getTags(file, function (data) {
        var filtered = filterTags.filterArray(data.data.results[0].result.tag.classes);
        $scope.foods = filtered.foods;
        $fetchRecipe.fetchJson(filtered.keys, function (recipes) {
          $rootScope.recipes = recipes.data.matches;
        });
      });
    };
}]);
