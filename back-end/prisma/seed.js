"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
Promise.all([
    db.person.create({
        data: { name: 'Wil Wheaton' }
    }),
    db.grudge.create({
        data: {
            description: 'failed to show up to the Star Trek convention',
            rank: 10,
            person_id: 1,
        }
    }),
    db.person.create({
        data: { name: 'Billy Sparks' }
    }),
    db.grudge.create({
        data: {
            description: 'Putting dog poop on the handlebars of his bike',
            rank: 9,
            person_id: 2,
        }
    }),
    db.person.create({
        data: { name: 'Brent Spiner' }
    }),
    db.grudge.create({
        data: {
            description: "Opened Sheldon's 'Star Trek' character collectible, ruining its integrity",
            rank: 8,
            person_id: 3,
        }
    }),
    db.person.create({
        data: { name: 'Tam Nguyen' }
    }),
    db.grudge.create({
        data: {
            description: "when Sheldon left Texas for California, Tam didn't follow him",
            rank: 7,
            person_id: 4,
        }
    }),
    db.person.create({
        data: { name: 'Leslie Winkle' }
    }),
    db.grudge.create({
        data: {
            description: 'shared different scientific views',
            rank: 6,
            person_id: 5,
        }
    }),
    db.person.create({
        data: { name: 'Georgie Cooper' }
    }),
    db.grudge.create({
        data: {
            description: 'peeing in his shampoo bottle',
            rank: 5,
            person_id: 6,
        }
    }),
    db.person.create({
        data: { name: 'Jim Henson' }
    }),
    db.grudge.create({
        data: {
            description: 'creating Big Bird because it haunted him in his sleep',
            rank: 4,
            person_id: 7,
        }
    }),
    db.person.create({
        data: { name: 'Joel Schumacher' }
    }),
    db.grudge.create({
        data: {
            description: 'worked on Batman Forever and Batman & Robin',
            rank: 3,
            person_id: 8,
        }
    }),
    db.person.create({
        data: { name: 'Penny' }
    }),
    db.grudge.create({
        data: {
            description: "was informing Amy of Sheldon's list of mortal enemies",
            rank: 2,
            person_id: 9,
        }
    }),
    db.person.create({
        data: { name: 'The Cafeteria Ladies' }
    }),
    db.grudge.create({
        data: {
            description: 'refused to tell him what was in the chili',
            rank: 1,
            person_id: 10,
        }
    }),
])
    .then(() => console.log('All dummy succes'))
    .catch(() => console.error('Something went wrong with seeding'));
