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
                person: {
                    select: {
                        name: true
                    }
                }
            }
        }).then((result) => {
            res.json({
                sucess: result.map((item) => {
                    const { rank, person, description } = item
                    return { rank, description, name: person.name }
                })
            });
        }).catch((error) => res.json({ error }))
    })

export default router;
