"use strict"; // to enable strict mode and modern JavaScript functionality

const teacher1 = {
	name: "lærer1",
	position: "prog",
	department: "MDU",
	address: "århus",
	mail: "teacher1@eaaa.dk",
	phone: "70121416",
	image: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335231430000&format=webp",
};

const teacher2 = {
	name: "lærer2",
	position: "ux",
	department: "MDU",
	address: "århus",
	mail: "teacher2@eaaa.dk",
	phone: "35060708",
};

const teacher3 = {
	name: "lærer3",
	position: "gui",
	department: "MDU",
	address: "århus",
	mail: "teacher3@eaaa.dk",
	phone: "88888888",
};

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

// appending the value from the variable to thee DOM element #content
document.querySelector(
	".grid-container"
).innerHTML += `<article class="teacher">
  <h3>Name: ${teacher1.name}</h3>
  <h3>Position: ${teacher1.position}</h3>
  <h3>Department: ${teacher1.department}</h3>
  <h3>Address: ${teacher1.address}</h3>
  <h3>Mail: </h3><a href="mailto:${teacher1.mail}">${teacher1.mail}</a>
  <h3>Phone: ${teacher1.phone}</h3>
  <img src="${teacher1.image}">
  </article>`;

document.querySelector(
	".grid-container"
).innerHTML += `<article class="teacher">
  <h3>Name: ${teacher2.name}</h3>
  <h3>Position: ${teacher2.position}</h3>
  <h3>Department: ${teacher2.department}</h3>
  <h3>Address: ${teacher2.address}</h3>
  <h3>Mail: </h3><a href="mailto:${teacher2.mail}">${teacher2.mail}</a>
  <h3>Phone: ${teacher2.phone}</h3>
  </article>`;

document.querySelector(
	".grid-container"
).innerHTML += `<article class="teacher">
  <h3>Name: ${teacher3.name}</h3>
  <h3>Position: ${teacher3.position}</h3>
  <h3>Department: ${teacher3.department}</h3>
  <h3>Address: ${teacher3.address}</h3>
  <h3>Mail: </h3><a href="mailto:${teacher3.mail}">${teacher3.mail}</a>
  <h3>Phone: ${teacher3.phone}</h3>
  </article>`;
