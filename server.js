const jsonServer = require("json-server");

const handler = (req, res) => {
    const server = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(jsonServer.bodyParser);
    server.use("/api", router);

    server(req, res);
};

module.exports = handler;
