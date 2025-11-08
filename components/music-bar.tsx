"use client"

import { useEffect, useId, useMemo, useRef, useState } from "react"
import { Pause, Play, Volume2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

declare global {
  interface Window {
    YT?: {
      Player: new (
        elementId: string,
        options: {
          videoId: string
          playerVars?: Record<string, any>
          events?: Record<string, (event: any) => void>
        },
      ) => any
      PlayerState: {
        ENDED: number
        PLAYING: number
        PAUSED: number
        BUFFERING: number
      }
    }
    onYouTubeIframeAPIReady?: () => void
  }
}

const VIDEO_ID = "vhxgVJTmeuY"
const TRACK_TITLE = "Rainforest Vibes"
const TRACK_DESCRIPTION = "YouTube · Panna soundtrack"

let youtubeApiReadyPromise: Promise<void> | null = null

function loadYouTubeIframeAPI() {
  if (typeof window === "undefined") {
    return Promise.resolve()
  }

  if (window.YT && window.YT.Player) {
    return Promise.resolve()
  }

  if (youtubeApiReadyPromise) {
    return youtubeApiReadyPromise
  }

  youtubeApiReadyPromise = new Promise<void>((resolve) => {
    const existingScript = document.getElementById("youtube-iframe-api")

    if (!existingScript) {
      const script = document.createElement("script")
      script.id = "youtube-iframe-api"
      script.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(script)
    }

    const previousHandler = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousHandler?.()
      resolve()
    }
  })

  return youtubeApiReadyPromise
}

function formatTime(value: number) {
  if (!value || Number.isNaN(value)) return "0:00"
  const minutes = Math.floor(value / 60)
  const seconds = Math.floor(value % 60)
  return `${minutes}:${seconds.toString().padStart(2, "0")}`
}

export function MusicBar() {
  const reactId = useId()
  const playerContainerId = useMemo(
    () => `music-player-${reactId.replace(/:/g, "")}`,
    [reactId],
  )
  const playerRef = useRef<any>(null)

  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    let mounted = true

    loadYouTubeIframeAPI().then(() => {
      if (!mounted || typeof window === "undefined") return

      playerRef.current = new window.YT!.Player(playerContainerId, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (event: any) => {
            if (!mounted) return
            setDuration(event.target.getDuration())
            setIsReady(true)
            try {
              event.target.playVideo()
            } catch {
              // Ignore autoplay violations
            }
          },
          onStateChange: (event: any) => {
            if (!mounted || !window.YT) return
            const state = event.data
            if (state === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true)
            } else if (state === window.YT.PlayerState.PAUSED || state === window.YT.PlayerState.BUFFERING) {
              setIsPlaying(false)
            } else if (state === window.YT.PlayerState.ENDED) {
              setIsPlaying(false)
              event.target.seekTo(0)
            }
          },
        },
      })
    })

    return () => {
      mounted = false
      if (playerRef.current) {
        playerRef.current.stopVideo?.()
        playerRef.current.destroy?.()
        playerRef.current = null
      }
    }
  }, [playerContainerId])

  useEffect(() => {
    if (!isReady) return

    const interval = window.setInterval(() => {
      const player = playerRef.current
      if (!player) return

      const time = player.getCurrentTime?.()
      const trackDuration = player.getDuration?.()
      if (typeof time === "number") {
        setCurrentTime(time)
      }
      if (typeof trackDuration === "number") {
        setDuration(trackDuration)
      }
    }, 1000)

    return () => window.clearInterval(interval)
  }, [isReady])

  const togglePlayback = () => {
    const player = playerRef.current
    if (!player) return

    if (isPlaying) {
      player.pauseVideo?.()
    } else {
      player.playVideo?.()
    }
  }

  const progressPercent = duration ? Math.min(100, (currentTime / duration) * 100) : 0

  return (
    <div className="w-full">
      <div className="paper-panel paper-panel--soft flex flex-wrap items-center gap-4 rounded-2xl bg-white/80 px-4 py-3 shadow-lg ring-1 ring-white/70 backdrop-blur">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-lime-400 text-white shadow-inner">
          <Volume2 className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-teal-900">{TRACK_TITLE}</p>
          <p className="text-xs text-muted-foreground">{TRACK_DESCRIPTION}</p>

          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
            <Progress value={progressPercent} className="flex-1 bg-emerald-500/10" />
            <span className="text-[0.7rem] font-medium tabular-nums text-emerald-900">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>

        <Button
          type="button"
          variant="outline"
          size="sm"
          disabled={!isReady}
          onClick={togglePlayback}
          className="rounded-full border-emerald-100 bg-white/80 text-emerald-700 hover:bg-emerald-50"
        >
          {isPlaying ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />}
          {isPlaying ? "Pause" : "Play"}
        </Button>
      </div>

      <div id={playerContainerId} className="hidden" aria-hidden="true" />
    </div>
  )
}
