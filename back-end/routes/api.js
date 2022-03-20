"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
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
});
router.use("/", (req, res) => {
    prisma.grudge.findMany({
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
    }).then((e) => console.log(e));
})
    .post("/v1", (req, res) => {
    query().then((result) => {
        res.json({
            sucess: result.map((item) => {
                const { rank, person, sin } = item;
                return { rank, description: sin, name: person.name };
            })
        });
    }).catch((error) => res.json({ error }));
})
    .post("/v2", (req, res) => {
    query().then((result) => {
        res.json({
            sucess: result.map((item) => {
                const { rank, person, sin } = item;
                return { rank, sin, name: person.name };
            })
        });
    }).catch((error) => res.json({ error }));
});
exports.default = router;
