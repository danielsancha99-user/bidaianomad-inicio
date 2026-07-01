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
- Header "Sobre Mí": Daniel Sancha · "Creador de BidaiaNomad · Asesoría de Viajes" · badge "Viajes auténticos" · avatar iniciales "DS" (sin foto todavía).
- App grande: **BidaiaNomad** → https://bidaianomad.com/
- Grid: Acceso Clientes (vercel app), Proyectos (carpeta vacía funcional), "Quiero un viaje personalizado" (asesoría #formulario-contacto), Contacto.
- Dock: Instagram, TikTok, WhatsApp, Newsletter (icono gmail → contacto/#formulario-newsletter). Iconos reales conservados solo para estos 4.
- Iconos del grid en blanco (placeholder premium) a la espera de arte definitivo.
- Estética: fondo oscuro (#0A0E17), acento turquesa #00B2D6, tipografía Manrope, glow radial, glass dock.
- Eliminado: YouTube, LinkedIn, Terminal, Adviento, Vibe Coding, Zero2Hero, On Anem, foto-joana, sa/onanem/zero2hero assets, saCommunity, adventDays, socialLinks. Sin rastro de Joana.
- Preservado: drag & drop (long-press), navegación OS, animaciones iOS, responsive mobile-first, carpeta Proyectos.
- Verificado: build de producción OK (tsc + vite), servidor :3000 HTTP 200, render visual confirmado por screenshot.

## Backlog / Next actions (P1/P2)
- Añadir iconos definitivos para BidaiaNomad, Acceso Clientes, Asesoría, Contacto (hoy placeholders en blanco por pedido del usuario).
- Añadir foto real de Daniel (setear `SITE.header.avatarImage`).
- Poblar `PROJECTS[]` cuando existan proyectos (icono/nombre/enlace).
- Opcional: favicon propio de BidaiaNomad (hoy sigue el favicon.svg genérico).
- Opcional: UI in-app para añadir proyectos (hoy vía config).
