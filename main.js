noseX = 0;
noseY = 0;



function preload(){
    clown_nose = loadImage('https://i.postimg.cc/PxFvYgkv/l1.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 

function draw(){
    image(video, 0, 0, 300, 300);
    //fill(255,0,0);
    //roke(0,0,0);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 35, 25);
}

function take_snapshot(){
    save('lipstickFilter.png')
}

function modelLoaded(){
    console.log('Model Got Loaded,PoseNet Is Initalized');
}




function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y+10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY );
    }
}