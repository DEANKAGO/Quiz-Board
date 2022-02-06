var form = document.getElementById("quiz-form");
var btn = document.getElementById("btn");
form.addEventListener("submit", function(e){
  e.preventDefault();

  var one = this.ans1.value
  var two = this.ans2.value
  var three = this.ans3.value
  var four = this.ans4.value

  console.log(one, two, three, four)

});