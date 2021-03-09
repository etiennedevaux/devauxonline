var jsfileversion="0001";
function AdaptiveScaling(){
var x=document.getElementById("ytplayer");
var y=document.getElementById("DefaultHomePage00");
var z=document.getElementById("TitleHomePage00");
var w=document.getElementById("StraplineHomePage00");
var scal = window.devicePixelRatio;
var bH=window.outerHeight;
var vscal=0.5;
x.style.height=bH*vscal;
x.style.width=bH*vscal*16/9;
y.style.width=bH*vscal*16/9;
z.style.width=bH*vscal*16/9;
w.style.width=bH*vscal*16/9;

var fsize=parseInt(bH/60);
var elements = document.getElementsByClassName("Summary");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.fontSize = fsize + "pt";
    }
}


function showSection(sect) {
var elements = document.getElementsByClassName("websection");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
var x = document.getElementById(sect);
x.style.display = "block";
var x=document.getElementById("ytplayer");
var y=document.getElementById("DefaultHomePage00");
var z=document.getElementById("TitleHomePage00");
var w=document.getElementById("StraplineHomePage00");
var scal = window.devicePixelRatio;
var bH=window.outerHeight;
var vscal=0.5;
x.style.height=bH*vscal;
x.style.width=bH*vscal*16/9;
y.style.width=bH*vscal*16/9;
z.style.width=bH*vscal*16/9;
w.style.width=bH*vscal*16/9;

var fsize=parseInt(bH/60);
var elements = document.getElementsByClassName("Summary");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.fontSize = fsize + "pt";
    }
document.getElementById("SerNo").textContent="."+jsfileversion;
}