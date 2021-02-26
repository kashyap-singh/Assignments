var turn=0;
document.getElementById('btn').addEventListener("click",function(){
   if(turn==0){
   document.getElementById("pic").setAttribute("src","on.jpg");
   document.getElementById("switch").setAttribute("src","on.png");
   turn=1;
 }
 else{
  document.getElementById("pic").setAttribute("src","off.jpg");
   document.getElementById("switch").setAttribute("src","off.png");
   turn=0;
 }
});