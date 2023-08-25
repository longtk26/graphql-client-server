import { createServer } from "node:http";
import { createYoga } from "graphql-yoga";
import { schema } from "./schema";

const port = 4000;

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(port, () => {
    console.log("Server is running on http://localhost:4000/graphql");
});
