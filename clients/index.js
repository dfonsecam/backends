import bodyParser from "body-parser";
import express from "express";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
const port = args.port || 3000;

const app = express();
app.use(bodyParser.json());
app.route("/api/clients").get((req, res) => {
  console.log("Proxy request %s method %s", req.url, req.method);
  // generate a list of clients
  const generateClient = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const randomString = Math.random().toString(36).substring(2, 15);
    return {
      // generate a random client id
      id: randomId,
      // generate a random name
      name: `Client ${randomId}`,
      // random email address
      email: `client@${randomString}.com`,
    };
  };
  // create an array with 10 clients
  const clients = Array.from({ length: 10 }, generateClient);
  res.send(clients);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
