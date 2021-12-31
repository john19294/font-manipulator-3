function setup(){
    canvas=createCanvas(500,500)
    canvas.position(600,150)
    video=createCapture(VIDEO)
    video.position(20,20)
    video.size(550,720)
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses)
    }
    function draw(){
    background("#4272f5")
    fill("skyblue")
    text('John',100,250)
    textSize(difference)
    
    }
    function modelLoaded(){
        console.log("pose net is loaded")
    }
    function gotPoses(results){
    if(results.length>0)
    {console.log(results)}
    leftWristX=results[0].pose.leftWrist.x
    rightWristX=results[0].pose.rightWrist.x
    difference=leftWristX-rightWristX
    }
    leftWristX=0
    rightWristX=0
    difference=0
