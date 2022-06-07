// Object Literals

let val;

let person = {
    firstName: 'Çınar',
    lastName: 'Turan',
    age: 7,
    hobbies: ['game', 'mischief'],
    address: {
        city: 'Kocaeli',
        country: 'Turkey',
    },
    getBirthYear: function() {
        return 2022 - this.age;
    }
};

val = person.firstName;
val = person.lastName;
val = person.age;
val = person['firstName'];
val = person.hobbies;
val = person.hobbies[1];
val = person.getBirthYear();


//console.log(val);
//console.log(typeof person);

let people = [
    { firstName: 'Çınar', lastName: 'Turan' },
    { firstName: 'Sena', lastName: 'Turan' },
    { firstName: 'Seda', lastName: 'Turan' },
];

val = people[2];
val = people[2].firstName;


for (let i = 0; i < people.length; i++) {
    console.log(people[i].firstName);
}


//console.log(val);
//console.log(typeof people);