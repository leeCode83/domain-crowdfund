"use client"

import { useState, useMemo } from "react"
import ProjectGrid from "@/components/project-grid"
import StatsSidebar from "@/components/stats-sidebar"
import ProjectDetailsModal from "@/components/project-details-modal"
import CreateProjectModal from "@/components/create-project-modal"
import { usePlants } from "@/hooks/usePlants"
import { usePlantStageScheduler } from "@/hooks/usePlantStageScheduler"
import { Leaf, Sparkles, SunMedium } from "lucide-react"

export default function CrowdfundPage() {
  const [selectedProjectId, setSelectedProjectId] = useState<bigint | null>(null)
  const [showCreateProjectModal, setShowCreateProjectModal] = useState(false)
  const { plants: projects } = usePlants()

  const { isRunning } = usePlantStageScheduler()

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null

  const dashboardHighlights = useMemo(
    () => [
      {
        label: "Pohon Terdata",
        value: `${projects.length}`,
        icon: Leaf,
      },
      {
        label: "Mode Scheduler",
        value: isRunning ? "Aktif" : "Siaga",
        icon: Sparkles,
      },
      {
        label: "Status Demo",
        value: "Ceria 🌤️",
        icon: SunMedium,
      },
    ],
    [projects.length, isRunning],
  )

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="container px-4 md:px-6 mx-auto pt-10">
        <div className="paper-panel paper-panel--mint leaf-hero px-6 sm:px-10 py-10">
          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-emerald-600">
                Dashboard Kampanye
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-emerald-950 leading-tight">
                Rawat hutan kota digital Anda
              </h1>
              <p className="text-emerald-800 text-base md:text-lg max-w-2xl">
                Pantau progres pohon, undang donatur baru, dan rayakan pertumbuhan komunitas dari satu halaman
                dengan antarmuka yang ringan dan ceria.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {dashboardHighlights.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-100 bg-white px-4 py-4 shadow-sm flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">{label}</p>
                    <p className="text-lg font-semibold text-slate-900">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container px-4 md:px-6 mx-auto pt-10 py-12 pb-16">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <main>
            <ProjectGrid
              onSelectProject={setSelectedProjectId}
              onCreateProject={() => setShowCreateProjectModal(true)}
            />
          </main>
          <aside className="relative">
            <div className="lg:sticky lg:top-24">
              <StatsSidebar />
            </div>
          </aside>
        </div>
      </section>

      <ProjectDetailsModal
        project={selectedProject}
        isOpen={!!selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
      <CreateProjectModal isOpen={showCreateProjectModal} onClose={() => setShowCreateProjectModal(false)} />
    </div>
  )
}
