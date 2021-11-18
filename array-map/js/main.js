const persons = [
    {
        firstName: "Jane",
        lastName: "Doe",
        birthDate: "1992-03-04",
    },
    {
        firstName: "Jens",
        lastName: "Jensen",
        birthDate: "1992-07-04",
    },
    {
        firstName: "Birgitte",
        lastName: "Iversen",
        birthDate: "1990-10-04",
    },
    {
        firstName: "Lykke",
        lastName: "Dahlen",
        birthDate: "1987-06-04",
    },
    {
        firstName: "Kasper",
        lastName: "Topp",
        birthDate: "1989-03-07",
    },
];

const mapped = persons.map((person) => {
    return { name: `${person.firstName} ${person.lastName}` };
});
console.log(mapped);

const result = persons.map((person) => {
    const object = {
        name: `${person.firstName} ${person.lastName}`,
        birthYear: `${person.birthDate.slice(0, 4)}`,
    };
    return object;
});
console.log(result);

persons.map((obj) => ({ ...obj, birthYear: `${obj.birthDate.slice(0, 4)}` }));

persons.map((person) => console.log(person));
