var getter = $.ajax({
  url: "http://api.wolframalpha.com/v2/query?input=population+of+denver&appid=JUR3QT-HYKRWQW38W",
  method: "GET",
  dataType: "json"
});

getter.done(function(response) {
  console.log("Yep!");
  console.log(response);

});

getter.fail(function(response) {
  console.log("Nope!");
});
