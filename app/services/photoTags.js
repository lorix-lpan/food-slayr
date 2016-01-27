app.factory('$photoTags', ['Upload', function (Upload) {

  var API_KEY = 'T3vUNk9i851I2sC29doREGRfBkF3IJ'; //new token generated jan 2 10AM
  //client id: G917g09U3kiA-NH1CC-lrLXRO0UsXBd8kb6Q_-zF
  //client secret: dEKnwt3eIET-anHpPElQrtUrV29HdLV4BjFwiv8H
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
