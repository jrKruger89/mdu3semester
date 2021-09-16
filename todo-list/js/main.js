"use strict"; // to enable strict mode and modern JavaScript functionality

import Todo from "./todo.js";

let todo1 = new Todo("Do the laundry");
let todo2 = new Todo("Wash the car");

let todos = [todo1, todo2];

let append = () => {
    let template = "";

    for (let todo of todos) {
        template += `
    <li>${todo.title}</li>
    `;
    }
    document.querySelector("#todo-list").innerHTML = template;
};

append();
