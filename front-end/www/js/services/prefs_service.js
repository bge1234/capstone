app.factory('prefsService', function() {
  return {
    all: function() {
      var prefsString = window.localStorage['prefs'];
      if(prefsString) {
        return angular.fromJson(prefsString);
      }
      return [];
    },
    save: function(prefs) {
      window.localStorage['prefs'] = angular.toJson(prefs);
    },
    newPrefs: function() {
      return {
        prefs: []
      };
    }
  }
});
