import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://examplebeachclub.example"),
  title: "Eixample Beach Club | Destino mediterráneo de estilo de vida",
  description:
    "Beach club mediterráneo ficticio con reservas premium, gastronomía, sesiones al atardecer, DJs y una experiencia digital inmersiva.",
  icons: {
    icon: "/beach-club/mark.svg",
    apple: "/beach-club/mark.svg"
  },
  keywords: [
    "beach club premium",
    "beach club mediterráneo",
    "cabañas VIP",
    "sesiones al atardecer",
    "hospitalidad de lujo",
    "reservas premium"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07120f"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
