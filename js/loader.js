var one=document.getElementById('1');
var two=document.getElementById('2');
var three=document.getElementById('3');
var four=document.getElementById('4');
var five=document.getElementById('5');
var six=document.getElementById('6');
var cypher=document.getElementById('bg');
var loader=document.getElementById('loader');

setTimeout(function(){doFirst();},500);

//window.addEventListener('load',function(){
//setTimeout(function(){doFirst();},500);
//},false);

function doFirst(){
  one.style.width="60.78px";
  two.style.height="394.15px";
  three.style.width="60.78px";
  four.style.width="60.78px";
  five.style.height="394.15px";
  six.style.width="60.78px";
  one.style.transition="width .3s";
  two.style.transition="height .3s";
  two.style.transitionDelay=".3s";
  three.style.transition="width .3s";
  three.style.transitionDelay=".6s";
  four.style.transition="width .3s";
  four.style.transitionDelay=".9s";
  five.style.transition="height .3s";
  five.style.transitionDelay="1.2s";
  six.style.transition="width .3s";
  six.style.transitionDelay="1.5s";
  setTimeout(function(){clip();},1800);
}
function clip() {
  four.style.x="235.65";
  five.style.x="273.64";
  six.style.x="76.51";
  one.style.x="333.85";
  two.style.x="333.85";
  three.style.x="-164.28";
  four.style.transition="x .6s";
  five.style.transition="x .6s";
  six.style.transition="x .6s";
  one.style.transition="x .6s";
  two.style.transition="x .6s";
  three.style.transition="x .6s";
  cypher.style.clipPath="polygon(0 0,100% 0,100% 100%,0 100%)";
  cypher.style.transition="clip-path .6s";

  setTimeout(function(){
    cypher.style.clipPath="polygon(50% 0,50.05% 0,50.05% 100%,50% 100%)";
    cypher.style.transition="clip-path .6s";
    four.style.x="71.36";
    five.style.x="109.35";
    six.style.x="240.94";
    six.style.y="371.92";
    one.style.x="169.57";
    two.style.x="169.57";
    three.style.x="0";
    four.style.transition="x .6s";
    five.style.transition="x .6s";
    six.style.transition="x .6s, y .6s";
    one.style.transition="x .6s";
    two.style.transition="x .6s";
    three.style.transition="x .6s";
  },900);
  setTimeout(function(){
    four.style.width="0px";
    five.style.height="0px";
    six.style.width="0px";
    four.style.transition="width .3s";
    four.style.transitionDelay=".6s";
    five.style.transition="height .3s";
    five.style.transitionDelay=".3s";
    six.style.transition="width .3s";
    one.style.width="0px";
    two.style.height="0px";
    three.style.width="0px";
    one.style.transition="width .3s";
    one.style.transitionDelay="1.5s";
    two.style.transition="height .3s";
    two.style.transitionDelay="1.2s";
    three.style.transition="width .3s";
    three.style.transitionDelay=".9s";
  },1600);


setTimeout(function(){doFirst();},3600);
}
