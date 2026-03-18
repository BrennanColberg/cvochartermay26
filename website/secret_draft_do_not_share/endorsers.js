const ENDORSERS = [
  { name:'Charles Maughan',  role:'Mayor' },
  { name:'Jan Napack',       role:'Ward 1 Councilor' },
  { name:'Jim Moorefield',   role:'Ward 3 Councilor' },
  { name:'Carolyn Mayers',   role:'Ward 8 Councilor' },
  { name:'Tony Cadena',      role:'Ward 9 Councilor' },
  { name:'Gabe Shepherd',    role:'County Commissioner' },
  { name:'Julie Manning',    role:'Former Mayor' },
  { name:'Biff Traber',      role:'Former Mayor' },
  { name:'Penny York',       role:'Former Councilor' },
  { name:'Pacific Green Party', role:'Linn/Benton County Chapter', org:true, style:'background:#e8f5e9;border-color:#a5d6a7;', nameStyle:'color:#2e7d32;', roleStyle:'color:#388e3c;' },
];

function renderEndorsers(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = ENDORSERS.map(e => `
    <div class="person-card${e.org ? ' nonpartisan' : ''}"${e.style ? ` style="${e.style}"` : ''}>
      <div class="name"${e.nameStyle ? ` style="${e.nameStyle}"` : ''}>${e.name}</div>
      <div class="role"${e.roleStyle ? ` style="${e.roleStyle}"` : ''}>${e.role}</div>
    </div>`).join('');
}
