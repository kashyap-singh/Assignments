var name1,name2;
setTimeout(function(){name1=prompt("Enter Player 1 Name");},300);
setTimeout(function(){name2=prompt("Enter Player 2 Name");},300);
setTimeout(function(){sessionStorage.setItem("name1",name1);},300);
setTimeout(function(){sessionStorage.setItem("name2",name2);},300);
setTimeout(function(){document.getElementById("name11").value=name1;},300);
setTimeout(function(){document.getElementById("name22").value=name2;},300);