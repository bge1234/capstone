Sunday:
  - Salary and COL APIs:
    - Average salaries by occupation - http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM + AREA + 000000 + OCCUPATION + 04, areas: http://download.bls.gov/pub/time.series/oe/oe.area, occupations: http://download.bls.gov/pub/time.series/oe/oe.occupation
    - Cost of living - http://api.bls.gov/publicAPI/v2/timeseries/data/ + SESSIONID, session ID: http://www.bls.gov/help/hlpforma.htm#CU
    - Cost of living (better one) - http://www.numbeo.com/api/doc.jsp key: y8cjt0c06w8o3g
  - Parse and save incoming API data to service.
  - Test in iOS emulator to make sure CORS isn't an issue. Fix it if it is.

Monday: In main controller, iterate through saved data to match against user prefs. Use separate function for each API/set of APIs, and use master function to call them all.

Tuesday: Make it Tinder style with cards. On swipe right, it goes into a container to be reviewed later. Swipe left, and it's gone.

Tuesday/Wednesday: Final testing, cleanup, tweaking, and look/feel.
