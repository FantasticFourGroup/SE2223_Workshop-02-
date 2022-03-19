"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
const persons = [
    db.person.create({
        data: { name: 'Wil Wheaton' }
    }),
    db.person.create({
        data: { name: 'Billy Sparks' }
    }),
    db.person.create({
        data: { name: 'Brent Spiner' }
    }),
    db.person.create({
        data: { name: 'Tam Nguyen' }
    }),
    db.person.create({
        data: { name: 'Leslie Winkle' }
    }),
    db.person.create({
        data: { name: 'Georgie Cooper' }
    }),
    db.person.create({
        data: { name: 'Jim Henson' }
    }),
    db.person.create({
        data: { name: 'Joel Schumacher' }
    }),
    db.person.create({
        data: { name: 'Penny' }
    }),
    db.person.create({
        data: { name: 'The Cafeteria Ladies' }
    }),
];
const grudges = [
    db.grudge.create({
        data: {
            description: 'refused to tell him what was in the chili',
            rank: 1,
            person_id: 10,
        }
    }),
    db.grudge.create({
        data: {
            description: "was informing Amy of Sheldon's list of mortal enemies",
            rank: 2,
            person_id: 9,
        }
    }),
    db.grudge.create({
        data: {
            description: 'worked on Batman Forever and Batman & Robin',
            rank: 3,
            person_id: 8,
        }
    }),
    db.grudge.create({
        data: {
            description: 'creating Big Bird because it haunted him in his sleep',
            rank: 4,
            person_id: 7,
        }
    }), db.grudge.create({
        data: {
            description: 'peeing in his shampoo bottle',
            rank: 5,
            person_id: 6,
        }
    }),
    db.grudge.create({
        data: {
            description: 'shared different scientific views',
            rank: 6,
            person_id: 5,
        }
    }),
    db.grudge.create({
        data: {
            description: "when Sheldon left Texas for California, Tam didn't follow him",
            rank: 7,
            person_id: 4,
        }
    }),
    db.grudge.create({
        data: {
            description: "Opened Sheldon's 'Star Trek' character collectible, ruining its integrity",
            rank: 8,
            person_id: 3,
        }
    }),
    db.grudge.create({
        data: {
            description: 'Putting dog poop on the handlebars of his bike',
            rank: 9,
            person_id: 2,
        }
    }),
    db.grudge.create({
        data: {
            description: 'failed to show up to the Star Trek convention',
            rank: 10,
            person_id: 1,
        }
    }),
];
Promise.all(persons)
    .then(() => {
    console.log('All dummy person succes');
    Promise.all(grudges)
        .then(() => console.log("Success finally!!!"))
        .catch((e) => console.error('Something went wrong with seeding', e));
})
    .catch((e) => console.error('Something went wrong with seeding', e));
