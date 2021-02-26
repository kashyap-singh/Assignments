drawPattern(5,100,100,200);



function createCanvas(){
	  var cn = document.createElement("canvas");
      cn.style.backgroundColor="black";
      cn.id="canvas";
      cn.setAttribute("height","700");
      cn.setAttribute("width","1400");
      return cn;
}

function drawPattern(numberOfSides,radius,x,y){
	  var d=document.getElementById("outer");
	  var d_nested=document.getElementById("canvas");	
	  d.removeChild(d_nested);

	  var cn=createCanvas();
      document.firstElementChild.lastElementChild.firstElementChild.lastElementChild.appendChild(cn);
      var canvas = document.getElementById('canvas');
      var ctx = canvas.getContext('2d');
	  ctx.beginPath();
      ctx.translate(x,y);
	  ctx.moveTo(radius,0);
	  var angle = 2*Math.PI/numberOfSides;          
 	  for (var i=1; i<=numberOfSides; i++) {
		 ctx.lineTo(radius*Math.cos(i * angle), radius*Math.sin(i * angle));
	  } 
	ctx.fillStyle = "red";
	ctx.fill();
	ctx.stroke();
}

document.getElementById("canvas").addEventListener("click",function(){
  var numberOfSides=Math.floor(Math.random()*10)+1;
  var radius=Math.floor(Math.random()*100)+50;
  var x=Math.floor(Math.random()*100)+100;
  var y=Math.floor(Math.random()*100)+100;
  drawPattern(numberOfSides,radius,x,y);
   
});