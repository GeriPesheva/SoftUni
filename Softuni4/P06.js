// Пребоядисване

// Румен иска да пребоядиса хола и за целта е наел майстори. Напишете програма, която изчислява разходите за ремонта, предвид следните цени:

// · Предпазен найлон - 1.50 лв. за кв. метър

// · Боя - 14.50 лв. за литър

// · Разредител за боя - 5.00 лв. за литър

// За всеки случай, към необходимите материали, Румен иска да добави още 10% от количеството боя и 2 кв.м. найлон, разбира се и 0.40 лв. за торбички. Сумата, която се заплаща на майсторите за 1 час работа, е равна на 30% от сбора на всички разходи за материали.

// Вход

// Входът се чете от конзолата и съдържа точно 4 реда:

// 1. Необходимо количество найлон (в кв.м.) - цяло число в интервала [1... 100]

// 2. Необходимо количество боя (в литри) - цяло число в интервала [1…100]

// 3. Количество разредител (в литри) - цяло число в интервала [1…30]

// 4. Часовете, за които майсторите ще свършат работата - цяло число в интервала [1…9]

// Изход

// Да се отпечата на конзолата един ред:

// · "{сумата на всички разходи}"



function repainting(input) {
    let nylon = ((Number(input[0]) + 2) * 1.50);
    let print = Number(input[1]);
    let printProcent = (print * 0.10) + print;
    let sumPrint= printProcent* 14.50;
    let thinnerPrint = (Number(input[2]) * 5.00);
    let hourM = Number(input[3]);
    let bag = 0.40;
    let priceMaistor =nylon + sumPrint + thinnerPrint + bag;
    let totalPriceM = (priceMaistor * 0.30) * hourM;
    let totalSum = priceMaistor + totalPriceM;
console.log(totalSum);
}
repainting(["10 ",

"11 ",

"4 ",

"8 "]);