//Create variables here

var dogImg, happyDogImg
var dog
var foodStock
var foodS 

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
  database = firebase.database();
  foodStock=database.ref('food');
  foodStock.on("value", readStock);

  dog = createSprite(250, 350, 50, 50);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  
  
}


function draw() {  
  background(46,139,87);



  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);

  }
  drawSprites();
  //add styles here
  fill("white");
  textSize(15);
  text("Use the up arrow key to feed Acid", 140, 20);
  text("Food remaining:" + foodS, 200, 250);
  

}

function readStock(data){
  foodS = data.val();
  console.log(foodS);
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food:x
  })
  

}



