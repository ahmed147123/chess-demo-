(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (i in names) {

  
  var currentName = names[i];
  var lCaseName = currentName.toLowerCase();
  var firstLetter = lCaseName.charAt(0);



  if (firstLetter === "j") {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})();
