app.factory('$photoTags', ['Upload', function (Upload) {

  var API_KEY = 'ofbtuaAoWchh2tVW63x2ax2XxBqXMj';
  var AUTH = {
    Authorization: 'Bearer' + ' ' + API_KEY
  };

  return {
    getTags: function (file, callback) {
      Upload.upload({
        method: 'POST',
        url: 'https://api.clarifai.com/v1/tag/', 
        headers: AUTH,
        data: {
          encoded_data: file
        }
      }).then(function (data) {
        callback(data);
      });
    }
  };
}]);
