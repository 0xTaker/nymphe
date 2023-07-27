import { JsonRpcError, JsonRpcResult } from "ethers";
import z from "zod";

/*//////////////////////////////////////////////////////////////
                            UTILS
//////////////////////////////////////////////////////////////*/

export type RpcMethodHandler<T> = (params: T) => Promise<JsonRpcResult | JsonRpcError>;
export const zAddress = z.string().startsWith("0x").length(42).regex(/[0-9A-z]/g);

/*//////////////////////////////////////////////////////////////
                        SUPPORTED METHODS
//////////////////////////////////////////////////////////////*/

// EDIT: ADD MORE METHODS
export const RPCSupportedMethodsEnum = z.enum([
    "eth_chainId"
]);

export type RPCSupportedMethods = z.infer<typeof RPCSupportedMethodsEnum>;

export const RPCInputSchema = z.object({
    id: z.number(),
    jsonrpc: z.string(),
    method: RPCSupportedMethodsEnum,
    params: z.union([z.tuple([]), z.tuple([z.any()]).rest(z.any())])
});
export type RPCInput = z.infer<typeof RPCInputSchema>;

/*//////////////////////////////////////////////////////////////
                        METHOD HANDLERS
//////////////////////////////////////////////////////////////*/

export const zChainIdParams = z.void();
export type chainIdParams = z.infer<typeof zChainIdParams>;

// EDIT: ADD MORE HANDLERS