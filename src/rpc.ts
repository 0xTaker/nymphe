import { JsonRpcError, JsonRpcPayload, JsonRpcResult } from "ethers";
import { RPCInputSchema } from "./schema";
import { toRpcError, toRpcResponse } from "./utils";

export class Rpc {
    async process(result: JsonRpcPayload): Promise<JsonRpcResult | JsonRpcError> {
        let _parseResult = RPCInputSchema.safeParse(result);
        if (!_parseResult.success) return toRpcError(1, { code: 200, message: "Your JSON-RPC payload data does not fit the required RPC format" });

        let { id, method, params } = _parseResult.data;
        switch (method) {
            case "eth_chainId":
                return toRpcResponse(id, process.env.CHAIN_ID);
            default:
                return toRpcError(id, { code: 404, message: "Method not valid" });
        }
    }
}