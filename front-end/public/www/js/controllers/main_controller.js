app.controller("MainController", function($scope, $timeout, $ionicModal, prefsService, apiService, $ionicSideMenuDelegate) {

  var cityData = [];

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

  $scope.createPrefs = function(prefs) {
    //Clear existing prefs and then we'll overwrite them on the following line.
    $scope.set_of_prefs = {};
    $scope.set_of_prefs = prefs;

    prefsService.save($scope.set_of_prefs);
    $scope.newPrefsModal.hide();
    $scope.matching(prefs);
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

  $scope.initData = function() {
    $scope.set_of_prefs = prefsService.all();
    apiService.init();
    cityData = sampleData;
  }

  $scope.matching = function(prefs) {
    var matchedCities = [];

    for (var i = 0; i < cityData.length; i++) {
      if(matchedCities.length === 0)
        matchedCities.push(cityData[i]["city"]);

      var found = false;

      for (var j = 0; j < matchedCities.length; j++) {
        if(matchedCities[j] === cityData[i]["city"])
          found = true;
      }

    if(!found)
      matchedCities.push(cityData[i]["city"]);
    }

    $scope.displayData = matchedCities;

    console.log(matchTemperature(prefs.heatcold, 5));
    matchActive(prefs.active);
    matchActivities(prefs.activities);
    matchCulture(prefs.culture);
    matchChildren(prefs.children);
    matchDog(prefs.dog);
    matchEntrepreneur(prefs.entrepreneur);
    matchPopulation(prefs.population);
    matchSports(prefs.sports);
    matchOccupation(prefs.occupation);
  }

  function matchTemperature(heatcold, i) {
    var isMatch = true;

    if((heatcold === "noheat" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] > 70 || cityData[i]["data"]["temperature"]["record_high"] > 90))
      isMatch = false;
    else if((heatcold === "nocold" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] > 40 || cityData[i]["data"]["temperature"]["record_high"] > 20))
      isMatch = false;

    return isMatch;
  }

  function matchActive(active) {

  }

  function matchActivities(activities) {

  }

  function matchCulture(culture) {

  }

  function matchChildren(children) {

  }

  function matchDog(dog) {

  }

  function matchEntrepreneur(entrepreneur) {

  }

  function matchPopulation(population) {

  }

  function matchSports(sports) {

  }

  function matchOccupation(occupation) {

  }

  // The remainder below should be uncommented in order to use live data.
  // $scope.initApiData = function() {
  //   apiService.init();
  //   cityData = apiService.data;
  //   getSalary("Denver");
  // }
  //
  // function getSalary(city) {
  //   $scope.set_of_prefs = prefsService.all();
  //
  //   if($scope.set_of_prefs.occupation !== undefined)
  //     for (var i = 0; i < areas.length; i++) {
  //       if(areas[i]["text"] === city) {
  //         console.log("Found " + city + "!");
  //         console.log(areas[i]["code"]);
  //         apiService.apiCall("http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM00" + areas[i]["code"] + "000000" + $scope.set_of_prefs.occupation + "04");
  //       }
  //     }
  //   // apiService.apiCall("http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM + AREA + 000000" + $scope.set_of_prefs.occupation + "04");
  // }
});
