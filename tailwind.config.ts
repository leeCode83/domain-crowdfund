// tailwind.config.ts atau tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    // Masukkan semua path content Anda, meskipun tidak diperlukan untuk purging di v4, 
    // ini membantu untuk menjaga kompatibilitas dan kejelasan.
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        // 💡 Bagian ini sangat penting untuk memperbaiki warna
        extend: {
            colors: {
                // Mendefinisikan ulang warna default Shadcn/UI agar menjadi TEAL (Hijau)
                // Gunakan nama 'primary' atau 'accent' yang sesuai dengan setup Shadcn Anda
                primary: {
                    // Default biasanya mengacu pada variabel CSS di globals.css
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                // Tambahkan lagi jika Anda menggunakan 'accent'
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                // ... pastikan warna teal yang Anda gunakan terdefinisi
                // Ini memastikan `teal-700` dari palet default Tailwind tetap tersedia
                teal: {
                    700: 'rgb(4, 120, 87)', // Atau kode hex/rgb yang Anda inginkan
                    400: 'rgb(45, 212, 191)',
                    // ...
                }
            },
            // ... Anda mungkin perlu mengulang konfigurasi keyframes dan animasi di sini
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        // ... plugin lain
    ],
};