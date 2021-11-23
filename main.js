function startclassification()
{
navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/1bFHpnDqZ/model.json",modelRedy);
}
function modelRedy()
{
    classifier.classify(gotresults);
}
function gotresults(error,result)
{
if(error){
    console.log(error); 

}
else{
    console.log(result);
    random_number_r=Math.floor(Math.random()*255)+1;
random_number_g=Math.floor(Math.random()*255)+1;
random_number_b=Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML='I can hear - '+
    result[0].label;
    document.getElementById("result_confidence").innerHTML='Accuracy - '+
    (result[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color='rgb('
    +random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color='rgb('
    +random_number_r+","+random_number_g+","+random_number_b+")";


    img=document.getElementById('alien1');
    img1=document.getElementById('alien2');
    img2=document.getElementById('alien3');
    img3=document.getElementById('alien4');
 if(result[0].label=="clap"){
    img.src='aliens-01.gif';
    img1.src='aliens-02.png';
    img2.src='aliens-03.png';
    img3.src='aliens-04.png';
 }else if(result[0].label=="snap"){
    img.src='aliens-01.png';
    img1.src='aliens-02.png';
    img2.src='aliens-03.png';
    img3.src='aliens-04.gif';
 }
    else if(result[0].label=="bell"){
        img.src='aliens-01.png';
        img1.src='aliens-02.png';
        img2.src='aliens-03.gif';
        img3.src='aliens-04.png';
}
else {
    img.src='aliens-01.png';
    img1.src='aliens-02.gif';
    img2.src='aliens-03.png';
    img3.src='aliens-04.png';
}
}  
}
