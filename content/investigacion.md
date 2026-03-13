# Líneas de Investigación

<style>
  .lineas-grid { display: flex; flex-direction: column; gap: 3rem; margin: 2rem 0; }

  .linea-item {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    border: 1px solid var(--gris-suave);
    overflow: hidden;
    background: var(--blanco);
    box-shadow: 0 2px 12px var(--sombra);
  }

  .linea-item.reverse { direction: rtl; }
  .linea-item.reverse > * { direction: ltr; }

  .linea-foto {
    position: relative;
    overflow: hidden;
    min-height: 320px;
  }

  .linea-foto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.6s ease;
  }

  .linea-item:hover .linea-foto img { transform: scale(1.04); }

  .linea-texto {
    padding: 2.5rem 2.2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .linea-num {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 700;
    color: var(--gris-suave);
    line-height: 1;
    margin-bottom: -0.5rem;
    user-select: none;
  }

  .linea-titulo {
    font-family: 'Playfair Display', serif !important;
    font-size: 1.4rem !important;
    font-weight: 600 !important;
    color: var(--verde-oscuro) !important;
    margin: 0 0 0.5rem 0 !important;
    border: none !important;
    padding: 0 !important;
  }

  .linea-divisor {
    width: 36px;
    height: 3px;
    background: var(--dorado);
    margin-bottom: 1rem;
    border: none;
  }

  .linea-texto p {
    font-size: 0.95rem;
    color: #5a5a5a;
    line-height: 1.8;
    margin: 0 !important;
  }

  /* Publicaciones */
  .pub-lista { list-style: none !important; margin: 0 !important; padding: 0 !important; }

  .pub-item {
    border-top: 1px solid var(--gris-suave);
    padding: 1.2rem 0;
    font-size: 0.92rem;
    line-height: 1.7;
  }

  .pub-item:last-child { border-bottom: 1px solid var(--gris-suave); }

  .pub-año {
    display: inline-block;
    background: var(--verde-oscuro);
    color: var(--dorado);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    padding: 2px 8px;
    margin-bottom: 0.4rem;
  }

  .pub-item a {
    font-size: 0.8rem;
    color: var(--verde-claro) !important;
    text-decoration: none !important;
    border-bottom: 1px dotted var(--verde-claro);
  }

  .pub-item a:hover { color: var(--verde-oscuro) !important; }

  /* Botón Scholar */
  .scholar-cta {
    text-align: center;
    margin: 2.5rem 0 1rem;
    padding: 2rem;
    background: linear-gradient(135deg, var(--verde-oscuro), var(--verde-medio));
    border-radius: 4px;
  }

  .scholar-cta p {
    color: rgba(255,255,255,0.75) !important;
    font-size: 0.9rem !important;
    margin-bottom: 1rem !important;
  }

  .btn-scholar {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--dorado);
    color: var(--verde-oscuro) !important;
    font-weight: 600;
    font-size: 0.95rem;
    text-decoration: none !important;
    border: none !important;
    padding: 0.75rem 2.2rem;
    letter-spacing: 0.04em;
    transition: background 0.2s, transform 0.2s;
    border-radius: 2px;
  }

  .btn-scholar:hover {
    background: #bfe3be !important;
    color: var(--verde-oscuro) !important;
    transform: translateY(-2px);
  }

  @media (max-width: 700px) {
    .linea-item, .linea-item.reverse { grid-template-columns: 1fr; direction: ltr; }
    .linea-foto { min-height: 220px; }
    .linea-texto { padding: 1.5rem 1.2rem; }
  }
</style>

<div class="lineas-grid">

  <!-- 01 · Sistemática — foto izquierda -->
  <div class="linea-item">
    <div class="linea-foto">
      <img src="images/investigacion/sistematica.jpg" alt="Sistemática y Biogeografía" />
    </div>
    <div class="linea-texto">
      <span class="linea-num">01</span>
      <h2 class="linea-titulo">Sistemática y Biogeografía</h2>
      <div class="linea-divisor"></div>
      <p>Integramos herramientas de filogenética molecular, morfología comparada y biogeografía histórica para delimitar y describir la diversidad de la herpetofauna neotropical. A través del análisis de marcadores genéticos y caracteres morfológicos cuantitativos, revisamos relaciones evolutivas y patrones de distribución geográfica, apoyados en nuestra <strong>Colección Herpetológica</strong> como repositorio de referencia taxonómica y fuente primaria de especímenes voucher para estudios de sistemática y biodiversidad.</p>
    </div>
  </div>

  <!-- 02 · Bioacústica — foto derecha -->
  <div class="linea-item reverse">
    <div class="linea-foto">
      <img src="images/investigacion/bioacustica.jpg" alt="Bioacústica y Ecoacústica" />
    </div>
    <div class="linea-texto">
      <span class="linea-num">02</span>
      <h2 class="linea-titulo">Bioacústica y Ecoacústica</h2>
      <div class="linea-divisor"></div>
      <p>Estudiamos la comunicación acústica de anfibios y su función en el reconocimiento de especie, la selección de pareja y la competencia intraespecífica. Empleamos grabación pasiva y análisis espectral para caracterizar repertorios vocales y, mediante índices ecoacústicos, evaluamos la integridad y la riqueza bioacústica de comunidades en hábitats con distintos grados de intervención antrópica.</p>
    </div>
  </div>

  <!-- 03 · Ecología — foto izquierda -->
  <div class="linea-item">
    <div class="linea-foto">
      <img src="images/investigacion/ecologia.jpg" alt="Ecología de Anfibios y Reptiles" />
    </div>
    <div class="linea-texto">
      <span class="linea-num">03</span>
      <h2 class="linea-titulo">Ecología de Anfibios y Reptiles</h2>
      <div class="linea-divisor"></div>
      <p>Investigamos la estructura de comunidades herpetológicas, el uso de microhábitat, la fenología reproductiva y las relaciones tróficas en ecosistemas andinos, altoandinos y secos. Nuestros estudios combinan inventarios de campo, modelado de nicho ecológico y análisis de dieta para comprender los factores bióticos y abióticos que determinan la distribución y abundancia de las especies.</p>
    </div>
  </div>

  <!-- 04 · Conservación — foto derecha -->
  <div class="linea-item reverse">
    <div class="linea-foto">
      <img src="images/investigacion/conservacion.jpg" alt="Biología de la Conservación" />
    </div>
    <div class="linea-texto">
      <span class="linea-num">04</span>
      <h2 class="linea-titulo">Biología de la Conservación</h2>
      <div class="linea-divisor"></div>
      <p>Evaluamos el estado de poblaciones de anfibios y reptiles amenazados, identificamos presiones antrópicas —pérdida de hábitat, contaminación y enfermedades emergentes— y desarrollamos estrategias de manejo basadas en evidencia. Trabajamos junto a autoridades ambientales y comunidades locales para diseñar áreas de importancia herpetológica y planes de acción para especies prioritarias.</p>
    </div>
  </div>

</div>

---

# Publicaciones Recientes

<ul class="pub-lista">

  <li class="pub-item">
    <span class="pub-año">2025</span><br>
    <strong>Apellido, N., Apellido, N. &amp; Apellido, N.</strong> (2024). Título del artículo. <em>Nombre de la Revista</em>, <em>12</em>(3), 45–67.<br>
    <a href="https://doi.org/xx.xxxx/xxxxx" target="_blank" rel="noopener">🔗 doi: xx.xxxx/xxxxx</a>
  </li>

  <li class="pub-item">
    <strong>Daza, N. &amp; Apellido, N.</strong> (2024). Otro título de artículo relevante. <em>Zootaxa</em>, <em>5678</em>(1), 1–23.<br>
    <a href="https://doi.org/xx.xxxx/xxxxx" target="_blank" rel="noopener">🔗 doi: xx.xxxx/xxxxx</a>
  </li>

  <li class="pub-item">
    <strong>Apellido, N., Apellido, N. &amp; Apellido, N.</strong> (2023). Descripción de una nueva especie del género <em>Pristimantis</em>. <em>Zootaxa</em>, <em>5234</em>(2), 201–220.<br>
    <a href="https://doi.org/xx.xxxx/xxxxx" target="_blank" rel="noopener">🔗 doi: xx.xxxx/xxxxx</a>
  </li>

  <li class="pub-item">
    <strong>Apellido, N.</strong> (2023). Uso de hábitat en serpientes. <em>Herpetologica</em>, <em>79</em>(1), 12–28.<br>
    <a href="https://doi.org/xx.xxxx/xxxxx" target="_blank" rel="noopener">🔗 doi: xx.xxxx/xxxxx</a>
  </li>

  <li class="pub-item">
    <span class="pub-año">2024</span><br>
    <strong>Apellido, N. &amp; Apellido, N.</strong> (2022). Biogeografía histórica de tortugas. <em>Journal of Biogeography</em>, <em>49</em>(5), 890–905.<br>
    <a href="https://doi.org/xx.xxxx/xxxxx" target="_blank" rel="noopener">🔗 doi: xx.xxxx/xxxxx</a>
  </li>

</ul>



<div class="scholar-cta">
  <p>Consulta nuestra producción científica</p>
  <a class="btn-scholar" href="https://scholar.google.com/citations?user=XXXXX" target="_blank" rel="noopener">
    📚 Ver en Google Scholar
  </a>
</div>
