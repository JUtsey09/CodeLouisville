var num0ne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

num0ne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add(){
  var one = parseFloat(num0ne.value) || 0;
  var two = parseFloat(numTwo.value) || 0;
  var sum = one+two;
  addSum.innerHTML = "Total:"+sum;
}
