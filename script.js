let buttonstatus = 0;
function myFunction(id) {
  document.getElementById("p1").innerHTML = "<button id='test'>Click</button>";
  var target = document.getElementById("test"); 
  if (buttonstatus == 0){
    buttonstatus = "선택";
  }
  if (buttonstatus == "선택")
  {
    buttonstatus = "제외";
    document.getElementById("test").style.backgroundColor = "lightgreen";
    document.getElementById(id).style.backgroundColor = "lightgreen";
  }
  else if (buttonstatus == "제외")
  {
    buttonstatus = "초기화";
    document.getElementById("test").style.backgroundColor = "lightsalmon";
    document.getElementById(id).style.backgroundColor = "lightsalmon";
  }
  else if (buttonstatus == "초기화")
  {
    buttonstatus = "선택";
    document.getElementById("test").innerHTML = "";
    target.style.border = "none"
    document.getElementById(id).style.backgroundColor = "";
  }
}