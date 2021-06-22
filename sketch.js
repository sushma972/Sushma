var a=prompt('enter first variable:');
var b=prompt('enter second variable:');
function setup(){
  createCanvas(400, 400);
  var b2=createButton("click here to swap");
  b2.mousePressed(swap);
}


function draw() {
  background(220);
  function swap(){
    [a,b]=[b,a];
    console.log("value of a after swap:"+a);
    console.log("value of b after swap:",+b);
  }
}