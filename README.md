# Club Deportivo Horizonte

Sitio web estático de 5 páginas para un club deportivo de barrio. Proyecto final del curso de **Desarrollo Web** de Coderhouse.

## Sitio desplegado

- **Netlify / Vercel:** https://startling-lily-f40c5b.netlify.app
- **Repositorio:** https://github.com/agustingiron68-sys/Club-deportivo-horizonte

## Páginas

| Página | Archivo |
|---|---|
| Inicio (con galería de imágenes) | `index.html` |
| Nosotros (con acordeón y modal) | `pages/nosotros.html` |
| Disciplinas | `pages/disciplinas.html` |
| Instalaciones | `pages/instalaciones.html` |
| Contacto | `pages/contacto.html` |

Las 5 páginas son responsivas (celular, tablet y escritorio), sin scroll horizontal.

## Tecnologías

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`) y **SEO**: `title`, `meta description` y `meta keywords` únicos en cada página, y `alt` en todas las imágenes.
- **SCSS (Sass)** con arquitectura de partials: variables, anidado con `&`, mixins con parámetros, `@extend` con placeholders y `@keyframes`. `main.scss` solo contiene los `@use`.
- **Bootstrap 5.3** por CDN: navbar responsiva con menú hamburguesa, carousel, acordeón y modal, todos personalizados desde SCSS con la paleta del escudo.
- **CSS Grid y Flexbox** con enfoque *mobile-first* y media queries `min-width` (768 px, 992 px y 1024 px).
- **Animaciones:** nativas (`transition` y `@keyframes`) y con la librería **AOS** (animaciones al hacer scroll).
- Fuentes de **Google Fonts**: Oswald y Source Sans 3.
- **Git y GitHub** para el control de versiones. Despliegue en Netlify / Vercel.

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
│   ├── main.scss              # solo @use de los partials
│   ├── utilities/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   └── _placeholders.scss
│   ├── base/
│   │   ├── _base.scss
│   │   ├── _tipografia.scss
│   │   └── _animaciones.scss
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
├── styles/
│   └── style.css              # CSS compilado, no se edita a mano
├── assets/
│   └── img/                   # logo e imágenes del sitio
└── README.md
```

## Cómo compilar los estilos

El CSS no se escribe a mano: se genera a partir de los archivos `.scss`. Hace falta tener [Node.js](https://nodejs.org) y Sass instalados:

```
npm install -g sass
```

Para compilar una vez:

```
sass scss/main.scss styles/style.css --no-source-map
```

Para que se recompile solo cada vez que se guarda un archivo `.scss`:

```
sass --watch scss/main.scss styles/style.css --no-source-map
```

## Cómo verlo en tu computadora

1. Cloná el repositorio:
   ```
   git clone https://github.com/agustingiron68-sys/Club-deportivo-horizonte.git
   ```
2. Abrí `index.html` en el navegador. Se necesita conexión a internet para cargar Bootstrap, AOS y las fuentes.

## Autor

Agustin - Proyecto final del curso de Desarrollo Web, Coderhouse.
