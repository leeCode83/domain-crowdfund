"use client"

import Link from "next/link"
import { Rocket, Home, TreePalm } from "lucide-react"
import { LoginButton, useActiveAccount, liskSepolia } from "panna-sdk"
import { Button } from "@/components/ui/button"
import { MusicBar } from "@/components/music-bar"

export default function Header() {
  const activeAccount = useActiveAccount()
  const isConnected = !!activeAccount

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 pt-4 pb-3">
        <div className="paper-panel paper-panel--soft px-5 py-3 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl flex items-center justify-center shadow-lg ring-2 ring-white/70">
              <TreePalm className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-teal-700">Domain</h1>
              <p className="text-xs text-muted-foreground">Donasi Tanaman Indonesia</p>
            </div>
          </Link>

          <nav className="flex flex-wrap items-center gap-2 md:gap-3">
            <Button
              variant="ghost"
              asChild
              className="rounded-full bg-white/80 hover:bg-white text-teal-700 shadow-sm"
            >
              <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
            <Button
              variant="ghost"
              asChild
              className="rounded-full bg-white/80 hover:bg-white text-teal-700 shadow-sm"
            >
              <Link href="/crowdfund" className="flex items-center gap-2 text-sm font-semibold">
                <Rocket className="w-4 h-4" />
                Lihat Pohon
              </Link>
            </Button>
            <div className="pl-1">
              <LoginButton
                chain={liskSepolia}
                style={{
                  borderRadius: "999px",
                  background:
                    "linear-gradient(120deg, rgba(16,185,129,0.9), rgba(163,230,53,0.9))",
                  color: "#0a3825",
                  padding: "0.35rem 1.2rem",
                  fontWeight: 600,
                  boxShadow: "0 12px 24px rgba(16,185,129,0.25)",
                }}
              />
            </div>
          </nav>
        </div>
      </div>
      {isConnected && (
        <div className="container mx-auto px-4 sm:px-6 pb-4">
          <MusicBar />
        </div>
      )}
    </header>
  )
}
