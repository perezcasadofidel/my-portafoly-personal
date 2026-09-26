<div align="center">

# Portafolio Personal — Fidel Pérez Casado

**Portfolio de desarrollador full stack · Single-page application · Vite + React + Tailwind CSS**

[Español](#español) · [English](#english)

</div>

---

<a name="español"></a>

## 🇪🇸 Español

Portfolio personal de desarrollador full stack, construido como una **single-page application** con **Vite + React 18 + Tailwind CSS v4**.

El sitio reúne seis secciones —Hero, Sobre Mí, Habilidades, Experiencia, Proyectos y Contacto— con navegación por scroll suave, animaciones de entrada, tema claro/oscuro y soporte bilingüe con detección automática del idioma del visitante.

### ✨ Funcionalidades

- **Bilingüe (ES / EN)** con conmutador manual y **detección automática por geolocalización** vía `ip-api.com`, cacheando la preferencia en `localStorage`.
- **Tema claro/oscuro** gestionado con `next-themes` sobre variables CSS en espacio `oklch`.
- **Animaciones de entrada** en cada sección con `motion`, disparadas al entrar en viewport mediante un hook `useInView` propio.
- **Tarjetas de proyecto** con imagen, descripción, stack tecnológico y enlaces a demo y repositorio.
- **Formulario de contacto funcional** con [EmailJS](https://www.emailjs.com/), estados de envío, éxito y error.
- **Descarga del CV** en PDF directamente desde el Hero.
- **Navegación adaptativa** con menú hamburguesa en móvil, barra con fondo translúcido al hacer scroll y enlace directo al repositorio desde la barra superior.
- **Imagen de respaldo** en cada tarjeta de proyecto para que un fallo de carga no rompa el layout.

### 🛠 Stack tecnológico

| Tecnología | Versión | Uso |
| --- | --- | --- |
| Vite | 6.3.5 | Build y servidor de desarrollo |
| React | 18.3.1 | Interfaz de usuario |
| Tailwind CSS | 4.1.12 | Estilos utilitarios |
| motion | 12.23.24 | Animaciones |
| i18next / react-i18next | 26 / 17 | Internacionalización |
| next-themes | 0.4.6 | Tema claro/oscuro |
| lucide-react | 0.487.0 | Iconos |
| @emailjs/browser | 4.4.1 | Envío de emails |
| shadcn/ui (Radix) | — | 48 primitivos de componentes UI |

### 📦 Instalación

```bash
npm install     # Instalar dependencias
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
```

### 🔑 Variables de entorno

El formulario de contacto necesita tres variables. Crea un fichero `.env` en la raíz del proyecto:

```bash
VITE_EMAILJS_SERVICE_ID=   # ID del servicio de EmailJS
VITE_EMAILJS_TEMPLATE_ID=  # ID de la plantilla de EmailJS
VITE_EMAILJS_PUBLIC_KEY=   # Clave pública de EmailJS
```

Sin estas variables el formulario lanza el error
`EmailJS environment variables are missing.` y el envío fallará.

### 🗂 Estructura

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       ├── About.tsx            # Sobre mí
│       ├── Contact.tsx          # Contacto + formulario EmailJS + footer
│       ├── Experience.tsx       # Experiencia laboral
│       ├── Hero.tsx             # Hero + redes sociales
│       ├── Navigation.tsx       # Barra de navegación + selector de idioma
│       ├── Projects.tsx         # Tarjetas de proyectos
│       ├── Skills.tsx           # Habilidades
│       ├── figma/               # ImageWithFallback
│       ├── hooks/               # useInView
│       ├── me/                  # ChangeColor (toggle de tema)
│       └── ui/                  # 48 primitivos shadcn/ui
├── i18n/
│   ├── config.ts                # Inicialización de i18next
│   ├── countries.ts             # Países de habla hispana
│   ├── useGeoLanguage.ts        # Detección por geolocalización
│   └── locales/{en,es}.json    # Textos de la aplicación
├── images/                      # Capturas de los proyectos
├── public/                      # CV en PDF
└── styles/                      # Tailwind, tema y fuentes
```

> **Nota sobre los proyectos:** en `Projects.tsx` el array `projectsStatic` (imagen + enlaces) se
> fusiona con `projects.items` de `src/i18n/locales/{en,es}.json` **por índice**. Si añades o
> reordenas proyectos, mantén ambos arrays con la misma longitud y el mismo orden en los dos idiomas.

### 🚀 Proyectos

| Proyecto | Stack | Demo | Código |
| --- | --- | --- | --- |
| Dahu Page | React, TypeScript, Tailwind CSS, EmailJS | [Ver demo](https://dahu-page.vercel.app/) | — |
| E-commerce Aura | React, Tailwind CSS, React Router, Vite | [Ver demo](https://ecommerce-aura-orpin.vercel.app/) | [Ver código](https://github.com/perezcasadofidel/e-comerce-aura) |
| Interactive Music Player | React, TypeScript, Tailwind CSS, Web Audio API | [Ver demo](https://music-player-fpc.vercel.app/) | [Ver código](https://github.com/perezcasadofidel/music-player) |
| Fitness Tracker | React, TypeScript, Tailwind CSS | [Ver demo](https://fitness-tracker-app-fpc.vercel.app/) | [Ver código](https://github.com/perezcasadofidel/Fitness-Tracker-App) |
| Digital Memory Card Game | React, TypeScript, HTML, Tailwind CSS | [Ver demo](https://memory-match-fpc.vercel.app/) | [Ver código](https://github.com/perezcasadofidel/memory-match) |
| Mood Memoir | React, TypeScript, Vite | [Ver demo](https://mood-memoir-app-design.vercel.app/) | [Ver código](https://github.com/perezcasadofidel/Mood-Memoir-App-Design) |

### 🔗 Contacto

- **GitHub** — [@perezcasadofidel](https://github.com/perezcasadofidel)
- **LinkedIn** — [perez-casado-fidel](https://www.linkedin.com/in/perez-casado-fidel/)
- **Email** — perezcasadofidel@gmail.com

---

<a name="english"></a>

## 🇬🇧 English

Personal portfolio for a full stack developer, built as a **single-page application** with **Vite + React 18 + Tailwind CSS v4**.

The site brings together six sections — Hero, About, Skills, Experience, Projects and Contact — with smooth scroll navigation, entrance animations, a light/dark theme and bilingual support that auto-detects the visitor's language.

### ✨ Features

- **Bilingual (ES / EN)** with a manual switch and **automatic geolocation-based detection** via `ip-api.com`, caching the preference in `localStorage`.
- **Light/dark theme** powered by `next-themes` on top of CSS variables in `oklch` space.
- **Entrance animations** on every section with `motion`, triggered when the element enters the viewport through a custom `useInView` hook.
- **Project cards** with screenshot, description, tech stack and links to the live demo and the repository.
- **Working contact form** built on [EmailJS](https://www.emailjs.com/), with sending, success and error states.
- **CV download** as a PDF straight from the hero section.
- **Responsive navigation** with a hamburger menu on mobile, a translucent bar on scroll and a direct link to the repository in the top bar.
- **Fallback image** on every project card so a failed load never breaks the layout.

### 🛠 Tech stack

| Technology | Version | Purpose |
| --- | --- | --- |
| Vite | 6.3.5 | Build tool and dev server |
| React | 18.3.1 | User interface |
| Tailwind CSS | 4.1.12 | Utility styling |
| motion | 12.23.24 | Animations |
| i18next / react-i18next | 26 / 17 | Internationalization |
| next-themes | 0.4.6 | Light/dark theme |
| lucide-react | 0.487.0 | Icons |
| @emailjs/browser | 4.4.1 | Email delivery |
| shadcn/ui (Radix) | — | 48 base UI primitives |

### 📦 Getting started

```bash
npm install     # Install dependencies
npm run dev     # Start the dev server
npm run build   # Production build
```

### 🔑 Environment variables

The contact form needs three variables. Create an `.env` file at the project root:

```bash
VITE_EMAILJS_SERVICE_ID=   # Your EmailJS service ID
VITE_EMAILJS_TEMPLATE_ID=  # Your EmailJS template ID
VITE_EMAILJS_PUBLIC_KEY=   # Your EmailJS public key
```

Without them the form throws
`EmailJS environment variables are missing.` and sending will fail.

### 🗂 Project structure

```
src/
├── app/
│   ├── App.tsx
│   └── components/
│       ├── About.tsx            # About me
│       ├── Contact.tsx          # Contact + EmailJS form + footer
│       ├── Experience.tsx       # Work experience
│       ├── Hero.tsx             # Hero + social links
│       ├── Navigation.tsx       # Nav bar + language switcher
│       ├── Projects.tsx         # Project cards
│       ├── Skills.tsx           # Skills
│       ├── figma/               # ImageWithFallback
│       ├── hooks/               # useInView
│       ├── me/                  # ChangeColor (theme toggle)
│       └── ui/                  # 48 shadcn/ui primitives
├── i18n/
│   ├── config.ts                # i18next setup
│   ├── countries.ts             # Spanish-speaking countries
│   ├── useGeoLanguage.ts        # Geolocation detection
│   └── locales/{en,es}.json    # App copy
├── images/                      # Project screenshots
├── public/                      # CV PDF
└── styles/                      # Tailwind, theme and fonts
```

> **Note on projects:** in `Projects.tsx` the `projectsStatic` array (image + links) is merged with
> `projects.items` from `src/i18n/locales/{en,es}.json` **by index**. If you add or reorder projects,
> keep both arrays at the same length and in the same order across both languages.

### 🚀 Projects

| Project | Stack | Demo | Code |
| --- | --- | --- | --- |
| Dahu Page | React, TypeScript, Tailwind CSS, EmailJS | [View demo](https://dahu-page.vercel.app/) | — |
| E-commerce Aura | React, Tailwind CSS, React Router, Vite | [View demo](https://ecommerce-aura-orpin.vercel.app/) | [View code](https://github.com/perezcasadofidel/e-comerce-aura) |
| Interactive Music Player | React, TypeScript, Tailwind CSS, Web Audio API | [View demo](https://music-player-fpc.vercel.app/) | [View code](https://github.com/perezcasadofidel/music-player) |
| Fitness Tracker | React, TypeScript, Tailwind CSS | [View demo](https://fitness-tracker-app-fpc.vercel.app/) | [View code](https://github.com/perezcasadofidel/Fitness-Tracker-App) |
| Digital Memory Card Game | React, TypeScript, HTML, Tailwind CSS | [View demo](https://memory-match-fpc.vercel.app/) | [View code](https://github.com/perezcasadofidel/memory-match) |
| Mood Memoir | React, TypeScript, Vite | [View demo](https://mood-memoir-app-design.vercel.app/) | [View code](https://github.com/perezcasadofidel/Mood-Memoir-App-Design) |

### 🔗 Contact

- **GitHub** — [@perezcasadofidel](https://github.com/perezcasadofidel)
- **LinkedIn** — [perez-casado-fidel](https://www.linkedin.com/in/perez-casado-fidel/)
- **Email** — perezcasadofidel@gmail.com

---

## 📄 Licencia / License

MIT
