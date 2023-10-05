// Да се напише функция, която получава час и минути от 24 - часово денонощие
//  и изчислява колко ще е часът след 15 минути.
//  Резултатът да се отпечата във формат часове: минути.
//  Часовете винаги са между 0 и 23, а минутите винаги са между 0 и 59.
//  Часовете се изписват с една или две цифри.Минутите се изписват винаги с по две цифри, с водеща нула, когато е необходимо.


function time(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    minutes = minutes + hour * 60;
    minutes += 15;
    hour  = minutes / 60;
    minutes = minutes % 60;
    hour = hour.toFixed(0);
if (hour==24) {
    hour = 0;
    console.log(`${hour}:${minutes}`);
    }

    if (minutes<10) {
        console.log(`${hour}:${0}${minutes}`);
    }
  

}
time(["23", "59"])