/**
 * Configuración centralizada de BidaiaNomad OS.
 * Todo el contenido editable (branding, textos, enlaces, apps, dock, proyectos)
 * vive aquí para poder personalizarlo sin tocar los componentes.
 */

export const SITE = {
  title: 'BidaiaNomad OS',
  accent: '#00B2D6',
  header: {
    firstName: 'Daniel',
    lastName: 'Sancha',
    subtitle: 'Creador de BidaiaNomad · Asesoría de Viajes',
    badge: 'Viajes auténticos',
    /** Vacío por ahora → se muestran las iniciales. Añade una ruta a /public para usar foto. */
    avatarImage: '',
  },
} as const;

export const EXTERNAL_LINKS = {
  web: 'https://bidaianomad.com/',
  clientes: 'https://bidaia-nomad.vercel.app/',
  instagram: 'https://www.instagram.com/sancha_daniel/',
  tiktok: 'https://www.tiktok.com/@sancha_daniel',
  whatsapp:
    'https://wa.me/34661955820?text=Hola%20Daniel,%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20BidaiaNomad',
  asesoria: 'https://bidaianomad.com/asesoria-de-viajes/#formulario-contacto',
  contacto: 'https://bidaianomad.com/contacto/',
  newsletter: 'https://bidaianomad.com/contacto/#formulario-newsletter',
} as const;

/** App grande destacada (web personal). */
export const FEATURED_APP = {
  label: 'BidaiaNomad',
  href: EXTERNAL_LINKS.web,
} as const;

/** Apps del grid del home (además de la app grande y del dock inferior). */
export const HOME_APPS = {
  acceso: { label: 'Acceso Clientes', href: EXTERNAL_LINKS.clientes },
  projects: { label: 'Proyectos', href: '#' },
  asesoria: { label: 'Quiero un viaje personalizado', href: EXTERNAL_LINKS.asesoria },
  contacto: { label: 'Contacto', href: EXTERNAL_LINKS.contacto },
} as const;

/** Iconos del dock inferior (los únicos con icono real por ahora). */
export const DOCK_ITEMS = [
  { key: 'instagram', label: 'Instagram', href: EXTERNAL_LINKS.instagram, iconSrc: '/app-icons/instagram.png' },
  { key: 'tiktok', label: 'TikTok', href: EXTERNAL_LINKS.tiktok, iconSrc: '/app-icons/tiktok.png' },
  { key: 'whatsapp', label: 'WhatsApp', href: EXTERNAL_LINKS.whatsapp, iconSrc: '/app-icons/whatsapp.png' },
  { key: 'newsletter', label: 'Newsletter', href: EXTERNAL_LINKS.newsletter, iconSrc: '/app-icons/gmail.png' },
] as const;

/** Proyectos personalizados. Vacío por defecto: añade { label, href, iconSrc? }. */
export type ProjectItem = { label: string; href: string; iconSrc?: string };
export const PROJECTS: ProjectItem[] = [];
