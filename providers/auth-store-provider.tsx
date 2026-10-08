"use client"

// auth store를 하위 컴포넌트에 전달하고, useAuthStore()는 그 저장소에서 필요한 값을 읽는 함수

import { createAuthStore } from "@/stores/auth-stores"
import { createContext, ReactNode, useContext, useState } from "react"
import { useStore } from "zustand"

type AuthStore = ReturnType<typeof createAuthStore>
type AuthState = ReturnType<AuthStore["getState"]>

const AuthStoreContext = createContext<AuthStore | null>(null)

export function AuthStoreProvider({ children }: { children: ReactNode }) {
    const [store] = useState(() => createAuthStore())

    return (
        <AuthStoreContext.Provider value={store}>
            {children}
        </AuthStoreContext.Provider>
    )
}

export function useAuthStore<T>(selector: (state: AuthState) => T): T {
    const store = useContext(AuthStoreContext)

    if (!store) {
        throw new Error("useAuthStore는 AuthStoreProvider 안에서 사용해야 합니다.")
    }

    return useStore(store, selector)
}