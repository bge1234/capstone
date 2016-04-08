angular.module('starter', ['ionic'])
.factory('Prefs', function() {
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
})

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Prefs, $ionicSideMenuDelegate) {
  $ionicModal.fromTemplateUrl('new-prefs.html', function(modal) {
    $scope.prefsModal = modal;
  }, {
    scope: $scope
  });

  $scope.set_of_prefs = Prefs.all();

  $scope.createPrefs = function(prefs) {
    $scope.set_of_prefs.push({
      heatcold: prefs.heatcold,
      snow: prefs.snow,
      seasons: prefs.seasons,
      outdoors: prefs.outdoors,
      active: prefs.active,
      activities: prefs.activities,
      culture: prefs.culture,
      children: prefs.children,
      dog: prefs.dog,
      entrepreneur: prefs.entrepreneur,
      population: prefs.population,
      sports: prefs.sports,
      occupation: prefs.occupation
    });
    $scope.prefsModal.hide();
  };

  $scope.newPrefs = function() {
    $scope.prefsModal.show();
  };

  $scope.closeNewPrefs = function() {
    $scope.prefsModal.hide();
  }
});
