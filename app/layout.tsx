import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "The Chestnut Chronicle", template: "%s | The Chestnut Chronicle" },
  description: "The weekly newspaper of the Chestnut Farms A League.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <header className="publication-header">
          <div className="utility-bar"><span>Est. 2011 · Chestnut Farms</span><span>Independent fantasy football journalism</span></div>
          <div className="masthead-row"><Link className="masthead" href="/">The Chestnut Chronicle</Link><span className="league-badge">A<br/><small>LEAGUE</small></span></div>
          <nav aria-label="Primary navigation"><Link href="/">Current Issue</Link><Link href="/archive">Archive</Link><Link href="/issues/2026-week-01">Week 1</Link></nav>
        </header>
        {children}
        <footer className="publication-footer"><p className="footer-mark">The Chestnut Chronicle</p><p>All the news that is fit to talk trash about.</p><p>© 2026 Chestnut Farms A League</p></footer>
      </body>
    </html>
  );
}
