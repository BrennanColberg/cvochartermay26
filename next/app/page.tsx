import type { Metadata } from "next";
import EndorsersGrid from "@/components/EndorsersGrid";
import MeasureCard from "@/components/MeasureCard";
import DonateCTA from "@/components/DonateCTA";
import { MEASURES } from "@/lib/measures";

const DESCRIPTION =
  "All four measures were unanimously recommended by the Charter Review Task Force and unanimously referred to the voters by the City Council. Primary Election · May 19, 2026.";

export const metadata: Metadata = {
  title: { absolute: "Good Governance Corvallis" },
  description: DESCRIPTION,
  openGraph: {
    title: "Good Governance Corvallis",
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    title: "Good Governance Corvallis",
    description: DESCRIPTION,
  },
};

const EMAIL_TO = "endorse@goodgovernancecorvallis.org";
const EMAIL_SUBJECT = "Endorsement — Corvallis Charter Measures 2026";
const EMAIL_BODY = `I would like to add my, or my organization's, name as an endorser of the Corvallis Charter measures (2-143, 2-144, 2-145, 2-146).

Name:
Organization (if applicable):`;

const mailtoHref = `mailto:${EMAIL_TO}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(EMAIL_BODY)}`;

export default function Home() {

  return (
    <>
      <header>
        <p className="eyebrow">Primary Election &middot; May 19, 2026</p>
        <h1>
          Vote YES on Measures<br />
          <span className="measure-nums">2&#8209;143 &middot; 2&#8209;144</span>
          <span className="measure-sep" aria-hidden="true"> &middot; </span>
          <span className="measure-nums">2&#8209;145 &middot; 2&#8209;146</span>
        </h1>
        <p className="lead">
          All four measures were <strong>unanimously recommended</strong> by the Charter Review Task Force and{" "}
          <strong>unanimously referred</strong> to the voters by the City Council.
        </p>
        <div className="hero-buttons">
          <a href="#measures" className="btn">Learn About the Measures</a>
          <a href="/get-involved" className="btn-donate-hero">Get Involved</a>
        </div>
      </header>

      <div className="intro">
        <p>
          These updates improve clarity, transparency, and stability in how our government works -{" "}
          <strong>without changing our form of government or reducing voter rights.</strong>
        </p>
      </div>

      <main>
        <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
          <h2 className="section-heading">Endorsements (so far)</h2>
          <EndorsersGrid />
          <div className="add-name-wrap">
            <a className="add-name-btn primary" href={mailtoHref}>+ Add your name</a>
          </div>
        </div>

        <h2 className="section-heading" id="measures" style={{ marginTop: "3rem", textAlign: "center" }}>
          The Four Measures
        </h2>
        <div className="measures">
          {MEASURES.map((m) => (
            <MeasureCard key={m.num} measure={m} />
          ))}
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h2 className="section-heading">Charter Review Task Force</h2>
          <p style={{ fontSize: ".95rem", color: "var(--muted)", marginBottom: 0, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>
            These seven individuals <strong>unanimously recommended</strong> all four measures after months of careful study.
            The full City Council <strong>unanimously referred</strong> them to voters.
          </p>
          <div className="people-grid">
            {[
              { name: "Charles Maughan", role: "Mayor (Chair)" },
              { name: "Tony Cadena", role: "Ward 9 Councilor" },
              { name: "Charlyn Ellis", role: "Ward 5 Councilor" },
              { name: "Jim Moorefield", role: "Ward 3 Councilor" },
              { name: "Hyatt Lytle", role: "Community Member" },
              { name: "Jack Sattler", role: "Community Member" },
              { name: "Curtis Wright", role: "Community Member" },
            ].map(({ name, role }) => (
              <div key={name} className="person-card">
                <div className="name">{name}</div>
                <div className="role">{role}</div>
              </div>
            ))}
          </div>
        </div>

        <DonateCTA style={{ marginTop: "2.5rem" }} />
      </main>
    </>
  );
}
