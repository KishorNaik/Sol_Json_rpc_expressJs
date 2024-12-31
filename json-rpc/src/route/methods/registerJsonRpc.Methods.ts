import { demoController } from "../../controllers";
import jsonRpcServer from "../../utils/json-rpc";

export const registerJsonRpcMethods=()=>{
    jsonRpcServer.addMethod("add", demoController.add.bind(demoController));
}