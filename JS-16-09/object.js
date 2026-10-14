

//objects

const person = {
    nname: "Bella",
    age: 20,
    likesFotball: true,
    hobbies: ["hokiey", "gym", "dans"],
    describe: function () {
        console.log("Mina hobbies");
        for (const hobbie of this.hobbies) {
            console.log(hobbie);
        }
    },
};

person.hobbies.push("curling");
person.dogName = "Cool";

console.log(person.likesFotball);
person.describe();
console.log(person.dogName);

const car = {
    color: "röd",
    speed: "323khm",
    brand: "BMW",
    model: "750",

    vroom: function () {
        console.log("vroooom at" + this.speed);
    }

};

car.vroom();
console.log(car.color.length);
console.log(car.brand.toLowerCase());




const student = {
    name: "Noora",
    age: 34,
    isEnrolled: true
};


// Uppgift 2
console.log(student.name);
console.log(student.age);
console.log(student.isEnrolled);


// Uppgift 3
student.age = 35;

console.log(student.age);


// Uppgift 4
student.city = "Malmö";

console.log(student.city);


// Uppgift 5
const book = {
    title: "Harry Potter",
    author: "J.K. Rowling",
    year: 1997
};

console.log("Boken " + book.title + " är skriven av " + book.author);


// Bonus 1
console.log(student.email);

const numbers = [10, 20, 30];

console.log(numbers[5]);


// Bonus 2
student.hobbies = ["fotboll", "kodning"];

console.log(student.hobbies);


// Bonus 3
const student2 = {
    name: "Aleen",
    age: 10,
    isEnrolled: true
};

if (student.isEnrolled === student2.isEnrolled) {
    console.log("Båda studenterna är registrerade.");
} else {
    console.log("De är inte båda registrerade.");
}


// Bonus 4
student.introduce = function() {
    console.log("Hej, jag heter " + this.name);
};

student.introduce();