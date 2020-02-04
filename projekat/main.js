function pauza() {
  i++;
  if(i > 2){
    i = 0;
   ar = makeText();
  }
  scroll.innerHTML = "";

  start();
}
function makeText() {
  var marko = "Audi";
  var dimi = "BMW";
  var nina ="Mercedes";

  var marko1 = marko.split('');
  var dimi1 = dimi.split('');
  var nina1 = nina.split('');
  var imena = [marko1,dimi1,nina1];
  return imena;
}
var ar = makeText();
 var scroll = document.getElementById('scroll');

var loop;

var i = 0;
function start() {
  if (ar[i].length > 0) {
scroll.innerHTML += ar[i].shift();
loop = setTimeout(start,400);
}else {

 var ss = setTimeout(pauza,2000);
  }
}


start();
