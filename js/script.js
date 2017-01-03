function machineASous(){
    
    var credit = document.getElementById("credit").value;
    
    if (credit > 0){
        
        credit -= 1;
        
        var a = Math.floor(Math.random()*4);
        console.log("A = "+a);
        
        var b = Math.floor(Math.random()*4);
        console.log("B = "+b);
        
        var c = Math.floor(Math.random()*4);
        console.log("C = "+c);
        
        var d = Math.floor(Math.random()*4);
        console.log("D = "+d);
        
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
var rand = Math.floor(Math.random()*4);
console.log(rand);

document.getElementById("img1").src = "image/img_" + rand + ".png";
document.getElementById("img2").src = "image/img_" + rand + ".png";
document.getElementById("img3").src = "image/img_" + rand + ".png";
document.getElementById("img4").src = "image/img_" + rand + ".png";