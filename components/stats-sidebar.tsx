"use client"

import { Card } from "@/components/ui/card"
import { Layers, CheckCircle, Coins, XCircle, Clock, Info, Target, Users } from "lucide-react"
import { usePlants } from "@/hooks/usePlants"
import { useContract } from "@/hooks/useContract"
import { GrowthStage as ProjectStage, PLANT_PRICE, HARVEST_REWARD, STAGE_DURATION, WATER_DEPLETION_TIME, WATER_DEPLETION_RATE } from "@/types/contracts"

export default function StatsSidebar() {
  const { plants: projects } = usePlants()
  const { isConnected, address } = useContract()

  const successfulProjects = projects.filter((p) => p.stage === ProjectStage.ADULT).length
  const activeProjects = projects.filter((p) => !p.isDead).length
  const failedProjects = projects.filter((p) => p.isDead).length

  return (
    <div className="space-y-4 sticky top-24">
      <Card className="paper-panel p-5 bg-white animate-slide-in-up transition-all duration-300 ease-out">
        <h3 className="font-semibold text-teal-700 mb-4 flex items-center gap-2">
          <Layers className="w-5 h-5 text-teal-700" />
          Statistik Platform
        </h3>
        {isConnected ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Layers className="w-4 h-4 text-teal-700" />
                Total Pohon
              </span>
              <span className="font-semibold text-teal-700">{projects.length}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-blue-500" />
                Aktif
              </span>
              <span className="font-semibold text-teal-700">{activeProjects}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Sukses
              </span>
              <span className="font-semibold text-teal-700">{successfulProjects}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <XCircle className="w-4 h-4 text-gray-500" />
                Gagal/Kadaluarsa
              </span>
              <span className="font-semibold text-teal-700">{failedProjects}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4 text-accent" />
                Total Pendana
              </span>
              <span className="font-semibold text-teal-700">1 (Demo)</span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground text-center py-4">Hubungkan wallet untuk melihat statistik</p>
        )}
      </Card>

      {isConnected && (
        <Card
          className="paper-panel p-4 bg-white animate-slide-in-up transition-all duration-300 ease-out"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
            <Coins className="w-5 h-5 text-accent" />
            Wallet
          </h3>
          <div className="space-y-2">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
              <p className="text-xs text-muted-foreground mb-1">Alamat</p>
              <p className="text-xs font-mono text-teal-700 truncate">{address}</p>
            </div>
          </div>
        </Card>
      )}

      <Card
        className="paper-panel p-4 bg-white animate-slide-in-up transition-all duration-300 ease-out"
        style={{ animationDelay: "0.2s" }}
      >
        <h3 className="font-semibold text-teal-700 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-teal-700" />
          Info Aturan (Contoh)
        </h3>
        <div className="space-y-3 text-sm">
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <p className="text-xs text-muted-foreground mb-1">Biaya Menanam Pohon</p>
            <p className="font-semibold text-teal-700">{PLANT_PRICE} ETH</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <p className="text-xs text-muted-foreground mb-1">Target Pendanaan (Demo)</p>
            <p className="font-semibold text-teal-700">{HARVEST_REWARD} ETH</p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-slate-100">
            <p className="text-xs text-muted-foreground mb-1">Biaya Pendanaan</p>
            <p className="font-semibold text-teal-700">GRATIS (hanya gas)</p>
          </div>
        </div>
      </Card>

      <Card
        className="paper-panel p-4 bg-white animate-slide-in-up transition-all duration-300 ease-out"
        style={{ animationDelay: "0.3s" }}
      >
        <h3 className="font-semibold text-teal-700 mb-3">Cara Kerja (Demo)</h3>
        <div className="space-y-2 text-xs text-muted-foreground">
          <p>1. Buat Pohon (biaya {PLANT_PRICE} ETH)</p>
          <p>2. Ajak orang mendanai (GRATIS!)</p>
          <p>3. Capai target {HARVEST_REWARD} ETH dalam {STAGE_DURATION * 3 / 60} menit</p>
          <p>4. Klaim dana jika target tercapai</p>
          <p className="text-red-500 font-semibold pt-2">⚠️ Pohon gagal jika waktu habis sebelum target!</p>
        </div>
      </Card>
    </div>
  )
}
