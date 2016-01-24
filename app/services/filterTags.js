app.factory('filterTags', function () {
  return {
    filterArray: function (oldArray) {
      return oldArray.filter(function (file) {
        var token;
        ingredients.forEach(function (item) {
          if (file === item)
            token = item;
        });
        return file === token;
      });
    }
  };
});
