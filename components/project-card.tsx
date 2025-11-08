"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Coins, CheckCircle, Clock, XCircle, RefreshCw, Target, Users } from "lucide-react"
import { GrowthStage, Plant as Project, GrowthStage as ProjectStage, STAGE_NAMES } from "@/types/contracts"
import {
  formatPlantAge,
  getClientWaterLevel as getFundingPercentage,
  isCritical as isFundingLow,
  isStageOutOfSync
} from "@/lib/contract"

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

const STAGE_HOVER_BACKGROUNDS = {
  [ProjectStage.SEED]: "group-hover:from-blue-100 group-hover:to-indigo-100 dark:group-hover:from-blue-900 dark:group-hover:to-indigo-900",
  [ProjectStage.SPROUT]: "group-hover:from-green-100 group-hover:to-lime-100 dark:group-hover:from-green-900 dark:group-hover:to-lime-900",
  [ProjectStage.GROWING]: "group-hover:from-gray-100 group-hover:to-gray-200 dark:group-hover:from-gray-800 dark:group-hover:to-gray-900",
  [ProjectStage.ADULT]: "group-hover:from-emerald-100 group-hover:to-teal-100 dark:group-hover:from-emerald-900 dark:group-hover:to-teal-900",
}

const STAGE_BORDERS = {
  [ProjectStage.SEED]: "border-blue-300 dark:border-blue-700",
  [ProjectStage.SPROUT]: "border-green-300 dark:border-green-700",
  [ProjectStage.GROWING]: "border-gray-300 dark:border-gray-700",
  [ProjectStage.ADULT]: "border-emerald-300 dark:border-emerald-700",
}

export default function ProjectCard({ project }: { project: Project }) {
  const stageKey = STAGE_NAMES[project.stage]

  const fundingPercentage = getFundingPercentage(project)
  const isExpired = project.isDead
  const fundingLow = fundingPercentage < 20 && !isExpired
  const stageOutOfSync = isStageOutOfSync(project)
  const progress = fundingPercentage

  return (
    <Card
      className={`paper-panel overflow-hidden transition-all duration-300 ease-out cursor-pointer group hover:shadow-emerald-200/80 ${isExpired ? "opacity-80" : ""
        }`}
    >
      <div
        className={`relative h-48 flex items-center justify-center overflow-hidden rounded-[1.5rem] border border-white/70 transition-all duration-300 ease-out ${isExpired
          ? "from-gray-100 to-gray-200 bg-gradient-to-br"
          : `bg-linear-to-b ${STAGE_BACKGROUNDS[project.stage]} ${STAGE_HOVER_BACKGROUNDS[project.stage]}`
          }`}
      >
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_55%)]" />
        <div className="relative flex h-full flex-col items-center justify-center gap-3 text-6xl">
          <span className="drop-shadow-sm">{isExpired ? "🥀" : STAGE_EMOJIS[project.stage]}</span>
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-slate-600">
            {isExpired ? "Gagal" : stageKey}
          </p>
        </div>

        {!isExpired && stageOutOfSync && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-amber-600 shadow">
            <RefreshCw className="w-3 h-3" />
            Sinkronkan
          </span>
        )}
        {!isExpired && fundingLow && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-rose-500 shadow">
            <Users className="w-3 h-3" />
            Butuh Dukungan
          </span>
        )}
        {isExpired && (
          <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-500 shadow">
            <XCircle className="w-3 h-3" />
            Kadaluarsa
          </span>
        )}
      </div>

      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-teal-700 text-lg">Pohon #{project.id.toString()}</h3>
          <div className="flex gap-2 mt-2 flex-wrap">
            {isExpired ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-600">
                <XCircle className="w-3 h-3" />
                Gagal
              </span>
            ) : (
              <>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  <Clock className="w-3 h-3" />
                  {stageKey}
                </span>
                {stageOutOfSync && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                    🔄 Perlu Update
                  </span>
                )}
                {project.stage === ProjectStage.SPROUT && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    <CheckCircle className="w-3 h-3" />
                    Sukses!
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 text-teal-700 font-semibold">
              <Target className="w-4 h-4 text-teal-700" />
              Terdanai
            </span>
            <span className="text-muted-foreground font-medium">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 bg-emerald-50" />
        </div>

        <div className="text-xs text-muted-foreground space-y-2 pt-2 border-t border-emerald-50">
          <p className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Dimulai: {formatPlantAge(project.plantedDate)}
          </p>
          <p className="flex items-center gap-1">
            <Users className="w-3 h-3 text-emerald-500" />
            Donatur aktif: Demo
          </p>
        </div>
      </div>
    </Card>
  )
}
