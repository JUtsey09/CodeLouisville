// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.



// Part 2: Create a new div of class "moon" and append it to the planet in the DOM.

//Part 1
var Div = document.createElement("div");
Div.id = 'planet';
Div.className = 'planet';
document.body.appendChild(Div);
document.getElementById('planet');


//Part 2
var newDiv = document.createElement('div');
newDiv.id = 'moon';
newDiv.className = 'moon';
document.body.appendChild(newDiv);
