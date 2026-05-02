import { Fragment } from "react";
import { ENDORSERS } from "@/lib/endorsers";

export default function EndorsersGrid() {
  return (
    <div className="people-grid">
      {ENDORSERS.map((e, i) => (
        <Fragment key={i}>
          {e.newRow && <div style={{ width: "100%", height: 0 }} />}
          <div
            className={`person-card${e.org ? " nonpartisan" : ""}`}
            style={e.cardStyle}
          >
            <div className="name" style={e.nameStyle}>{e.name}</div>
            {e.role && <div className="role" style={e.roleStyle}>{e.role}</div>}
          </div>
        </Fragment>
      ))}
    </div>
  );
}
