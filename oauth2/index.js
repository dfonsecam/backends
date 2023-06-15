import bodyParser from "body-parser";
import express from "express";
import minimist from "minimist";
import passport from "passport";
import { middelware, strategy } from "./auth.js";
import { generateBearerToken } from "./bearer.js";

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const app = express();
app.use(bodyParser.json());
app.use(passport.initialize());
passport.use(strategy);

app.post("/oauth/token", middelware, generateBearerToken);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
