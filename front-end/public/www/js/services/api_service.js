app.factory('apiService', function() {
  return {
    cities: ["New+York+City", "Los+Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San+Antonio", "San+Diego", "Dallas", "San+Jose", "Denver"],
    data: [],
    init: function() {
      for (var i = 0; i < this.cities.length; i++) {
        var getter = $.ajax({
          url: "http://localhost:3000/makecalls/" + cities[i],
          method: "GET",
          dataType: "json"
        });

        getter.done(function(response) {
          console.log("Yep!");
          console.log(response);
          this.data.push(response);
        });

        getter.fail(function(response) {
          console.log("Nope!");
        });
      }
    }
  }
});
