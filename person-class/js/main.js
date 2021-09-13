"use strict"; // to enable strict mode and modern JavaScript functionality

class Person {
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

class Teacher extends Person {
    constructor(name, mail, birthDate, img, subject, position) {
        super(name, mail, birthDate, img);

        this.subject = subject;
        this.position = position;
    }
    appendPerson() {
        const template = `
        <article>
            <h2>${this.name}</h2>
            <a href="mailto:${this.mail}">${this.mail}</a>
            <p>${this.getAge()}</p>
            <p>${this.subject}</p>
            <p>${this.position}</p>
            <img src="${this.img}">
        </article>
        `;

        return template;
    }
}

const person1 = new Person(
    "Johnny",
    "johnny@live.dk",
    "1951-03-31",
    "https://www.mhe.dk/wp-content/uploads/2020/10/W2-Johnny-Madsen.jpg"
);

const teacher1 = new Teacher(
    "Rasmus",
    "race@eaaa.dk",
    "1990-05-18",
    "https://www.eaaa.dk/media/devlvvgj/rasmus-cederdorff.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132301335324630000&format=webp",
    "Programming",
    "Lecturer"
);

document.querySelector("#content").innerHTML += person1.appendPerson();
document.querySelector("#content").innerHTML += teacher1.appendPerson();
