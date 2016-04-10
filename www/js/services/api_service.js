app.factory('apiService', function() {
  return {
    cities: [{
      city: "New+York+City",
      state: "New+York",
      state_abbreviation: "NY",
      latitude: "40.712784",
      longitude: "-74.005941",
      population: 8336697
    },{
      city: "Los+Angeles",
      state: "California",
      state_abbreviation: "CA",
      latitude: "34.052234",
      longitude: "-118.243685",
      population: 3857799
    },{
      city: "Chicago",
      state: "Illinois",
      state_abbreviation: "IL",
      latitude: "41.878114",
      longitude: "-87.629798",
      population: 2714856
    },{
      city: "Houston",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.760427",
      longitude: "-95.369803",
      population: 2160821
    },{
      city: "Philadelphia",
      state: "Pennsylvania",
      state_abbreviation: "PA",
      latitude: "39.952584",
      longitude: "-75.165222",
      population: 1547607
    },{
      city: "Phoenix",
      state: "Arizona",
      state_abbreviation: "AZ",
      latitude: "33.448377",
      longitude: "-112.074037",
      population: 1488750
    },{
      city: "San+Antonio",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.424122",
      longitude: "-98.493628",
      population: 1382951
    },{
      city: "San+Diego",
      state: "California",
      state_abbreviation: "CA",
      latitude: "32.715738",
      longitude: "-117.161084",
      population: 1338348
    },{
      city: "Dallas",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "32.776664",
      longitude: "-96.796988",
      population: 1241162
    },{
      city: "San+Jose",
      state: "California",
      state_abbreviation: "CA",
      latitude: "37.338208",
      longitude: "-121.886329",
      population: 982765
    },{
      city: "Denver",
      state: "Colorado",
      state_abbreviation: "CO",
      latitude: "39.739236",
      longitude: "-104.990251",
      population: 634265
    }],
    init: function() {
      for (var i = 0; i < this.cities.length; i++) {
        // Temperature
        // this.apiCall("http://api.wunderground.com/api/09199f63766e0a37/almanac/q/" + this.cities[i]["state_abbreviation"] + "/" + this.cities[i]["city"] + ".json");

        // Elevation
        // this.apiCall("http://ned.usgs.gov/epqs/pqs.php?x=" + this.cities[i]["longitude"] + "&y=" + this.cities[i]["latitude"] + "&units=Feet&output=json");

        //Trails
        // this.apiCall("https://trailapi-trailapi.p.mashape.com/?q[city_cont]=" + this.cities[i]["city"] + "&q[country_cont]=United+States&q[state_cont]=" + this.cities[i]["state"] + "&radius=5", {"X-Mashape-Key": "vCAJivs8Hbmshar7q8mbiQyvzgxtp196VFJjsnU83v4lteo5fQ"});

        //Parks
        // this.apiCall("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");

        //Museums
        // this.apiCall("https://maps.googleapis.com/maps/api/place/textsearch/json?query=museums+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");

        //Universities
        // this.apiCall("https://maps.googleapis.com/maps/api/place/textsearch/json?query=universities+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");

        //Populations
        // console.log(this.cities[i]["population"]);

        //Sports
        // console.log(this.cities[i]["city"].split('+').join(' ') + ':');
        // for (var j = 0; j < mlb.length; j++) {
        //   if(mlb[j]["city"] === this.cities[i]["city"].split('+').join(' '))
        //     console.log("  " + mlb[j]["team"] + " (MLB)");
        // }
        // for (var j = 0; j < mls.length; j++) {
        //   if(mls[j]["city"] === this.cities[i]["city"].split('+').join(' '))
        //     console.log("  " + mls[j]["team"] + " (MLS)");
        // }
        // for (var j = 0; j < nba.length; j++) {
        //   if(nba[j]["city"] === this.cities[i]["city"].split('+').join(' '))
        //     console.log("  " + nba[j]["team"] + " (NBA)");
        //
        // }
        // for (var j = 0; j < nfl.length; j++) {
        //   if(nfl[j]["city"] === this.cities[i]["city"].split('+').join(' '))
        //     console.log("  " + nfl[j]["team"] + " (NFL)");
        // }
        // for (var j = 0; j < nhl.length; j++) {
        //   if(nhl[j]["city"] === this.cities[i]["city"].split('+').join(' '))
        //     console.log("  " + nhl[j]["team"] + " (NHL)");
        // }
      }
    },
    apiCall: function(url, headers) {
      var getter = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        headers: headers
      });

      getter.done(function(response) {
        console.log("Yep!");
        console.log(response);
      });

      getter.fail(function(response) {
        console.log("Nope!");
      });
    }
  }
});
