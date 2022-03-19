import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router();

router
    .get("/1", (req, res) => {
        // prisma.person.findMany({
        //     where: {
        //         id: 1
        //     }
        // }).then((e) => {
        //     console.log(e)
        // }).catch((e) => console.error(e))


        prisma.person.findMany({
            // where: {
            //     id: 1
            // },
            // select: {
            //     name: true,
            //     Grudge: true
            // }
            include: {
                Grudge: {
                    select: {
                        description: true
                    }
                }
            }

        }).then((e) => {
            console.log(e[0].Grudge[0].description)
            // console.log(e.Grudge)
        }).catch((e) => console.error(e))
        res.send('Well done! v1');
    })
    .post("/v1", (req, res) => {
        res.send('Well done! v1');
    })

export default router;