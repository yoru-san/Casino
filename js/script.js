function machineASous(){

  var credit = document.getElementById("credit").value;

  if (credit > 0){
    credit -= 1;
    document.getElementById("credit").value = credit;
    document.getElementById("boutonStart").disabled = true;
    toastr["error"]("-1 crédit!")
    animationRoulette();


    var a = Math.floor(Math.random()*4);
    var b = Math.floor(Math.random()*4);
    var c = Math.floor(Math.random()*4);
    var d = Math.floor(Math.random()*4);

    document.getElementById("img1").src = "image/img_" + a + ".png";
    document.getElementById("img2").src = "image/img_" + b + ".png";
    document.getElementById("img3").src = "image/img_" + c + ".png";
    document.getElementById("img4").src = "image/img_" + d + ".png";



    if (a == b && a ==c && a==d){
      credit += 10
    }

    else if (a == b && a == c || b == c && b == d || c == a && c == d || d == a && d == b ) {

      credit += 3

    }

    setTimeout(function(){
      document.getElementById("credit").value = credit;
    }, 2000);
  }

  else {

    alert("Erreur : Nombre de crédits épuisé");
  }
}

function init(){

  var rand = Math.floor(Math.random()*4);
  console.log(rand);

  document.getElementById("img1").src = "image/img_" + rand + ".png";
  document.getElementById("img2").src = "image/img_" + rand + ".png";
  document.getElementById("img3").src = "image/img_" + rand + ".png";
  document.getElementById("img4").src = "image/img_" + rand + ".png";

}

toastr.options = {
  "closeButton": false,
  "debug": false,
  "newestOnTop": false,
  "progressBar": false,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "700",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
