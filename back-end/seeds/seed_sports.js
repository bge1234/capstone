
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('sports').del(),

    knex('sports').insert({id: 1, colName: 'rowValue'}),
  );
};

{
	city: "Baltimore",
	team: "Orioles",
  league: "mlb"
},{
	city: "Boston",
	team: "Red Sox",
  league: "mlb"
},{
	city: "New York City",
	team: "Yankees",
  league: "mlb"
},{
	city: "Tampa Bay",
	team: "Rays",
  league: "mlb"
},{
	city: "Toronto",
	team: "Blue Jays",
  league: "mlb"
},{
	city: "Chicago",
	team: "White Sox",
  league: "mlb"
},{
	city: "Cleveland",
	team: "Indians",
  league: "mlb"
},{
	city: "Detroit",
	team: "Tigers",
  league: "mlb"
},{
	city: "Kansas City",
	team: "Royals",
  league: "mlb"
},{
	city: "Minneapolis",
	team: "Twins",
  league: "mlb"
},{
	city: "Houston",
	team: "Astros",
  league: "mlb"
},{
	city: "Los Angeles",
	team: "Angels",
  league: "mlb"
},{
	city: "Oakland",
	team: "Athletics",
  league: "mlb"
},{
	city: "Seattle",
	team: "Mariners",
  league: "mlb"
},{
	city: "Arlington",
	team: "Rangers",
  league: "mlb"
},{
	city: "Dallas",
	team: "Rangers",
  league: "mlb"
},{
	city: "Fort Worth",
	team: "Rangers",
  league: "mlb"
},{
	city: "Atlanta",
	team: "Braves",
  league: "mlb"
},{
	city: "Miami",
	team: "Marlins",
  league: "mlb"
},{
	city: "New York City",
	team: "Mets",
  league: "mlb"
},{
	city: "Philadelphia",
	team: "Phillies"
},{
	city: "Washington",
	team: "Nationals"
},{
	city: "Chicago",
	team: "Cubs"
},{
	city: "Cincinnati",
	team: "Reds"
},{
	city: "Milwaukee",
	team: "Brewers"
},{
	city: "Pittsburgh",
	team: "Pirates"
},{
	city: "Saint Louis",
	team: "Cardinals"
},{
	city: "Phoenix",
	team: "Diamondbacks"
},{
	city: "Denver",
	team: "Rockies"
},{
	city: "Los Angeles",
	team: "Dodgers"
},{
	city: "San Diego",
	team: "Padres"
},{
	city: "San Francisco",
	team: "Giants"
}];

var mls = [{
	city: "Chicago",
	team: "Fire"
},{
	city: "Columbus",
	team: "Crew"
},{
	city: "Washington",
	team: "D.C. United"
},{
	city: "Montreal",
	team: "Impact"
},{
	city: "Boston",
	team: "Revolution"
},{
	city: "Providence",
	team: "Revolution"
},{
	city: "New York City",
	team: "New York City FC"
},{
	city: "New York City",
	team: "Red Bulls"
},{
	city: "Newark",
	team: "Red Bulls"
},{
	city: "Orlando",
	team: "Orlando City SC"
},{
	city: "Philadelphia",
	team: "Union"
},{
	city: "Toronto",
	team: "Toronto FC"
},{
	city: "Denver",
	team: "Rapids"
},{
	city: "Dallas",
	team: "FC Dallas"
},{
	city: "Houston",
	team: "Dynamo"
},{
	city: "Los Angeles",
	team: "Galaxy"
},{
	city: "Portland",
	team: "Timbers"
},{
	city: "Salt Lake City",
	team: "Real Salt Lake"
},{
	city: "San Jose",
	team: "Earthquakes"
},{
	city: "Seattle",
	team: "Sounders"
},{
	city: "Kansas City",
	team: "Sporting Kansas City"
},{
	city: "Vancouver",
	team: "Whitecaps"
}];

var nba = [{
	city: "Boston",
	team: "Celtics"
},{
	city: "New York City",
	team: "Nets"
},{
	city: "New York City",
	team: "Knicks"
},{
	city: "Philadelphia",
	team: "76ers"
},{
	city: "Toronto",
	team: "Raptors"
},{
	city: "Chicago",
	team: "Bulls"
},{
	city: "Cleveland",
	team: "Cavaliers"
},{
	city: "Detroit",
	team: "Pistons"
},{
	city: "Indianapolis",
	team: "Pacers"
},{
	city: "Milwaukee",
	team: "Bucks"
},{
	city: "Atlanta",
	team: "Hawks"
},{
	city: "Charlotte",
	team: "Hornets"
},{
	city: "Miami",
	team: "Heat"
},{
	city: "Orlando",
	team: "Magic"
},{
	city: "Washington",
	team: "Wizards"
},{
	city: "Denver",
	team: "Nuggets"
},{
	city: "Minneapolis",
	team: "Timberwolves"
},{
	city: "Oklahoma City",
	team: "Thunder"
},{
	city: "Portland",
	team: "Trail Blazers"
},{
	city: "Salt Lake City",
	team: "Jazz"
},{
	city: "Oakland",
	team: "Warriors"
},{
	city: "Los Angeles",
	team: "Clippers"
},{
	city: "Los Angeles",
	team: "Lakers"
},{
	city: "Phoenix",
	team: "Suns"
},{
	city: "Sacramento",
	team: "Kings"
},{
	city: "Dallas",
	team: "Mavericks"
},{
	city: "Houston",
	team: "Rockets"
},{
	city: "Memphis",
	team: "Grizzlies"
},{
	city: "New Orleans",
	team: "Pelicans"
},{
	city: "San Antonio",
	team: "Spurs"
}];

var nfl = [{
	city: "Buffalo",
	team: "Bills"
},{
	city: "Miami",
	team: "Dolphins"
},{
	city: "Boston",
	team: "Patriots"
},{
	city: "Providence",
	team: "Patriots"
},{
	city: "New York City",
	team: "Jets"
},{
	city: "Baltimore",
	team: "Ravens"
},{
	city: "Cincinnati",
	team: "Bengals"
},{
	city: "Cleveland",
	team: "Browns"
},{
	city: "Pittsburgh",
	team: "Steelers"
},{
	city: "Houston",
	team: "Texans"
},{
	city: "Indianapolis",
	team: "Colts"
},{
	city: "Jacksonville",
	team: "Jaguars"
},{
	city: "Nashville",
	team: "Titans"
},{
	city: "Denver",
	team: "Broncos"
},{
	city: "Kansas City",
	team: "Chiefs"
},{
	city: "Oakland",
	team: "Raiders"
},{
	city: "San Diego",
	team: "Chargers"
},{
	city: "Dallas",
	team: "Cowboys"
},{
	city: "New York City",
	team: "Giants"
},{
	city: "Philadelphia",
	team: "Eagles"
},{
	city: "Washington",
	team: "Redskins"
},{
	city: "Chicago",
	team: "Bears"
},{
	city: "Detroit",
	team: "Lions"
},{
	city: "Green Bay",
	team: "Packers"
},{
	city: "Minneapolis",
	team: "Vikings"
},{
	city: "Atlanta",
	team: "Falcons"
},{
	city: "Charlotte",
	team: "Panthers"
},{
	city: "New Orleans",
	team: "Saints"
},{
	city: "Tampa Bay",
	team: "Buccaneers"
},{
	city: "Phoenix",
	team: "Cardinals"
},{
	city: "Los Angeles",
	team: "Rams"
},{
	city: "San Francisco",
	team: "49ers"
},{
	city: "Seattle",
	team: "Seahawks"
}];

var nhl = [{
	city: "Boston",
	team: "Bruins"
},{
	city: "Buffalo",
	team: "Sabres"
},{
	city: "Detroit",
	team: "Red Wings"
},{
	city: "Miami",
	team: "Panthers"
},{
	city: "Fort Lauderdale",
	team: "Panthers"
},{
	city: "Montreal",
	team: "Canadiens"
},{
	city: "Ottawa",
	team: "Senators"
},{
	city: "Tampa Bay",
	team: "Lightning"
},{
	city: "Toronto",
	team: "Maple Leafs"
},{
	city: "Raleigh",
	team: "Hurricanes"
},{
	city: "Columbus",
	team: "Blue Jackets"
},{
	city: "Newark",
	team: "Devils"
},{
	city: "New York City",
	team: "Islanders"
},{
	city: "New York City",
	team: "Rangers"
},{
	city: "Philadelphia",
	team: "Flyers"
},{
	city: "Pittsburgh",
	team: "Penguins"
},{
	city: "Washington",
	team: "Capitals"
},{
	city: "Anaheim",
	team: "Ducks"
},{
	city: "Phoenix",
	team: "Coyotes"
},{
	city: "Calgary",
	team: "Flames"
},{
	city: "Edmonton",
	team: "Oilers"
},{
	city: "Los Angeles",
	team: "Kings"
},{
	city: "San Jose",
	team: "Sharks"
},{
	city: "Vancouver",
	team: "Canucks"
},{
	city: "Chicago",
	team: "Blackhawks"
},{
	city: "Denver",
	team: "Avalanche"
},{
	city: "Dallas",
	team: "Stars"
},{
	city: "Saint Paul",
	team: "Wild"
},{
	city: "Minneapolis",
	team: "Wild"
},{
	city: "Nashville",
	team: "Predators"
},{
	city: "Saint Louis",
	team: "Blues"
},{
	city: "Winnipeg",
	team: "Jets"
}];
