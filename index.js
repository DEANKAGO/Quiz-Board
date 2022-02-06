var form = document.getElementById("quiz-form");
var btn = document.getElementById("btn");
var score = 0;

form.addEventListener("submit", function(e){
  e.preventDefault();

  var one = this.ans1.value
  var two = this.ans2.value
  var three = this.ans3.value
  var four = this.ans4.value

  score = 0

  if (one == 'January'){
    score++
  }
  if (two == '0830hrs'){
    score++
  }
  if (three == '0830hrs'){
    score++
  }
  if (four == 'DanielMoi'){
    score++
  }

  var percent = score/4 * 100;
  console.log(percent)

});