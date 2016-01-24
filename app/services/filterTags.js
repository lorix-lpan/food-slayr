app.factory('filterTags', function () {
  return {
    filterArray: function (oldArray) {
      return oldArray.filter(function (file) {
        ingredients.forEach(function (item) {
          return file === item;
        });
      });
    }
  };
});
