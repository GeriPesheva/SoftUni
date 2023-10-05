// Снимките за дългоочаквания филм "Годзила срещу Конг" започват. Сценаристът Адам Уингард ви моли да напишете функция, която да изчисли, дали предвидените средства са достатъчни за снимането на филма. За снимките  ще бъдат нужни определен брой статисти, облекло за всеки един статист и декор.
// Известно е, че:
// •	Декорът за филма е на стойност 10% от бюджета.
// •	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
// Вход
// Функцията получава 3 аргумента:
// 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
// 2.	Брой на статистите – цяло число в интервала [1 … 500]
// 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
// Изход
// На конзолата трябва да се отпечатат два реда:
// •	Ако  парите за декора и дрехите са повече от бюджета:
// o	"Not enough money!"
// o	"Wingard needs {парите недостигащи за филма} leva more."
// •	Ако парите за декора и дрехите са по малко или равни на бюджета:
// o	"Action!"
// o	"Wingard starts filming with {останалите пари} leva left."
// Резултатът трябва да е форматиран до втория знак след десетичната запетая.


function godzilaAndKong(input) {
    let budjet = Number(input[0]);
    let brStatisti = Number(input[1]);
    let priceOufit = Number(input[2]);
    let priceDecor = budjet * 0.10;
    let sumPriceOutfit = brStatisti * priceOufit;
    if (brStatisti>150) {
        sumPriceOutfit = sumPriceOutfit * 0.90;
    }
    let sum = priceDecor + sumPriceOutfit;
    let totalSum =Math.abs (budjet - sum);

    if (budjet>=sum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${totalSum.toFixed(2)} leva left.`);
    }
    else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${totalSum.toFixed(2)} leva more.`);
}



    
}
godzilaAndKong(["9587.88",
"222",
"55.68"])
