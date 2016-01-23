app.factory('$fetchRecipe', ['$http', function ($http) {

  var API_KEY = 'a23ed3b8d32f3bcb957f616adba1bf5b';
  var RECIPE_URL = 'http://food2fork.com/api/search';

  return {
    // keyword is a encode URI string of keywords
    fetchJson: function (keywords, callback) {
      $http.jsonp(RECIPE_URL + '?' + 'key=' + API_KEY + '&q=' + keywords + '&callback=JSON_CALLBACK').
        then(function (recipes) {
          callback(recipes);
        });
    }
  };
}]);
