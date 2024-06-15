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

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,3,4,5,6,7,8];

for(let i = 0; i < arr2.length; i++){
  if(!arr2.includes(arr1[i])){
    console.log("not equal")
  }
}

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.
// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად.
// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.
// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.
// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.
// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.