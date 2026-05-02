import type { Metadata } from "next";
import EndorsersGrid from "@/components/EndorsersGrid";
import DonateCTA from "@/components/DonateCTA";

const DESCRIPTION = "Corvallis community members and organizations who support all four charter measures.";

export const metadata: Metadata = {
  title: "Endorsements (so far)",
  description: DESCRIPTION,
  openGraph: { title: "Endorsements (so far)", description: DESCRIPTION, url: "/endorsements" },
  twitter: { title: "Endorsements (so far)", description: DESCRIPTION },
};

const EMAIL_TO = "endorse@goodgovernancecorvallis.org";
const EMAIL_SUBJECT = "Endorsement — Corvallis Charter Measures 2026";
const EMAIL_BODY = `I would like to add my, or my organization's, name as an endorser of the Corvallis Charter measures (2-143, 2-144, 2-145, 2-146).

Name:
Organization (if applicable):`;

const mailtoHref = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export default function EndorsementsPage() {
  return (
    <>
      <div className="page-header">
        <h1>Endorsements (so far)</h1>
        <p className="sub">Corvallis community members and organizations who support all four measures</p>
      </div>

      <main>
        <div style={{ textAlign: "center" }}>
          <EndorsersGrid />
          <div className="add-name-wrap">
            <a className="add-name-btn primary" href={mailtoHref}>+ Add your name</a>
          </div>
        </div>

        <DonateCTA style={{ marginTop: "2rem" }} />
      </main>
    </>
  );
}
