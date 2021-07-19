img = '';
status = '';

function preload(){
    img = loadImage('animals.jpg');
}

function setup(){
    canvas = createCanvas(1200,625);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log('model loaded');
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.error(error);
    } else {
        console.log(result);
    }
}

function draw(){
    image(img,0,0);
}