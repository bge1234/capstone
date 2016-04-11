app.controller("MainController", function($scope, $timeout, $ionicModal, prefsService, apiService, $ionicSideMenuDelegate) {

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

  $scope.set_of_prefs = prefsService.all();

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
    prefsService.save($scope.set_of_prefs);
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

  $scope.initApiData = function() {
    apiService.init();
    // getSalary("Denver");
  }

  function getSalary(city) {
    if($scope.set_of_prefs.occupation !== undefined)
      for (var i = 0; i < areas.length; i++) {
        if(areas[i]["text"] === city) {
          console.log("Found " + city + "!");
          console.log(areas[i]["code"]);
          apiService.apiCall("http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM00" + areas[i]["code"] + "000000" + $scope.set_of_prefs.occupation + "04");
        }
      }
    // apiService.apiCall("http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM + AREA + 000000" + $scope.set_of_prefs.occupation + "04");
  }
});
