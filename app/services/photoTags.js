app.factory('$photoTags', ['$http', function ($http) {

  var API_KEY = 'ofbtuaAoWchh2tVW63x2ax2XxBqXMj';
  var AUTH = {
    Authorization: 'Bearer' + ' ' + API_KEY
  };

  return {
    getTags: function (imgUrl, callback) {
      imgUrl = typeof imgUrl === 'undefined' ? 'http://www.clarifai.com/img/metro-north.jpg' : imgUrl;
      $http({
        method: 'POST',
        url: 'https://api.clarifai.com/v1/tag/', 
        headers: AUTH,
        data: {
          url: imgUrl
        }
      }).then(function (data) {
        callback(data);
      });
    }
  };
}]);
