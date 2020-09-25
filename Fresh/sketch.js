let randomR, randomB, randomG 
let sizeCir 

function setup() {
  createCanvas(400, 400);
  randomR= floor (random (0,255)); 
  randomG= floor (random (0,255)); 
  randomB= floor (random (0,255)); 
  
  sizeCir = random (50, 250); 

}

function draw() {
  
background(randomR-(255/6), randomB-(255/6), randomG-(255/6));
  noStroke (); 

  push();
    //// separates 
    fill(randomR, randomB, randomG)
    circle (200,300,sizeCir)
    circle (100, 350, 100);
    circle (300, 350, 100);
    circle (50, 375, 50); 
    circle (350, 375, 50); 

    fill(randomR+(255/6), randomB+(255/6), randomG+(255/6));
    circle (200, 100, sizeCir);
    circle (100, 50, 100);
    circle (300, 50, 100);
    circle (50, 25, 50); 
    circle (350, 25, 50); 

    
  

 
}