var input = "the quick brown fox";
// fox brown quick the

function revInput(input) {
  var split = input.split(' ');
  var output = [];
  for (var i = split.length - 1; i >= 0; i--) {
    output.push(split[i]);
  }
  output = output.join(' ');
  return output;
}

console.log(revInput(input));
