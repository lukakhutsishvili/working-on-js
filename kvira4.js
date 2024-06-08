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
