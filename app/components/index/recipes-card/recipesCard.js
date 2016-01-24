app.directive('recipesCard', function () {
  return {
    restrict: 'E',
    scope: {
      recipe: '='
    },
    templateUrl: 'app/components/index/recipes-card/recipes-card.html'
  };
});
