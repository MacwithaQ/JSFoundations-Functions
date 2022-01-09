/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */


function printName(){
console.log("Mohammed Alqallaf");
}

printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */

function printAge(birthYear){

age = 2022-birthYear;
console.log(age);
}



/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */


function printHello(name, lang){


if (lang === "en"){
    return `Hello ${name}`;
}
else if (lang === "es"){
    return `Hola ${name}`
}
else if (lang === "fr"){
    return `Bonjour ${name}`
}
else if (lang === "tr"){
    return `Merhaba ${name}`
}
else{
    return `Hello ${name}`
}

}

console.log(printHello("mohammed","en"));



/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(const1, const2){
if (const1 > const2){
    return const1
}
else {
    return const2
}
}

console.log(printMax(8,2));
