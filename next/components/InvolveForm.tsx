"use client";

import { FormEvent } from "react";

export default function InvolveForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const other = (form.elements.namedItem("other") as HTMLTextAreaElement).value;
    const checked: string[] = [];
    form.querySelectorAll<HTMLInputElement>('input[name="help"]:checked').forEach((cb) => {
      checked.push(cb.value);
    });

    let body = "Name: " + name + "\n";
    if (phone) body += "Phone: " + phone + "\n";
    if (checked.length) body += "\nI am willing to help by:\n- " + checked.join("\n- ") + "\n";
    if (other) body += "\nOther: " + other + "\n";

    const subject = "Get Involved — " + name;
    window.location.href =
      "mailto:help@goodgovernancecorvallis.org" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: ".5rem",
    marginBottom: "1rem",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius)",
    fontSize: "1rem",
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 540, margin: "2rem auto" }}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" required style={inputStyle} />

      <label htmlFor="phone">Phone <span style={{ color: "var(--muted)", fontWeight: "normal" }}>(optional)</span></label>
      <input type="tel" id="phone" name="phone" style={{ ...inputStyle, marginBottom: "1.25rem" }} />

      <fieldset style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1rem 1rem .5rem", marginBottom: "1.25rem" }}>
        <legend style={{ fontWeight: 700, padding: "0 .4rem" }}>I am willing to help by:</legend>
        {[
          "Writing a letter to the editor",
          "Distributing literature in my neighborhood",
          "Inviting my social network group(s) to support the campaign",
          "Adding my name as a public supporter",
        ].map((val) => (
          <label key={val} style={{ display: "block", marginBottom: ".5rem", cursor: "pointer" }}>
            <input type="checkbox" name="help" value={val} /> {val}
          </label>
        ))}
      </fieldset>

      <label htmlFor="other">Anything else?</label>
      <textarea
        id="other"
        name="other"
        rows={3}
        style={{ width: "100%", padding: ".5rem", marginBottom: "1.5rem", border: "1px solid var(--border)", borderRadius: "var(--radius)", fontSize: "1rem", resize: "vertical" }}
      />

      <button type="submit" className="btn" style={{ width: "100%", fontSize: "1.05rem", cursor: "pointer" }}>
        Submit
      </button>
    </form>
  );
}
