import { TestimonialSlider } from "@/components/TestimonialSlider";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  Github,
  Gitlab,
  Globe,
  HandCoins,
  HeartHandshake,
  MoveRight,
  Package,
  PartyPopper,
  Rocket,
  ShieldCheck,
  Sparkles,
  Sprout,
  Sun,
  TreePalm,
  Twitter,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Feature = {
  title: string;
  description: string;
  icon: IconType;
  gradient: string;
  iconColor: string;
  badge: string;
};

type JourneyStep = {
  title: string;
  description: string;
  icon: IconType;
  accent: string;
  badge: string;
};

type HeroHighlight = {
  label: string;
  value: string;
  gradient: string;
  icon: IconType;
};

const techPartners = [
  { name: "Lisk", id: "lisk", logoSrc: null },
  { name: "Sepolia", id: "sepolia", logoSrc: null },
  { name: "Ethereum", id: "eth", logoSrc: null },
  { name: "Next.js", id: "nextjs", logoSrc: "/logos/nextjs.svg" },
  { name: "Vercel", id: "vercel", logoSrc: "/logos/vercel.svg" },
  { name: "Thirdweb", id: "thirdweb", logoSrc: "/logos/thirdweb.svg" },
  { name: "Solidity", id: "solidity", logoSrc: null },
  { name: "PannaSDK", id: "panna", logoSrc: null },
];

const globalStats = {
  totalRaised: "125 ETH",
  totalBackers: 893,
  totalProjects: 42,
};

const cheerfulBadges = [
  "🌿 Transparansi blockchain",
  "🎉 Komunitas ceria",
  "💧 Donasi langsung ke pohon",
];

const heroSupporters = ["RA", "DL", "MN", "SR"];

const heroHighlights: HeroHighlight[] = [
  {
    label: "Total Dana",
    value: globalStats.totalRaised,
    gradient: "from-emerald-100 via-white to-emerald-50",
    icon: DollarSign,
  },
  {
    label: "Donatur Ceria",
    value: `+${globalStats.totalBackers}`,
    gradient: "from-sky-100 via-white to-sky-50",
    icon: Users,
  },
  {
    label: "Pohon Aktif",
    value: `${globalStats.totalProjects} Pohon`,
    gradient: "from-amber-100 via-white to-amber-50",
    icon: TreePalm,
  },
];

const features: Feature[] = [
  {
    title: "Transparan & Aman",
    description:
      "Smart contract menjaga setiap rupiah donasi agar hanya cair ketika target tercapai.",
    icon: ShieldCheck,
    gradient: "from-emerald-50 via-white to-emerald-100",
    iconColor: "text-emerald-600",
    badge: "🔐 Kepercayaan penuh",
  },
  {
    title: "Biaya Super Rendah",
    description:
      "Lisk membantu kami memangkas biaya transaksi sehingga lebih banyak dana sampai ke pohon.",
    icon: Zap,
    gradient: "from-amber-50 via-white to-yellow-100",
    iconColor: "text-amber-500",
    badge: "⚡ Hemat biaya",
  },
  {
    title: "Pendanaan Global",
    description:
      "Ajak donatur dari mana saja tanpa batasan perbankan. Dampak lokal, dukungan global.",
    icon: Globe,
    gradient: "from-sky-50 via-white to-blue-100",
    iconColor: "text-sky-600",
    badge: "🌍 Tanpa batas",
  },
  {
    title: "Komunitas Peduli",
    description:
      "Dashboard komunitas memudahkan koordinasi relawan, pelaporan, dan update lapangan.",
    icon: HeartHandshake,
    gradient: "from-rose-50 via-white to-pink-100",
    iconColor: "text-rose-500",
    badge: "💞 Selalu terhubung",
  },
];

const journeySteps: JourneyStep[] = [
  {
    title: "Tanam Ide Cerah",
    description:
      "Gambarkan taman impian Anda, unggah detailnya, dan pasang target yang realistis.",
    icon: Sprout,
    accent: "from-emerald-50 via-white to-lime-100",
    badge: "Langkah 01",
  },
  {
    title: "Rangkul Komunitas",
    description:
      "Bagikan halaman kampanye, kumpulkan dukungan, dan pantau kontribusi secara real-time.",
    icon: Users,
    accent: "from-sky-50 via-white to-indigo-100",
    badge: "Langkah 02",
  },
  {
    title: "Rayakan Dampak",
    description:
      "Tarik dana sesuai progres, laporkan penanaman, dan rayakan pertumbuhan bersama donatur.",
    icon: Sun,
    accent: "from-amber-50 via-white to-orange-100",
    badge: "Langkah 03",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white via-emerald-50/50 to-white">
      <main className="flex-1 flex flex-col">
        <section className="relative w-full overflow-hidden py-16 md:py-24">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-amber-50/80 via-white/70 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 -top-10 h-64 w-64 rounded-full bg-rose-200/70 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-teal-200/70 blur-3xl"
            aria-hidden="true"
          />

          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="paper-panel paper-panel--mint px-6 sm:px-10 py-10 lg:py-12 overflow-hidden">
              <div className="absolute -left-6 top-4 soft-spot bg-emerald-200/50" aria-hidden="true" />
              <div className="absolute -right-8 bottom-6 soft-spot bg-lime-200/40" aria-hidden="true" />

              <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                <div className="space-y-8 animate-slide-in-up">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm ring-1 ring-emerald-100 backdrop-blur">
                    <Sparkles className="h-4 w-4" />
                    Platform hijau generasi baru
                  </div>

                  <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-7xl text-teal-700">
                      Dukung Taman Indonesia yang Penuh Warna
                    </h1>
                    <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
                      Domain memadukan crowdfunding dan blockchain Lisk untuk
                      menghadirkan donasi penanaman pohon yang transparan, seru,
                      dan menggerakkan komunitas.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {cheerfulBadges.map((badge) => (
                      <span
                        key={badge}
                        className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm ring-1 ring-emerald-100/80 backdrop-blur"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      asChild
                      className="bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 text-white shadow-lg shadow-emerald-400/40 hover:shadow-emerald-400/60"
                    >
                      <Link href="/crowdfund">
                        <Rocket className="mr-2 h-5 w-5" />
                        Mulai Jelajahi
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="border-emerald-200 bg-white/80 backdrop-blur hover:bg-white"
                    >
                      <Link href="#features" className="group">
                        Pelajari Fitur
                        <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {heroHighlights.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`rounded-2xl bg-gradient-to-br ${item.gradient} p-4 shadow-sm ring-1 ring-emerald-100/70`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-teal-700">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                                {item.label}
                              </p>
                              <p className="text-xl font-semibold text-teal-700">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div
                  className="relative animate-slide-in-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div
                    className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-emerald-200/60 via-white to-cyan-200/60 blur-3xl"
                    aria-hidden="true"
                  />
                  <div className="relative rounded-[32px] bg-white/90 p-8 shadow-2xl ring-1 ring-emerald-100 backdrop-blur">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                          Kampanye Unggulan
                        </p>
                        <h3 className="text-2xl font-bold text-teal-700">
                          Hutan Kota Ceria
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                        <PartyPopper className="h-3.5 w-3.5" />
                        Trending
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground">
                      Pembibitan 1.500 pohon endemik bersama komunitas sekolah
                      dasar di Jakarta.
                    </p>

                    <div className="mt-6 space-y-4">
                      <div className="flex items-center justify-between text-sm font-semibold text-slate-500">
                        <span>Target</span>
                        <span>80 ETH</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500"
                          style={{ width: "72%" }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Terpenuhi 57 ETH</span>
                        <span>72%</span>
                      </div>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                      <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                        <p className="text-xs uppercase tracking-wide text-emerald-600 font-semibold">
                          Donatur Minggu Ini
                        </p>
                        <p className="text-2xl font-bold text-teal-700 mt-1">
                          48
                        </p>
                        <p className="text-xs text-emerald-700/70">
                          +18% dari minggu lalu
                        </p>
                      </div>
                      <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-4">
                        <p className="text-xs uppercase tracking-wide text-amber-600 font-semibold">
                          Bibit Siap Tumbuh
                        </p>
                        <p className="text-2xl font-bold text-teal-700 mt-1">
                          1.120
                        </p>
                        <p className="text-xs text-amber-700/70">
                          38% sudah ditanam
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                      <div className="flex -space-x-3">
                        {heroSupporters.map((initials) => (
                          <span
                            key={initials}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-400 to-teal-500 text-sm font-semibold text-white shadow"
                          >
                            {initials}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Didukung oleh{" "}
                        <span className="font-semibold text-teal-700">
                          890+
                        </span>{" "}
                        donatur ceria
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-orange-50/60 to-emerald-50/60"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-1 text-sm font-semibold text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Fitur Unggulan
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Mengapa Domain Seru untuk Digunakan?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Kombinasikan transparansi blockchain, komunitas yang hangat, dan
                tampilan UI yang ceria untuk mempercepat misi hijau Anda.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`paper-panel ${feature.gradient} p-6 shadow-lg shadow-emerald-100/40 backdrop-blur`}
                  >
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 ${feature.iconColor}`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold text-slate-500">
                        {feature.badge}
                      </span>
                    </div>
                    <h3 className="mt-6 mb-2 text-xl font-bold text-teal-700">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="relative w-full py-16 md:py-24 bg-background overflow-hidden">
          <div
            className="absolute inset-x-0 top-1/3 h-64 bg-gradient-to-r from-emerald-200/40 via-white to-sky-200/40 blur-3xl"
            aria-hidden="true"
          />
          <div className="container px-4 md:px-6 mx-auto relative">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-semibold text-teal-700 shadow">
                💡 Perjalanan Anda
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Cara Domain Menghidupkan Kampanye
              </h2>
              <p className="max-w-3xl text-muted-foreground">
                Langkah-langkah sederhana untuk membuat kampanye terasa seperti
                bermain—namun berdampak besar untuk bumi.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {journeySteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className={`relative paper-panel ${step.accent} p-8 shadow-xl shadow-emerald-100/40 backdrop-blur`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-emerald-600">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-semibold text-slate-500">
                        {step.badge}
                      </span>
                    </div>
                    <div className="absolute right-6 top-6 text-5xl font-bold text-slate-200/60">
                      0{index + 1}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-teal-700">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="global-stats"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-emerald-50/60 to-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Pencapaian Komunitas Ceria
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                Didukung oleh donatur yang transparan, relawan antusias, dan
                kreator yang penuh ide.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <Card className="paper-panel bg-white/90 shadow-xl shadow-emerald-100/60 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase text-slate-500">
                    Total Dana Terkumpul
                  </CardTitle>
                  <DollarSign className="h-5 w-5 text-emerald-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {globalStats.totalRaised}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Menyokong kampanye hijau di Nusantara
                  </p>
                </CardContent>
              </Card>

              <Card className="paper-panel bg-white/90 shadow-xl shadow-amber-100/60 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase text-slate-500">
                    Total Pohon
                  </CardTitle>
                  <Package className="h-5 w-5 text-amber-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    {globalStats.totalProjects}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Pohon aktif dan siap dirawat
                  </p>
                </CardContent>
              </Card>

              <Card className="paper-panel bg-white/90 shadow-xl shadow-sky-100/60 backdrop-blur">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium uppercase text-slate-500">
                    Total Donatur Unik
                  </CardTitle>
                  <Users className="h-5 w-5 text-sky-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">
                    +{globalStats.totalBackers}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Orang ikut merayakan pertumbuhan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="tech-slider"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white"
        >
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-muted-foreground">
                Didukung Teknologi Terkini
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Kolaborasi dengan jaringan blockchain, framework modern, dan
                alat Web3 pilihan.
              </p>
            </div>

            <div
              className="paper-panel relative flex overflow-hidden rounded-3xl border border-emerald-100 bg-white/80 p-6 backdrop-blur"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              }}
            >
              <div className="flex w-max animate-marquee-infinite gap-12">
                {techPartners.map((partner) => (
                  <div
                    key={partner.id}
                    className="flex h-10 w-40 flex-shrink-0 items-center justify-center"
                  >
                    {partner.logoSrc ? (
                      <Image
                        src={partner.logoSrc}
                        alt={`${partner.name} Logo`}
                        width={160}
                        height={40}
                        className="h-full w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    ) : (
                      <span className="w-full text-center text-xl font-semibold text-muted-foreground transition-all duration-300 hover:scale-105">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}

                {techPartners.map((partner) => (
                  <div
                    key={`${partner.id}-dup`}
                    className="flex h-10 w-40 flex-shrink-0 items-center justify-center"
                    aria-hidden="true"
                  >
                    {partner.logoSrc ? (
                      <Image
                        src={partner.logoSrc}
                        alt={`${partner.name} Logo`}
                        width={160}
                        height={40}
                        className="h-full w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    ) : (
                      <span className="w-full text-center text-xl font-semibold text-muted-foreground transition-all duration-300 hover:scale-105">
                        {partner.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-full py-16 md:py-24 bg-gradient-to-b from-emerald-50/60 via-white to-emerald-50/30"
        >
          <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16 mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-700 shadow">
                Tentang Domain
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Crowdfunding hijau dengan sentuhan ceria
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Domain adalah bukti konsep yang menunjukkan bagaimana aplikasi
                crowdfunding dapat berjalan transparan di jaringan Lisk.
                Smart contract mengelola pendanaan, kontribusi, dan pencairan
                dana secara otomatis.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Kami percaya dukungan komunitas bisa jadi menyenangkan tanpa
                mengurangi profesionalisme. UI cerah membantu donatur merasa
                dekat dengan dampak yang mereka ciptakan.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-teal-500 via-emerald-400 to-lime-400 p-1 shadow-xl shadow-emerald-200/70 transition-all hover:shadow-emerald-300/80">
                <Card className="w-full bg-white/90 backdrop-blur rounded-[26px]">
                  <CardHeader>
                    <CardTitle>Kampanye Pertama Anda</CardTitle>
                    <CardDescription>
                      Siap memulai perjalanan hijau? Buat pohon digital dan
                      ajak teman merawatnya bersama.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="grid gap-4">
                    <Button
                      size="lg"
                      asChild
                      className="bg-white text-emerald-600 shadow-md hover:bg-emerald-50"
                    >
                      <Link href="/crowdfund">Jelajahi Pohon</Link>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Atau buat pohon Anda sendiri (setelah terhubung).
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-500 via-emerald-400 to-lime-400 p-10 text-white shadow-2xl">
              <div
                className="absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-white/20 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-wide">
                    Bersama Kita Bisa
                  </div>
                  <h3 className="mt-4 text-3xl font-bold leading-tight">
                    Buka kampanye yang penuh warna & energi positif
                  </h3>
                  <p className="mt-2 text-white/80">
                    Dampingi komunitas Anda dengan dashboard yang mudah,
                    laporan transparan, dan pengalaman donasi yang menggembirakan.
                  </p>
                </div>
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-emerald-600 shadow-lg hover:bg-emerald-50"
                >
                  <Link href="/crowdfund">
                    <HandCoins className="mr-2 h-5 w-5" />
                    Mulai Kampanye
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TestimonialSlider />
      </main>

      <footer className="w-full bg-gradient-to-b from-white via-emerald-50 to-emerald-100 border-t border-emerald-100/70 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold text-teal-700">Domain</h3>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
                Platform crowdfunding transparan di atas Lisk Blockchain.
              </p>
              <div className="flex gap-4 mt-6">
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="text-muted-foreground hover:text-teal-700 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Github"
                  className="text-muted-foreground hover:text-teal-700 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  aria-label="Gitlab"
                  className="text-muted-foreground hover:text-teal-700 transition-colors"
                >
                  <Gitlab className="w-6 h-6" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-4">Pohon</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="/crowdfund"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Jelajahi Pohon
                </Link>
                <Link
                  href="/crowdfund"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Buat Pohon
                </Link>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Cara Kerja
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-4">Perusahaan</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Tentang Kami
                </Link>
                <Link
                  href="#features"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Fitur
                </Link>
              </nav>
            </div>

            <div>
              <h4 className="font-semibold text-teal-700 mb-4">Legal</h4>
              <nav className="flex flex-col gap-3">
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="text-sm text-muted-foreground hover:text-teal-700 transition-colors"
                  prefetch={false}
                >
                  Privacy Policy
                </Link>
              </nav>
            </div>
          </div>

          <div className="border-t border-emerald-100 mt-10 pt-8 text-center">
            <p className="text-xs text-muted-foreground">
              &copy; 2025 Domain. Dibangun di atas Lisk Sepolia.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
