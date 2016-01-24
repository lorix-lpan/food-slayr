app.controller('homeController', ['$scope', '$fetchRecipe', '$photoTags', function ($scope, $fetchRecipe, $photoTags) {
  var tags;
  var recipes;
  $photoTags.getTags(undefined, function (data) {
    tags = data.data.results[0].result.tag.classes;
  });
  keywords = encodeURIComponent('chicken');
  $fetchRecipe.fetchJson(keywords, function (recipes) {
    recipes = recipes.data.matches[0].recipeName;
    console.log(recipes);
  });
}]);
