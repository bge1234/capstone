exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('sports').del(),

    knex('sports').insert({
      city: "Baltimore",
      team: "Orioles",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Boston",
      team: "Red Sox",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Yankees",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Tampa Bay",
      team: "Rays",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Toronto",
      team: "Blue Jays",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "White Sox",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Cleveland",
      team: "Indians",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Detroit",
      team: "Tigers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Kansas City",
      team: "Royals",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Minneapolis",
      team: "Twins",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Houston",
      team: "Astros",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Angels",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Oakland",
      team: "Athletics",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Seattle",
      team: "Mariners",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Arlington",
      team: "Rangers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Dallas",
      team: "Rangers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Fort Worth",
      team: "Rangers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Atlanta",
      team: "Braves",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Miami",
      team: "Marlins",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Mets",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Philadelphia",
      team: "Phillies",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Washington",
      team: "Nationals",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "Cubs",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Cincinnati",
      team: "Reds",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Milwaukee",
      team: "Brewers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Pittsburgh",
      team: "Pirates",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Saint Louis",
      team: "Cardinals",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Phoenix",
      team: "Diamondbacks",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Denver",
      team: "Rockies",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Dodgers",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "San Diego",
      team: "Padres",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "San Francisco",
      team: "Giants",
      league: "mlb"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "Fire",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Columbus",
      team: "Crew",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Washington",
      team: "D.C. United",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Montreal",
      team: "Impact",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Boston",
      team: "Revolution",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Providence",
      team: "Revolution",
      league: "mls"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "New York City FC",
      league: "mls"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Red Bulls",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Newark",
      team: "Red Bulls",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Orlando",
      team: "Orlando City SC",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Philadelphia",
      team: "Union",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Toronto",
      team: "Toronto FC",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Denver",
      team: "Rapids",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Dallas",
      team: "FC Dallas",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Houston",
      team: "Dynamo",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Galaxy",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Portland",
      team: "Timbers",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Salt Lake City",
      team: "Real Salt Lake",
      league: "mls"
    }),
    knex('sports').insert({
      city: "San Jose",
      team: "Earthquakes",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Seattle",
      team: "Sounders",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Kansas City",
      team: "Sporting Kansas City",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Vancouver",
      team: "Whitecaps",
      league: "mls"
    }),
    knex('sports').insert({
      city: "Boston",
      team: "Celtics",
      league: "nba"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Nets",
      league: "nba"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Knicks",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Philadelphia",
      team: "76ers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Toronto",
      team: "Raptors",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "Bulls",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Cleveland",
      team: "Cavaliers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Detroit",
      team: "Pistons",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Indianapolis",
      team: "Pacers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Milwaukee",
      team: "Bucks",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Atlanta",
      team: "Hawks",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Charlotte",
      team: "Hornets",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Miami",
      team: "Heat",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Orlando",
      team: "Magic",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Washington",
      team: "Wizards",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Denver",
      team: "Nuggets",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Minneapolis",
      team: "Timberwolves",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Oklahoma City",
      team: "Thunder",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Portland",
      team: "Trail Blazers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Salt Lake City",
      team: "Jazz",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Oakland",
      team: "Warriors",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Clippers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Lakers",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Phoenix",
      team: "Suns",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Sacramento",
      team: "Kings",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Dallas",
      team: "Mavericks",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Houston",
      team: "Rockets",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Memphis",
      team: "Grizzlies",
      league: "nba"
    }),
    knex('sports').insert({
      city: "New Orleans",
      team: "Pelicans",
      league: "nba"
    }),
    knex('sports').insert({
      city: "San Antonio",
      team: "Spurs",
      league: "nba"
    }),
    knex('sports').insert({
      city: "Buffalo",
      team: "Bills",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Miami",
      team: "Dolphins",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Boston",
      team: "Patriots",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Providence",
      team: "Patriots",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Jets",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Baltimore",
      team: "Ravens",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Cincinnati",
      team: "Bengals",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Cleveland",
      team: "Browns",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Pittsburgh",
      team: "Steelers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Houston",
      team: "Texans",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Indianapolis",
      team: "Colts",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Jacksonville",
      team: "Jaguars",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Nashville",
      team: "Titans",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Denver",
      team: "Broncos",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Kansas City",
      team: "Chiefs",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Oakland",
      team: "Raiders",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "San Diego",
      team: "Chargers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Dallas",
      team: "Cowboys",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Giants",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Philadelphia",
      team: "Eagles",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Washington",
      team: "Redskins",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "Bears",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Detroit",
      team: "Lions",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Green Bay",
      team: "Packers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Minneapolis",
      team: "Vikings",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Atlanta",
      team: "Falcons",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Charlotte",
      team: "Panthers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "New Orleans",
      team: "Saints",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Tampa Bay",
      team: "Buccaneers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Phoenix",
      team: "Cardinals",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Rams",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "San Francisco",
      team: "49ers",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Seattle",
      team: "Seahawks",
      league: "nfl"
    }),
    knex('sports').insert({
      city: "Boston",
      team: "Bruins",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Buffalo",
      team: "Sabres",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Detroit",
      team: "Red Wings",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Miami",
      team: "Panthers",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Fort Lauderdale",
      team: "Panthers",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Montreal",
      team: "Canadiens",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Ottawa",
      team: "Senators",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Tampa Bay",
      team: "Lightning",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Toronto",
      team: "Maple Leafs",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Raleigh",
      team: "Hurricanes",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Columbus",
      team: "Blue Jackets",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Newark",
      team: "Devils",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Islanders",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "New York City",
      team: "Rangers",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Philadelphia",
      team: "Flyers",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Pittsburgh",
      team: "Penguins",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Washington",
      team: "Capitals",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Anaheim",
      team: "Ducks",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Phoenix",
      team: "Coyotes",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Calgary",
      team: "Flames",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Edmonton",
      team: "Oilers",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Los Angeles",
      team: "Kings",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "San Jose",
      team: "Sharks",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Vancouver",
      team: "Canucks",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Chicago",
      team: "Blackhawks",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Denver",
      team: "Avalanche",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Dallas",
      team: "Stars",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Saint Paul",
      team: "Wild",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Minneapolis",
      team: "Wild",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Nashville",
      team: "Predators",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Saint Louis",
      team: "Blues",
      league: "nhl"
    }),
    knex('sports').insert({
      city: "Winnipeg",
      team: "Jets",
      league: "nhl"
    })
  );
};
