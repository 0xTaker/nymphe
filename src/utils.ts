import { JsonRpcError, JsonRpcResult } from "ethers"

export function toRpcResponse(id: number, result: any): JsonRpcResult {
    return {
        id,
        result
    }
}

export function toRpcError(id: number, error: JsonRpcError["error"]): JsonRpcError {
    return {
        id,
        error
    }
}