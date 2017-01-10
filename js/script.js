function machineASous(){
    
    var credit = document.getElementById("credit").value;
    
    if (credit > 0){
        
        credit -= 1;
        
        document.getElementById("boutonStart").disabled = true;
        animation();
        
        var a = Math.floor(Math.random()*4);
        var b = Math.floor(Math.random()*4);
        var c = Math.floor(Math.random()*4);
        var d = Math.floor(Math.random()*4);
        
        document.getElementById("img1").src = "image/img_" + a + ".png";
        document.getElementById("img2").src = "image/img_" + b + ".png";
        document.getElementById("img3").src = "image/img_" + c + ".png";
        document.getElementById("img4").src = "image/img_" + d + ".png";
        

        
        if (a == b && a ==c && a==d){
            
            credit += 5
        }
        
        document.getElementById("credit").value = credit;
    }
    
    else {
        
        alert("Erreur : Nombre de crédits épuisé");
    }
    
    //document.getElementById("credit").value = prompt();
}

var isRunning = false;

function animation(){

    isRunning = true;
    tick();
    setTimeout(stop, 2000);
    
    
}

function tick(){
    
    if(isRunning){
        
        var a = Math.floor(Math.random()*4);
        var b = Math.floor(Math.random()*4);
        var c = Math.floor(Math.random()*4);
        var d = Math.floor(Math.random()*4);
        
        document.getElementById("img1").src = "image/img_" + a + ".png";
        document.getElementById("img2").src = "image/img_" + b + ".png";
        document.getElementById("img3").src = "image/img_" + c + ".png";
        document.getElementById("img4").src = "image/img_" + d + ".png";
        
        setTimeout(tick, 50);
    }
}

/*function start(){
    
    isRunning = true;
}*/

function stop(){
    
    isRunning = false;
    document.getElementById("boutonStart").disabled= false;
}

var rand = Math.floor(Math.random()*4);
console.log(rand);

document.getElementById("img1").src = "image/img_" + rand + ".png";
document.getElementById("img2").src = "image/img_" + rand + ".png";
document.getElementById("img3").src = "image/img_" + rand + ".png";
document.getElementById("img4").src = "image/img_" + rand + ".png";