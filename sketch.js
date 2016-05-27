
var noiseScale = 0.02;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw(){
  noStroke()
  background(198,127,255)
  for (var x = 0; x <=width; x+=200){
  for (var y = 0; y<=height; y+=110){
    drawSquare1(x,y)
    drawSquare2(x,y)
  }
  
  }
}



function drawSquare1(x,y) {
  var noiseVal = noise((mouseX+x)*noiseScale, (mouseY+y)*noiseScale)
  fill(214,121,noiseVal*100)
  rect(x+100,y,100,100);
  
  fill(198,127,noiseVal*255)
  rect(x+110,y+10,80,80);
  
  fill(224,121,noiseVal*100)
  rect(x+140,y+40,20,20) 
  }
  
function drawSquare2(x,y) {
  var noiseVal = noise((mouseX+x)*noiseScale, (mouseY+y)*noiseScale)
  
  //big square
  fill(204,57,noiseVal*200)
  rect(x,y,100,100);
  
  //small square
  fill(224,121,noiseVal*20)
  rect(x+10,y+10,80,80);
  
  
  
  // /
  fill(204,57,noiseVal*255)
  quad(x+8,y,x,y+8,x+92,y+100,x+100,y+92)
  
  // \
  fill(204,57,noiseVal*200)
  quad(x+92,y,x+100,y+8,x+8,y+100,x,y+92)

}
