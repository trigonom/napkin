
if (typeof(Storage) === "undefined") {
  alert("Your browser doesn't support localStorage. Your notes won't be saved!");
} else {

  // Restore saved data.
  var textbox = document.getElementById("text")
  textbox.innerHTML = localStorage.getItem("text");

  // Save data frequently.
  var SAVE_TIMEOUT = 2000;
  setInterval(function () {
    localStorage.setItem("text", textbox.innerHTML);
  }, SAVE_TIMEOUT);

  function quote(text, author) {
    return "\"" + text + "\"" + " - " + author;
  }

  // Have fun!
  var quotes = [
    quote("The road to hell is paved with adverbs.", "Stephen King"),
    quote("Sometimes, I forget things", "Old Man"),
    quote("There is no writer's block. JUST DO IT.", "Some Lad"),
    quote("Don't linger on the past too much.", "Some Gal"),
    quote("Do things without always knowing how they'll turn out.", "Future Megan"),
    quote("Thanks for trying Napkin out. Hope you won't sneeze!", "The Author Himself"),
    quote("1 = 2 ", " 1")
  ];

  var random_index = Math.floor(Math.random() * quotes.length);
  document.getElementById("remark").innerHTML = quotes[random_index];
}