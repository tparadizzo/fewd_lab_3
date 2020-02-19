//Question 3
function greettwo(){
    return 'Haydo!';
}
var salutation = greettwo();
console.log(greettwo());

//Question 4
function echo(sound){
    return sound;
}
console.log(echo());


//Question 5
function greet(name){
    console.log('Hello ' + name + '!');
}
greet('Tabita');

//Question 8
function shout(){
    return 'FireFire';
};
shout();
console.log(shout());

//Question 11
function doSomething(name){
    return name;
}
doSomething('Tabita');
console.log(doSomething('Tabita'));

//Question 12
function multiplyFive(number = 6){
    return number * 5;
}
console.log(multiplyFive());

//Question 13
/*function myFunction(){
    alert('Hello World!');
}
myFunction(); */

//Question 14
function isAnswerRight(value = true){
    if(value == true){
        console.log('The answer is right!');
    } else {
        console.log('The answer is wrong!');
    }
}
isAnswerRight();

//Question 15
function tellFortune(numberOfChildren = 'N', partnersName = 'Z', geographicLocation = 'Y',  jobTitle = 'X' ){
    console.log(`You will be ${numberOfChildren} in ${partnersName}, and married to ${geographicLocation} with ${jobTitle} kids.`)
}
tellFortune();