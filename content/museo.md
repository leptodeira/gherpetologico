<div class="museo-hero">
  <img src="images/museo/coleccion.jpg" alt="Museo de Herpetología Universidad de Antioquia" class="museo-hero-img" />
  <div class="museo-hero-overlay">
    <h1 class="museo-hero-title">Museo de Herpetología<br>Universidad de Antioquia</h1>
  </div>
</div>

<style>
/* ── HERO ─────────────────────────────────────────────────────── */
.museo-hero {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 420px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  margin-top: -3rem;
}
.museo-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  filter: brightness(0.62);
}
.museo-hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgba(8,20,14,0.25) 0%, rgba(8,20,14,0.55) 100%);
}
.museo-hero-title {
  font-family: 'Playfair Display', serif !important;
  font-size: clamp(1.8rem, 4vw, 3rem) !important;
  font-weight: 700 !important;
  color: #ffffff !important;
  text-align: center !important;
  line-height: 1.25 !important;
  letter-spacing: 0.02em;
  text-shadow: 0 3px 18px rgba(0,0,0,0.55);
  border-bottom: none !important;
  padding-bottom: 0 !important;
  margin-bottom: 0 !important;
}

/* ── DESCRIPCIÓN INTRO ────────────────────────────────────────── */
.museo-intro {
  font-size: 1.08rem;
  line-height: 1.85;
  color: #3a3a3a;
  max-width: 720px;
  margin: 0 auto 2.5rem;
  text-align: justify;
  border-left: 4px solid #a8d7a7;
  padding-left: 1.25rem;
}

/* ── SECCIÓN INFOGRAFÍA ───────────────────────────────────────── */
.museo-numeros-img {
  display: block;
  max-width: 100%;
  margin: 1.5rem auto 2.5rem;
  border-radius: 10px;
  box-shadow: 0 6px 28px rgba(26,58,42,0.15);
}

/* ── EJEMPLARES TIPO ──────────────────────────────────────────── */
.tipo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  margin: 1.5rem 0 2.5rem;
}
@media (max-width: 640px) {
  .tipo-grid { grid-template-columns: 1fr; }
}
.tipo-foto {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
  aspect-ratio: 4/3;
  box-shadow: 0 6px 24px rgba(26,58,42,0.18);
}
.tipo-desc {
  padding: 0.5rem 0.5rem 0.5rem 1rem;
}
.tipo-desc h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #08140e;
  margin-bottom: 0.6rem;
  font-style: italic;
}
.tipo-desc p {
  font-size: 0.97rem;
  line-height: 1.75;
  color: #3a3a3a;
}
.tipo-badge {
  display: inline-block;
  background: #08140e;
  color: #a8d7a7;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  padding: 3px 12px;
  border-radius: 20px;
  margin-bottom: 0.75rem;
}

/* ── BOTONES DE ACCESO ────────────────────────────────────────── */
.acceso-btns {
  display: flex;
  flex-wrap: wrap;
  gap: 1.1rem;
  justify-content: center;
  margin: 1.75rem 0 2.5rem;
}
.acceso-btn {
  padding: 0.75rem 1.5rem;
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(145deg, #1c3f29, #2c5f3e);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow:
    4px 4px 10px rgba(8,20,14,0.35),
    -2px -2px 6px rgba(255,255,255,0.08),
    inset 0 1px 0 rgba(255,255,255,0.15);
  transition: all 0.18s ease;
  position: relative;
  top: 0;
}
.acceso-btn:hover {
  background: linear-gradient(145deg, #245234, #376b49);
  box-shadow:
    6px 6px 14px rgba(8,20,14,0.4),
    -2px -2px 6px rgba(255,255,255,0.1),
    inset 0 1px 0 rgba(255,255,255,0.18);
  top: -2px;
}
.acceso-btn:active {
  box-shadow:
    2px 2px 6px rgba(8,20,14,0.35),
    inset 0 2px 4px rgba(0,0,0,0.25);
  top: 1px;
}
.acceso-btn .btn-icon {
  margin-right: 0.45rem;
  font-size: 1rem;
}

/* ── MODAL ────────────────────────────────────────────────────── */
.museo-modal-backdrop {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(8,20,14,0.55);
  z-index: 9000;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
}
.museo-modal-backdrop.open {
  display: flex;
}
.museo-modal {
  background: #f7f4ee;
  border-radius: 14px;
  max-width: 440px;
  width: 90%;
  padding: 2rem 2rem 1.75rem;
  box-shadow: 0 20px 60px rgba(8,20,14,0.35);
  position: relative;
  animation: modalIn 0.22s ease;
}
@keyframes modalIn {
  from { opacity: 0; transform: translateY(18px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}
.museo-modal h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  color: #08140e;
  margin-bottom: 0.85rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid #a8d7a7;
}
.museo-modal p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: #3a3a3a;
  margin-bottom: 1.1rem;
}
.museo-modal a.modal-link {
  display: inline-block;
  background: #08140e;
  color: #a8d7a7;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding: 0.55rem 1.2rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background 0.18s;
}
.museo-modal a.modal-link:hover {
  background: #1c3f29;
}
.museo-modal-close {
  position: absolute;
  top: 0.85rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.4rem;
  color: #4a7c59;
  cursor: pointer;
  line-height: 1;
  transition: color 0.15s;
}
.museo-modal-close:hover { color: #08140e; }

/* ── ENLACES / LOGOS ─────────────────────────────────────────── */
.enlaces-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
  justify-content: flex-start;
  margin: 1.5rem 0 2rem;
}
.enlace-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  padding: 1rem 1.4rem;
  border: 2px solid #e8e4dc;
  border-radius: 10px;
  transition: border-color 0.18s, box-shadow 0.18s, transform 0.18s;
  background: #fff;
}
.enlace-card:hover {
  border-color: #a8d7a7;
  box-shadow: 0 6px 20px rgba(26,58,42,0.12);
  transform: translateY(-3px);
}
.enlace-card img {
  height: 48px;
  width: auto;
  object-fit: contain;
}
.enlace-card span {
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: #4a7c59;
  text-transform: uppercase;
}
</style>

---

<p class="museo-intro">
El Museo de Herpetología de la Universidad de Antioquia (MHUA) es una colección científica de referencia que resguarda especímenes de anfibios y reptiles de Colombia y otras regiones neotropicales. Custodia la diversidad herpetológica, apoya la investigación taxonómica y biogeográfica, y sirve como patrimonio biológico de acceso público para la comunidad científica nacional e internacional.
</p>

---


<div class="acceso-btns">
  <button class="acceso-btn" onclick="museoModal('ingreso')">
    <span class="btn-icon">📥</span> Ingreso de especímenes
  </button>
  <button class="acceso-btn" onclick="museoModal('informacion')">
    <span class="btn-icon">✉️</span> Solicitud de información
  </button>
  <button class="acceso-btn" onclick="museoModal('revision')">
    <span class="btn-icon">🔍</span> Revisión de ejemplares
  </button>
</div>

<!-- Modal: Ingreso de especímenes -->
<div class="museo-modal-backdrop" id="modal-ingreso">
  <div class="museo-modal">
    <button class="museo-modal-close" onclick="museoModalClose('ingreso')" aria-label="Cerrar">×</button>
    <h3>📥 Ingreso de especímenes</h3>
    <p>
      Para depositar especímenes en el MHUA, complete el formulario de ingreso con los datos de colecta, determinación taxonómica y permisos de recolección. Los materiales son evaluados por el curador antes de ser incorporados oficialmente a la colección.
    </p>
    <a class="modal-link" href="formularios/ingreso_especimenes.xlsx" download>
      ⬇ Descargar formulario
    </a>
  </div>
</div>

<!-- Modal: Solicitud de información -->
<div class="museo-modal-backdrop" id="modal-informacion">
  <div class="museo-modal">
    <button class="museo-modal-close" onclick="museoModalClose('informacion')" aria-label="Cerrar">×</button>
    <h3>✉️ Solicitud de información</h3>
    <p>
      Para consultas sobre la colección, préstamos de especímenes, datos de catálogo o cualquier otra información, comuníquese directamente con la curaduria del museo a través del correo institucional.
    </p>
    <a class="modal-link" href="mailto:mhua@udea.edu.co">
      ✉ mhua@udea.edu.co
    </a>
  </div>
</div>

<!-- Modal: Revisión de ejemplares -->
<div class="museo-modal-backdrop" id="modal-revision">
  <div class="museo-modal">
    <button class="museo-modal-close" onclick="museoModalClose('revision')" aria-label="Cerrar">×</button>
    <h3>🔍 Revisión de ejemplares</h3>
    <p>
      Los investigadores que deseen revisar ejemplares de la colección en sala deben completar el formulario de solicitud de visita, indicando el taxón de interés, el propósito de la revisión y las fechas tentativas. Las visitas están sujetas a disponibilidad del personal.
    </p>
    <a class="modal-link" href="formularios/revision_ejemplares.xlsx" download>
      ⬇ Descargar formulario
    </a>
  </div>
</div>

<script>
function museoModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function museoModalClose(id) {
  document.getElementById('modal-' + id).classList.remove('open');
  document.body.style.overflow = '';
}
// Cerrar al hacer clic en el fondo
document.querySelectorAll('.museo-modal-backdrop').forEach(function(backdrop) {
  backdrop.addEventListener('click', function(e) {
    if (e.target === backdrop) {
      backdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});
// Cerrar con Escape
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.museo-modal-backdrop.open').forEach(function(m) {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});
</script>

---

# El MHUA en números

<!-- Reemplaza "images/museo/infografia.png" con tu imagen real -->
<img src="images/museo/infografia.jpg" alt="El MHUA en números — infografía" class="museo-numeros-img" />

---

# Ejemplares tipo

<div class="tipo-grid">
  <img src="images/museo/tipo.jpg" alt="Ejemplar tipo MHUA" class="tipo-foto" />
  <div class="tipo-desc">
    <p>
      Los ejemplares tipo son los especímenes de referencia sobre los cuales se fundamenta la descripción original de una especie y representan un acervo de valor irremplazable para la ciencia. El <strong>MHUA</strong> alberga XX holotipos de anfibios y XX de reptiles. Entre estos se encuentra la serie tipo de <i>Magdalenasaura</i>, el único género de reptiles endémico para Colombia. Adicionalmente, el museo contiene XX paratipos de anfibios y XX de reptiles.
    </p>
  </div>
</div>

---

# Encuéntranos también en

<style>
.enlaces-fila {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}
.enlaces-grupo {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}
.enlaces-label {
  font-family: 'Playfair Display', serif;
  font-size: 1rem;
  font-weight: 600;
  color: #08140e;
  white-space: nowrap;
  width: 80px;
}
.enlaces-separador {
  width: 2px;
  height: 48px;
  background: #a8d7a7;
  border-radius: 2px;
  flex-shrink: 0;
}
.enlace-logo {
  display: inline-flex;
  align-items: center;
  opacity: 0.85;
  transition: opacity 0.18s, transform 0.18s;
}
.enlace-logo:hover {
  opacity: 1;
  transform: translateY(-2px);
}
.enlace-logo img {
  height: 70px;
  width: auto;
  object-fit: contain;
  display: block;
}
</style>

<div class="enlaces-fila">
  <span class="enlaces-label">Anfibios</span>
  <div class="enlaces-separador"></div>
  <div class="enlaces-grupo">
    <a class="enlace-logo" href="http://rnc.humboldt.org.co/admin/index.php/registros/detail/2387" target="_blank" rel="noopener">
      <img src="images/museo/logo_rnc.png" alt="RNC" />
    </a>
    <a class="enlace-logo" href="https://www.gbif.org/dataset/cc28549b-467f-448c-875e-881ca507aba8" target="_blank" rel="noopener">
      <img src="images/museo/logo_gbif.png" alt="GBIF" />
    </a>
    <a class="enlace-logo" href="https://ipt.biodiversidad.co/sib/resource.do?r=mhua-a" target="_blank" rel="noopener">
      <img src="images/museo/logo_sib.png" alt="SiB" />
    </a>
  </div>
</div>

<div class="enlaces-fila">
  <span class="enlaces-label">Reptiles</span>
  <div class="enlaces-separador"></div>
  <div class="enlaces-grupo">
    <a class="enlace-logo" href="http://rnc.humboldt.org.co/admin/index.php/registros/detail/2387" target="_blank" rel="noopener">
      <img src="images/museo/logo_rnc.png" alt="RNC" />
    </a>
    <a class="enlace-logo" href="https://www.gbif.org/dataset/d3ba75d5-1382-440f-8f79-c45d8e3e69be" target="_blank" rel="noopener">
      <img src="images/museo/logo_gbif.png" alt="GBIF" />
    </a>
    <a class="enlace-logo" href="https://ipt.biodiversidad.co/sib/resource?r=coleccion_mhua" target="_blank" rel="noopener">
      <img src="images/museo/logo_sib.png" alt="SiB" />
    </a>
  </div>
</div>
