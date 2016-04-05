var getter = $.ajax({
  url: "https://trailapi-trailapi.p.mashape.com/?q[city_cont]=Denver&q[country_cont]=United+States&q[state_cont]=Colorado&radius=5",
  method: "GET",
  dataType: "json",
  headers:{ "X-Mashape-Key": "vCAJivs8Hbmshar7q8mbiQyvzgxtp196VFJjsnU83v4lteo5fQ" }
});

getter.done(function(response) {
  console.log("Yep!");
  console.log(response);

});

getter.fail(function(response) {
  console.log("Nope!");
});
