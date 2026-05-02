"use client";

import { useState, useEffect } from "react";
import { renderDiff, stripLinks, type DiffMode } from "@/lib/diff";
import type { Section } from "@/lib/measures";

interface Props {
  measureNum: number;
  section: Section;
}

export default function SectionRow({ measureNum, section }: Props) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<DiffMode>("diff");
  const [linkless, setLinkless] = useState(false);

  useEffect(() => {
    setLinkless(new URLSearchParams(window.location.search).get("linkless") === "true");
  }, []);

  const key = `m${measureNum}s${section.sec}`;

  let bodyHtml: string;
  if (section.kind === "remove") {
    const reason = section.reason ?? "";
    bodyHtml =
      `<div class="removed-block">${section.before.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>` +
      `<div class="remove-reason">Why removed: ${linkless ? stripLinks(reason) : reason}</div>`;
  } else {
    bodyHtml = renderDiff(section.before, section.after ?? "", mode);
  }

  return (
    <div className={`section-row${open ? " open" : ""}`} id={key}>
      <div className="section-row-header" onClick={() => setOpen((o) => !o)}>
        <span className="sec-num">§{section.sec}</span>
        <span className="sec-title">{section.title}</span>
        <span className={`sec-kind ${section.kind}`}>{section.kind === "remove" ? "removed" : "amended"}</span>
        <span className="sec-chevron">⌄</span>
      </div>
      <div className="section-diff" id={`${key}-diff`}>
        {section.kind === "amend" && (
          <div className="diff-view-tabs">
            {(["diff", "before", "after"] as DiffMode[]).map((m) => (
              <button
                key={m}
                className={`diff-tab${mode === m ? " active" : ""}`}
                onClick={(e) => { e.stopPropagation(); setMode(m); }}
              >
                {m === "diff" ? "Diff" : m === "before" ? "Current" : "Proposed"}
              </button>
            ))}
          </div>
        )}
        <div id={`${key}-body`} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      </div>
    </div>
  );
}
