name1=sessionStorage.getItem("name1").toUpperCase();
name2=sessionStorage.getItem("name2").toUpperCase();
console.log(name1);
console.log(name2);


document.getElementById("name1").innerHTML=name1;
document.getElementById("name2").innerHTML=name2;
var x=document.getElementsByClassName("btn");

var turn=0;
var n=0;
for(var i=0;i<x.length;i++){
	x[i].addEventListener("click",function(){
        if(turn>2){
        	alert("GAME ENDS");
        }
        else if(n==10){
        	alert("MATCH DRAW");
        }
        else
        {
		if(turn%2==0){
			if(this.innerHTML==""){	
				this.innerHTML='X';
				turn=1;
				 n++;
				 document.getElementById("pos2").style.color="red";
				 document.getElementById("pos1").style.color="grey";
			}
			else{
				alert("ALREDAY TAKEN");
			} 
	    }
	   else{
	   	    if(this.innerHTML==""){	
	   		   this.innerHTML='0';
	   		   turn=0;
	   		   n++;
	   		   document.getElementById("pos1").style.color="red";
	   		   document.getElementById("pos2").style.color="grey";
	     	}
	     	else{
	     	  alert("ALREDAY TAKEN");
	     	}
	   }
       
	   if(checkifWin()){
           if(turn==1)
            setTimeout(function(){alert(name1+" WINS");},100);
           else
            setTimeout(function(){alert(name2+" WINS");},100);
            turn=3;   
            document.getElementById("pos2").style.color="grey";
			document.getElementById("pos1").style.color="grey";
		 }
		 else{
		 	if(n==9){
		 		setTimeout(function(){alert("MATCH DRAW");},100);
		 		n++;
		 		document.getElementById("pos2").style.color="grey";
				document.getElementById("pos1").style.color="grey";
		 	}
		 }
		}
	});
}


document.getElementById("rematch").addEventListener("click",function(){
     for(var i=0;i<x.length;i++){
           	x[i].innerHTML="";
     }
     turn=0;
     n=0;
     document.getElementById("pos1").style.color="red";
     document.getElementById("pos2").style.color="grey";
});
document.getElementById("newgame").addEventListener("click",function(){ });

function checkifWin(){
	var v1=document.getElementById("1").innerHTML;
	var v2=document.getElementById("2").innerHTML;
	var v3=document.getElementById("3").innerHTML;
	var v4=document.getElementById("4").innerHTML;
	var v5=document.getElementById("5").innerHTML;
	var v6=document.getElementById("6").innerHTML;
	var v7=document.getElementById("7").innerHTML;
    var v8=document.getElementById("8").innerHTML;
    var v9=document.getElementById("9").innerHTML;

    if(v1==v4 && v4==v7 && (v1=="0" || v1=="X"))
    	return true;
    if(v2==v5 && v5==v8 && (v2=="0" || v2=="X"))
    	return true;
    if(v3==v6 && v6==v9 && (v3=="0" || v3=="X"))
    	return true;
    if(v1==v2 && v2==v3 && (v1=="0" || v1=="X"))
    	return true;    
    if(v4==v5 && v5==v6 && (v4=="0" || v4=="X"))
    	return true;
    if(v7==v8 && v8==v9 && (v7=="0" || v7=="X"))
    	return true;    
    if(v1==v5 && v5==v9 && (v1=="0" || v1=="X"))
    	return true;
    if(v7==v5 && v5==v3 && (v7=="0" || v7=="X"))
    	return true;
    return false;

}