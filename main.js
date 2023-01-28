Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'">'
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/VdBvMKxaJ/model.json', modelLoaded);

function modelLoaded(){
    console.log('Model Loaded!');
}

function identify(){
    img=document.getElementById("captured_img");
    classifier.classify(img, gotResult);
    document.getElementById()
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        resultemoji=results[0].label;
        speak();
    document.getElementById("identifyresult").innerHTML=results[0].label;
    }
    if(results[0]=="Okay"){
    document.getElementById("emoji").innerHTML="&#128076";
    }
    if(results[0]=="Fist"){
        document.getElementById("emoji").innerHTML="&#128074";
    }
    if(results[0]=="Thumbs Up"){
        document.getElementById("emoji").innerHTML="&#128077"
    }
    if(results[0]=="Thumbs Down"){
        document.getElementById("emoji").innerHTML="&#128078";
    }
}

function speak(){
    var synth=window.speechSynthesis;
    speakemoji="The emoji is "+resultemoji;
    var utterThis= new SpeechSynthesis(speakemoji);
    synth.speak(utterThis);
}