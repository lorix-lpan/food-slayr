app.directive('recipesCard', function () {

  var controller = [
    '$scope', 
    '$rootScope',
    '$location',
    '$fetchRecipe',
    function ($scope, $rootScope, $location, $fetchRecipe) {
      $scope.moreInfo = function (recipe) {
        console.log(recipe.id);
        $fetchRecipe.fetchDetail(recipe.id, function (data) {
          $rootScope.details = data.data;
          $location.path('/details');
        });
      };
  }];

  return {
    restrict: 'E',
    controller: controller,
    scope: {
      recipe: '='
    },
    templateUrl: 'app/components/index/recipes-card/recipes-card.html'
  };
});
