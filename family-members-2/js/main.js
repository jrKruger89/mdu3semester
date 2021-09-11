/*
 Array of family members
*/
let familyMembers = [
	{
		name: "Homer Jay Simpson",
		age: 40,
		hairColor: "used to be brown",
		relation: "dad",
		img: "img/homer.jpg",
	},
	{
		name: "Marjorie Simpson",
		age: 37,
		hairColor: "blue",
		relation: "mom",
		img: "img/marge.jpg",
	},
	{
		name: "Margaret Evelyn Lenny Simpson",
		age: 1,
		hairColor: "yellow",
		relation: "daughter",
		img: "img/maggie.jpg",
	},
	{
		name: "Lisa Marie Simpson",
		age: 8,
		hairColor: "yellow",
		relation: "daughter",
		img: "img/lisa.jpg",
	},
	{
		name: "Bartholomew Jojo Simpson",
		age: 10,
		hairColor: "yellow",
		relation: "son",
		img: "img/bart.png",
	},
];

console.log(familyMembers);

/*
Appends data to the DOM
*/
function appendPersons(persons) {
	// TODO: append family members to det dom using a for-off loop
	let htmlTemplate = "";
	for (let person of persons) {
		htmlTemplate += `<article>
		<img src="${person.img}">
			<h3>${person.name}</h3>
			<p>Age: ${person.age}</p>
			<p>Relation: ${person.relation}</p>
			<p>Haircolor: ${person.hairColor}</p>
			</article>`;
	}
	document.querySelector("#persons").innerHTML = htmlTemplate;
}

appendPersons(familyMembers); // calling the append function with familyMember Arrays as argument

/*
Search functionality: find objects by given searchValue
*/
function search(searchValue) {
	searchValue = searchValue.toLowerCase();
	console.log(searchValue);
	// TODO: implement search functionality

	// empty array for storing filtered family members
	let filteredFamily = [];

	// for-of loop cycles through the family names on keyUp
	for (let familyMember of familyMembers) {
		// convert names to lowercase
		let name = familyMember.name.toLowerCase();
		// check if searchValue matches any names of family members and push them to filtered array
		if (name.includes(searchValue.toLowerCase())) {
			filteredFamily.push(familyMember);
		}
	}
	// log and append family members to the DOM
	console.log(filteredFamily);
	appendPersons(filteredFamily);
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
	console.log("Add button clicked");
	// TODO: implement add functionality
	let inputName = document.getElementById("inputName");
	let inputAge = document.getElementById("inputAge");
	let inputHairColor = document.getElementById("inputHairColor");
	let inputRelation = document.getElementById("inputRelation");
	let inputImageUrl = document.getElementById("inputImageUrl");

	let newFamilyMember = {
		name: inputName.value,
		age: inputAge.value,
		hairColor: inputHairColor.value,
		relation: inputRelation.value,
		img: inputImageUrl.value,
	};

	// push new family member
	familyMembers.push(newFamilyMember);

	// reset grid
	// document.querySelector("#persons").innerHTML = "";

	// append family array objects again
	appendPersons(familyMembers);
}

function edit() {
	console.log("Edit button clicked");
}
