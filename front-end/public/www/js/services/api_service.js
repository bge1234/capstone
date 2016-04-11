app.factory('apiService', function() {
  return {
    cities: ["New+York+City", "Los+Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San+Antonio", "San+Diego", "Dallas", "San+Jose", "Denver"],
    data: [],
    init: function() {
      // for (var i = 0; i < this.cities.length; i++) {
      // Delete the line below and uncomment the line above in order to use live data.
      for (var i = 0; i < 0; i++) {
        var getter = $.ajax({
          url: "https://moveitapi-benebel.herokuapp.com/makecalls/" + this.cities[i],
          method: "GET",
          dataType: "json"
        });

        getter.done(function(response) {
          console.log("Yep!");
          console.log(response);
          var realresponse = JSON.parse(response);
          this.data.push(realresponse);
        });

        getter.fail(function(response) {
          console.log("Nope!");
        });
      }
    }
  }
});
