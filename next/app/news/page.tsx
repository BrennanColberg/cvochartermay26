import type { Metadata } from "next";
import DonateCTA from "@/components/DonateCTA";

const DESCRIPTION = "Updates from Good Governance Corvallis.";

export const metadata: Metadata = {
  title: "Latest News",
  description: DESCRIPTION,
  openGraph: { title: "Latest News", description: DESCRIPTION, url: "/news" },
  twitter: { title: "Latest News", description: DESCRIPTION },
};

export default function NewsPage() {
  return (
    <>
      <div className="page-header">
        <h1>Latest News</h1>
        <p className="sub">Updates from Good Governance Corvallis</p>
      </div>

      <main>
        <p className="news-empty">No news yet — check back soon.</p>
        <DonateCTA />
      </main>
    </>
  );
}
