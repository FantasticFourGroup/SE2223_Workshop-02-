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
            person: true
        }
    }).then((result) => {
        res.json({ sucess: result });
    }).catch((error) => res.json({ error }));
});
exports.default = router;
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
