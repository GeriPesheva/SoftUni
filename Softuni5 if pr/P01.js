// Лаб: Условни конструкции
// . Отлична оценка

// Първата задача от тази тема е да се напише функция, която чете оценка, получена като аргумент и отпечатва "Excellent!", ако оценката е 5.50 или по-висока.


function evaluation(input) {
    let ocenka = Number(input[0]);
    if (ocenka >= 5.50) {
        console.log("Excellent! ");
    }
    
    

}
evaluation(["5"]);