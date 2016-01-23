app.factory('$fetchRecipe', ['$http', function ($http) {

  var API_KEY = 'a23ed3b8d32f3bcb957f616adba1bf5b';
  var RECIPE_URL = 'http://food2fork.com/api/search';

  return {
    // keyword is a encode URI string of keywords
    fetchJson: function (keywords, callback) {
      $http.get(RECIPE_URL + '?' + 'key=' + API_KEY + '&q=' + keywords).
        then(function (recipes, status) {
          callback(recipes, status);
        });
    }
  };
}]);
