"use strict";

let familyMembers = [
    {
        name: "Michael",
        relation: "Father",
        age: 61,
        img: "",
    },
    {
        name: "Susanne",
        relation: "Mother",
        age: 59,
        img: "",
    },
    {
        name: "Louise",
        relation: "Sister",
        age: 36,
        img: "",
    },
];

let append = (persons) => {
    let htmlTemplate = "";
    for (let person of persons) {
        console.log(person);
        htmlTemplate += `
        <article>
            <img src="${person.img}">
            <h3>Name: ${person.name}</h3>
            <p>Age: ${person.age}</p>
            <p>Relation: ${person.relation}</p>            
        </article>
        `;
    }
    document.querySelector("#family-grid").innerHTML = htmlTemplate;
};

append(familyMembers);

let add = () => {
    console.log("Add button clicked");

    let form = document.querySelector("#form-add-family");

    let inputName = document.querySelector("#name").value;
    let inputRelation = document.querySelector("#relation").value;
    let inputAge = document.querySelector("#age").value;
    let inputImg = document.querySelector("#imgUrl").value;

    let newFamilyMember = {
        name: inputName,
        relation: inputRelation,
        age: inputAge,
        img: inputImg,
    };

    familyMembers.push(newFamilyMember);
    append(familyMembers);
    form.reset();
};

let search = (value) => {
    let searchValue = value.toLowerCase();
    console.log(searchValue);

    let searchResults = [];

    for (let familyMember of familyMembers) {
        let name = familyMember.name.toLowerCase();
        if (name.includes(searchValue.toLowerCase())) {
            searchResults.push(familyMember);
        }
        append(searchResults);
    }
};
