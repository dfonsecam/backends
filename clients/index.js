import bodyParser from "body-parser";
import express from "express";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const app = express();
app.use(bodyParser.json());
app.route("/api/clients")
    .get((req, res) => {
        console.log("Receiving from proxy %s", req.url);
        res.send("Hello world! VPC2");
    })
    .post((req, res) => {
        let result = { ...{ parsed: true }, ...req.body };
        res.send(result);
    });

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
