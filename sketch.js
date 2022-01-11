var database;
var dog,happydog;
var foods,foodstock;
var dog1;
function preload(){
    dog = loadImage("Dog.png");
    happydog = loadImage("happydog.png");
}
function setup(){
    createCanvas(500,500);
    database = firebase.database();
    dog1 = createSprite(250,250);
    dog1.addImage("hi",dog);
    dog1.scale = 0.4;
    var f = database.ref('food')
    var gameStateRef  = database.ref('food');
        gameStateRef.on("value",function(data){
        foodstock = data.val();
    })
}
function draw(){
    background((46, 139, 87));
    if(keyWentDown("Up_Arrow")){
        if(foodstock!==undefined){
            foodstock = foodstock - 1
            database.ref('/').update({
                food:foodstock
            });
            dog1.addImage("hi",happydog);
            dog1.scale = 0.4;
        }
    }
    drawSprites();
    textSize(35);
    stroke("red");
    strokeWeight(10);
    fill("green");
    text("Use Up arrow to feed the dog",5,100);
}