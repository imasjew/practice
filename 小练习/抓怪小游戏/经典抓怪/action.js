var x = 100;var y = 100;//怪物位置
var a = 0;var b = 0;//加速度
var u = 0;var i = 0;//速度
var h = 6;var l = 2;//限速
var t1 = 0;//更新率
var t2 = 0;//变速率
var t3 = 0;//变速间隔
var px = 400;var py = 400;//玩家位置
var sp = 0;//玩家速度
var k = 0;
var k2 = 0;
var score = 0;
var isKeyUp = false;
var lock = 0;

window.onload = monsterMove();

function monsterMove(){
 clearTimeout(t1);
 clearTimeout(t2);
 $(".sc").text(score);
 if(x - px <= 20 && x - px >= (-20) && y - py <= 20 && y - py >= (-20)){
 $(".congr").css("display","block");
 var w = 0;
 clearTimeout(w);
 w = setTimeout("$('.congr').css('display','none')",1200);
 score++;
 x = Math.random()*480; 
 y = Math.random()*480; 
 u = 0; i = 0; a = 0; b = 0;
 monsterMove();
 $(".player").css("left",px);
 $(".player").css("top",py);
 }
 loop();
 t2 = setTimeout(change,t3);
}

function loop(){
 t1 = setTimeout(go,12);
}

function go(){
 if(lock == 0){
  clearTimeout(t1);
  x = x + u;
  y = y + i;
 }
 if(x <= 0 || x>=480 || y <= 0 || y>=480){
 u = 0; i = 0;
 change();
 }
 else{
 $(".monster").css("left",x);
 $(".monster").css("top",y);
 }
 loop();

}

function change(){
 clearTimeout(t2);
 t3 = Math.random()*45;
 if(x<=0){a = (Math.random()*2);}
 else if(x>=480){a = (Math.random()*(-2));}
 else{a = (Math.random()*2-1);}
 
 if(y<=0){b = (Math.random()*2);}
 else if(y>=480){b = (Math.random()*(-2));}
 else{b = (Math.random()*2-1);} 
 if(u > h || u < -h){u /= 1.5;}
 if(i > h || i < -h){i /= 1.5;}
 
// if(u < l || u > -l){u *= 1.1;}
// if(i < l || i > -l){i *= 1.1;}
 u = u + a;
 i = i + b;
 monsterMove();
}


/*$(document).ready(function(){
  $("html").keydown(function(event){
  k = 0;
  clearTimeout(sp);  
  k = event.which;
  keep();
  });
});
*/

document.addEventListener("keydown",function(e){
 if(k != e.keyCode ){
  if(k != 0){
   k2 = e.keyCode;
  }
  if(k == 0){
   k = e.keyCode;
  }
 }
// if((k != e.keyCode) && (k2 != e.keyCode)){  alert("a");  k1 = k2;  k2 = e.keyCode; }
 if(k == 76){
  if(lock == 1){lock = 0; $(".L").css("display","none");}
  else{lock = 1; $(".L").css("display","inline"); }
 }
 clearTimeout(sp);
 keep();
})
document.addEventListener("keyup",function(e){
 if(k2 == e.keyCode){k2 = 0;}
 if(k == e.keyCode){
  if(k2 == 0){
   k = 0; 
  }
  if(k2 != 0){
   k = k2; k2 = 0;
  }
 }
 keep();
 clearTimeout(sp);
})

function keep(){

 sp = setTimeout(walk,5);
}

function walk(){
// if(k == 0 || k2 == 0){
  if ((k == 37 || k2 == 37) && px >= 1)  { if(k2 != 0){px -= Math.sqrt(2)/2}else{px-=1;};$(".player").css("left",px);}
  if ((k == 39 || k2 == 39) && px <= 479){ if(k2 != 0){px += Math.sqrt(2)/2}else{px+=1;};$(".player").css("left",px);}
  if ((k == 38 || k2 == 38) && py >= 1)  { if(k2 != 0){py -= Math.sqrt(2)/2}else{py-=1;};$(".player").css("top",py);}
  if ((k == 40 || k2 == 40) && py <= 479){ if(k2 != 0){py += Math.sqrt(2)/2}else{py+=1;};$(".player").css("top",py);} 
keep();
// }
}