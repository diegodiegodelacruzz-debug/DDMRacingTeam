import './style.css'
import { businessImages, productImages, workshopVideos } from './media'

const app = document.querySelector<HTMLDivElement>('#app')

if (!app) throw new Error('No se encontró el contenedor principal')

app.innerHTML = `
  <div class="site-shell">
    <div class="top-strip">
      <span>DDM RACING TEAM</span>
      <span class="top-strip-line"></span>
      <span>TALLER INTEGRAL · MOTOS Y CUATRICICLOS</span>
    </div>

    <header class="header">
      <a class="brand" href="#inicio" aria-label="DDM Racing Team - Inicio">
        <span class="brand-mark">DDM<span>RACING</span></span>
        <span class="brand-caption">TEAM · PERFORMANCE · SERVICE</span>
      </a>
      <button class="menu-toggle" aria-label="Abrir menú" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav">
        <a href="#inicio">INICIO</a>
        <a href="#taller">TALLER</a>
        <a href="#servicios">SERVICIOS</a>
        <a href="#repuestos">REPUESTOS</a>
        <a href="#nosotros">NOSOTROS</a>
        <a href="#contacto" class="nav-contact">CONTACTO <b>↗</b></a>
      </nav>
    </header>

    <main>
      <section class="cover" id="inicio">
        <div class="cover-logo">
          <img src="/images/1795292679608.jpg" alt="Logo original DDM Racing Team">
        </div>
        <div class="cover-overlay">
          <div class="cover-content">
            <div class="eyebrow"><i></i> PARQUE PATRICIOS · BUENOS AIRES</div>
            <h1>PASIÓN POR LAS<br><span> DOS RUEDAS.</span></h1>
            <p class="cover-lead">Mecánica integral, diagnóstico especializado y repuestos para motos y cuatriciclos.</p>
            <div class="cover-actions">
              <a class="btn btn-green" href="#servicios">CONOCÉ NUESTROS SERVICIOS <span>↗</span></a>
              <a class="btn btn-outline" href="#repuestos">REPUESTOS Y ACCESORIOS</a>
            </div>
          </div>
        </div>
        <div class="cover-bottom">
          <span>PRECISIÓN</span><span class="cover-dot"></span>
          <span>EXPERIENCIA</span><span class="cover-dot"></span>
          <span>PASIÓN RACING</span>
        </div>
      </section>

      <div class="intro-banner-image">
        <img src="/images/1795295646592.jpg" alt="DDM Racing Team">
      </div>

      <section class="intro section-pad" id="nosotros">
        <div class="section-kicker">QUIÉNES SOMOS</div>
        <div class="intro-grid">
          <div>
            <h2>NO ES SOLO<br>UN TALLER.<br><span>ES CULTURA</span><br>RACING.</h2>
          </div>
          <div class="intro-copy">
            <p class="intro-highlight">En DDM Racing Team vivimos el mundo de las motos y los cuatriciclos.</p>
            <p>Somos un espacio dedicado al mantenimiento, la mecánica integral y la búsqueda de soluciones para cada vehículo. Trabajamos con compromiso, atención personalizada y pasión por lo que hacemos.</p>
            <p>Además del servicio de taller, contamos con una propuesta de repuestos y accesorios para acompañarte en el mantenimiento y la reparación de tu moto o cuatriciclo.</p>
            <a class="text-link" href="#contacto">VENÍ A CONOCERNOS <span>→</span></a>
          </div>
        </div>
      </section>

      <section class="statement">
        <div class="statement-lines"></div>
        <p>EL RENDIMIENTO EMPIEZA CON UN BUEN MANTENIMIENTO.</p>
        <span>DDM RACING TEAM</span>
      </section>

      <section class="workshop section-pad" id="taller">
        <div class="section-kicker">TALLER INTEGRAL</div>
        <div class="section-heading">
          <div>
            <h2>ATENCIÓN TÉCNICA.<br><span>TRABAJO CON PASIÓN.</span></h2>
          </div>
          <p>Un espacio preparado para atender las necesidades de tu moto o cuatriciclo, desde el diagnóstico hasta el mantenimiento integral.</p>
        </div>

        <div class="service-grid" id="servicios">
          <article class="service-card service-featured">
            <div class="service-number">01</div>
            <div class="service-symbol">⌁</div>
            <h3>MECÁNICA INTEGRAL</h3>
            <p class="service-question">¿Tu moto hace ruidos extraños, pierde potencia o presenta vibraciones?</p>
            <p>Realizamos revisiones del motor, transmisión, componentes mecánicos y funcionamiento general. Detectamos ruidos, pérdida de potencia, vibraciones, pérdidas y desgastes. Evaluamos cada caso para determinar qué reparación necesita tu moto o cuatriciclo y evitar que una falla pequeña termine en un problema mayor.</p>
            <span class="service-tag">MOTOS · CUATRICICLOS</span>
          </article>
          <article class="service-card">
            <div class="service-number">02</div>
            <div class="service-symbol">⌕</div>
            <h3>DIAGNÓSTICO DE FALLAS</h3>
            <p class="service-question">¿Tu moto falla, se apaga o tiene problemas para arrancar?</p>
            <p>Investigamos fallas de arranque, funcionamiento irregular, pérdida de rendimiento, ruidos y problemas intermitentes. Revisamos los sistemas involucrados para localizar el origen del inconveniente y evitar reemplazar componentes innecesariamente.</p>
            <span class="service-tag">DETECCIÓN Y EVALUACIÓN</span>
          </article>
          <article class="service-card">
            <div class="service-number">03</div>
            <div class="service-symbol">ϟ</div>
            <h3>INYECCIÓN ELECTRÓNICA</h3>
            <p class="service-question">¿Sentís tironeos, consumo irregular o pérdida de rendimiento?</p>
            <p>Revisamos el funcionamiento del sistema de alimentación electrónica, sensores y componentes relacionados. Buscamos detectar fallas que provoquen tironeos, dificultades de arranque, consumo irregular o pérdida de potencia. Un diagnóstico adecuado permite orientar la reparación y recuperar el funcionamiento del motor.</p>
            <span class="service-tag">SISTEMAS ELECTRÓNICOS</span>
          </article>
          <article class="service-card service-electric">
            <div class="service-number">04</div>
            <div class="service-symbol">ϟ</div>
            <h3>ELECTRICIDAD DE MOTOS</h3>
            <p class="service-question">¿Tu moto no arranca? ¿Se descarga la batería? ¿Fallan las luces?</p>
            <p>Diagnóstico y reparación de fallas eléctricas. Revisamos batería, sistema de carga, regulador, estator, arranque, encendido, iluminación, cables, fichas y conexiones. Buscamos el origen de cada falla para evitar cambios de piezas innecesarios y recuperar el funcionamiento eléctrico.</p>
            <span class="service-tag">ESPECIALIDAD · SISTEMA ELÉCTRICO</span>
          </article>
          <article class="service-card">
            <div class="service-number">05</div>
            <div class="service-symbol">⚙</div>
            <h3>CARBURADORES</h3>
            <p class="service-question">¿Le cuesta arrancar, regula mal o consume demasiado?</p>
            <p>Realizamos revisión, limpieza y regulación del carburador. Controlamos los componentes de alimentación para detectar obstrucciones, suciedad y desajustes que pueden provocar dificultades de arranque, ralentí inestable, tironeos o consumo excesivo.</p>
            <span class="service-tag">ALIMENTACIÓN DEL MOTOR</span>
          </article>
          <article class="service-card">
            <div class="service-number">06</div>
            <div class="service-symbol">◷</div>
            <h3>SERVICE Y MANTENIMIENTO</h3>
            <p class="service-question">¿Querés cuidar tu moto y evitar reparaciones innecesarias?</p>
            <p>Realizamos controles periódicos, cambio de aceite, revisión de filtros, bujías, cadena, transmisión, frenos, neumáticos y niveles. El mantenimiento preventivo ayuda a reducir desgastes prematuros, conservar el rendimiento y detectar problemas antes de que se agraven.</p>
            <span class="service-tag">CUIDADO Y PREVENCIÓN</span>
          </article>
          <article class="service-card">
            <div class="service-number">07</div>
            <div class="service-symbol">＋</div>
            <h3>REVISIÓN Y PUESTA A PUNTO</h3>
            <p class="service-question">¿Estás por viajar? ¿Querés salir a la ruta con tranquilidad?</p>
            <p>Inspeccionamos los principales sistemas de la moto, verificamos su funcionamiento y detectamos componentes que necesitan ajuste, mantenimiento o reparación. Una puesta a punto permite corregir irregularidades y preparar el vehículo para un uso confiable.</p>
            <span class="service-tag">ATENCIÓN PERSONALIZADA</span>
          </article>
        </div>
        <div class="workshop-cta">
          <div><strong>¿QUERÉS SALIR A LA RUTA CON TRANQUILIDAD?</strong><span>No esperes a quedarte tirado. Anticipate a los problemas. Tu seguridad también importa.</span></div>
          <a class="btn btn-green" href="https://wa.me/5491131788680" target="_blank" rel="noopener noreferrer">HACÉ TU CONSULTA <span>↗</span></a>
        </div>
      </section>

      <section class="parts section-pad" id="repuestos">
        <div class="section-kicker">CASA DE REPUESTOS</div>
        <div class="parts-heading">
          <div>
            <h2>TODO LO QUE<br>NECESITÁS PARA<br><span>SEGUIR EN MARCHA.</span></h2>
          </div>
          <div class="parts-copy">
            <p class="parts-highlight">Repuestos y accesorios para motos y cuatriciclos.</p>
            <p>Encontrá una propuesta pensada para acompañar el mantenimiento, la reparación y el cuidado de tu vehículo. Consultanos por el repuesto que estás buscando y te ayudamos a encontrar la opción adecuada.</p>
          </div>
        </div>

        <div class="parts-grid">
          <article class="part-item"><span class="part-index">A /</span><div><h3>MOTOR</h3><p>Componentes y repuestos relacionados con el motor y sus distintos sistemas.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">B /</span><div><h3>TRANSMISIÓN</h3><p>Elementos para el sistema de transmisión y transferencia de movimiento.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">C /</span><div><h3>FRENOS</h3><p>Repuestos vinculados al sistema de frenado y sus componentes.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">D /</span><div><h3>SUSPENSIÓN</h3><p>Componentes para el sistema de suspensión y estabilidad del vehículo.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">E /</span><div><h3>ELECTRICIDAD</h3><p>Repuestos y componentes para los distintos sistemas eléctricos.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">F /</span><div><h3>MANTENIMIENTO</h3><p>Productos y elementos para el cuidado y mantenimiento periódico.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">G /</span><div><h3>ACCESORIOS</h3><p>Accesorios y complementos para motos y cuatriciclos.</p></div><span class="part-arrow">↗</span></article>
          <article class="part-item"><span class="part-index">H /</span><div><h3>MUCHO MÁS</h3><p>Consultanos por otras piezas, componentes y repuestos específicos.</p></div><span class="part-arrow">↗</span></article>
        </div>
        <div class="parts-footer">
          <span class="parts-line"></span>
          <p>¿BUSCÁS UN REPUESTO EN PARTICULAR?</p>
          <a class="btn btn-green" href="https://wa.me/5491178389464" target="_blank" rel="noopener noreferrer">CONSULTAR DISPONIBILIDAD <span>↗</span></a>
        </div>
        <p class="small-note">La disponibilidad y compatibilidad de cada repuesto se confirma mediante consulta.</p>
      </section>

      <section class="gallery section-pad" id="galeria">
  <div class="section-kicker">DDM RACING TEAM · GALERÍA</div>
  <div class="gallery-heading"><h2>EL TRABAJO<br><span>HABLA POR SÍ SOLO.</span></h2><p>Conocé nuestro negocio, los productos y los trabajos reales del equipo.</p></div>
  <div class="media-section">
    <div class="media-heading"><span>01 / NUESTRO ESPACIO</span><h3>CONOCÉ <em>EL NEGOCIO.</em></h3><p>Conocé nuestro lugar de trabajo y la pasión que ponemos en cada proyecto.</p></div>
    <div class="media-grid business-grid">
      ${businessImages.map((src,i) => `<figure class="media-card"><img src="${src}" alt="DDM Racing Team - negocio ${i+1}" loading="lazy" data-lightbox><figcaption>DDM RACING TEAM · ${String(i+1).padStart(2,"0")}</figcaption></figure>`).join("")}
    </div>
  </div>
  <div class="media-section" id="catalogo">
    <div class="media-heading"><span>02 / REPUESTOS Y ACCESORIOS</span><h3>PRODUCTOS <em>DDM.</em></h3><p>Consultanos por disponibilidad, precio y compatibilidad con tu moto o cuatriciclo.</p><a class="btn btn-green" href="https://wa.me/5491178389464" target="_blank" rel="noopener noreferrer">CONSULTAR POR REPUESTOS <span>↗</span></a></div>
    <div class="media-grid products-grid">
      ${productImages.map((src,i) => `<figure class="media-card product-card"><img src="${src}" alt="Producto DDM ${i+1}" loading="lazy" data-lightbox><figcaption>PRODUCTO · ${String(i+1).padStart(2,"0")}</figcaption></figure>`).join("")}
    </div>
  </div>
  <div class="media-section" id="trabajos">
    <div class="media-heading"><span>03 / TALLER EN ACCIÓN</span><h3>ACÁ VAMOS A MOSTRAR NUESTROS TRABAJOS.</h3><p>Galería de fotos y videos reales del taller.</p></div>
    <div class="video-grid">
      ${workshopVideos.map((src,i) => `<article class="video-card"><video controls preload="metadata" playsinline><source src="${src}" type="video/mp4">Tu navegador no puede reproducir este video.</video><span>DDM RACING TEAM · VIDEO ${String(i+1).padStart(2,"0")}</span></article>`).join("")}
    </div>
  </div>
</section>

      <section class="social-band">
        <div>
          <span class="section-kicker">SEGUINOS</span>
          <h2>DDM TAMBIÉN<br>SE VIVE ONLINE.</h2>
        </div>
        <div class="social-links">
          <a href="https://www.instagram.com/ddm.racingteam/" target="_blank" rel="noreferrer"><span>INSTAGRAM / TALLER</span><strong>@ddm.racingteam</strong><b>↗</b></a>
          <a href="https://www.instagram.com/repuestos.ddm/" target="_blank" rel="noreferrer"><span>INSTAGRAM / REPUESTOS</span><strong>@repuestos.ddm</strong><b>↗</b></a>
        </div>
      </section>

      <section class="contact section-pad" id="contacto">
        <div class="section-kicker">ENCONTRANOS</div>
        <div class="contact-grid">
          <div>
            <h2>VENÍ AL<br><span>TEAM.</span></h2>
            <p class="contact-lead">Tu próximo service, una consulta mecánica o ese repuesto que estás buscando. Estamos para ayudarte.</p>
            <div class="contact-actions"><a class="btn btn-green" href="https://wa.me/5491131788680" target="_blank" rel="noopener noreferrer">WHATSAPP TALLER · 11 3178-8680 <span>↗</span></a><a class="btn btn-green" href="https://wa.me/5491178389464" target="_blank" rel="noopener noreferrer">WHATSAPP REPUESTOS · 11 7838-9464 <span>↗</span></a></div>
          </div>
          <div class="contact-details">
            <div class="contact-detail"><span>DIRECCIÓN</span><strong>José C. Paz y Diógenes Taborda</strong><p>Parque Patricios · Ciudad Autónoma de Buenos Aires</p><a href="https://www.google.com/maps/search/?api=1&query=Jose+C.+Paz+y+Diogenes+Taborda+Parque+Patricios+CABA" target="_blank" rel="noreferrer">CÓMO LLEGAR ↗</a></div>
            <div class="contact-detail"><span>HORARIOS DE ATENCIÓN</span><strong>Lunes a sábado</strong><p>09:00 a 22:00 hs</p><strong>Domingos y feriados</strong><p>12:00 a 20:00 hs</p></div>
            <div class="contact-detail"><span>RESPONSABLE</span><strong>Darío Dávalos</strong></div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer-brand"><strong>DDM<span> RACING TEAM</span></strong><small>PERFORMANCE · SERVICE · PARTS</small></div>
      <p>LA PASIÓN NOS PONE EN MARCHA.</p>
      <span>© ${new Date().getFullYear()} DDM RACING TEAM · PARQUE PATRICIOS</span>
    </footer>
    <a class="floating-whatsapp" href="https://wa.me/5491131788680" target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp con el taller">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 .5A15.4 15.4 0 0 0 2.7 23.7L.5 31.5l8-2.1A15.5 15.5 0 1 0 16 .5zm0 28.2c-2.3 0-4.5-.6-6.4-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5A12.7 12.7 0 1 1 16 28.7zm7-9.5c-.4-.2-2.3-1.1-2.7-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.5-.2.3-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.8l.6-.7c.2-.2.3-.4.4-.7.1-.3 0-.5 0-.7-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.8c.2.3 2.6 4 6.3 5.6.9.4 1.6.6 2.1.7.9.3 1.7.2 2.3.1.7-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.4-.3-.8-.5z"/>
      </svg>
      <span>WHATSAPP TALLER</span>
    </a>
  </div>
`

const lightbox = document.createElement('div')
lightbox.className = 'ddm-lightbox'
lightbox.innerHTML = '<button class="lightbox-close" aria-label="Cerrar">×</button><img alt="Imagen ampliada">'
document.body.appendChild(lightbox)
const lightboxImage = lightbox.querySelector('img') as HTMLImageElement

document.addEventListener('click', (event: MouseEvent) => {
  const target = event.target
  if (!(target instanceof Element)) return

  const img = target.closest('img[data-lightbox]')
  if (img instanceof HTMLImageElement) {
    lightboxImage.src = img.src
    lightboxImage.alt = img.alt
    lightbox.classList.add('lightbox-open')
  }

  if (target === lightbox || target.closest('.lightbox-close')) {
    lightbox.classList.remove('lightbox-open')
    lightboxImage.src = ''
  }
})

document.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    lightbox.classList.remove('lightbox-open')
    lightboxImage.src = ''
  }
})

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const nav = document.querySelector<HTMLElement>('.nav')

menuToggle?.addEventListener('click', () => {
  const isOpen = nav?.classList.toggle('nav-open') ?? false
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav-open')
    menuToggle?.setAttribute('aria-expanded', 'false')
  })
})

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.service-card, .part-item, .media-card, .video-card, .gallery-placeholder, .intro-grid, .section-heading, .parts-heading, .gallery-heading, .contact-grid').forEach((element) => {
  element.classList.add('reveal')
  revealObserver.observe(element)
})
