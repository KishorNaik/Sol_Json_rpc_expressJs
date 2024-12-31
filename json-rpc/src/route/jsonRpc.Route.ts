import { Request, Response } from 'express';
import jsonRpcServer from '../utils/json-rpc';

const jsonRpcHandler = async (req: Request, res: Response) => {
    const jsonRpcRequest = req.body;
    const jsonRpcResponse = await jsonRpcServer.receive(jsonRpcRequest);
    if (jsonRpcResponse?.error) {
        res.status(500).json(jsonRpcResponse);
    } else {
        res.json(jsonRpcResponse);
    }
};

export const useJsonRpc = (app: import('express').Express) => {
    app.post('/json-rpc', jsonRpcHandler);
}

