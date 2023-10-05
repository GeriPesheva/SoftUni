// 7.	Лица на фигури
// Да се напише функция,  която получава като вида и размерите на геометрична фигура и пресмята лицето й. Фигурите са четири вида: квадрат (square), правоъгълник (rectangle), кръг (circle) и триъгълник (triangle). На първия ред на входа се чете вида на фигурата (текст със следните възможности: square, rectangle, circle или triangle).
// •	Ако фигурата е квадрат (square): на следващия ред се чете едно дробно число - дължина на страната му
// •	Ако фигурата е правоъгълник (rectangle): на следващите два реда четат две дробни числа - дължините на страните му
// •	Ако фигурата е кръг (circle): на следващия ред чете едно дробно число - радиусът на кръга
// •	Ако фигурата е триъгълник (triangle): на следващите два реда четат две дробни числа - дължината на страната му и дължината на височината към нея
// Резултатът да се закръгли до 3 цифри след десетичната запетая.


function figuri(input) {
    let figura = (input[0]);
    let lice1 = Number(input[1]);
    let lice2 = Number(input[2]);

    if (figura== "square") {
        console.log((lice1*lice1).toFixed(3));
         }
else if (figura=="rectangle") {
    console.log((lice1*lice2).toFixed(3));
    }
    
    else if (figura == "circle") {
        
        console.log((Math.PI*lice1*lice1).toFixed(3));
    }
    else if (figura=="triangle") {
        console.log((lice1*lice2/2).toFixed(3));
    }
}







figuri (["triangle",
"4.5",
"20"])
 ;