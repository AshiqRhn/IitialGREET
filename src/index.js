function initial(name) {
  alert("Good Day! " + name);
}

function letsHaveIt(something) {
  var name = prompt("What is your name?");
  something(name);
}

letsHaveIt(initial);
