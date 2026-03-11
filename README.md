# Sitio web del Laboratorio de Herpetología

## Estructura del proyecto

```
mi-lab/
├── index.html              ← El sitio completo (no editar salvo el carrusel)
├── CNAME                   ← Tu dominio personalizado
├── README.md               ← Este archivo
│
├── content/                ← ★ AQUÍ editas el contenido
│   ├── home.md
│   ├── miembros.md
│   ├── investigacion.md
│   ├── museo.md
│   ├── servicios.md
│   └── enlaces.md
│
└── images/                 ← ★ AQUÍ van todas las fotos
    ├── logo.png            ← Logo del laboratorio
    ├── home/               ← Fotos del carrusel
    ├── miembros/           ← Fotos de cada miembro
    ├── investigacion/      ← Figuras de proyectos
    ├── museo/              ← Fotos de la colección
    ├── servicios/          ← Fotos de servicios
    └── enlaces/            ← (opcional)
```

---

## Cómo actualizar el contenido

### Editar texto de cualquier sección

1. Abre el archivo `.md` correspondiente en la carpeta `content/`
2. Edítalo con cualquier editor de texto (o directamente en GitHub.com)
3. Guarda y sube los cambios a GitHub
4. El sitio se actualiza automáticamente en 1–2 minutos

> **Tip:** Puedes editar directamente en GitHub.com sin instalar nada. Ve al archivo, haz clic en el lápiz ✏️, edita y guarda.

---

## Cómo agregar fotos al carrusel (Home)

1. Copia tus fotos en la carpeta `images/home/`  
   (recomendado: fotos horizontales, mínimo 1200×600 px)

2. Abre `index.html` y busca esta sección (línea ~180):
   ```javascript
   const CAROUSEL_IMAGES = [
     // Descomenta y edita:
     // { src: 'images/home/foto1.jpg', caption: 'Pristimantis sp. — Andes' },
   ];
   ```

3. Descomenta las líneas y ajusta los nombres de archivo y los pies de foto.

---

## Cómo agregar fotos de miembros

En `content/miembros.md` cada miembro tiene una línea como:
```
**Foto:** images/miembros/nombre.jpg
```
Esta línea es solo una referencia visual para ti — el sitio actual muestra el texto del Markdown. Si quieres que las fotos aparezcan como imágenes, usa la sintaxis de Markdown:
```markdown
![Nombre del investigador](images/miembros/nombre.jpg)
```

---

## Cómo activar tu logo

1. Copia tu logo como `images/logo.png`
2. Abre `index.html` y busca estas líneas (~línea 140):
   ```html
   <!-- <img src="images/logo.png" alt="Logo del laboratorio" /> -->
   <div class="logo-placeholder">🦎</div>
   ```
3. Descomenta la línea del `<img>` y elimina (o comenta) la del emoji.

---

## Cómo usar tu dominio personalizado

1. En el archivo `CNAME`, reemplaza `tu-dominio.com` con tu dominio real
2. En el panel de tu registrador de dominio, crea estos registros DNS:
   ```
   Tipo A:     185.199.108.153
   Tipo A:     185.199.109.153
   Tipo A:     185.199.110.153
   Tipo A:     185.199.111.153
   ```
   O si usas subdominio (ej. lab.universidad.edu):
   ```
   Tipo CNAME: tu-usuario.github.io
   ```
3. En GitHub: Settings → Pages → Custom domain → ingresa tu dominio

---

## Ver el sitio localmente (en tu computadora)

El sitio necesita un mini-servidor para cargar los archivos `.md`.
La forma más fácil:

**Opción A — Python (si lo tienes instalado):**
```bash
cd mi-lab
python -m http.server 8000
# Luego abre: http://localhost:8000
```

**Opción B — Extensión de VS Code:**  
Instala "Live Server" y haz clic en "Go Live".

**Opción C — Simplemente sube a GitHub** y revisa ahí.

---

## Sintaxis básica de Markdown

| Quieres | Escribes |
|---------|----------|
| **Negrita** | `**texto**` |
| *Cursiva* | `*texto*` |
| # Título grande | `# Título` |
| ## Subtítulo | `## Subtítulo` |
| [Enlace](https://url.com) | `[texto](https://url.com)` |
| ![Imagen](ruta.jpg) | `![descripción](images/foto.jpg)` |
| Lista | `- elemento` |
| Línea divisoria | `---` |

---

## Personalización del color

Para cambiar los colores del sitio, abre `index.html` y edita las variables al inicio del CSS:

```css
:root {
  --verde-oscuro:  #1a3a2a;   /* color principal */
  --dorado:        #c8a84b;   /* color de acento */
  --crema:         #f7f4ee;   /* fondo de la página */
}
```
