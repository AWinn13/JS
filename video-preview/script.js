console.log("page loaded...");

var x= document.getElementById("vid");

function playvid(element){
    x.play();
    x.muted = "true"
}

function pausevid(element){
    x.pause();
}