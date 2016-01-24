app.controller('homeController', ['$scope', '$fetchRecipe', '$photoTags', 'filterTags'
               function ($scope, $fetchRecipe, $photoTags, filterTags) {
  var recipes;
  $scope.upload = function (file) {
    $photoTags.getTags(file, function (data) {
      var tags = filterTags.filterArray(data.data.results[0].result.tag.classes);
      $fetchRecipe.fetchJson(tags, function (recipes) {
        recipes = recipes.data.matches[0].recipeName;
      });
    });
  };
}]);
