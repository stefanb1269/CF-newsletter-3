import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NewspaperIssue } from "@/components/newspaper-issue";
import { getIssue, issues } from "@/content/issues";

export function generateStaticParams() { return issues.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const issue = getIssue(slug); return issue ? { title: `${issue.week}: ${issue.headline}`, description: issue.deck } : {}; }
export default async function IssuePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const issue = getIssue(slug); if (!issue) notFound(); return <NewspaperIssue issue={issue}/>; }
