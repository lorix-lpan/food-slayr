app.controller('homeController', ['$scope', '$fetchRecipe', '$photoTags', function ($scope, $fetchRecipe, $photoTags) {
  $photoTags.getTags(undefined, function (data) {
    console.log(data);
  });
  /*
  keywords = encodeURIComponent('chicken');
  $fetchRecipe.fetchJson(keywords, function (recipes) {
    console.log(recipes);
  });
  */
}]);
