
/*function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
      elem.style.left = pos + "px"; 
    }
  }
}*/
var el = document.getElementById("object");
var reqID;
var dir;
var p, t, pw, ph, px, py, tw, th, tx, ty;
function detectCollisions(){
    for(i=0 ; i < t.length ; i++){
    pw = p.offsetWidth;
    ph = p.offsetHeight;
    px = p.offsetLeft;
    py = p.offsetTop;
    tw = t[i].offsetWidth;
    th = t[i].offsetHeight;
    tx = t[i].offsetLeft;
    ty = t[i].offsetTop;
    
    if((px+pw) > tx && px <(tx+tw) && (py+ph) > ty && py < (ty+th)){
        console.log("Collision detected");
        document.body.removeChild(t[i]);
    }
}
    window.requestAnimationFrame(detectCollisions);
}
function changeDir(d) {
    dir = d;
}
function startAnimation() {
    if(dir == "right"){
        el.style.left = (el.offsetLeft += 3) + 'px';
    }
    else if(dir == "left"){
        el.style.left = (el.offsetLeft -= 3) + 'px';
    }
    if(dir =="top"){
        el.style.top = (el.offsetTop -= 3) + 'px';
    }
    else if(dir == "bottom"){
        el.style.top = (el.offsetTop += 3) + 'px';
    }
    
    reqID = window.requestAnimationFrame(startAnimation);
}
function stopAnimation() {
    window.cancelAnimationFrame(reqID);
}
function docReady(){
    p = document.getElementById("object");
    t = document.getElementsByClassName("things");
    detectCollisions();
}
window.addEventListener("load", docReady);