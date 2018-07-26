var t = 0; //自动翻页计时
var a = 0; //img序号
var x = 0; //滑动消失计时
var old = 6;//非6时记录老序号（跳转用）
window.onload = autoslide();

function autoslide(){
 clearTimeout(t);
 turnLight();
 t = setTimeout(nextimg,2600);
}

function nextimg(){
 clearTimeout(t);
 skipRight();
}

function shiftLeft(){
 clearTimeout(t);
 skipLeft();
 autoslide();
 turnLight();
}
function shiftRight(){
 clearTimeout(t);
 skipRight();
 autoslide();
 turnLight();
}

function skip(obj){
 clearTimeout(t);
 old = a;
 a = $(obj).index();
 if(a > old)skipRight();
 if(a < old)skipLeft();
 turnLight();
 autoslide();
}

function turnLight(){
 $(".dot").css("background-color","rgba(222,222,222,.5)");
 $(".dot").eq(a).css("background-color","rgba(100,100,100,.8)");
}

function skipRight(){
 clearTimeout(x);
 if(old == 6){
  $("img").eq(a).css("display","inline");
  turnLight();
  $("img").eq(a).animate({left:"-700px"});
 }
 else{
  $("img").eq(old).css("display","inline");
  turnLight();
  $("img").eq(old).animate({left:"-700px"});
 }
 x = setTimeout(skipRightNext,200);
}
function skipRightNext(){
 if(old == 6){$("img").eq(a).css("display","none");}
 else{$("img").eq(old).css("display","none");}
 if(old == 6){
  a = a+1;
 }
 if(a >= 4){a = 0;}
 $("img").eq(a).css("display","inline");
 $("img").eq(a).css("left","500px");
 $("img").eq(a).animate({left:"0px"});
 old = 6;
 autoslide();
}

function skipLeft(){
 clearTimeout(x);
 if(old == 6){
  $("img").eq(a).css("display","inline");
  turnLight();
  $("img").eq(a).animate({left:"500px"});
 }
 else{
  $("img").eq(old).css("display","inline");
  turnLight();
  $("img").eq(old).animate({left:"500px"});
 }
 x = setTimeout(skipLeftNext,200);
}
function skipLeftNext(){
 if(old == 6){$("img").eq(a).css("display","none");}
 else{$("img").eq(old).css("display","none");}
 if(old == 6){
  a = a-1;
 }
 if(a <= -1){a = 3;}
 $("img").eq(a).css("display","inline");
 $("img").eq(a).css("left","-700px");
 $("img").eq(a).animate({left:"0px"});
 old = 6;
 autoslide();
}