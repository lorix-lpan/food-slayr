app.controller('homeController', ['$scope', '$fetchRecipe', '$photoTags', 'filterTags', 
               function ($scope, $fetchRecipe, $photoTags, filterTags) {
  var recipes;
  $photoTags.getTags(undefined, function (data) {
    var tags = filterTags.filterArray(data.data.results[0].result.tag.classes);
    tags = filterTags.filterArray(['Apple', 'Orange', 'beef', 'yolo']);
    $fetchRecipe.fetchJson(tags, function (recipes) {
      recipes = recipes.data.matches[0].recipeName;
      console.log(recipes);
    });
  });
}]);
