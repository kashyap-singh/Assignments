  

document.getElementById("btn").addEventListener("click",function()
{
    document.getElementById("circle").style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
});