var express = require('express');
var router = express.Router();
var request = require('request');
var knex = require('../db/knex');

router.get('/', function(req, res, next) {
  res.send('You\'ve reached the API!');
});

router.get('/makecalls', function(req, res, next) {
  knex('cities').select().orderBy('id').then(function(results) {
    knex('sports').select().then(function(results2) {
      knex('areas').select().then(function(results3) {
        var output = [];

        for (var i = 0; i < results.length; i++) {
          var newObj = {
            city: results[i]["city"].split('+').join(' '),
            data: {
              location: {
                state: results[i]["state"],
                state_abbreviation: results[i]["state_abbreviation"],
                latitude: results[i]["latitude"],
                longitude: results[i]["longitude"]
              },
              population: results[i]["population"],
              temperature: {},
              elevation: 0,
              trails: {},
              parks: {},
              museums: {},
              universities: {},
              sports: [],
              salary_api_url_head: "",
              salary_api_url_tail: "04",
              cpi: 0
            }
          }
          output.push(newObj)
        }

        for (var i = 0; i < results2.length; i++) {
          for (var j = 0; j < output.length; j++) {
            if(output[j]["city"] === results2[i]["city"])
              output[j]["data"]["sports"].push(results2[i]["team"] + " (" + results2[i]["league"].toUpperCase() + ")");
          }
        }

        for (var i = 0; i < results3.length; i++) {
          for (var j = 0; j < output.length; j++) {
            if(output[j]["city"] === results3[i]["text"]) {
              var numZeros = 7 - results3[i]["code"].length;
              var zeros = "";

              for (var k = 0; k < numZeros; k++) {
                zeros += '0';
              }

              output[j]["data"]["salary_api_url_head"] = "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM" + zeros + results3[i]["code"] + "000000";
            }
          }
        }

        // for (var i = 0; i < output.length; i++) {
          // Temperature
          request("http://api.wunderground.com/api/09199f63766e0a37/almanac/q/" + output[0]["data"]["location"]["state_abbreviation"] + "/" + output[0]["city"].split(' ').join('_') + ".json", function (error, response, body) {
            if (error) {
              console.log("Error!  Request failed - " + error);
            } else if (!error && response.statusCode === 200) {
              console.log(body);
              console.log(body["cpi_index"]);
              output[0]["data"]["cpi"] += 100;

              // Elevation
              request("http://ned.usgs.gov/epqs/pqs.php?x=" + output[0]["data"]["location"]["longitude"] + "&y=" + output[0]["data"]["location"]["latitude"] + "&units=Feet&output=json", function (error, response, body) {
                if (error) {
                  console.log("Error!  Request failed - " + error);
                } else if (!error && response.statusCode === 200) {
                  console.log(body);
                  console.log(body["cpi_index"]);
                  output[0]["data"]["cpi"] += 100;

                  // Trails
                  // headers: {"X-Mashape-Key": "vCAJivs8Hbmshar7q8mbiQyvzgxtp196VFJjsnU83v4lteo5fQ"}
                  // request("https://trailapi-trailapi.p.mashape.com/?q[city_cont]=" + output[i]["city"] + "&q[country_cont]=United+States&q[state_cont]=" + output[i]["data"]["location"]["state"] + "&radius=5", function (error, response, body) {
                  request("http://ned.usgs.gov/epqs/pqs.php?x=" + output[0]["data"]["location"]["longitude"] + "&y=" + output[0]["data"]["location"]["latitude"] + "&units=Feet&output=json", function (error, response, body) {
                    if (error) {
                      console.log("Error!  Request failed - " + error);
                    } else if (!error && response.statusCode === 200) {
                      console.log(body);
                      console.log(body["cpi_index"]);
                      output[0]["data"]["cpi"] += 100;

                      // Parks
                      request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=parks+in+" + output[0]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                        if (error) {
                          console.log("Error!  Request failed - " + error);
                        } else if (!error && response.statusCode === 200) {
                          console.log(body);
                          console.log(body["cpi_index"]);
                          output[0]["data"]["cpi"] += 100;

                          // Museums
                          request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=museums+in+" + output[0]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                            if (error) {
                              console.log("Error!  Request failed - " + error);
                            } else if (!error && response.statusCode === 200) {
                              console.log(body);
                              console.log(body["cpi_index"]);
                              output[0]["data"]["cpi"] += 100;

                              // Universities
                              request("https://maps.googleapis.com/maps/api/place/textsearch/json?query=universities+in+" + output[0]["city"] + "&key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w", function (error, response, body) {
                                if (error) {
                                  console.log("Error!  Request failed - " + error);
                                } else if (!error && response.statusCode === 200) {
                                  console.log(body);
                                  output[0]["data"]["cpi"] += 100;

                                  //Cost of living
                                  request("http://www.numbeo.com/api/indices?api_key=y8cjt0c06w8o3g&query=" + output[0]["city"], function (error, response, body) {
                                    if (error) {
                                      console.log("Error!  Request failed - " + error);
                                    } else if (!error && response.statusCode === 200) {
                                      console.log(body);
                                      console.log(body["cpi_index"]);
                                      output[0]["data"]["cpi"] += 100;
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

          // Cost of living
          // request("http://www.numbeo.com/api/indices?api_key=y8cjt0c06w8o3g&query=" + output[0]["city"], function (error, response, body) {
          //   if (error) {
          //     console.log("Error!  Request failed - " + error);
          //   } else if (!error && response.statusCode === 200) {
          //     console.log(body);
          //     console.log(body["cpi_index"]);
          //     output[0]["data"]["cpi"] += 100;
          //     res.json(output);
          //   }
          // });
        // }


      });
    });
  });
});

// function apiCall(url, headers) {
//   var getter = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     headers: headers
//   });
//
//   getter.done(function(response) {
//     console.log("Yep!");
//     console.log(response);
//     return response;
//   });
//
//   getter.fail(function(response) {
//     console.log("Nope!");
//     console.log(response);
//   });
// }

module.exports = router;
