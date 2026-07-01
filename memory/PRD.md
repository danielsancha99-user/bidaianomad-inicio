# BidaiaNomad OS — PRD

## Problem statement
Rebrand del repositorio existente (Travel/Links OS: React + TypeScript + Vite + Tailwind, estilo OS móvil con drag & drop, navegación y animaciones) hacia un producto nuevo: **"Bidaia Nomad OS"** de **Daniel Sancha**. Reutilizar toda la arquitectura técnica; solo cambiar branding, contenido, textos, enlaces e imágenes. Sin rastro del proyecto/autora original. Listo para producción en Vercel.

## Stack / arquitectura
- React 19 + TypeScript + Vite 8 + Tailwind 3 (SPA estática). Sin backend propio (enlaces externos).
- Preview: Vite corre en :3000 vía supervisor. Como el repo vive en `/app` (no `/app/frontend`), se creó `/app/frontend/package.json` runner cuyo `start` hace `cd /app && yarn start` → `vite`. `vite.config.ts` fija `host:true, port:3000, allowedHosts:true, hmr wss:443`.
- Producción: `yarn build` (tsc + vite build) → `dist/`. Vercel usa `vercel.json` existente.

## Configuración centralizada
`src/config/siteConfig.ts` — único punto de edición: header (nombre/subtítulo/badge/avatar), EXTERNAL_LINKS, FEATURED_APP (web), HOME_APPS (grid), DOCK_ITEMS, PROJECTS (vacío).

## Implementado (2026-07-01)
- Header "Sobre Mí": Daniel Sancha · "Creador de BidaiaNomad · Asesoría de Viajes" · badge "Viajes auténticos" · foto real (/daniel.png).
- App grande: **BidaiaNomad** (logo real) → https://bidaianomad.com/
- Grid: Acceso Clientes (icono real), Proyectos (carpeta vacía funcional), Contacto (icono real). "Quiero un viaje personalizado" = app **ancha (2 columnas)** debajo de Contacto, nombre en 1 línea → asesoría #formulario-contacto.
- Dock: Instagram, TikTok, WhatsApp, Newsletter (icono gmail → contacto/#formulario-newsletter).
- Iconos reales descargados a /public/app-icons (acceso, bidaianomad, asesoria, contacto) y /public/daniel.png.
- Estética: **estilo claro original restaurado** (fondo crema #E5DBCF, marco beige #B0ADA0, tarjeta perfil #3e3b36, tipografía Inter). Acento turquesa #00B2D6 solo en el badge.
- Grid drag&drop restringido a filas 3–4 col 1–2 (3 iconos arrastrables). App ancha y grande son estáticas.
- Eliminado: YouTube, LinkedIn, Terminal, Adviento, Vibe Coding, Zero2Hero, On Anem y todo rastro de Joana.
- Verificado: build de producción OK (tsc + vite), :3000 HTTP 200, render visual confirmado.

## Backlog / Next actions (P1/P2)
- Añadir iconos definitivos para BidaiaNomad, Acceso Clientes, Asesoría, Contacto (hoy placeholders en blanco por pedido del usuario).
- Añadir foto real de Daniel (setear `SITE.header.avatarImage`).
- Poblar `PROJECTS[]` cuando existan proyectos (icono/nombre/enlace).
- Opcional: favicon propio de BidaiaNomad (hoy sigue el favicon.svg genérico).
- Opcional: UI in-app para añadir proyectos (hoy vía config).
