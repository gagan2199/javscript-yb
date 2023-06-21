document.getElementById('1st').addEventListener("mouseleave",abc);
document.getElementById('1st').removeEventListener("click",xyz);
document.getElementById('2nd').addEventListener("click",function(){
   this.style.backgroundColor="red";
});
function abc(){
    document.getElementById('1st').style.backgroundColor="black";
    document.getElementById('1st').style.color="white";
}
function xyz()
{
    document.getElementById('1st').removeEventListener("mouseleave",abc);
}
