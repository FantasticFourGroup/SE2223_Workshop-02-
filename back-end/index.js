"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)())
    .get('/', (req, res) => {
    res.send('<h1>Well done!<h1>');
})
    .use('/api', api_1.default);
app.listen(PORT, () => {
    console.log(`Open http://localhost:${PORT}`);
});
