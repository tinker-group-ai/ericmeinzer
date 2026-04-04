import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Eric Meinzer | AI-Native Products',
  description: 'Building intelligent systems, agent architecture, and automation. I know AI—here\'s what I can build for you.',
  openGraph: {
    title: 'Eric Meinzer | AI-Native Products',
    description: 'Building intelligent systems, agent architecture, and automation.',
    url: 'https://ericmeinzer.com',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-950 antialiased">
        <header className="border-b border-gray-200 sticky top-0 bg-white/80 backdrop-blur-sm z-50">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold">
              Eric
            </a>
            <div className="flex gap-6 text-sm">
              <a href="https://github.com/tinker-group-ai" className="hover:text-gray-600 transition">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ericmeinzer" className="hover:text-gray-600 transition">
                LinkedIn
              </a>
            </div>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
