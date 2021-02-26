var x = document.querySelectorAll("a");
var a = []
for (var i=0; i<x.length; i++){
var Text = x[i].innerHTML;
var link = x[i].href;
a.push([Text,link]);
};
console.log(a);
document.getElementById("click").addEventListener("click",function(){
    make_table();
});
   
	
function make_table() {
   var table = '<table><thead style="text-align:left;padding-bottom:15px"><th >Name</th><th>Links</th></thead><tbody>';
   for (var i=0; i<a.length; i++) {
            table += '<tr><td style="padding-right:100px">'+ a[i][0] + '</td><td>'+a[i][1]+'</td></tr>';
    };
 
    var w = window.open("");
    w.document.write(table); 
}