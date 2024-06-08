// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// const number = Number(prompt("enter number: "));

// const evenOrOdd = number % 2;
// if (evenOrOdd !== 0 ) {
//   console.log("odd");
// } else {
//   console.log("even");
// }
// დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
// const number = Number(prompt("enter number: "));

// if(number === 0){
//     console.log("zero")
// }else if(number < 0){
//     console.log("less than zero");
// }else if(number > 0){
//     console.log("more than zero")
// }

//დაწერეთ პროგრამა, რათა შეამოწმოთ იყოფა თუ არა რიცხვი სხვა რიცხვზე.
// const num1 = Number(prompt("enter number: "));
// const num2 = Number(prompt("enter number: "));

// if(num2%num1 === 0){
//     console.log("iyofa")
// }else {
//     console.log("arIyofa")
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
// let str = "lama";

// if(str.trim() === ""){
//     console.log("empty string");
// }else{
//     console.log("not empty")
// }

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
// let str = "it is a rainy day"

// if (str.includes("day")){
//     console.log("yes")
// }else {
//     console.log("no")
// }
//დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.
// const num1 = Number(prompt("enter number: "));
// const num2 = Number(prompt("enter number: "));

// const minNumber =  Math.min(num1,num2)
// console.log(minNumber);

//დაწერეთ პროგრამა, რომ იპოვოთ მაქსიმალური ორი რიცხვიდან.
// const num1 = Number(prompt("enter number: "));
// const num2 = Number(prompt("enter number: "));

// const maxNumber =  Math.max(num1,num2)
// console.log(maxNumber);

// დაწერეთ პროგრამა, რომელიც მომხმარებელს შეეკითხება თავის ასაკს და დაადგენს არის თუ არა 18 წლის ან უფრო მეტის. თუ არის, გამოპრინტეთ "Adult", თუარადა - "Minor".
// const age = +prompt("enter age: ");
// if(age > 18){
//     console.log("Adult")
// }else {
//     console.log("Minor")
// }

// დაწერეთ პროგრამა, რომელიც შეეკითხება მომხმარებელს ქულას და გამოიტანს შესაბამის შეფასებას. 91-100 -> A; 81-90 -> B, 71 -> 80: C, 61-70 -> D, 51-60 -> E, 0-50 -> ჩაიჭრა. გამოიყენეთ ორივე - if/else if/else და switch.
// const num = Number(prompt("enter point: "));

// switch(true){
//     case num > 90 && num <=100: console.log("A");
//     case num > 80 && num <=90: console.log("B");
//     case num > 70 && num <=80: console.log("C");
//     case num > 60 && num <=70: console.log("D");
//     case num > 50 && num <=60: console.log("E");
//     case num >= 0 && num <=50:  console.log("Failed");
// }
// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// const marking = prompt("enter markingPoint: ");

// switch(marking){
//     case "A":
//     console.log("შესანიშნავი");
//     break;
//     case "B": console.log("კარგი");  break;
//     case "C": console.log("ნორმალური");   break;
//     case "D": console.log("ცუდი");   break;
//     case "F": console.log("ეეე პიზდეც"); break;
//     default: console.log("no such marking");

// }

// დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

let num = +prompt("enter number ");

switch (num) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("31");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("30");
    break;
  case 2:
    console.log("28 or 29");
    break;
}
