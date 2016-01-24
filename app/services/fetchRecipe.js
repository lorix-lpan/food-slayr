app.factory('$fetchRecipe', ['$http', function ($http) {

  var API_ID = '_app_id=153b6086';
  var API_KEY = '_app_key=f11781de9ab69b378898a8696158fe6e';
  var RECIPE_URL = 'http://api.yummly.com/v1/api/recipes';
  var JSONP_CB = '&callback=JSON_CALLBACK';
  
  var RECIPE_ID_URL = 'http://api.yummly.com/v1/api/recipe/';

  return {
    // keyword is a encode URI string of keywords
    fetchJson: function (keywords, callback) {
      $http.jsonp(RECIPE_URL + '?' + API_ID + '&' + API_KEY + '&q=' + keywords + JSONP_CB).
        then(function (recipes) {
          callback(recipes);
        });
    },
    fetchDetail: function (id, callback) {
      $http.jsonp(RECIPE_ID_URL + id + '?' + API_ID + '&' + API_KEY + JSONP_CB).
        then(function (details) {
          callback(details);
        });
    }

  };
}]);
