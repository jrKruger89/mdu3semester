"use strict"; // to enable strict mode and modern JavaScript functionality

let teacher1 = {
	name: "lærer1",
	position: "prog",
	department: "MDU",
	address: "århus",
	mail: "teacher1@eaaa.dk",
	phone: "70121416",
	image: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
};

let teacher2 = {
	name: "lærer2",
	position: "ux",
	department: "MDU",
	address: "århus",
	mail: "teacher2@eaaa.dk",
	phone: "35060708",
	image: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
};

let teacher3 = {
	name: "lærer3",
	position: "gui",
	department: "MDU",
	address: "århus",
	mail: "teacher3@eaaa.dk",
	phone: "88888888",
	image: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

let teacherArray = [];
teacherArray.push(teacher1);
teacherArray.push(teacher2);
teacherArray.push(teacher3);

console.log(teacherArray);
appendTeachers(teacherArray);

// appending the value from the variable to thee DOM element #content
function appendTeachers(teachers) {
	for (let teacher of teacherArray) {
		document.querySelector(
			".grid-container"
		).innerHTML += `<article class="teacher">
    <h3>Name: ${teacher.name}</h3>
    <h3>Position: ${teacher.position}</h3>
    <h3>Department: ${teacher.department}</h3>
    <h3>Address: ${teacher.address}</h3>
    <h3>Mail: </h3><a href="mailto:${teacher.mail}">${teacher.mail}</a>
    <h3>Phone: ${teacher.phone}</h3>
    <img src="${teacher.image}">
    </article>`;
	}
}

/* 
for (let teacher of teacherArray) {
	document.querySelector(
		".grid-container"
	).innerHTML += `<article class="teacher">
  <h3>Name: ${teacher.name}</h3>
  <h3>Position: ${teacher.position}</h3>
  <h3>Department: ${teacher.department}</h3>
  <h3>Address: ${teacher.address}</h3>
  <h3>Mail: </h3><a href="mailto:${teacher.mail}">${teacher.mail}</a>
  <h3>Phone: ${teacher.phone}</h3>
  <img src="${teacher.image}">
  </article>`;
} 
*/
