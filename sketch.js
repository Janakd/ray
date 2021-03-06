var noiseScale = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(198,127,255)
  noStroke()

}

function draw(){
    var binary = [0,1,8,8,8,8,8,8,8,8];

    for (var x = 0; x <=width; x+=105){
      for (var y = 0; y<=height; y+=105){
        
        var index = floor(random(binary.length));
        chooseOne(binary,index,x,y)
        //implement delay
      }
      
    }

}

//Chooses one of two squares to draw
function chooseOne(binary, index,x,y){

        if (index == 0){
          drawSquare2(x,y)
        }
        else if (index ==1){
          drawSquare1(x,y)
        }
}

//Draws square [.]
function drawSquare1(x,y) {
    var noiseVal = noise((mouseX+x)*noiseScale, (mouseY+y)*noiseScale)

  rectMode(CENTER)
  //big square
  fill(214,121,mouseX*0.2)
    rect(x,y,100,100);

  //med square
  fill(198,127,noiseVal*255)
  rect(x+10,y+10,80,80);
  
  //small square
  fill(224,121,noiseVal*200)
  rect(x+40,y+40,20,20) 
  }

//Draws square [X]
function drawSquare2(x,y) {
  var noiseVal = noise((mouseX+x)*noiseScale, (mouseY+y)*noiseScale)
  
  //big square
  fill(204,57,noiseVal*100)
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
