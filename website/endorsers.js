const ENDORSERS = [
  { name:'Democratic Party', role:'Benton County', org:true, style:'background:#e3f2fd;border-color:#90caf9;', nameStyle:'color:#1565c0;', roleStyle:'color:#1976d2;' },
  { name:'Republican Party', role:'Benton County', org:true, style:'background:#fce4ec;border-color:#ef9a9a;', nameStyle:'color:#c62828;', roleStyle:'color:#d32f2f;' },
  { name:'Pacific Green Party', role:'Linn/Benton County', org:true, style:'background:#e8f5e9;border-color:#a5d6a7;', nameStyle:'color:#2e7d32;', roleStyle:'color:#388e3c;' },
  { name:'Corvallis Chamber of Commerce', role:'', newRow:true },
  { name:'Downtown Corvallis Organization', role:'' },
  { name:'Our Revolution - Corvallis Allies', role:'' },
  { name:'Charles Maughan',  role:'Mayor', newRow:true },
  { name:'Tony Cadena',      role:'City Councilor' },
  { name:'Charlyn Ellis',    role:'City Councilor' },
  { name:'Briae Lewis',      role:'City Councilor' },
  { name:'Carolyn Mayers',   role:'City Councilor' },
  { name:'Jim Moorefield',   role:'City Councilor' },
  { name:'Jan Napack',       role:'City Councilor' },
  { name:'Ava Olson',        role:'City Councilor' },
  { name:'Pat Malone',       role:'County Commissioner' },
  { name:'Gabe Shepherd',    role:'County Commissioner' },
  { name:'Nancy Wyse',       role:'County Commissioner' },
  { name:'Julie Manning',    role:'Former Mayor' },
  { name:'Biff Traber',      role:'Former Mayor' },
  { name:'Penny York',       role:'Former Councilor' },
  { name:'Brennan Colberg',  role:'Community Member' },
  { name:'Alexis Hammer',    role:'Community Member' },
  { name:'Steve Richmond',   role:'Community Member' },
  { name:'Curtis Wright',    role:'Community Member' },
];

function renderEndorsers(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = ENDORSERS.map(e => `
    ${e.newRow ? '<div style="width:100%;grid-column:1/-1;height:0;"></div>' : ''}
    <div class="person-card${e.org ? ' nonpartisan' : ''}"${e.style ? ` style="${e.style}"` : ''}>
      <div class="name"${e.nameStyle ? ` style="${e.nameStyle}"` : ''}>${e.name}</div>
      ${e.role ? `<div class="role"${e.roleStyle ? ` style="${e.roleStyle}"` : ''}>${e.role}</div>` : ''}
    </div>`).join('');
}
