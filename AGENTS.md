# Anais — Landing de Anahís Prieto, Asesora de Seguros

Sitio Astro en español (una sola página) para una asesora de seguros de Barquisimeto, Venezuela. Sin backend: contenido estático, contactos vía WhatsApp/mailto y enlaces a redes.

## Stack

- Astro 7 (template minimal) + TypeScript. El proyecto NO tiene `tsconfig.json` propio: `astro check` usa la configuración por defecto de Astro.
- Tailwind CSS 4 vía `@tailwindcss/vite` — sin `tailwind.config.js`: el tema (colores `brand-*`, `gold-*`, fuentes Inter/Outfit) se define con `@theme` en `src/styles/global.css`
- Font Awesome 7 Free (`@fortawesome/fontawesome-free`), importado en `src/layouts/Base.astro`
- Requisito Node >= 22.12
- `CLAUDE.md` es un symlink a `AGENTS.md`: editar solo `AGENTS.md` mantiene ambos sincronizados.

## Commands

```sh
npm run dev        # dev server en localhost:4321
npm run build      # producción a ./dist/
npm run preview    # previsualizar build
npx astro check    # typecheck/lint del proyecto (usa este comando para verificar cambios)
```

Astro check está disponible vía `@astrojs/check`. No hay tests configurados.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Deployment (Vercel)

- Output 100% estático (`dist/index.html`): NO se necesita `@astrojs/vercel` ni `output: 'server'` — no agregar el adapter salvo que se pase a SSR.
- `vercel.json` fija `framework: astro`, `buildCommand` y `outputDirectory: dist`; Vercel respeta `engines.node` (>= 22.12) de `package.json`.
- Desplegar con Git: push a GitHub → Importar proyecto en Vercel → preset Astro (auto-detectado), sin variables de entorno.
- Alternativa CLI: `npx vercel login` → `npx vercel --prod`.
- Al asignar dominio real, actualizar `site` en `astro.config.mjs`.

## Architecture

Una única página (`src/pages/index.astro`) compone secciones sobre `src/layouts/Base.astro`, en este orden:

1. `Hero` (rombos/burbujas animadas en CSS puro, retrato `anahis-retrato.png`, indicador de scroll)
2. `ComoTrabajamos` (alianza con BARECA, imagen decorativa de fondo)
3. `SobreMi` (retrato `anahis-sobremi.png`, motivos y highlights)
4. `Services` + modal de detalle por servicio
5. `AseguradorasCarrusel` (marquee de logos de `public/aseguradoras/`)
6. `ContactSection` (WhatsApp, dirección, correos, redes)

Comunes: `Header.astro` (nav fija con menú hamburguesa accesible, CTA WhatsApp y resaltado del enlace activo vía IntersectionObserver), `Footer.astro`, `WhatsAppFab.astro` (botón flotante), `FamilyLogo.astro` (logo `logo-blanco.png`), `LegalModal.astro` (aviso legal / privacidad desde el footer).

Contenido centralizado (editar aquí, NO hardcodear textos en componentes):

- `src/data/site.ts` — datos personales: nombre, teléfonos, WhatsApp, emails, redes, dirección. Exporta `SITE`, `whatsappUrl(message)` y `developerWhatsappUrl()` (crédito técnico Gocolin mostrado en el footer).
- `src/data/services.ts` — servicios: `key` (`salud` | `vida` | `auto` | `comercial`), icono FA, título, extracto, `modalDescription` y `features`. Consumido por `Services.astro` tanto en frontmatter como en el `<script>` del modal.

Excepciones:

- Los logos del carrusel (archivo + nombre + flag `big`/`xbig`) están definidos inline en el frontmatter de `AseguradorasCarrusel.astro`; sincronizarlos con los archivos de `public/aseguradoras/`.
- Los textos del aviso legal y la política de privacidad viven inline en el `<script>` de `LegalModal.astro` (usando `SITE` para los datos).
- `p_gina_web_anah_s_prieto_seguros.html` en la raíz es el mock HTML original de referencia; no forma parte del build.

## Assets (`public/`)

- `anahis-retrato.png` (Hero), `anahis-sobremi.png` (SobreMi), `logo-blanco.png` (FamilyLogo/Header/Footer)
- `favicon-32.png`, `favicon-192.png` (favicon + apple-touch-icon), `og-image.png` (OG/Twitter)
- `Gemini_Generated_Image_5yh775yh775yh775-removebg-preview.png` — fondo decorativo de `ComoTrabajamos`
- `aseguradoras/` — logos de las aliadas; varios con nombres genéricos (`imagen*.svg/png`, `images*removebg-preview.png`) que no describen la marca

## Conventions

- Todo el texto visible está en español; el HTML usa `lang="es"` y OG locale `es_VE`.
- Mobile-first con Tailwind; plantilla base en `Base.astro` (title/description props con fallback a `SITE`).
- Sesgos de accesibilidad ya presentes: skip-link, `aria-expanded`/`aria-controls` en hamburguesa, `aria-label` en iconos y enlaces sociales, cierre de modales y menú con Escape, `prefers-reduced-motion` en animaciones (Hero, Header, Carrusel).
- Interactividad con `<script>` TypeScript inline en cada componente (menú móvil, modales de `Services` y `LegalModal`); sin frameworks JS.
- SEO: JSON-LD `InsuranceAgent`, Open Graph (`/og-image.png`), Twitter card y favicon en `Base.astro`; actualizar también `site` en `astro.config.mjs` si cambia el dominio.
