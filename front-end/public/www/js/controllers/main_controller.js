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

    // for (var i = 0; i < cityData.length; i++) {
    //   if(matchedCities.length === 0)
    //     matchedCities.push(cityData[i]["city"]);
    //
    //   var found = false;
    //
    //   for (var j = 0; j < matchedCities.length; j++) {
    //     if(matchedCities[j] === cityData[i]["city"])
    //       found = true;
    //   }
    //
    // if(!found)
    //   matchedCities.push(cityData[i]["city"]);
    // }

    for (var i = 0; i < cityData.length; i++) {
      if(prefs.heatcold !== undefined) {
        if(matchTemperature(prefs.heatcold, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "temperature"
          });
        }
      }
      if(prefs.active !== undefined) {
        if(matchActive(prefs.active, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "active"
          });
        }
      }
      if(prefs.activities !== undefined) {
        if(matchActivities(prefs.activities, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "activities"
          });
        }
      }
      if(prefs.culture !== undefined) {
        if(matchCulture(prefs.culture, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "culture"
          });
        }
      }
      if(prefs.children !== undefined) {
        if(matchChildren(prefs.children, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "children"
          });
        }
      }
      if(prefs.dog !== undefined) {
        if(matchDog(prefs.dog, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "dog"
          });
        }
      }
      if(prefs.entrepreneur !== undefined) {
        if(matchEntrepreneur(prefs.entrepreneur, i))
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "entrepreneur"
          });
      }
      if(prefs.population !== undefined) {
        if(matchPopulation(prefs.population, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "population"
          });
        }
      }
      if(prefs.sports !== undefined) {
        if(matchSports(prefs.sports, i)) {
          matchedCities.push({
            city: cityData[i]["city"],
            reason: "sports"
          });
        }
      }
    }

    $scope.displayData = matchedCities;
    console.log(matchedCities);
  }

  function matchTemperature(heatcold, i) {
    var isMatch = true;

    if((heatcold === "noheat" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] > 70 || cityData[i]["data"]["temperature"]["record_high"] > 90))
      isMatch = false;
    else if((heatcold === "nocold" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] > 40 || cityData[i]["data"]["temperature"]["record_high"] > 20))
      isMatch = false;

    return isMatch;
  }

  function matchActive(active, i) {
    var isMatch = true;

    if(active === "true" && cityData[i]["data"]["number_of_trails"] === 0)
      isMatch = false;

    return isMatch;
  }

  function matchActivities(activities, i) {
    var isMatch = true;

    if((activities.running === true || activities.hiking === true || activities.cycling === true) && cityData[i]["data"]["number_of_trails"] === 0)
        isMatch = false;

    return isMatch;
  }

  function matchCulture(culture, i) {
    var isMatch = true;

    if(culture.art && cityData[i]["data"]["number_of_museums"] === 0)
        isMatch = false;

    return isMatch;
  }

  function matchChildren(children, i) {
    var isMatch = true;

    if(children === "true" && cityData[i]["data"]["number_of_universities"] === 0)
      isMatch = false;

    return isMatch;
  }

  function matchDog(dog, i) {
    var isMatch = true;

    if(dog === "true" && cityData[i]["data"]["number_of_parks"] === 0)
      isMatch = false;

    return isMatch;
  }

  function matchEntrepreneur(entrepreneur, i) {
    var isMatch = true;

    if(entrepreneur === "true" && cityData[i]["data"]["number_of_universities"] === 0)
      isMatch = false;

    return isMatch;
  }

  function matchPopulation(population, i) {
    var isMatch = true;

    if(population === "urban" && cityData[i]["data"]["population"] < 100000)
      isMatch = false;
    else if(population === "rural" && cityData[i]["data"]["population"] > 10000)
      isMatch = false;
    else if(population === "suburban" && (cityData[i]["data"]["population"] < 10000 || cityData[i]["data"]["population"] > 100000))
      isMatch = false;

    return isMatch;
  }

  function matchSports(sports, i) {
    var isMatch = false;

    // See which sports the city has
    var mlb, mls, nba, nfl, nhl = false;

    for (var j = 0; j < cityData[i]["data"]["sports"].length; j++) {
      var split = cityData[i]["data"]["sports"][j].split(' ');
      if(split[split.length - 1] === "(MLB)")
        mlb = true;
      if(split[split.length - 1] === "(MLS)")
        mls = true;
      if(split[split.length - 1] === "(NBA)")
        nba = true;
      if(split[split.length - 1] === "(NFL)")
        nfl = true;
      if(split[split.length - 1] === "(NHL)")
        nhl = true;
    }

    // Match against user prefs
    if(sports.baseball === true && mlb)
      isMatch = true;
    if(sports.soccer === true && mls)
      isMatch = true;
    if(sports.basketball === true && nba)
      isMatch = true;
    if(sports.football === true && nfl)
      isMatch = true;
    if(sports.hockey === true && nhl)
      isMatch = true;

    return isMatch;
  }

  function calculateFinance(occupationCode, i) {
    //This function will have to be re-written in order to use live data.  The API call should be made to cityData[i]["data"]["salary_api_url_head"] + occupationCode + cityData[i]["data"]["salary_api_url_head"]

    var highlow = "";
    var comfortLevel = "";

    if(cityData[i]["data"]["cpi"] > 75)
      highlow = "a high";
    else if(cityData[i]["data"]["cpi"] < 45)
      highlow = "a low";
    else
      highlow = "an average";

    if(cityData[i]["data"]["sample_salary"] > 90000)
      comfortLevel = "should be more than comfortable there financially";
    else if(cityData[i]["data"]["sample_salary"] < 30000)
      comfortLevel = "might struggle there financially";
    else
      comfortLevel = "should be relatively comfortable there financially";

    return cityData[i]["city"] + " has " + highlow + " cost of living. At an average salary of $" + cityData[i]["data"]["sample_salary"] + ", you " + comfortLevel + ".";
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
