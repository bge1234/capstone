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
  $ionicModal.fromTemplateUrl('view-prefs.html', function(modal) {
    $scope.viewPrefsModal = modal;
  }, {
    scope: $scope
  });
  $ionicModal.fromTemplateUrl('new-prefs.html', function(modal) {
    $scope.newPrefsModal = modal;
  }, {
    scope: $scope
  });

  $scope.set_of_prefs = Prefs.all();

  $scope.createPrefs = function(prefs) {
    //Clear existing prefs and then we'll overwrite them on the next line.
    $scope.set_of_prefs = {};

    $scope.set_of_prefs = {
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
    };
    Prefs.save($scope.set_of_prefs);
    $scope.newPrefsModal.hide();
  }

  $scope.toggleMatches = function() {
    $ionicSideMenuDelegate.toggleLeft();
  }

  $scope.viewPrefs = function() {
    $scope.viewPrefsModal.show();
  }

  $scope.closeViewPrefs = function() {
    $scope.viewPrefsModal.hide();
  }

  $scope.newPrefs = function() {
    $scope.newPrefsModal.show();
  }

  $scope.closeNewPrefs = function() {
    $scope.newPrefsModal.hide();
  }
});
