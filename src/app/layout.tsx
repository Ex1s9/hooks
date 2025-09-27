import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnHooks",
  description: "Learning React hooks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
