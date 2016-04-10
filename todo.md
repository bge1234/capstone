Sunday and Monday:
  - Salary and COL APIs.
  - Save incoming data somewhere in service.
  - Test in iOS emulator to make sure CORS isn't an issue. Fix it if it is.
  - Back in main controller, parse saved data to match against user prefs. Use separate function for each API/set of APIs, and use master function to call them all.

- Average salaries by occupation - http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM + AREA + 000000 + OCCUPATION + 04, areas: http://download.bls.gov/pub/time.series/oe/oe.area, occupations: http://download.bls.gov/pub/time.series/oe/oe.occupation

- Cost of living - http://api.bls.gov/publicAPI/v2/timeseries/data/ + SESSIONID, session ID: http://www.bls.gov/help/hlpforma.htm#CU

- Cost of living (better one) - http://www.numbeo.com/api/doc.jsp key: y8cjt0c06w8o3g

Tuesday: Make it Tinder style with cards. On swipe right, it goes into a container to be reviewed later. Swipe left, and it's gone.
