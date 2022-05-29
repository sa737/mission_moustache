moustacheX = 0;
moustacheY = 0;

function preload()
{

}
function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
   console.log("posenet is initialised");
}

function gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       moustacheX = results[0].pose.nose.x;
       moustacheY = results[0].pose.nose.y;
   }
}

function draw()
{
    image(video,0,0,300,300);
    image(moustache, moustacheX-40, moustacheY+5, 80, 40); 
}

function preload()
{
    moustache = loadImage("https://i.postimg.cc/FshT12f3/moustache.png");
}

function takeSnapshot()
{
    save("myFilterImage.png");
    
}
