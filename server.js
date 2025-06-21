const jsonServer = require("json-server");

module.exports = (req, res) => {
    const server = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(jsonServer.bodyParser);
    server.use("/api", router);

    return server(req, res);
};
