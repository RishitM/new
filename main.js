var object=[]
var status
var img
var video
function preload(){
}
function setup(){
canvas=createCanvas(700,500);
canvas.position(400,200);
video=createCapture(VIDEO)
video.hide()
object_detector=ml5.objectDetector("cocossd",ModelLoaded);
document.getElementById("status").innerHTML="Detecting Objects..."

}
function draw(){
image(video,0,0,700,500)


if(status=true){
    object_detector.detect(video,gotResult)
    for(i=0;i<object.length;i++){
        stroke(245, 0, 0);
strokeWeight(4);
noFill()
textSize(50);
textStyle(NORMAL);
text(object[i].label + ":"+ object[i].confidence.toFixed(2)*100+"%",object[i].x,object[i].y+38)
rect(object[i].x, object[i].y, object[i].width, object[i].height);
document.getElementById("status").innerHTML="Object Detected"}
}
}
function ModelLoaded(){
    console.log("CocoSSD is loaded")
    status=true
    
}
function gotResult(error,results){
    if (error){
        console.error("Error")
    }
    else{
       console.log(results)
       object=results; 
    }
}