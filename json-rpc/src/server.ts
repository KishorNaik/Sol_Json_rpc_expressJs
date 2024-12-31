
import express, { Request, Response } from 'express';
import { useJsonRpc } from './route/jsonRpc.Route';
import { registerJsonRpcMethods } from './route/methods/registerJsonRpc.Methods';

const app = express();
app.use(express.json());

useJsonRpc(app);

registerJsonRpcMethods();

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`JSON-RPC server is running on port ${PORT}`);
});

// CURL
// curl --location 'http://localhost:3000/json-rpc' \
// --header 'Content-Type: application/json' \
// --data '{
//            "jsonrpc": "2.0",
//            "method": "add",
//            "params": { "a": 5, "b": 3 },
//            "id": 1
//          }'