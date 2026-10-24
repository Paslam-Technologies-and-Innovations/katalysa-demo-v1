import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Katalysa School Demo",
  description: "Interactive Katalysa school management demonstration.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
