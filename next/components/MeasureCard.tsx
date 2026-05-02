"use client";

import { useState } from "react";
import type { Measure } from "@/lib/measures";
import SectionRow from "@/components/SectionRow";

interface Props {
  measure: Measure;
}

export default function MeasureCard({ measure }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`measure-card${open ? " open" : ""}`} id={`m${measure.num}`}>
      <div className="measure-header" onClick={() => setOpen((o) => !o)}>
        <div className="badge">{measure.num}</div>
        <div className="measure-meta">
          <div className="measure-number">
            Measure {measure.official}
            {measure.officialUrl && (
              <> &bull; <a href={measure.officialUrl} target="_blank" rel="noopener" onClick={(e) => e.stopPropagation()}>Official city page ↗</a></>
            )}
          </div>
          <h3>{measure.title}</h3>
        </div>
        <span className="chevron">⌄</span>
      </div>
      <div className="measure-summary">{measure.summary}</div>
      <div className="measure-detail">
        <div className="detail-inner">
          <p className="detail-intro">
            Click any row to expand the text changes.
            In diff view: <span className="legend-ins">added</span> <span className="legend-del">removed</span>.
            Sections rewritten from scratch show as colored blocks instead of word-by-word.
          </p>
          <div className="section-list">
            {measure.sections.map((s) => (
              <SectionRow
                key={String(s.sec)}
                measureNum={measure.num}
                section={s}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
