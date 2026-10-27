import type { Metadata } from "next";
import Link from "next/link";
import { issues } from "@/content/issues";

export const metadata: Metadata = { title: "Archive" };

export default function ArchivePage() {
  return <main id="main-content" className="archive-page"><header><p>The permanent record</p><h1>Issue Archive</h1><h2>Every miracle, collapse and regrettable group-chat message—preserved.</h2></header><section className="archive-list">{issues.map((issue) => <article key={issue.slug}><div><span>{issue.season}</span><strong>{issue.week}</strong></div><div><p>Issue No. {issue.issueNumber} · {issue.date}</p><h2><Link href={`/issues/${issue.slug}`}>{issue.headline}</Link></h2><p>{issue.deck}</p></div><Link className="read-issue" href={`/issues/${issue.slug}`}>Read issue →</Link></article>)}</section></main>;
}
