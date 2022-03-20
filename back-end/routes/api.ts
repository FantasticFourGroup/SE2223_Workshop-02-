import express from "express";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = express.Router();

const query = () => prisma.grudge.findMany({
    orderBy: {
        rank: 'asc'
    },
    select: {
        sin: true,
        rank: true,
        person: {
            select: {
                name: true
            }
        }
    }
})

router
    .post("/v1", (req, res) => {
        query().then((result) => {
            res.json({
                sucess: result.map((item) => {
                    const { rank, person, sin } = item
                    return { rank, description: sin, name: person.name }
                })
            });
        }).catch((error) => res.json({ error }))
    })
    .post("/v2", (req, res) => {
        query().then((result) => {
            res.json({
                sucess: result.map((item) => {
                    const { rank, person, sin } = item
                    return { rank, sin, name: person.name }
                })
            });
        }).catch((error) => res.json({ error }))
    })

export default router;
