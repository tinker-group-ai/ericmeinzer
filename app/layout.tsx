import type { Metadata } from "next";
import "./globals.css";
import EasterEggs from "./EasterEggs";

export const metadata: Metadata = {
  title: "Eric Meinzer | Designer & Developer",
  description:
    "I work at the intersection of creativity and technology. Full stack developer, design thinker, and problem solver. Let's build something together.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🍌</text></svg>",
  },
  openGraph: {
    title: "Eric Meinzer | Designer & Developer",
    description:
      "Full stack developer and designer who builds across the stack and thinks through design. React, TypeScript, C#, AI workflows, and a decade of creative work.",
    url: "https://ericmeinzer.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="container site-nav">
            <a href="/" className="site-nav__logo">
              Eric Meinzer
            </a>
            <div className="site-nav__links">
              <a href="https://linkedin.com/in/ericmeinzer">LinkedIn</a>
              <a href="https://github.com/Landmeinz">GitHub</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <EasterEggs />
      </body>
    </html>
  );
}
