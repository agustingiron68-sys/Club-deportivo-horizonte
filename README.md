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

Las páginas de **Inicio**, **Nosotros** y **Disciplinas** están completamente adaptadas a celular, tablet y escritorio. Las demás comparten la misma estructura y los mismos estilos.

## Tecnologías

- **HTML5** semántico (`header`, `nav`, `main`, `section`, `article`, `footer`).
- **CSS3** con enfoque *mobile-first*: Flexbox, CSS Grid con `grid-template-areas` y media queries `min-width` (768 px y 1024 px).
- **Bootstrap 5.3** por CDN: navbar responsiva con menú hamburguesa, carousel, acordeón y modal.
- **Estilos propios** sobre Bootstrap, con la paleta del escudo: azul marino `#0b2a4a`, azul petróleo `#1f6f9a` y dorado `#f2b705`.
- Estados interactivos (`:hover`, `:focus-visible`, `:active`) con `transition`.
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
├── styles/
│   └── styles.css
├── img/
│   └── (logo e imágenes del sitio)
└── README.md
```

## Cómo verlo en tu computadora

1. Cloná el repositorio:
   ```
   git clone https://github.com/agustingiron68-sys/Club-deportivo-horizonte.git
   ```
2. Abrí `index.html` en el navegador. Se necesita conexión a internet para cargar Bootstrap y las fuentes.

## Autor

Agustin - Proyecto del curso de Desarrollo Web, Coderhouse.
