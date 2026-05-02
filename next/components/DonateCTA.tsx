interface Props {
  style?: React.CSSProperties;
}

export default function DonateCTA({ style }: Props) {
  return (
    <div className="donate-cta-strip" style={style}>
      <h3>Yes For Good Governance And A Better Corvallis</h3>
      <p>Help us reach every voter.</p>
      <div style={{ display: "flex", gap: ".75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="/get-involved" className="btn-donate-cta">Get Involved</a>
        <a href="/donate" className="btn-donate-cta green">Donate</a>
      </div>
    </div>
  );
}
