























// ###პროექტი 4 - Indoor Voice - ჩუმი ხმა

// შექმენით პროგრამა, რომელიც მოგთხოვთ სტრიქონის ჩაწერას და შემდეგ იმავე ჩანაწერს მხოლოდ პატარა ასოებით გაჩვენებთ. პუნქტუაცია და სიმბოლოებს შორის სივრცეები (whitespace) უცვლელი უნდა დარჩეს.

// მაგალითად:

// > HELLO, WORLD
// > hello, world

const lowercase = () => {
    let string;
    do{
      string = prompt("Write something in uppercase: ");
      if(string !== string.toUpperCase()){
        alert("Please write only in uppercase letters.");}
    }
    while (string !== string.toUpperCase()) 
    console.log(string.toLowerCase());
}





// პროექტი 5 - Playback Speed - საუბრის სიჩქარე
// ზოგიერთი ადამიანი ლექციებს საკმაოდ სწრაფად კითხულობს; მათი შენელება ან თუნდაც, სიტყვებს შორის პაუზის გაკეთება კარგი იქნებოდა... შექმენით პროგრამა, რომელიც წინადადების ჩაწერას მოგთხოვთ, შემდეგ კი იმავე ჩანაწერს გაჩვენებთ, ოღონდ იმ განსხვავებით, რომ ამჯერად ასოებს შორის ყველა სივრცე (whitespace) მრავალწერტილით (...) იქნება ჩანაცვლებული.

// მაგალითად:

// > This is Bitcamp.
// > This...is...Bitcamp.

const playback = () => {
    let str = prompt("write some: ");
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            newStr += "...";
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr);
}
playback();

const playbacks = () => {
  let str = prompt("write some: ");
  str = str.split(" ").join("...");
  console.log(str);
};
playbacks();

// პროექტი 6 - Making Faces - სახეების მიღება
// emoji-მდე არსებობდა emoticon-ები, სადაც სიმბოლოების ერთობლიობა - ":)" გაღიმებულ სახეს აღნიშნავდა, ხოლო ":(" - მოწყენილს. დღეს პროგრამებში ეს სიმბოლოები emoji-დ ავტომატურად გარდაიქმნება.

// შექმენით პროგრამაში, სადაც დაწერთ ფუნქციას სახელწოდებით convert, რომელიც პარამეტრად იღებს სტრიქონს (str), შემდეგ კი იმავე სტრიქონს აბრუნებს, იმ განსხვავებით, რომ ნებისმიერ ამგვარ ჩანაწერს - ":)" 🙂-ით, ხოლო ":(" - 🙁-ით შეცვლის. დანარჩენი ტექსტი უცვლელი უნდა დარჩეს.

// იმავე პროგრამაში, დაწერეთ მეორე ფუნქცია - main, რომელიც სტრიქონის შეყვანას გთხოვთ, შემდეგ convert ფუნქციას იძახებს და ბოლოს, შედეგს გაჩვენებთ.

// მაგალითად:

// > hello :)
// > hello 🙂
// > goodbye :(
// > goodbye 🙁

const convert = (str) =>{
    if(str.includes(":)")){
        return str.replace(":)",  "🙂")
    }else if(str.includes(":(")){
        return str.replace(":(", "🙂")
    }else {
        return str
    }
}
const main = () =>{
    const str = prompt("wrote string: ");
    return convert(str);
}

console.log(main())

// პროექტი 7 - თამაში Mad Libs
// Mad libs არის მარტივი თამაში, სადაც თქვენ ქმნით ამბის შაბლონს ცარიელ სიტყვებთან ერთად. მოთამაშე ადგენს სიტყვების სიას და მოთხრობაში განათავსებს, შედეგად კი ხშირად სულელურ ან სასაცილო ამბავს ვიღებთ.
// შექმენით მარტივი პროგრამა, რომელიც ითხოვს არსებით სახელს, ზმნას, ზმნიზედას და ზედსართავ სახელს და ამ სიტყვებს თქვენივე შექმნილ ისტორიაში სვამს.

// მაგალითად:

// > Enter a noun: dog
// > Enter a verb: walk
// > Enter an adjective: blue
// > Enter an adverb: quickly
// > Enter an adjective: blue
// > Do you walk your blue dog quickly? That's hilarious!

const madLibs = () =>{
    const noun = prompt("enter noun: ")
    const verb = prompt("enter verb: ")
    const adjective = prompt("enter adjective: ")
    const adverb = prompt("enter adverb: ")
    const adjective2 = prompt("enter adjective: ")
    const final = noun + " " + verb + " " + adjective + " " + adverb + " " + adjective2 + "? " + "thats hilarius"
    console.log(final)
}
madLibs()

// პროექტი 8 - Guessing Game - გამოცნობანა
// ვფიქრობ რიცხვზე 1-დან 100-მდე... თუ გამოიცნობ, რა რიცხვია?

// დაწერეთ პროგრამა, რომელიც:

// მოუწოდებს მომხმარებელს თამაშის დონის მითითებას;. თუ მომხმარებელი არ ჩაწერს დადებით მთელ რიცხვს, პროგრამამ შეკითხვა კვლავ უნდა დასვას.
// შემთხვევითობის პრინციპით (randomly) ირჩევს მთელ რიცხვს 1-სა და n-ს შორის;
// მოუწოდებს მომხმარებელს, გამოიცნოს ეს მთელი რიცხვი. თუ input არ არის დადებითი მთელი რიცხვი, პროგრამამ კვლავ უნდა მიმართოს მომხმარებელს
// თუ input "ჩაფიქრებულ" მთელ რიცხვზე მცირეა, პროგრამამ უნდა გამოიტანოს Too small! და კვლავ დაუსვას შეკითხვა მომხმარებელს.
// პირიქით, თუ input ამ მთელ რიცხვზე დიდია, პროგრამამ უნდა გამოიტანოს Too large! და ისევ დასვას კითხვა.
// თუ მომხმარებელმა რიცხვი გამოიცნო, პროგრამამ უნდა დაბეჭდოს Just right! და დაასრულოს მუშაობა.

const Guess = () => {
    let enterLevel;

    do {
        enterLevel = +prompt("Enter level by number: ");
    } while (isNaN(enterLevel) || enterLevel <= 0);

    const randomNum = Math.floor(Math.random() * enterLevel) + 1;
    let enterNum;

    do {
        enterNum = +prompt("Enter number: ");

        if (isNaN(enterNum)) {
            alert('Please enter a valid number');
        } else if (enterNum < randomNum) {
            alert('Too small');
        } else if (enterNum > randomNum) {
            alert('Too large');
        } else {
            alert('Correct! The number was ' + randomNum);
        }
    } while (enterNum !== randomNum);
};

Guess();





// პროექტი 9 - Little Professor - პატარა პროფესორი
// ბავშვობაში დევიდის ერთ-ერთი პირველი სათამაშო იყო "პატარა პროფესორი", „კალკულატორი“, რომელიც დავითისთვის ათ სხვადასხვა მათემატიკურ ამოცანას ადგენდა. თუ სათამაშო 4 + 0 = აჩვენებდა, დავითი 4-ს ჩაწერდა, 4 + 1 = -ის შემთხვევაში, 5-ს. თუ დავითი პასუხს არასწორად გასცემდა, სათამაშო EEE-ს ბეჭდავდა. საბოლოოდ, ერთი და იმავე კალკულაციაზე სამი არასწორი პასუხის შემდეგ, სათამაშო უბრალოდ სწორ პასუხს აჩვენებდა (მაგ., 4 + 0 = 4 ან 4 + 1 = 5).

// დაწერეთ პროგრამა, რომელიც:

// მოუწოდებს მომხმარებელს, აირჩიოს თამაშის დონე,
// . თუ მომხმარებელი არ ჩაწერს 1, 2 ან 3-ს, პროგრამამ იგივე შეკითხვა კვლავ უნდა დასვას.

// შემთხვევითობის პრინციპით წარმოქმნის ათ (10) მათემატიკურ ამოცანას, ფორმატირებულს, როგორც X + Y = , სადაც თითოეული X და Y არის დადებითი მთელი რიცხვი.
// სთხოვს მომხმარებელს, გადაჭრას თითოეული ეს პრობლემა. თუ პასუხი არ არის სწორი (ან საერთოდ, რიცხვი არაა), პროგრამამ უნდა დაწეროს EEE და კვლავ იგივე ამოცანა დაუბეჭდოს მომხმარებელს, რაც მომხმარებელს საშუალებას მისცემს, ამ პრობლემის გადასაჭრელად სულ სამი ცდა გამოიყენოს. თუ მომხმარებელი სწორ პასუხს სამი ცდის შემდეგაც ვერ დაწერს, პროგრამამ სწორი პასუხი თვითონ უნდა დაუწეროს.

// საბოლოო ჯამში, პროგრამამ უნდა დაბეჭდოს მომხმარებლის ქულა: სწორი პასუხების რაოდენობა 10-დან.

// შექმენით თქვენი პროგრამა შემდეგნაირად, სადაც ერთი ფუნქცია მოუწოდებს (და საჭიროების შემთხვევაში ხელახლა ეკითხება) მომხმარებელს თამაშის დონის არჩევისკენ და აბრუნებს 1, 2 ან 3-ს; მეორე ფუნქცია - აბრუნებს შემთხვევით გენერირებულ დადებით მთელ რიცხვს, დონის ციფრების გათვალისწინებით, ან ბეჭდავს შეცდომის შეტყობინებას (error message), თუ დონე არ არის 1, 2 ან 3.

// მაგალითად:

// > Level: 1
// > 2 + 8 = 10
// > 3 + 7 = 10
// > 9 + 4 = 10
// > EEE
// > 9 + 4 = 11
// > EEE
// > 9 + 4 = 12
// > EEE
// > 9 + 4 = 13
// > 4 + 7 = 11

// > 1 + 4 = cat
// > EEE
// > 1 + 4 = dog
// > EEE
// > 1 + 4 = bird
// > EEE
// > 1 + 4 = 5
// > 9 + 3 = 12
// > 2 + 2 = 4
// > 0 + 0 = 0
// > Score: 8'

// const chooseLevel = () =>{
//     let chooseLevel = +prompt("Enter level (1, 2, or 3):");

// while (chooseLevel !== 1 && chooseLevel !== 2 && chooseLevel !== 3) {
//     chooseLevel = +prompt("Invalid input. Please enter level (1, 2, or 3):");
// }
// return chooseLevel;
// }


// const tasks = () =>{
//     let level;
//     let choosedLevel = chooseLevel();
//     if(choosedLevel == 1){
//         level = 10
//     }else if(choosedLevel == 2){
//         level = 20
//     }else if(choosedLevel == 3){
//         level = 30
//     }
    
//     let task;
// let count = 0;
// let answer;
// for(let i = 0; i < 10; i++){
//   let firstNum =  Math.floor(Math.random() * 10);
//   let secondNum =  Math.floor(Math.random() * 10);
//   let mult = firstNum + secondNum;
//   for(let k = 0; k  < 3; k++){
//        answer = +prompt(`${firstNum} + ${secondNum} = `);
//       if(answer == mult){
//           count++;
//           break;
//       } else if(answer !== mult){
//           alert('EEE')
//       }
//   }
//   if(answer !== mult){
//       alert(`${firstNum} + ${secondNum} = ${mult}`)
//   }
  
// }
// console.log(`score: ${count}`)
// }

const chooseLevel = () => {
  let chooseLevel = +prompt("Enter level (1, 2, or 3):");

  while (chooseLevel !== 1 && chooseLevel !== 2 && chooseLevel !== 3) {
    chooseLevel = +prompt("Invalid input. Please enter level (1, 2, or 3):");
  }
  return chooseLevel;
};

const tasks = () => {
  let level;
  let choosedLevel = chooseLevel();
  if (choosedLevel == 1) {
    level = 10;
  } else if (choosedLevel == 2) {
    level = 20;
  } else if (choosedLevel == 3) {
    level = 30;
  }

  let task;
  let count = 0;
  let answer;
  for (let i = 0; i < 10; i++) {
    let firstNum = Math.floor(Math.random() * 10);
    let secondNum = Math.floor(Math.random() * 10);
    let mult = firstNum + secondNum;
    let correctAnswer = false;
    let attempt = 0;

    while (attempt < 3 && !correctAnswer) {
      answer = +prompt(`${firstNum} + ${secondNum} = `);
      if (answer == mult) {
        count++;
        correctAnswer = true;
      } else if (answer !== mult) {
        console.log("EEE");
        attempt++;
      }
    }
    if (answer !== mult) {
      console.log(`${firstNum} + ${secondNum} = ${mult}`);
    }
  }
  console.log(`score: ${count}`);
};


tasks()
