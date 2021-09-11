"use strict"; // to enable strict mode and modern JavaScript functionality

let familyMembers = [];

let familyMember1 = {
	name: "Susanne",
	age: 59,
	relation: "Mor",
};

let familyMember2 = {
	name: "Michael",
	age: 61,
	relation: "Far",
};

let familyMember3 = {
	name: "Louise",
	age: 36,
	relation: "Søster",
};

let familyMember4 = {
	name: "Emmy",
	age: 82,
	relation: "Mormor",
};

familyMembers.push(familyMember1);
familyMembers.push(familyMember2);
familyMembers.push(familyMember3);
familyMembers.push(familyMember4);

console.log(familyMembers);

appendFamilyMember(familyMembers);
//filterByAge(60);
console.log(`Number of relatives on record: ${familyMembers.length}`);

function appendFamilyMember(arr) {
	for (let familyMember of familyMembers) {
		document.querySelector(".grid-container").innerHTML += `<article>
      <h3>Name: ${familyMember.name}</h3>
      <h3>Name: ${familyMember.age}</h3>
    </article>`;
	}
}

function filterByAge(ageLimit) {
	for (let familyMember of familyMembers) {
		if (familyMember.age > ageLimit) {
			document.querySelector(".grid-container").innerHTML += `<article>
      <h3>Name: ${familyMember.name}</h3>
      <h3>Name: ${familyMember.age}</h3>
    </article>`;
		}
	}
}
