import "dotenv/config";
import express from "express";
import expressWs from "express-ws";
import { Rpc } from "./rpc";

const { app } = expressWs(express());
const rpc = new Rpc();

const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => { res.send('Hello World!') });
app.post("/", async (req, res) => {
    return res.status(200).send(await rpc.process(req.body));
});

app.ws("/", (ws, req) => {
    ws.on("message", async (msg) => {
        let response = await rpc.process(JSON.parse(msg.toString()));
        ws.send(JSON.stringify(response));
    });
});

app.listen(port, () => { console.log(`Listening on port ${port}`); });

export default app;