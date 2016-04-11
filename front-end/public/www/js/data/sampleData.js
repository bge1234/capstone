var sampleData = [{
	"city": "New York City",
	"data": {
		"location": {
			"state": "New+York",
			"state_abbreviation": "NY",
			"latitude": "40.712784",
			"longitude": "-74.005941"
		},
		"population": 8336697,
		"temperature": {
			"average_high": "60",
			"average_low": "43",
			"record_high": "84",
			"record_low": "24"
		},
		"elevation": 42.756276,
		"number_of_trails": 1,
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 0,
		"sports": ["Yankees (MLB)", "Rangers (NHL)", "Giants (NFL)", "Knicks (NBA)", "Jets (NFL)", "Nets (NBA)", "New York City FC (MLS)", "Islanders (NHL)", "Mets (MLB)", "Red Bulls (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0035620000000",
		"salary_api_url_tail": "04",
		"sample_salary": 153610,
		"cpi": 100
	}
}, {
	"city": "Los Angeles",
	"data": {
		"location": {
			"state": "California",
			"state_abbreviation": "CA",
			"latitude": "34.052234",
			"longitude": "-118.243685"
		},
		"population": 3857799,
		"temperature": {
			"average_high": "72",
			"average_low": "53",
			"record_high": "90",
			"record_low": "40"
		},
		"elevation": 290.562712,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Angels (MLB)", "Clippers (NBA)", "Kings (NHL)", "Galaxy (MLS)", "Dodgers (MLB)", "Lakers (NBA)", "Rams (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0031084000000",
		"salary_api_url_tail": "04",
		"sample_salary": 124400,
		"cpi": 78.44484022357705
	}
}, {
	"city": "Chicago",
	"data": {
		"location": {
			"state": "Illinois",
			"state_abbreviation": "IL",
			"latitude": "41.878114",
			"longitude": "-87.629798"
		},
		"population": 2714856,
		"temperature": {
			"average_high": "57",
			"average_low": "40",
			"record_high": "91",
			"record_low": "25"
		},
		"elevation": 594.823492,
		"number_of_trails": 1,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Blackhawks (NHL)", "Cubs (MLB)", "Fire (MLS)", "White Sox (MLB)", "Bulls (NBA)", "Bears (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0016980000000",
		"salary_api_url_tail": "04",
		"sample_salary": 114660,
		"cpi": 85.5899432753493
	}
}, {
	"city": "Houston",
	"data": {
		"location": {
			"state": "Texas",
			"state_abbreviation": "TX",
			"latitude": "29.760427",
			"longitude": "-95.369803"
		},
		"population": 2160821,
		"temperature": {
			"average_high": "79",
			"average_low": "58",
			"record_high": "89",
			"record_low": "38"
		},
		"elevation": 47.447365,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Astros (MLB)", "Rockets (NBA)", "Texans (NFL)", "Dynamo (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0026420000000",
		"salary_api_url_tail": "04",
		"sample_salary": 134890,
		"cpi": 72.9882584449959
	}
}, {
	"city": "Philadelphia",
	"data": {
		"location": {
			"state": "Pennsylvania",
			"state_abbreviation": "PA",
			"latitude": "39.952584",
			"longitude": "-75.165222"
		},
		"population": 1547607,
		"temperature": {
			"average_high": "60",
			"average_low": "40",
			"record_high": "82",
			"record_low": "28"
		},
		"elevation": 41.724972,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Flyers (NHL)", "Phillies (MLB)", "Union (MLS)", "Eagles (NFL)", "76ers (NBA)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0037964000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131250,
		"cpi": 82.4813340128985
	}
}, {
	"city": "Phoenix",
	"data": {
		"location": {
			"state": "Arizona",
			"state_abbreviation": "AZ",
			"latitude": "33.448377",
			"longitude": "-112.074037"
		},
		"population": 1488750,
		"temperature": {
			"average_high": "84",
			"average_low": "59",
			"record_high": "98",
			"record_low": "39"
		},
		"elevation": 1084.517732,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Diamondbacks (MLB)", "Suns (NBA)", "Cardinals (NFL)", "Coyotes (NHL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0038060000000",
		"salary_api_url_tail": "04",
		"sample_salary": 107250,
		"cpi": 71.39484346525552
	}
}, {
	"city": "San Antonio",
	"data": {
		"location": {
			"state": "Texas",
			"state_abbreviation": "TX",
			"latitude": "29.424122",
			"longitude": "-98.493628"
		},
		"population": 1382951,
		"temperature": {
			"average_high": "80",
			"average_low": "57",
			"record_high": "99",
			"record_low": "37"
		},
		"elevation": 649.123805,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Spurs (NBA)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041700000000",
		"salary_api_url_tail": "04",
		"sample_salary": 111990,
		"cpi": 61.36243471854673
	}
}, {
	"city": "San Diego",
	"data": {
		"location": {
			"state": "California",
			"state_abbreviation": "CA",
			"latitude": "32.715738",
			"longitude": "-117.161084"
		},
		"population": 1338348,
		"temperature": {
			"average_high": "67",
			"average_low": "55",
			"record_high": "90",
			"record_low": "44"
		},
		"elevation": 52.064545,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Padres (MLB)", "Chargers (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041740000000",
		"salary_api_url_tail": "04",
		"sample_salary": 122410,
		"cpi": 76.46037840932142
	}
}, {
	"city": "Dallas",
	"data": {
		"location": {
			"state": "Texas",
			"state_abbreviation": "TX",
			"latitude": "32.776664",
			"longitude": "-96.796988"
		},
		"population": 1241162,
		"temperature": {
			"average_high": "73",
			"average_low": "53",
			"record_high": "82",
			"record_low": "39"
		},
		"elevation": 450.159959,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Cowboys (NFL)", "FC Dallas (MLS)", "Stars (NHL)", "Mavericks (NBA)", "Rangers (MLB)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0019124000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131920,
		"cpi": 69.35779351460366
	}
}, {
	"city": "San Jose",
	"data": {
		"location": {
			"state": "California",
			"state_abbreviation": "CA",
			"latitude": "37.338208",
			"longitude": "-121.886329"
		},
		"population": 982765,
		"temperature": {
			"average_high": "69",
			"average_low": "48",
			"record_high": "91",
			"record_low": "32"
		},
		"elevation": 80.543954,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Earthquakes (MLS)", "Sharks (NHL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041940000000",
		"salary_api_url_tail": "04",
		"sample_salary": 164090,
		"cpi": 80.69729744464388
	}
}, {
	"city": "Denver",
	"data": {
		"location": {
			"state": "Colorado",
			"state_abbreviation": "CO",
			"latitude": "39.739236",
			"longitude": "-104.990251"
		},
		"population": 634265,
		"temperature": {
			"average_high": "55",
			"average_low": "30",
			"record_high": "77",
			"record_low": "10"
		},
		"elevation": 5238.037109,
		"number_of_trails": 2,
		"number_of_parks": 0,
		"number_of_museums": 0,
		"number_of_universities": 0,
		"sports": ["Avalanche (NHL)", "Broncos (NFL)", "Rockies (MLB)", "Nuggets (NBA)", "Rapids (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0019740000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131820,
		"cpi": 78.24825677891528
	}
}];
