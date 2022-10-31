noseX = 0;
noseY = 0;

function preload() {
glasses = loadImage("https://clipartstation.com/wp-content/uploads/2020/03/clipart-sunglasses-transparent-5.png");

}

function setup() {
    canvas = createCanvas(400,400);
    canvas.position(440,160);
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded() {
console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    
    }
    }

function draw() {
image(video,0,0,400,400);
image(glasses,noseX - 60,noseY - 50,120,50);
}

function take_snapshot() {
    save("MyFilterImage.png");
}

