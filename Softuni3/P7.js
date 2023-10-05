/* Напишете програма, която изчислява колко часа ще са необходими на един архитект, за да изготви проектите на няколко строителни обекта. Изготвянето на един проект отнема три часа.
Вход
От конзолата се четат 2 реда:
1.	Името на архитекта - текст
2.	Брой на проектите, които трябва да изготви - цяло число в интервала [0 … 100]
като всеки проект отнеме 3ч.
Изход

На конзолата се отпечатва:

· "The architect {името на архитекта} will need {необходими часове} hours to complete {брой на проектите} project/s."

*/

function arhitect(input ) {
    let arhitectName = input[0];
    let brProject= input[1];
    let brHours = (brProject * 3);
   console.log(`The architect ${arhitectName} will need ${brHours} hours to complete ${brProject} project/s.`)
}

arhitect(["Georg",4, ])