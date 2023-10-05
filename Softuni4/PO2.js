// Конвертор: от радиани в градуси Напишете програма, която чете ъгъл в радиани(десетично число)
// и го преобразува в градуси.Използвайте формулата: градус = радиан * 180 / π.Числото π в Java програми е достъпно чрез Math.PI.


function radianiOfRadius(input) {
    let radian = Number(input[0]);
   let gradus = radian * 180/Math.PI;
   console.log(gradus);

}
radianiOfRadius(["3.1416"]);