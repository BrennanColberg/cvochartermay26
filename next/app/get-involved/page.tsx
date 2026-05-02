import type { Metadata } from "next";
import InvolveForm from "@/components/InvolveForm";

const DESCRIPTION = "Want to help pass all four measures? Let us know how!";

export const metadata: Metadata = {
  title: "Get Involved",
  description: DESCRIPTION,
  openGraph: { title: "Get Involved", description: DESCRIPTION, url: "/get-involved" },
  twitter: { title: "Get Involved", description: DESCRIPTION },
};

export default function GetInvolvedPage() {
  return (
    <>
      <div className="page-header">
        <h1>Get Involved</h1>
        <p className="sub">Want to help pass all four measures? Let us know how!</p>
      </div>

      <main>
        <InvolveForm />

        <div className="donate-cta-strip">
          <h3>Support the campaign financially</h3>
          <p>Help us reach every Corvallis voter.</p>
          <a href="/donate" className="btn-donate-cta">Donate</a>
        </div>
      </main>
    </>
  );
}
