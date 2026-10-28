import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PFI",
  description: "Project PFI",
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Members", href: "/members" },
  { label: "Mentors", href: "/mentors" },
  { label: "Mentees", href: "/mentees" },
  { label: "Map", href: "/map" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <div className="site-shell">
          <header className="site-header">
            <Link className="brand" href="/" aria-label="PFI home">
              <span className="brand-mark" aria-hidden="true">P</span>
              <span>PFI</span>
            </Link>
            <nav className="main-navigation" aria-label="Main navigation">
              {navigation.map(({ label, href }) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </header>
          {children}
          <footer className="site-footer">
            <span>PFI</span>
            <span>People · Learning · Community</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
