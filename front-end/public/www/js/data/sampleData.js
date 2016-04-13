var sampleData = [{
	"city": "New York City",
	"image_url": "https://www.nationalgeographic.com/new-york-city-skyline-tallest-midtown-manhattan/assets/img/articleImg/01nyskyline1536.jpg",
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
		"number_of_universities": 20,
		"sports": ["Yankees (MLB)", "Rangers (NHL)", "Giants (NFL)", "Knicks (NBA)", "Jets (NFL)", "Nets (NBA)", "New York City FC (MLS)", "Islanders (NHL)", "Mets (MLB)", "Red Bulls (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0035620000000",
		"salary_api_url_tail": "04",
		"sample_salary": 153610,
		"cpi": 100
	}
}, {
	"city": "Los Angeles",
	"image_url": "https://vignette4.wikia.nocookie.net/olympians/images/b/b1/LA.jpeg/revision/latest?cb=20150303212850",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Angels (MLB)", "Clippers (NBA)", "Kings (NHL)", "Galaxy (MLS)", "Dodgers (MLB)", "Lakers (NBA)", "Rams (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0031084000000",
		"salary_api_url_tail": "04",
		"sample_salary": 124400,
		"cpi": 78.44484022357705
	}
}, {
	"city": "Chicago",
	"image_url": "httpss://upload.wikimedia.org/wikipedia/commons/5/5f/Chicago_from_North_Avenue_Beach_June_2015_panorama_2.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Blackhawks (NHL)", "Cubs (MLB)", "Fire (MLS)", "White Sox (MLB)", "Bulls (NBA)", "Bears (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0016980000000",
		"salary_api_url_tail": "04",
		"sample_salary": 114660,
		"cpi": 85.5899432753493
	}
}, {
	"city": "Houston",
	"image_url": "https://www.divorcelawyerhouston.pro/wp-content/uploads/2013/12/Houston.png",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Astros (MLB)", "Rockets (NBA)", "Texans (NFL)", "Dynamo (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0026420000000",
		"salary_api_url_tail": "04",
		"sample_salary": 134890,
		"cpi": 72.9882584449959
	}
}, {
	"city": "Philadelphia",
	"image_url": "https://photos.visitphilly.com/university-city-philadelphia-skyline-day-1400vp.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 1,
		"number_of_universities": 20,
		"sports": ["Flyers (NHL)", "Phillies (MLB)", "Union (MLS)", "Eagles (NFL)", "76ers (NBA)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0037964000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131250,
		"cpi": 82.4813340128985
	}
}, {
	"city": "Phoenix",
	"image_url": "https://www.wildnatureimages.com/images%203/Phoenix-skyline..jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Diamondbacks (MLB)", "Suns (NBA)", "Cardinals (NFL)", "Coyotes (NHL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0038060000000",
		"salary_api_url_tail": "04",
		"sample_salary": 107250,
		"cpi": 71.39484346525552
	}
}, {
	"city": "San Antonio",
	"image_url": "https://westwoodps.com/sites/default/files/styles/slideshow_slide_small/public/SanAntonioSkyline.jpg?itok=4xsKlLlS",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Spurs (NBA)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041700000000",
		"salary_api_url_tail": "04",
		"sample_salary": 111990,
		"cpi": 61.36243471854673
	}
}, {
	"city": "San Diego",
	"image_url": "https://www.paradisepoint.com/images/masthead/about-san-diego.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Padres (MLB)", "Chargers (NFL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041740000000",
		"salary_api_url_tail": "04",
		"sample_salary": 122410,
		"cpi": 76.46037840932142
	}
}, {
	"city": "Dallas",
	"image_url": "httpss://upload.wikimedia.org/wikipedia/commons/9/9a/Xvixionx_29_April_2006_Dallas_Skyline.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Cowboys (NFL)", "FC Dallas (MLS)", "Stars (NHL)", "Mavericks (NBA)", "Rangers (MLB)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0019124000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131920,
		"cpi": 69.35779351460366
	}
}, {
	"city": "San Jose",
	"image_url": "https://doubletree3.hilton.com/resources/media/dt/JOSE-DT/en_US/img/shared/full_page_image_gallery/main/dh_siliconvalley_2_677x380_FitToBoxSmallDimension_Center.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 20,
		"number_of_universities": 20,
		"sports": ["Earthquakes (MLS)", "Sharks (NHL)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0041940000000",
		"salary_api_url_tail": "04",
		"sample_salary": 164090,
		"cpi": 80.69729744464388
	}
}, {
	"city": "Denver",
	"image_url": "https://www.ucdenver.edu/academics/colleges/Engineering/Programs/bioengineering/Laboratories/BenningerLab/PublishingImages/Denver_skyline_589CC_rt.jpg",
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
		"number_of_parks": 20,
		"number_of_museums": 1,
		"number_of_universities": 20,
		"sports": ["Avalanche (NHL)", "Broncos (NFL)", "Rockies (MLB)", "Nuggets (NBA)", "Rapids (MLS)"],
		"salary_api_url_head": "http://api.bls.gov/publicAPI/v2/timeseries/data/OEUM0019740000000",
		"salary_api_url_tail": "04",
		"sample_salary": 131820,
		"cpi": 78.24825677891528
	}
}];
