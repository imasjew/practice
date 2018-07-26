var t = 0;

function MO()
 {
  clearTimeout(t);
  x=document.getElementById("drop");
  
  
 }
function MT()
 {
  x=document.getElementById("drop");
  x.style.display="block";
  if(this.onmouseout=true)
   {
    t=setTimeout("x.style.display='none'",500);
   }
  }

var t1 = 0;

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
    t1=setTimeout("x.style.display='none'",500);
   }
  }