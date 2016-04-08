- Temperature - http://api.wunderground.com/api/09199f63766e0a37/almanac/q/ + STATEABBREVIATION + / + CITY + .json
- Elevation - http://ned.usgs.gov/epqs/pqs.php?x= + LONGITUDE + &y= + LATITUDE + &units=Feet&output=json
- Trails - https://trailapi-trailapi.p.mashape.com/?q[city_cont]= + CITY + &q[country_cont]=United+States&q[state_cont]= + STATE + &radius=5
- Parks, museums, universities - https://maps.googleapis.com/maps/api/place/textsearch/json?query= + TYPE + +in+ + CITY + &key=AIzaSyBI9s3tzAqmyq24EaLFF0E9h-Up7Eo1A3w
- Population - populations.csv file in ./data
- Sports - team names hardcoded in ./data/sports

- Average salaries by occupation - http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM + AREA + 000000 + OCCUPATION + 04, areas: http://download.bls.gov/pub/time.series/oe/oe.area, occupations: http://download.bls.gov/pub/time.series/oe/oe.occupation
- Cost of living - http://api.bls.gov/publicAPI/v2/timeseries/data/ + SESSIONID, session ID: http://www.bls.gov/help/hlpforma.htm#CU
- Cost of living (better one) - http://www.numbeo.com/api/doc.jsp key: y8cjt0c06w8o3g

Denver: lat=39.739236, lng=-104.990251
