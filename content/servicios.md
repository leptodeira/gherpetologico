# Servicios

El Grupo Herpetológico de Antioquia ofrece servicios especializados en herpetología aplicada, respaldados por años de experiencia en investigación de campo y laboratorio. Nuestro equipo está en capacidad de apoyar proyectos académicos, de conservación y del sector privado con rigor científico y compromiso con la biodiversidad colombiana.

<div class="servicios-grid">

  <div class="servicio-card">
    <div class="servicio-icono">
      <img src="images/servicios/identificacion.jpg" alt="Icono servicio" />
    </div>
    <div class="servicio-desc">
      <h3>Identificación Morfológica y Molecular</h3>
      <p>Determinación taxonómica de anfibios y reptiles mediante caracteres morfológicos y herramientas moleculares, con el respaldo de nuestro laboratorio molecular y nuestra colección de referencia MHUA con mas de 22,000 ejemplares y mas de 11,000 muestras de tejido.</p>
    </div>
  </div>

  <div class="servicio-card">
    <div class="servicio-icono">
      <img src="images/servicios/monitoreo.jpg" alt="Icono servicio" />
    </div>
    <div class="servicio-desc">
      <h3>Monitoreo de la Biodiversidad</h3>
      <p>Diseño y ejecución de inventarios y monitoreos herpetológicos para estudios de impacto ambiental, licencias ambientales y proyectos de conservación en áreas protegidas.</p>
    </div>
  </div>

  <div class="servicio-card">
    <div class="servicio-icono">
      <img src="images/servicios/ecoacustica.jpg" alt="Icono servicio" />
    </div>
    <div class="servicio-desc">
      <h3>Estudios Ecoacústicos</h3>
      <p>Tenemos amplia experiencia en el diseño e implementación de análisis acústicos a nivel de individuo, especies y paisaje. Combinamos métodos tradicionales e inteligencia artificial para la comprensión de los sonidos de la naturaleza. Contamos con equipos e infraestructura para la captura, manejo y análisis de gran cantidad de datos acústicos.</p>
    </div>
  </div>

  <div class="servicio-card">
    <div class="servicio-icono">
      <img src="images/servicios/capacitacion.jpg" alt="Icono servicio" />
    </div>
    <div class="servicio-desc">
      <h3>Capacitaciones y Talleres</h3>
      <p>Asesoramos e implementamos talleres de educacion ambiental para un amplio espectro de público. Tambien, ofrecemos capacitaciones en conocimiento y manejo de serpientes para empresas y obras de infraestructura.</p>
    </div>
  </div>

</div>

<div class="servicios-contacto">
  <p>Para cualquiera de estos servicios, <strong>comunícate con nosotros</strong>.</p>
  <a class="btn-contacto" href="mailto:juanm.daza@udea.edu.co">Enviar correo</a>
</div>

<style>
  .servicios-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    margin: 2.5rem 0;
  }

  .servicio-card {
    background: var(--blanco);
    border: 1px solid var(--gris-suave);
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 4px 16px var(--sombra);
    display: flex;
    flex-direction: column;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .servicio-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--sombra);
  }

  .servicio-icono {
    background: var(--verde-oscuro);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
  }

  .servicio-icono img {
    width: 140px;
    height: 140px;
    object-fit: contain;
    /* Invierte el negro a blanco para que el icono resalte sobre el fondo verde oscuro */
    filter: invert(1);
    opacity: 0.92;
  }

  .servicio-desc {
    padding: 1.4rem 1.5rem 1.6rem;
    flex: 1;
  }

  .servicio-desc h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.1rem;
    color: var(--verde-oscuro);
    margin-bottom: 0.6rem;
    line-height: 1.3;
  }

  .servicio-desc p {
    font-size: 0.92rem;
    color: var(--gris-texto);
    line-height: 1.65;
    margin: 0;
  }

  /* CTA de contacto */
  .servicios-contacto {
    text-align: center;
    margin-top: 1rem;
    padding: 2rem 1rem 1rem;
    border-top: 2px solid var(--gris-suave);
  }

  .servicios-contacto p {
    font-size: 1.05rem;
    color: var(--gris-texto);
    margin-bottom: 1.1rem;
  }

  .btn-contacto {
    display: inline-block;
    background: var(--verde-medio);
    color: var(--blanco) !important;
    text-decoration: none;
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 600;
    font-size: 0.92rem;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    padding: 0.75rem 2.2rem;
    border-radius: 6px;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 3px 10px var(--sombra);
  }

  .btn-contacto:hover {
    background: var(--verde-oscuro);
    transform: translateY(-2px);
  }

  /* ── Responsive: una columna en móvil ── */
  @media (max-width: 600px) {
    .servicios-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
