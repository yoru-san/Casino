var isRunning = false;

function animationRoulette(){

    isRunning = true;
    tickRoulette();
    setTimeout(stopRoulette, 2000);
}

function tickRoulette(){

    if(isRunning){

        var a = Math.floor(Math.random()*4);
        var b = Math.floor(Math.random()*4);
        var c = Math.floor(Math.random()*4);
        var d = Math.floor(Math.random()*4);

        document.getElementById("img1").src = "image/img_" + a + ".png";
        document.getElementById("img2").src = "image/img_" + b + ".png";
        document.getElementById("img3").src = "image/img_" + c + ".png";
        document.getElementById("img4").src = "image/img_" + d + ".png";

        setTimeout(tickRoulette, 50);
    }
}

function stopRoulette(){

    isRunning = false;
    document.getElementById("boutonStart").disabled= false;
}
