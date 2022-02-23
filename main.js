song ="";
song1="";
song2="";
scoreLeftWrist = 0;
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload()
{
    song1 = loadSound ("music.mp3");
    song2 = loadSound ("music2.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() 
{
    console.log("poseNet is intialised");
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("FF0000")
    stroke("FF0000")

   if(scoreLeftWrist > 0.2)
   {
    circle(leftWristX, leftWristY,20);
    InNumberleftWristY = Number(leftWristY);
    remove_decimals = floor(InNumberleftWristY);
    song1 = remove_decimals/500
    document.getElementById("song1").innerHTML = "Song1 = " + song1;
    song.setSong1(song1);
}
   }

function play()
{
    song.play();
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

rightWristX = results[0].pose.rightWristx;
rightWristY = results[0].pose.rightWrist.y;
console.log("righttWristX = " + rightWristX +" rioghtWristY = "+ rightWristY);

    }
}

