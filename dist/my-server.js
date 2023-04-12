"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000; // Allow dynamic PORT setting (Heroku)
const words = ["CIGAR", "REBUT", "SISSY", "HUMPH", "AWAKE", "BLUSH", "FOCAL", "EVADE", "NAVAL", "SERVE", "HEATH", "DWARF", "MODEL", "KARMA", "STINK", "GRADE", "QUIET", "BENCH", "ABATE", "FEIGN", "MAJOR", "DEATH", "FRESH", "CRUST", "STOOL", "COLON"];
// Define GET endpoint(s)
/*
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World!");
});*/
app.get("/getWord", (req, res) => {
    //res.header({"Access-Control-Allow-Origin": "*"});
    res.send({ secret: words[Math.floor(Math.random() * words.length)] }); // Opt-4: send JSON response
});
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
