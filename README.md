# Club Deportivo Horizonte

Sitio web de un club deportivo de barrio, desarrollado como proyecto del curso de **Desarrollo Web** de Coderhouse.

## Sitio publicado

- **Ver el sitio:** https://agustingiron68-sys.github.io/Club-deportivo-horizonte/
- **Repositorio:** https://github.com/agustingiron68-sys/Club-deportivo-horizonte

## Páginas

| Página | Archivo |
|---|---|
| Inicio (con galería de imágenes) | `index.html` |
| Nosotros (con acordeón y modal) | `pages/nosotros.html` |
| Disciplinas | `pages/disciplinas.html` |
| Instalaciones | `pages/instalaciones.html` |
| Contacto | `pages/contacto.html` |

Las cinco páginas están adaptadas a celular, tablet y escritorio, sin scroll horizontal entre 375 px y 1400 px.

## Tecnologías

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **SCSS (Sass)** con partials, variables, mixins con parámetros (`elevar`, `entrada`, `fuente-titulos`), `@extend` con placeholders (`%elemento-animado`), operadores (`*`, `math.div`), anidado y el operador `&`. El CSS final se genera compilando `scss/main.scss`.
- **CSS3** con enfoque *mobile-first*: Flexbox, CSS Grid con `grid-template-areas` y media queries `min-width` (768 px y 1024 px).
- **Bootstrap 5.3** por CDN: navbar responsiva con menú hamburguesa, carousel, acordeón y modal.
- **Estilos propios** sobre Bootstrap, con la paleta del escudo: azul marino, azul petróleo y dorado (definidos en `scss/utilities/_variables.scss`).
- Estados interactivos (`:hover`, `:focus-visible`, `:active`) con `transition`.
- **Animaciones nativas:** tarjetas e imágenes que suben con `transform` + `transition`, y entrada del título principal con `@keyframes`. Se desactivan si el sistema pide menos movimiento (`prefers-reduced-motion`).
- **AOS 2.3.4** (por CDN) para animar secciones e imágenes al hacer scroll, iniciado desde `js/main.js`.
- Fuentes de **Google Fonts**: Oswald y Source Sans 3.
- **Git y GitHub** para el control de versiones, y **GitHub Pages** para publicar el sitio.

## Estructura del proyecto

```
Club-deportivo-horizonte/
├── index.html
├── pages/
│   ├── nosotros.html
│   ├── disciplinas.html
│   ├── instalaciones.html
│   └── contacto.html
├── scss/
│   ├── main.scss              # único punto de entrada (con @use)
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   ├── base/
│   │   ├── _base.scss
│   │   └── _tipografia.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   ├── _nav.scss
│   │   ├── _main.scss
│   │   └── _footer.scss
│   └── components/
│       ├── _buttons.scss
│       ├── _cards.scss
│       ├── _figuras.scss
│       ├── _galeria.scss
│       ├── _acordeon.scss
│       └── _modal.scss
├── js/
│   └── main.js                # inicia AOS
├── css/
│   └── style.css              # generado al compilar, no se edita a mano
├── img/
│   └── (logo e imágenes del sitio)
└── README.md
```

## Cómo compilar los estilos

El CSS no se escribe a mano: se genera a partir de los archivos `.scss`. Hace falta tener [Node.js](https://nodejs.org) y Sass instalados:

```
npm install -g sass
```

Para compilar una vez:

```
sass scss/main.scss css/style.css --no-source-map
```

Para que se recompile solo cada vez que se guarda un archivo `.scss`:

```
sass --watch scss/main.scss css/style.css --no-source-map
```

## Cómo verlo en tu computadora

1. Cloná el repositorio:
   ```
   git clone https://github.com/agustingiron68-sys/Club-deportivo-horizonte.git
   ```
2. Abrí `index.html` en el navegador. Se necesita conexión a internet para cargar Bootstrap y las fuentes.

## Autor

Agustin - Proyecto del curso de Desarrollo Web, Coderhouse.
