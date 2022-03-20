import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router();

router
    .post("/v1", (req, res) => {
        console.log('called')
        prisma.grudge.findMany({
            orderBy: {
                rank: 'asc'
            },
            select: {
                description: true,
                rank: true,
                person: true
            }
        }).then((result) => {
            res.json({ sucess: result });
        }).catch((error) => res.json({ error }))
    })

export default router;



// .get("/", (req, res) => {
//     prisma.grudge.findMany({
//         orderBy: {
//             rank: 'asc'
//         },
//         select: {
//             description: true,
//             rank: true,
//             person: true
//         }
//     }).then((e) => {
//         e.forEach((x) => {
//             console.log(x.rank)
//             console.log(x.person.name)
//             console.log(x.description)
//         })
//         res.send(e);
//     }).catch((e) => console.error(e))
// })