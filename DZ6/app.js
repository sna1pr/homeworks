function alerted(){
    alert("Вы нажали на кнопку");
}
let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");
document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus >= 0){
    count.innerHTML++;
  }
}
document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
  }
}  