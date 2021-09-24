"use strict"; // to enable strict mode and modern JavaScript functionality

import Teacher from "./teacher.js";
import Person from "./person.js";

let people = [
    new Person(
        "Johnny",
        "johnny@live.dk",
        "1951-03-31",
        "https://www.mhe.dk/wp-content/uploads/2020/10/W2-Johnny-Madsen.jpg"
    ),
    new Teacher(
        "Rasmus",
        "race@eaaa.dk",
        "1990-05-18",
        "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp",
        "Programming",
        "Lecturer"
    ),
    new Teacher(
        "Morten",
        "moab@eaaa.dk",
        "1988-05-18",
        "https://www.eaaa.dk/media/hi4lv5hw/morten-bonderup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335308630000&format=webp",
        "Programming",
        "Lecturer"
    ),
];

/*
document.querySelector("#content").innerHTML += person1.appendPerson();
document.querySelector("#content").innerHTML += teacher1.appendPerson();
*/

console.log(people);

for (let person of people) {
    document.querySelector("#content").innerHTML += person.appendPerson();
}
