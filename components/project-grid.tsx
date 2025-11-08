"use client"

import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Plus, Loader2, Rocket, RefreshCw, Layers } from "lucide-react"
import { usePlants } from "@/hooks/usePlants"
import { useContract } from "@/hooks/useContract"
import { useToast } from "@/hooks/use-toast"

interface ProjectGridProps {
  onSelectProject: (projectId: bigint) => void
  onCreateProject: () => void
}

export default function ProjectGrid({ onSelectProject, onCreateProject }: ProjectGridProps) {
  const { plants: projects, loading, fetchPlants } = usePlants()
  const { isConnected } = useContract()
  const { toast } = useToast()

  const handleRefresh = async () => {
    await fetchPlants()
    toast({
      title: "Pohon Diperbarui!",
      description: "Semua status Pohon telah disinkronkan.",
    })
  }

  if (!isConnected) {
    return (
      <div className="paper-panel paper-panel--soft p-8 text-center space-y-4">
        <Layers className="w-16 h-16 mx-auto text-emerald-500 drop-shadow-md" />
        <h2 className="text-3xl font-bold text-teal-700">Galeri Pohon Domain</h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Hubungkan wallet untuk membuka koleksi pohon hijau dan mulai mendukung kampanye favorit Anda.
        </p>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="paper-panel paper-panel--soft p-8 text-center space-y-4">
        <Loader2 className="w-16 h-16 mx-auto text-emerald-500 animate-spin" />
        <h3 className="text-xl font-semibold text-teal-700">Sebentar ya...</h3>
        <p className="text-muted-foreground">Kami sedang menyiram data pohon Anda.</p>
      </div>
    )
  }

  return (
    <div className="paper-panel paper-panel--soft p-6 sm:p-8 space-y-8">
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-emerald-500 font-semibold">
            Galeri Pohon
          </p>
          <h2 className="text-3xl font-bold text-teal-700 mt-2">
            {projects.length === 0 ? "Mulai kampanye pertama Anda" : `${projects.length} Pohon aktif`}
          </h2>
          <p className="text-muted-foreground">
            Kurasi hutan kota Anda dengan mendukung berbagai kampanye ceria.
          </p>
        </div>
        <div className="flex flex-wrap justify-end gap-3">
          <Button
            onClick={handleRefresh}
            disabled={loading}
            variant="outline"
            className="gap-2 rounded-full border-emerald-200 bg-white/70"
            title="Refresh status Pohon"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            Segarkan Data
          </Button>
          <Button
            onClick={onCreateProject}
            className="gap-2 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 text-emerald-950 shadow-lg shadow-emerald-300/50"
          >
            <Plus className="w-4 h-4" />
            Buat Pohon Baru
          </Button>
        </div>
      </div>

      {projects.length === 0 ? (
        <Card className="paper-panel paper-panel--mint p-10 text-center border-dashed border-2 border-emerald-200 bg-white/70">
          <div className="text-6xl mb-4">🌱</div>
          <h3 className="text-xl font-semibold text-teal-700 mb-2">Belum Ada Pohon</h3>
          <p className="text-muted-foreground mb-6">
            Jadilah yang pertama dan mulai kampanye crowdfunding Anda!
          </p>
          <Button onClick={onCreateProject} className="gap-2 rounded-full">
            <Plus className="w-4 h-4" />
            Tanam Pohon Pertama
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.id.toString()}
              onClick={() => onSelectProject(project.id)}
              className="cursor-pointer transition-transform duration-300 hover:-translate-y-1"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
