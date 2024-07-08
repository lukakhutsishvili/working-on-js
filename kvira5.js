// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

let array = [1, 2, 3, 45, 5, 6, 6];

let sum = 0;

for (let number of array) {
  sum += number;
}

console.log(sum);
// დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

function average(...numbers) {
  let numsArr = numbers;
  console.log(numsArr);
  let sums = 0;

  for (let num of numsArr) {
    sums += num;
  }
  return sums / numsArr.length;
}

average(123, 123, 123, 123);

// დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

const increase = () => {
  let numbers = [3, 21, 232, 5, 85, 5];
  let swapped;
  length = numbers.length;

  do {
    swapped = false;
    for (let i = 0; i < length - 1; i++) {
      if (numbers[i] > numbers[i + 1]) {
        [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
        swapped = true;
      }
    }
    length--;
  } while (swapped);

  return numbers;
};

console.log(increase());
// დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

const max = () => {
  const arr = [1, 23, 55, 55, 677, 234];
  let max = -Infinity;
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
};

console.log(max());
// დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.
const min = () => {
  const arr = [-1, 23, 55, 55, 677, 234];
  let min = Infinity;
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
};

console.log(min());

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

const arr = [1, 23, 5, 5, 67, 4];

const Includes = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return true;
    }
  }
  return false;
};

console.log(Includes(arr, 5));

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

const findElem = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      return elem;
    }
  }
  return "no such element";
};

console.log(findElem(arr, 24));

// დაწერეთ პროგრამა მასივში კონკრეტული ელემენტის გავრცელების რაოდენობის დასათვლელად.
const findElemCount = (arr, elem) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elem) {
      count++;
    }
  }
  return count;
};

console.log(findElemCount(arr, 4));
// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.

const evenSum = (arr) => {
  let sum = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      sum += num;
    }
  }
  return sum;
};

console.log(evenSum([1, 2, 3, 4]));

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

const numArray = [5, 3, 8, 4, 1, 9, 7];

const SecondMax = (arr) => {
  let swapped = false;
  let n = arr.length;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  let num = -Infinity;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < arr[arr.length - 1]) {
      num = arr[i];
      return num;
    }
  }
};

console.log(SecondMax(numArray));

// const SecondMax = (arr) => {
//   if (arr.length < 2) return null;

//   let max = -Infinity;
//   let secondMax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       secondMax = max;
//       max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] < max) {
//       secondMax = arr[i];
//     }
//   }

//   return secondMax === -Infinity ? null : secondMax;
// };

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < arr2.length; i++) {
  if (!arr2.includes(arr1[i])) {
    console.log("not equal");
  }
}

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

const sortarr1 = arr1.sort();
const sortarr2 = arr2.sort();

const concatedArr = [...sortarr1, ...sortarr2];
concatedArr.sort();
console.log("coincaterArr:" + concatedArr);

// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
const arrayOfStrings = ["DAVID, Lika, nika"];

arrayOfStrings.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
});

// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
function common(...args) {
  const firstArr = args[0];
  const common = [];
  for (let i = 0; i < firstArr.length; i++) {
    let count = 0;
    for (let j = 1; j < args.length; j++) {
      if (args[j].includes(firstArr[i])) {
        count++;
      }
      if (count === args.length - 1) {
        common.push(firstArr[i])
      }
    }
  }
  return common;
}

console.log(common([2, 5], [1, 2, 5, 6], [7, 5]));

// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

const car = {
  type: "sedan",
  year: "2021",
};
// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.\

car.start = () => {
  const str = "The car is starting!";
  console.log("The car is starting!");
  return str;
};

car.start();

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
const Person = {
  name: "luka",
  age: "24",
  city: "tbilisi",
};

console.log(Person.name);
// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.

Person.job = "developer";

console.log(Person);


// პროექტი 10 - ქულების გამომთვლელი
// შექმენით მარტივი JavaScript პროგრამა, რომელიც ითვლის შეფასებას მოსწავლის ქულების მიხედვით.
// შეფასების სქემა შემდეგნაირია:
// A: 90-100
// B: 80-89
// C: 70-79
// D: 60-69
// F: 0-59
// პროგრამამ უნდა მოსთხოვოს მომხმარებელს შეიყვანოს რიცხვითი ქულა(0-დან 100-ის ჩათვლით ნებისმიერი რიცხვი).
// გამოიყენეთ პირობითი ოპერატორები შეყვანილი რიცხვის შეფასების დასადგენად.
// ეკრანზე გამოიტანეთ როგორც შეყვანილი რიცხვი ასევე შესაბამისი ასო.



const countant =  () =>{
    const num = +prompt("Enter the student's score: ");
     console.log("Student's Score: " + num);
    let grade;
  switch (true) {
        case (num >= 90 && num <= 100):
            grade = 'A';
            break;
        case (num >= 80 && num < 90):
            grade = 'B';
            break;
        case (num >= 70 && num < 80):
            grade = 'C';
            break;
        case (num >= 60 && num < 70):
            grade = 'D';
            break;
        case (num >= 0 && num < 60):
            grade = 'F';
            break;
        default:
            grade = 'Invalid score';
    }
    console.log("Grade: " + grade)
}

countant();

// პროექტი 11 - Simple Math - მარტივი მათემატიკა
// თქვენ ხშირად დაწერთ პროგრამებს, რომლებიც ეხება რიცხვებს. ხშირად, პროგრამაში მიღებული მონაცემები (input )რიცხვით მონაცემების ტიპებად უნდა გარდაქმნათ. დაწერეთ პროგრამა, რომელიც მოგთხოვთ ორ რიცხვს. ამობეჭდეთ ამ რიცხვების ჯამი, სხვაობა, ნამრავლი და განაყოფი.

// მაგალითად:
// > What is the first number? 10
// > What is the second number? 5
// > 10 + 5 = 15
// > 10 - 5 = 5
// > 10 * 5 = 50
// > 10 / 5 = 2

const simpleMath = () => {
    const firstNumber = parseFloat(prompt("What is the first number? "));
    const secondNumber = parseFloat(prompt("What is the second number? " ));

    const sum = firstNumber + secondNumber;
    const difference = firstNumber - secondNumber;
    const product = firstNumber * secondNumber;
    const quotient = firstNumber / secondNumber;

    console.log(`${firstNumber} + ${secondNumber} = ${sum}`);
    console.log(`${firstNumber} - ${secondNumber} = ${difference}`);
    console.log(`${firstNumber} * ${secondNumber} = ${product}`);
    console.log(`${firstNumber} / ${secondNumber} = ${quotient}`);
}

simpleMath();

// 12


const einstein = () => {
  const massInKg = parseFloat(prompt("Enter the mass in kilograms:"));

  // Speed of light in meters per second
  const speedOfLight = 300000000;

  // Calculate energy using E = mc^2
  const energy = massInKg * speedOfLight ** 2;

  // Print the result
  console.log(
    `Energy equivalent of ${massInKg} kg is approximately ${energy} joules.`
  );
};

einstein();

//13
