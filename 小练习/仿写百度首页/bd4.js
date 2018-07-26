var t = 0;
function MO()
 {
  clearTimeout(t);
  x=document.getElementById("drop");
  x.style.display="block";
 }
function MT()
 {
  x=document.getElementById("drop");
  x.style.display="block";
  if(this.onmouseout=true)
   {   
  t = setTimeout("x.style.display='none'",400);
   }
  }

  var h=document.documentElement.clientHeight;
  var m=document.getElementById("morelst");
  m.style.height=h + "px";

$("#more").mouseover(function(){
 $("#morelst").fadeIn(150);
});

$("#more").mouseleave(function(){
 $("#morelst").stop(true,true);
 $("#morelst").fadeOut(150);
});

/*
function MO1()
 {
  clearTimeout(t1);
  x=document.getElementById("morelst");
  x.style.display="block";
 }

function MT1()
 {
  x=document.getElementById("morelst");
  x.style.display="block";
  if(this.onmouseout=true)
   {
    t1=setTimeout("x.style.display='none'",100);
   }
  }
*/