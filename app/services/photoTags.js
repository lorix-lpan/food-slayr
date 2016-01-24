app.factory('$photoTags', ['Upload', function (Upload) {

  var API_KEY = 'Y4objAnSIR3gqZdfyeqA8DgM5oqh0R';
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
