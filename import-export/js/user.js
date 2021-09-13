"use strict";

class User {
    constructor(name, mail, birthDate, img) {
        this.name = name;
        this.mail = mail;
        this.birthDate = birthDate;
        this.img = img;
    }
    log() {
        console.log(`
    Name: ${this.name},
    Mail: ${this.mail},
    Date of birth: ${this.birthDate},
    Img Url: ${this.img}
    `);
    }

    getAge() {
        const birthDate = new Date(this.birthDate);
        const today = new Date();
        const diff = new Date(today - birthDate.getTime());
        return diff.getFullYear() - 1970;
    }

    appendPerson() {
        const template = `
        <article>
            <h2>${this.name}</h2>
            <a href="mailto:${this.mail}">${this.mail}</a>
            <p>${this.getAge()}</p>
            <img src="${this.img}">
        </article>
        `;

        return template;
    }
}

export default User;

export function hello() {
    console.log("Hello from user.js");
}
