function citynotice(){
    alert('Loading weather report')
}

function eatcookie(cookies){
    document.querySelector(cookies).style.display = "none"

}  

    function tempconv(temps){
        for(var i = 1; i <= 8; i++){
            var temperature = document.querySelector(temps+i).innerText
            temperature = (temperature * (9 / 5)) + 32;
            document.querySelector(temps+i).innerText = temperature; 
        }
        }
        


