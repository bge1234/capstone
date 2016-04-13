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
      matchedCities.push({
        city: cityData[i]["city"],
        match_reasons: [],
        fail_reasons: [],
        financial: calculateFinance(prefs.occupation, i)
      });
    }

    for (var i = 0; i < cityData.length; i++) {
      if(prefs.heatcold !== undefined) {
        if(matchTemperature(prefs.heatcold, i)) {
          matchedCities[i]["match_reasons"].push("Matches your temperature preferences");
        }
        else {
          matchedCities[i]["fail_reasons"].push("Does not match your temperature preferences");
        }
      }
      if(prefs.activities !== undefined) {
        if(matchActivities(prefs.activities, i))
          matchedCities[i]["match_reasons"].push("Trails for walking, running, hiking, cycling");
        else
          matchedCities[i]["fail_reasons"].push("No trails for walking, running, hiking, or cycling");
      }
      if(prefs.culture !== undefined) {
        if(matchCulture(prefs.art, i))
          matchedCities[i]["match_reasons"].push("Museums where you can view art");
        else
          matchedCities[i]["fail_reasons"].push("No museums where you can view art");
      }
      if(prefs.children !== undefined) {
        if(matchChildren(prefs.children, i))
          matchedCities[i]["match_reasons"].push("Universities available for your children to attend");
        else
          matchedCities[i]["fail_reasons"].push("No universities for your children to attend");
      }
      if(prefs.dog !== undefined) {
        if(matchDog(prefs.dog, i))
          matchedCities[i]["match_reasons"].push("Parks where you can take your dog");
        else
          matchedCities[i]["fail_reasons"].push("No parks where ou can take your dog");
      }
      if(prefs.entrepreneur !== undefined) {
        if(matchEntrepreneur(prefs.entrepreneur, i))
          matchedCities[i]["match_reasons"].push("Good supply of university graduates whom you may want to employ at your business");
        else
          matchedCities[i]["fail_reasons"].push("No universities from which to hire graduates");
      }
      if(prefs.population !== undefined) {
        if(matchPopulation(prefs.population, i))
          matchedCities[i]["match_reasons"].push("Population maches your preferences");
        else
          matchedCities[i]["fail_reasons"].push("Population does not match your preferences");
      }
      if(prefs.sports !== undefined) {
        if(matchSports(prefs.sports, i))
          matchedCities[i]["match_reasons"].push("Teams from your preferred pro sports");
        else
          matchedCities[i]["fail_reasons"].push("No teams from your preferred pro sports");
      }
    }

    // Remove cities that have more fails than matches.
    var newArray = [];

    for (var i = 0; i < matchedCities.length; i++) {
      if(matchedCities[i]["match_reasons"] > matchedCities[i]["fail_reasons"])
        newArray.push(matchedCities[i]);
    }

    matchedCities = newArray;

    $scope.displayData = matchedCities;
  }

  function matchTemperature(heatcold, i) {
    var isMatch = true;

    if((heatcold === "noheat" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] > 70 || cityData[i]["data"]["temperature"]["record_high"] > 90))
      isMatch = false;
    else if((heatcold === "nocold" || heatcold === "neither") && (cityData[i]["data"]["temperature"]["average_high"] < 40 || cityData[i]["data"]["temperature"]["record_low"] < 20))
      isMatch = false;

    return isMatch;
  }

  function matchActivities(activities, i) {
    var isMatch = true;

    if((activities.running === true || activities.hiking === true || activities.cycling === true) && cityData[i]["data"]["number_of_trails"] === 0)
        isMatch = false;

    return isMatch;
  }

  function matchArt(art, i) {
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
    var salary = cityData[i]["data"]["sample_salary"];
    var salaryleft = 0;
    var salaryright = 0;

    if(salary > 999) {
      salaryleft = Math.floor(salary / 1000);
      salaryright = salary - (salaryleft * 1000);
      salary = "$" + salaryleft + "," + salaryright;
    }

    if(cityData[i]["data"]["cpi"] > 75)
      highlow = "High";
    else if(cityData[i]["data"]["cpi"] < 45)
      highlow = "Low";
    else
      highlow = "Average";

    if(cityData[i]["data"]["sample_salary"] > 90000)
      comfortLevel = ", you should be more than comfortable financially.";
    else if(cityData[i]["data"]["sample_salary"] < 30000)
      comfortLevel = ", you may struggle financially.";
    else
      comfortLevel = ", you should be relatively comfortable financially.";

    return highlow + " cost of living. At an average salary of " + salary + comfortLevel;
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
