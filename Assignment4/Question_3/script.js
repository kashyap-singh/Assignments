var x=document.getElementById("swap");
x.addEventListener("click",function(){
    var temp=document.getElementById("p1").innerHTML;
    document.getElementById("p1").innerHTML=document.getElementById("p2").innerHTML;
    document.getElementById("p2").innerHTML=temp;
});