import { PrismaClient, Person, Grudge } from '@prisma/client'

const db = new PrismaClient()

Promise.all([
    db.person.create({
        data: { name: 'Wil Wheaton' }
    }),




])
    .then(() => console.log('All dummy succes'))
    .catch(() => console.error('Something went wrong with seeding'))

