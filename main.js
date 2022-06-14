 var SpeechRecognition = window.webkitSpeechRecognition;

 var spRecog = new SpeechRecognition();

 function my_start(){

    document.getElementById("tar").value = "";

    spRecog.start();
 
 }


 spRecog.onresult = function(event){
     console.log(event);

     my_content = event.results[0][0].transcript;
     document.getElementById("tar").value = my_content;
    
     if(my_content == "take my selfie"){
        my_speak();

        setTimeout(function(){
            take_snapshot();

            save_snap();
        }, 5000);

     


     }

 }


 function my_speak(){
    var synth = window.speechSynthesis;

   text_data = "taking you selfie in 5 seconds";

    //SpeechSynthesisUtterance("text"); convert the Text to the speech and store it in speak_data;

   var speak_data = new SpeechSynthesisUtterance(text_data);

   synth.speak(speak_data);

   Webcam.attach(my_cam);
    
    
 }

 Webcam.set({
     width:360,
     height:250,
     image_format : 'png',
     png_quality: 90
 });

 my_cam = document.getElementById("camera");
 
function take_snapshot(){

    Webcam.snap(function(webSnap){

    document.getElementById("result").innerHTML = "<img src=' " + webSnap +" '  id = 'Snap' >";
    
        
    });
    
}

function save_snap(){

    my_link = document.getElementById("selfpng");

    my_img = document.getElementById("Snap").src;


    my_link.href = my_img;
    
    my_link.click();
}