var express = require('express');
var router = express.Router();
var request = require('request');
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.send('You\'ve reached the API!');
});

router.get('/makecalls/:city', function(req, res, next) {
  knex('cities').select().where('city', req.params.city).then(function(result) {
    knex('sports').select().then(function(results2) {
      knex('areas').select().then(function(results3) {

        // Set up output object
        var output = {
          city: result[0]["city"].split('+').join(' '),
          data: {
            location: {
              state: result[0]["state"],
              state_abbreviation: result[0]["state_abbreviation"],
              latitude:  result[0]["latitude"],
              longitude:  result[0]["longitude"]
            },
            population:  result[0]["population"],
            temperature: {},
            elevation: 0,
            number_of_trails: 0,
            number_of_parks: 0,
            number_of_museums: 0,
            number_of_universities: 0,
            sports: [],
            salary_api_url_head: "",
            salary_api_url_tail: "04",
            cpi: 0
          }
        }

        // Load sports teams into output.data
        for (var i = 0; i < results2.length; i++) {
          if(results2[i]["city"] === output["city"])
            output["data"]["sports"].push(results2[i]["team"] + " (" + results2[i]["league"].toUpperCase() + ")");
        }

        // Load areas into output.data as parts of URL to be used ultimately in API call after getting occupation from user
        for (var i = 0; i < results3.length; i++) {
          if(results3[i]["text"] === output["city"]) {
            var numZeros = 7 - results3[i]["code"].length;
            var zeros = "";

            for (var k = 0; k < numZeros; k++) {
              zeros += '0';
            }

            output["data"]["salary_api_url_head"] = "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM" + zeros + results3[i]["code"] + "000000";
          }
        }

        // Load rest of API results into output.data
        // Temperature
        request("http://api.wunderground.com/api/09199f63766e0a37/almanac/q/" + output["data"]["location"]["state_abbreviation"] + "/" + output["city"].split(' ').join('_') + ".json", function (error, response, body) {
          if (error) {
            console.log("Error!  Request failed - " + error);
          }
          else if (!error && response.statusCode === 200) {
            var realbody = JSON.parse(body);
            output["data"]["temperature"] = {
              average_high: realbody["almanac"]["temp_high"]["normal"]["F"],
              average_low: realbody["almanac"]["temp_low"]["normal"]["F"],
              record_high: realbody["almanac"]["temp_high"]["record"]["F"],
              record_low: realbody["almanac"]["temp_low"]["record"]["F"]};

            // Elevation
            request("http://ned.usgs.gov/epqs/pqs.php?x=" + output["data"]["location"]["longitude"] + "&y=" + output["data"]["location"]["latitude"] + "&units=Feet&output=json", function (error, response, body) {
              if (error) {
                console.log("Error!  Request failed - " + error);
              }
              else if (!error && response.statusCode === 200) {
                var realbody = JSON.parse(body);
                output["data"]["elevation"] = realbody["USGS_Elevation_Point_Query_Service"]["Elevation_Query"]["Elevation"];

                // Trails
                request({uri: "https://trailapi-trailapi.p.mashape.com/?q[city_cont]=" + output["city"] + "&q[country_cont]=United+States&q[state_cont]=" + output["data"]["location"]["state"] + "&radius=5", headers: {"X-Mashape-Key": "vCAJivs8Hbmshar7q8mbiQyvzgxtp196VFJjsnU83v4lteo5fQ"}}, function (error, response, body) {
                  if (error) {
                    console.log("Error!  Request failed - " + error);
                  }
                  else if (!error && response.statusCode === 200) {
                    var realbody = JSON.parse(body);
                    output["data"]["number_of_trails"] = realbody["places"][0]["activities"].length;

                    // Parks
                    request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+" + output["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                      if (error) {
                        console.log("Error!  Request failed - " + error);
                      }
                      else if (!error && response.statusCode === 200) {
                        var realbody = JSON.parse(body);
                        output["data"]["number_of_parks"] = realbody["results"].length;

                        // Museums
                        request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=museums+in+" + output["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                          if (error) {
                            console.log("Error!  Request failed - " + error);
                          }
                          else if (!error && response.statusCode === 200) {
                            var realbody = JSON.parse(body);
                            output["data"]["number_of_museums"] = realbody["results"].length;

                            // Universities
                            request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=universities+in+" + output["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                              if (error) {
                                console.log("Error!  Request failed - " + error);
                              }
                              else if (!error && response.statusCode === 200) {
                                var realbody = JSON.parse(body);
                                output["data"]["number_of_universities"] = realbody["results"].length;

                                //Cost of living
                                request("http://www.numbeo.com/api/indices?api_key=y8cjt0c06w8o3g&query=" + output["city"], function (error, response, body) {
                                  if (error) {
                                    console.log("Error!  Request failed - " + error);
                                  }
                                  else if (!error && response.statusCode === 200) {
                                    var realbody = JSON.parse(body);
                                    output["data"]["cpi"] = realbody["cpi_index"];
                                    res.json(output);
                                  }
                                });
                              }
                            });
                          }
                        });
                      }
                    });
                  }
                });
              }
            });
          }
        });
      });
    });
  });
});

module.exports = router;
