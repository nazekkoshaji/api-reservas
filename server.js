const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use("/api", router); // tu API estará en /api/reservas

server.listen(3000, () => {
    console.log("JSON Server is running");
});
