"use client";

import { useState } from "react";

interface PressItem {
  title: string;
  byline: string;
  date: string;
  dateDisplay: string;
  body: React.ReactNode;
}

interface Props {
  items: PressItem[];
}

export default function PressAccordion({ items }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="press-list">
      {items.map((item, i) => (
        <article key={i} className={`press-item${openIdx === i ? " open" : ""}`}>
          <div
            className="press-head"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="press-head-text">
              <h2>{item.title}</h2>
              <p className="press-meta">
                <span className="press-byline">{item.byline}</span>
                <span className="press-sep">&middot;</span>
                <time dateTime={item.date}>{item.dateDisplay}</time>
              </p>
            </div>
            <span className="chevron">⌄</span>
          </div>
          <div className="press-body">{item.body}</div>
        </article>
      ))}
    </div>
  );
}
