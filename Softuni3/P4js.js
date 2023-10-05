/*4.	Конвертор: инчове към сантиметри
Да се напише функция, която чете от конзолата реално число и го преобразува от инчове в сантиметри. За целта умножете инчовете по 2.54 (1 инч = 2.54 сантиметра).
Примерен вход и изход
вход	изход
["5"]	12.7
вход	изход
["7"]	17.78

*/
function convert(input) {
    let inch = Number(input[0]);
    let sm = inch * 2.54;
    console.log(sm);
}
convert(["7"])

//oще едно решение
/* function inchInSm(input){
    let   inch = 2.54;
    let   num= input;
       let result = num * inch;
       console.log(result)
} */ 