Cost of living - http://api.bls.gov/publicAPI/v2/timeseries/data/ + SESSIONID, session ID: http://www.bls.gov/help/hlpforma.htm#CU
Cost of living (better one) - http://www.numbeo.com/api/doc.jsp key: y8cjt0c06w8o3g

Monday:
  - Set up back end and deploy to Heroku.
  - Do all API calls from back end (move out of service), triggered by the get route for my internal API call. Parse and send relevant data as a single JSON.
  - Move sports, areas, and city list from service to Postgres (Mongo?).
  - Make sure CORS isn't an issue in both Chrome and iPhone emulator. Fix it if it is.
  - In main controller, iterate through my JSON object to match data against user prefs. Use separate function for each category, then use one master function to call them all.

Tuesday: Make it Tinder style with cards. On swipe right, it goes into a container to be reviewed later. Swipe left, and it's gone.

Tuesday/Wednesday: Final testing, cleanup, tweaking, and look/feel.
