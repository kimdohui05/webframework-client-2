import { LoginRequest, LoginResponse, MeResponse } from "@/type/user";
import { apiFetch } from "./https";

export async function getMe(accessToken : string): Promise<MeResponse> {
    const response = await apiFetch("user-account/me", {
        accessToken
    })

    return response.json()
}

export async function login(request : LoginRequest): Promise<LoginResponse> {
    const response = await apiFetch("user-account/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(request)
    })

    return response.json()
}