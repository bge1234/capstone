// Todo:
// Sunday and Monday:
//   - Save incoming data somewhere in service.
//   - Test in iOS emulator to make sure CORS isn't an issue. Fix it if it is.
//   - Back in main controller, parse saved data to match against user prefs. Use separate function for each API/set of APIs, and use master function to call them all.
// Tuesday: Make it Tinder style with cards. On swipe right, it goes into a container to be reviewed later. Swipe left, and it's gone.

app.factory('apiService', function() {
  return {
    cities: [{
      city: "New+York+City",
      state: "New+York",
      state_abbreviation: "NY",
      latitude: "40.712784",
      longitude: "-74.005941"
    },{
      city: "Los+Agneles",
      state: "California",
      state_abbreviation: "CA",
      latitude: "34.052234",
      longitude: "-118.243685"
    },{
      city: "Chicago",
      state: "Illinois",
      state_abbreviation: "IL",
      latitude: "41.878114",
      longitude: "-87.629798"
    },{
      city: "Houston",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.760427",
      longitude: "-95.369803"
    },{
      city: "Philadelphia",
      state: "Pennsylvania",
      state_abbreviation: "PA",
      latitude: "39.952584",
      longitude: "-75.165222"
    },{
      city: "Phoenix",
      state: "Arizona",
      state_abbreviation: "AZ",
      latitude: "33.448377",
      longitude: "-112.074037"
    },{
      city: "San+Antonio",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "29.424122",
      longitude: "-98.493628"
    },{
      city: "San+Diego",
      state: "California",
      state_abbreviation: "CA",
      latitude: "32.715738",
      longitude: "-117.161084"
    },{
      city: "Dallas",
      state: "Texas",
      state_abbreviation: "TX",
      latitude: "32.776664",
      longitude: "-96.796988"
    },{
      city: "San+Jose",
      state: "California",
      state_abbreviation: "CA",
      latitude: "37.338208",
      longitude: "-121.886329"
    },{
      city: "Denver",
      state: "Colorado",
      state_abbreviation: "CO",
      latitude: "39.739236",
      longitude: "-104.990251"
    }],
    init: function() {
      for (var i = 0; i < this.cities.length; i++) {
        // Temperature
        // this.getApi("http://api.wunderground.com/api/09199f63766e0a37/almanac/q/" + this.cities[i]["state_abbreviation"] + "/" + this.cities[i]["city"] + ".json");

        //Elevation
        // this.getApi("http://ned.usgs.gov/epqs/pqs.php?x=" + this.cities[i]["longitude"] + "&y=" + this.cities[i]["latitude"] + "&units=Feet&output=json");

        //Trails
        // this.getApi("https://trailapi-trailapi.p.mashape.com/?q[city_cont]=" + this.cities[i]["city"] + "&q[country_cont]=United+States&q[state_cont]=" + this.cities[i]["state"] + "&radius=5", {"X-Mashape-Key": "vCAJivs8Hbmshar7q8mbiQyvzgxtp196VFJjsnU83v4lteo5fQ"});

        //Parks
        // this.getApi("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");

        //Museums
        // this.getApi("https://maps.googleapis.com/maps/api/place/textsearch/json?query=museums+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");

        //Universities
        // this.getApi("https://maps.googleapis.com/maps/api/place/textsearch/json?query=universities+in+" + this.cities[i]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w");
      }
    },
    getApi: function(url, headers) {
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
