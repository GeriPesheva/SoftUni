function calculateTimeAfter15Minutes(hours, minutes) {
    // Първо, превръщаме часовете и минутите в общ брой минути
    let totalMinutes = (hours * 60) + minutes;

    // Добавяме 15 минути
    totalMinutes += 15;

    // Изчисляваме новите часове и минути
    let newHours = Math.floor(totalMinutes / 60) % 24;
    let newMinutes = totalMinutes % 60;

    // Форматираме изхода
    let formattedHours = newHours.toString().padStart(2, '0');
    let formattedMinutes = newMinutes.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}`;
}

// Примери на използване
console.log(calculateTimeAfter15Minutes(0, 45)); // Резултат: 08:45
console.log(calculateTimeAfter15Minutes(23, 45)); // Резултат: 00:00