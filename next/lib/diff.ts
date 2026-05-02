function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function jaccard(a: string, b: string): number {
  const ws = (s: string) => new Set(s.toLowerCase().match(/\b\w+\b/g) || []);
  const A = ws(a), B = ws(b);
  let common = 0;
  for (const w of A) if (B.has(w)) common++;
  return common / (A.size + B.size - common);
}

function wordDiff(before: string, after: string): string {
  const tok = (s: string) => s.match(/\S+|\s+/g) || [];
  const a = tok(before), b = tok(after);
  const m = a.length, n = b.length;
  const dp: Int32Array[] = Array.from({ length: m + 1 }, () => new Int32Array(n + 1));
  for (let i = m - 1; i >= 0; i--)
    for (let j = n - 1; j >= 0; j--)
      dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const ops: { t: "k" | "i" | "d"; s: string }[] = [];
  let i = 0, j = 0;
  while (i < m || j < n) {
    if (i < m && j < n && a[i] === b[j]) { ops.push({ t: "k", s: a[i++] }); j++; }
    else if (j < n && (i >= m || dp[i][j + 1] >= dp[i + 1][j])) ops.push({ t: "i", s: b[j++] });
    else ops.push({ t: "d", s: a[i++] });
  }
  return ops.map((o) =>
    o.t === "k" ? esc(o.s) :
    o.t === "d" ? `<del class="w">${esc(o.s)}</del>` :
                  `<ins class="w">${esc(o.s)}</ins>`
  ).join("");
}

export type DiffMode = "diff" | "before" | "after";

export function renderDiff(before: string, after: string, mode: DiffMode): string {
  if (mode === "before") return `<div class="diff-content">${esc(before)}</div>`;
  if (mode === "after")  return `<div class="diff-content">${esc(after)}</div>`;
  const sim = jaccard(before, after);
  if (sim < 0.35) {
    return `
      <div style="padding:.75rem 1rem;">
        <div class="block-del"><div class="block-label">Current text</div>${esc(before)}</div>
        <div style="height:.5rem"></div>
        <div class="block-ins"><div class="block-label">Proposed text</div>${esc(after)}</div>
      </div>`;
  }
  return `<div class="diff-content">${wordDiff(before, after)}</div>`;
}

export function stripLinks(html: string): string {
  return html.replace(/<a\b[^>]*>(.*?)<\/a>/g, "$1");
}
