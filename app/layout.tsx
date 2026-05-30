import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://examplebeachclub.example"),
  title: "Example Beach Club | Mediterranean lifestyle destination",
  description:
    "A fictional premium Mediterranean beach club with reservations, gastronomy, sunset sessions, DJs and an immersive lifestyle website.",
  icons: {
    icon: "/beach-club/mark.svg",
    apple: "/beach-club/mark.svg"
  },
  keywords: [
    "beach club premium",
    "mediterranean beach club",
    "vip cabanas",
    "sunset sessions",
    "luxury hospitality",
    "premium reservations"
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
