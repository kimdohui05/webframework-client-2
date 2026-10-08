"use client"

import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/providers/auth-store-provider"
import Link from "next/link"

export default function Home() {
  const accessToken = useAuthStore((state) => state.accessToken)
  const clearAccessToken = useAuthStore((state) => state.clearAccessToken)

  return (
    <main className="flex min-h-screen items-center justify-center gap-2">
      {accessToken ? (
        <Button onClick={clearAccessToken}>logout</Button>
      ) : (
        <Link href="/login">
          <Button>login</Button>
        </Link>
      )}

      <Link href="/signup">
        <Button>register</Button>
      </Link>
    </main>
  )
}