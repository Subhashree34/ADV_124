function setup(){
    canvas = createCanvas(550,480);
    canvas.position(560,150);
    video = createCapture(VIDEO);
    video.size(550,500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background("#CD9AE5");
}
function modelLoaded(){
    console.log("PoseNet is Initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}