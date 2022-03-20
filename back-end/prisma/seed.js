"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
const persons = [
    db.person.create({
        data: {
            name: 'The Cafeteria Ladies', Grudge: {
                create: [{
                        sin: 'refused to tell him what was in the chili',
                        rank: 1,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Joel Schumacher', Grudge: {
                create: [{
                        sin: 'worked on Batman Forever and Batman & Robin',
                        rank: 3,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Penny', Grudge: {
                create: [{
                        sin: "was informing Amy of Sheldon's list of mortal enemies",
                        rank: 2,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Jim Henson', Grudge: {
                create: [{
                        sin: 'creating Big Bird because it haunted him in his sleep',
                        rank: 4,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Georgie Cooper', Grudge: {
                create: [{
                        sin: 'peeing in his shampoo bottle',
                        rank: 5,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Leslie Winkle', Grudge: {
                create: [{
                        sin: 'shared different scientific views',
                        rank: 6,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Tam Nguyen', Grudge: {
                create: [{
                        sin: "when Sheldon left Texas for California, Tam didn't follow him",
                        rank: 7,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Brent Spiner', Grudge: {
                create: [{
                        sin: "Opened Sheldon's 'Star Trek' character collectible, ruining its integrity",
                        rank: 8,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Billy Sparks',
            Grudge: {
                create: [{
                        sin: 'Putting dog poop on the handlebars of his bike',
                        rank: 9,
                    }]
            }
        }
    }),
    db.person.create({
        data: {
            name: 'Wil Wheaton',
            Grudge: {
                create: [{
                        sin: 'failed to show up to the Star Trek convention',
                        rank: 10,
                    }]
            }
        }
    }),
];
Promise.all(persons)
    .then(() => {
    console.log('All dummy person succes');
})
    .catch((e) => console.error('Something went wrong with seeding', e));
