export default class Person {
    constructor(name, mail, birthDate, img, id) {
        this.name = name;
        this.mail = mail;
        this.birthDate = birthDate;
        this.img = img;
        this.id = parseInt(Math.random() * 10000000000);
    }
    log() {
        console.log(`
    Name: ${this.name},
    Mail: ${this.mail},
    Date of birth: ${this.birthDate},
    Img Url: ${this.img},
    ID: ${this.id}
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
