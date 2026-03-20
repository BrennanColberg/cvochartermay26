const ENDORSERS = [
  { name:'Charles Maughan',  role:'Mayor' },
  { name:'Jan Napack',       role:'Ward 1 Councilor' },
  { name:'Briae Lewis',      role:'Ward 2 Councilor' },
  { name:'Jim Moorefield',   role:'Ward 3 Councilor' },
  { name:'Ava Olson',        role:'Ward 4 Councilor' },
  { name:'Charlyn Ellis',    role:'Ward 5 Councilor' },
  { name:'Carolyn Mayers',   role:'Ward 8 Councilor' },
  { name:'Tony Cadena',      role:'Ward 9 Councilor' },
  { name:'Gabe Shepherd',    role:'County Commissioner' },
  { name:'Julie Manning',    role:'Former Mayor' },
  { name:'Biff Traber',      role:'Former Mayor' },
  { name:'Penny York',       role:'Former Councilor' },
  { name:'Democratic Party', role:'Benton County', org:true, newRow:true, style:'background:#e3f2fd;border-color:#90caf9;', nameStyle:'color:#1565c0;', roleStyle:'color:#1976d2;' },
  { name:'Pacific Green Party', role:'Linn/Benton County Chapter', org:true, style:'background:#e8f5e9;border-color:#a5d6a7;', nameStyle:'color:#2e7d32;', roleStyle:'color:#388e3c;' },
];

function renderEndorsers(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = ENDORSERS.map(e => `
    ${e.newRow ? '<div style="width:100%;grid-column:1/-1;height:0;"></div>' : ''}
    <div class="person-card${e.org ? ' nonpartisan' : ''}"${e.style ? ` style="${e.style}"` : ''}>
      <div class="name"${e.nameStyle ? ` style="${e.nameStyle}"` : ''}>${e.name}</div>
      <div class="role"${e.roleStyle ? ` style="${e.roleStyle}"` : ''}>${e.role}</div>
    </div>`).join('');
}
