import { NewspaperIssue } from "@/components/newspaper-issue";
import { currentIssue } from "@/content/issues";

export default function Home() {
  return <NewspaperIssue issue={currentIssue} />;
}
