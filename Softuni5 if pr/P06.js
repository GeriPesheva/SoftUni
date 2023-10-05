// 6.	Информация за скоростта
// Да се напише функция, която получава скорост (реално число) и отпечатва информация за скоростта. 
// •	При скорост до 10 (включително) отпечатайте "slow"
// •	При скорост над 10 и до 50 (включително) отпечатайте "average" 
// •	При скорост над 50 и до 150 (включително) отпечатайте "fast"
// •	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast" 
// •	При по-висока скорост отпечатайте "extremely fast"
function speed(input) {
  if (input<=10) {
    console.log("slow" );
    }  
    else if (input>10 && input <=50) {
        console.log( "average" );
  }
  
  else if (input>50 && input<=150) {
        console.log("fast" );
  }
  else if (input>150 && input<=1000) {
        console.log( "ultra fast" );
  }
  else {
        console.log( "extremely fast");
    }





}
speed(["160"]);