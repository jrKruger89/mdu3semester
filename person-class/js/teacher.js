import Person from "./person.js";

export default class Teacher extends Person {
    constructor(name, mail, birthDate, img, id, subject, position) {
        super(name, mail, birthDate, img, id);

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
