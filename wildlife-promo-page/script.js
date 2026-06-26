const video = document.getElementById("wildlifeVideo");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", function(){

if(video.style.display==="none"){
    video.style.display="block";
    video.play();
}
else{
    video.style.display="none";
    video.pause();
}

});