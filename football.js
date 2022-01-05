var objectdetector = "";
var carimage = "";
var object = [];
var status = "";
function preload(){
 carimage = loadImage("football.jpg") 
}

function setup(){
canvas = createCanvas(600,600)
canvas.center()
objectdetector = ml5.objectDetector('cocossd',modelloaded)
document.getElementById("status").innnerHTML = "staus:detecting objects"
}

function modelloaded(){
    console.log("modelloaded")
    status = true
    objectdetector.detect(carimage,gotresult)
}

function gotresult(error,results){
if (error) {
    console.log(error)
    
}
else{
    console.log(results)
    object = results
}
}

function draw(){
 image(carimage,0,0,600,600)
 if (status != "") {
     for (let index = 0; index < object.length; index++) {
         fill("red")
       var percent = floor(object[index].confidence*100)
        text(object[index].label+" "+percent+"%",object[index].x+15,object[index].y+15)
        noFill()
        stroke("red")
        rect(object[index].x,object[index].y,object[index].width,object[index].height)
     }
 }
}