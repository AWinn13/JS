var count = 25;
var countElement = document.querySelector("#likes")

function add1(){
    count++;
    countElement.innerText = count + " Likes";
}