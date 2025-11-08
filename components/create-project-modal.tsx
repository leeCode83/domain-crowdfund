"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Sparkles, Lightbulb, Minus, Plus } from "lucide-react"
import { usePlants } from "@/hooks/usePlants"
import { PLANT_PRICE } from "@/types/contracts"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface CreateProjectModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CreateProjectModal({ isOpen, onClose }: CreateProjectModalProps) {
  const { plantSeed: createProject, loading } = usePlants()
  const [quantity, setQuantity] = useState(1)

  const handleCreate = async (quantity: number) => {
    await createProject(quantity)
    onClose()
  }

  const handleIncrement = () => setQuantity((prev) => prev + 1)
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md border-none bg-transparent p-0">
        <div className="paper-panel paper-panel--soft p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-2xl text-slate-800">
              <Lightbulb className="w-5 h-5 text-accent" />
              Buat Pohon Baru
            </DialogTitle>
            <DialogDescription className="text-slate-600">
              Isi detail pohon Anda untuk memulai penggalangan dana.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-teal-700">Kuantitas</Label>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" onClick={handleDecrement} disabled={quantity <= 1}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="font-bold text-2xl w-12 text-center text-slate-700">{quantity}</span>
                <Button variant="outline" size="icon" className="h-9 w-9 rounded-full" onClick={handleIncrement}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500">
                Total Biaya: {(parseFloat(PLANT_PRICE) * quantity).toFixed(4)} ETH
              </p>
            </div>
          </div>

          <Card className="paper-panel--mint p-4 text-xs text-black">
            <p>
              💰 <strong>Biaya per pohon</strong>: {PLANT_PRICE} ETH.
              <br />
              ⏱️ <strong>Durasi Kampanye (Demo)</strong>: 1 menit per tahap.
              <br />
              ⚠️ <strong>Aturan</strong>: pohon harus didanai secara berkala agar tidak &quot;mati&quot; dan gagal.
            </p>
          </Card>

          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1 rounded-full text-white"
              disabled={loading}
            >
              Batal
            </Button>
            <Button
              onClick={() => handleCreate(quantity)}
              disabled={loading}
              className="flex-1 gap-2 rounded-full bg-gradient-to-r from-teal-400 via-emerald-400 to-lime-400 text-white"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin" />
                  Membuat...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Tanam Pohon
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}