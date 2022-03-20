"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = express_1.default.Router();
router
    .post("/v1", (req, res) => {
    console.log('called');
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
                const { rank, person, description } = item;
                return { rank, description, name: person.name };
            })
        });
    }).catch((error) => res.json({ error }));
});
exports.default = router;
