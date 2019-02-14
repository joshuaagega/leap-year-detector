function findOut(){
var input=document.getElementById('input').value;
if (input % 4 == 0) {
  alert("true");
}else if (input% 100 == 0 && input % 400 == 0) {
 alert("true");
} else {
 alert("false")
}



}
