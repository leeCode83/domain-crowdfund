"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Coins, Sparkles, Target, Users, XCircle, RefreshCw, CheckCircle, Clock } from "lucide-react"
import { GrowthStage, Plant as Project, GrowthStage as ProjectStage, STAGE_NAMES } from "@/types/contracts"
import {
  formatPlantAge as formatProjectAge,
  formatLastWatered as formatLastFunded,
  canHarvest as canClaimFunds,
  getPlantProgress as getFundingProgress,
  getClientWaterLevel as getFundingPercentage,
  isCritical as isFundingLow,
  isStageOutOfSync
} from "@/lib/contract"
import { usePlants } from "@/hooks/usePlants"

const STAGE_EMOJIS = {
  [ProjectStage.SEED]: "💡",
  [ProjectStage.SPROUT]: "🌿",
  [ProjectStage.GROWING]: "🌼",
  [ProjectStage.ADULT]: "🌳",
}

const STAGE_BACKGROUNDS = {
  [ProjectStage.SEED]: "from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950",
  [ProjectStage.SPROUT]: "from-green-50 to-lime-50 dark:from-green-950 dark:to-lime-950",
  [ProjectStage.GROWING]: "from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950",
  [ProjectStage.ADULT]: "from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950",
}


interface ProjectDetailsModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailsModal({ project, isOpen, onClose }: ProjectDetailsModalProps) {
  const { harvestPlant: claimFunds, waterPlant: fundProject, loading } = usePlants()

  if (!project) return null

  const stageKey = STAGE_NAMES[project.stage]
  const progress = getFundingProgress(project)
  const canClaim = canClaimFunds(project)
  const currentFunding = getFundingPercentage(project)
  const isExpired = project.isDead
  const stageOutOfSync = isStageOutOfSync(project)

  const handleClaim = async () => {
    await claimFunds(project.id)
    onClose()
  }

  const handleFund = async () => {
    await fundProject(project.id)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm border-none bg-transparent p-0">
        <div className="paper-panel paper-panel--mint p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl text-slate-700">
              <span className="text-3xl">{isExpired ? <XCircle /> : STAGE_EMOJIS[project.stage]}</span>
              Pohon #{project.id.toString()}
              {isExpired && <span className="text-sm text-gray-500">(Gagal)</span>}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            <div
              className={`relative w-48 h-48 mx-auto rounded-[1.5rem] overflow-hidden border border-white/60 ${isExpired
                ? "from-gray-100 to-gray-200 bg-gradient-to-br"
                : `bg-linear-to-b ${STAGE_BACKGROUNDS[project.stage]}`
                }`}
            >
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_55%)]" />
              <div className="relative w-full h-full">
                {isExpired ? (
                  <img
                    src={"https://media.tenor.com/CACmyfrqvhgAAAAM/hennie-vpro.gif"}
                    className="w-full h-full object-cover"
                    alt="DEAD"
                  />
                ) : project.stage == GrowthStage.ADULT ? (
                  <img
                    src={"https://media.tenor.com/5UwGb1HKOdwAAAAM/tree.gif"}
                    className="w-full h-full object-cover"
                    alt="ADULT"
                  />
                ) : project.stage == GrowthStage.GROWING ? (
                  <img
                    src={"https://media.tenor.com/rAQr72pb9r8AAAAM/guardians-of-the-galaxy-groot.gif"}
                    className="w-full h-full object-cover"
                    alt="GROWING"
                  />
                ) : project.stage == GrowthStage.SPROUT ? (
                  <img
                    src={"https://media0.giphy.com/media/v1.Y2lkPTZjMDliOTUybGZhc3AxZjhzc3I3NW1jMjFienptOXA2NGJwaXpxMTN3MTN6bzloZCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/JI9XYDpaAIxvNIH0g9/source.gif"}
                    className="w-full h-full object-cover"
                    alt="SPROUT"
                  />
                ) : project.stage == GrowthStage.SEED ? (
                  <img
                    src={"https://wilfthebearfacedblogger.wordpress.com/wp-content/uploads/2019/10/seed.gif"}
                    className="w-full h-full object-cover"
                    alt="SEED"
                  />
                ) : (
                  <div className="text-8xl animate-float flex items-center justify-center h-full">{STAGE_EMOJIS[project.stage]}</div>
                )}
              </div>
              {!isExpired && stageOutOfSync && (
                <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-amber-600 shadow">
                  <RefreshCw className="w-3 h-3" />
                  Sinkronkan
                </span>
              )}
              {isExpired && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-500 shadow">
                  <XCircle className="w-3 h-3" />
                  Selesai
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-2xl bg-white/80 p-4 border border-emerald-50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Quantity</p>
                <p className="text-lg font-semibold text-teal-700">{project.quantity}</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 border border-emerald-50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Status</p>
                <p className="text-lg font-semibold text-teal-700">{stageKey}</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 border border-emerald-50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Dimulai</p>
                <p className="text-lg font-semibold text-teal-700">{formatProjectAge(project.plantedDate)}</p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 border border-emerald-50">
                <p className="text-xs uppercase tracking-wide text-slate-500">Pendanaan Terakhir</p>
                <p className="text-lg font-semibold text-teal-700">{formatLastFunded(project.lastWatered)}</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-teal-700">
                  <Target className="w-4 h-4 text-teal-700" />
                  Plant Progress
                </span>
                <span className="text-sm font-semibold text-teal-700">{Math.floor(progress)}%</span>
              </div>
              <Progress value={progress} className="h-3 bg-emerald-50" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-sm font-medium text-teal-700">
                  <Clock className={`w-4 h-4 ${isExpired ? "text-gray-400" : "text-blue-500"}`} />
                  Water Level
                </span>
                <span className="text-sm font-semibold text-teal-700">{currentFunding}%</span>
              </div>
              <Progress value={currentFunding} className="h-3 bg-emerald-50" />
              <div className="flex justify-center w-full">
                {/* Elemen Pembungkus Baru */}
                {!isExpired && currentFunding < 50 && currentFunding > 20 && (
                  <p className="text-xs text-orange-600">⚠️ Waktu hampir habis!</p>
                )}
                {!isExpired && currentFunding <= 20 && currentFunding > 0 && (
                  <p className="text-xs text-red-600 animate-pulse">🚨 Kritis! Kampanye akan segera berakhir!</p>
                )}
                {isExpired && (
                  <p className="text-xs text-gray-600">⌛ Waktu habis. Pohon gagal didanai.</p>
                )}
                {canClaim && (
                  <p className="text-xs text-gray-600">Target Tercapai! Anda dapat mengklaim NFT.</p>
                )}
              </div>
            </div>
          </div>

          {/* {canClaim && (
            <Card className="p-4 bg-linear-to-br from-yellow-500/10 to-green-500/10 border-yellow-500/30">
              <div className="text-center space-y-2">
                <p className="font-semibold text-teal-700 flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Target Tercapai!
                </p>
                <p className="text-sm text-slate-500">
                  Anda dapat mengklaim NFT.
                </p>
              </div>
            </Card>
          )}

          {isExpired && (
            <Card className="p-4 bg-linear-to-br from-gray-500/10 to-gray-500/10 border-gray-500/30">
              <div className="text-center space-y-2">
                <p className="font-semibold text-teal-700 flex items-center justify-center gap-2">
                  <XCircle className="w-4 h-4 text-gray-500" />
                  Pohon Gagal Tanam
                </p>
                <p className="text-sm text-slate-500">
                  Pohon ini gagal mencapai target pendanaan sebelum waktu habis.
                </p>
              </div>
            </Card>
          )} */}

          <div className="flex gap-2 pt-4">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 bg-transparent"
              disabled={loading}
            >
              Tutup
            </Button>
            {!isExpired && (
              <>
                {canClaim ? (
                  <Button
                    onClick={handleClaim}
                    disabled={loading}
                    className="flex-1 gap-2 bg-gradient-to-r from-yellow-500 to-green-600 hover:from-yellow-600 hover:to-green-700 text-white"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Mengklaim...
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        Klaim NFT
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={handleFund}
                    disabled={loading}
                    className="flex-1 gap-2 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Memproses...
                      </>
                    ) : (
                      <>
                        <Coins className="w-4 h-4" />
                        Danai Pohon (Demo)
                      </>
                    )}
                  </Button>
                )}
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
