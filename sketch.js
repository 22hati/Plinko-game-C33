const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var count =0;
var gameState = "plink";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);

  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, 20, 50)
  text("100",10,560);
  text("200",90,560);
  text("300",170,560);
  text("400",250,560);
  text("500",330,560);
  text("500",410,560);
  text("400",490,560);
  text("300",570,560);
  text("200",650,560);
  text("100",730,560);

  fill("yellow");
  line = rect(400,450,800,3);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
  for (var j = 0; j < particles.length; j++) {
   if(particles[j]!==null) {
     particles[j].display();

     if(particles[j].body.position.y>775) {
       if(particles[j].body.position.x<80 || particles[j].body.position.x>720) {
        score = score+100;
       }

       if(particles[j].body.position.x>80 && particles[j].body.position.x<160 || particles[j].body.position.x>640 && particles[j].body.position.x<720) {
        score = score+200;
       }

       if(particles[j].body.position.x>160 && particles[j].body.position.x<240 || particles[j].body.position.x>560 && particles[j].body.position.x<640) {
        score = score+300;
       }

       if(particles[j].body.position.x>240 && particles[j].body.position.x<320 || particles[j].body.position.x>480 && particles[j].body.position.x<560) {
        score = score+400;
       }

       if(particles[j].body.position.x>320 && particles[j].body.position.x<400 || particles[j].body.position.x>400 && particles[j].body.position.x<480) {
        score = score+500;
       }

       particles[j] = null;
     }
    }
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();

   if(count>=5) {
     gameState="end"
   }

   if(gameState==="end"){
     fill("blue");
     text("GAME OVER",300,400);
   }
}

function mousePressed() {
  if(gameState!=="end") {
    particles.push(new Particle(mouseX, 10,10));
    count++
  }
}