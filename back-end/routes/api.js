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
        console.log(e[0].Grudge);
        // console.log(e.Grudge)
    }).catch((e) => console.error(e));
    res.send('Well done! v1');
})
    .post("/v1", (req, res) => {
    res.send('Well done! v1');
});
exports.default = router;
