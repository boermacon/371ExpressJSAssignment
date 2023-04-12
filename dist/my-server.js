var _a;
import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
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
