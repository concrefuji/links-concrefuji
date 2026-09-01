import './style.css';
import { gsap } from 'gsap';

type LinkItem = {
  label: string;
  detail: string;
  href: string;
  icon: 'whatsapp' | 'email' | 'website';
  external?: boolean;
};

const contactLinks: LinkItem[] = [
  {
    label: 'Fale pelo WhatsApp',
    detail: 'Atendimento comercial',
    href: 'https://api.whatsapp.com/send?phone=5585991180009&text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
    icon: 'whatsapp',
    external: true,
  },
  {
    label: 'E-mail comercial',
    detail: 'Envie sua solicitação',
    href: 'mailto:comercial@concrefuji.com.br',
    icon: 'email',
  },
  {
    label: 'Site da empresa',
    detail: 'Conheça a Concrefuji',
    href: 'https://concrefuji.com.br',
    icon: 'website',
    external: true,
  },
];

const icons: Record<LinkItem['icon'], string> = {
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12.05 0C5.5 0 .18 5.3.18 11.85c0 2.1.55 4.15 1.6 5.95L.1 24l6.35-1.66a11.85 11.85 0 0 0 5.6 1.42h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.15-3.42-8.39Zm-8.44 18.25a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.77.99 1-3.67-.24-.38a9.85 9.85 0 1 1 8.42 4.65Zm5.4-7.4c-.3-.15-1.77-.87-2.05-.97-.27-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-1.78-.89-2.95-1.59-4.12-3.6-.3-.51.3-.47.86-1.57.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.08 2.94 1.23 3.14c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.07-.12-.27-.2-.57-.34Z"/></svg>',
  email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2 .16v.4l8 5.34 8-5.34v-.4a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5Zm16 2.8-7.45 4.97a1 1 0 0 1-1.1 0L4 8.46v10.04c0 .28.22.5.5.5h15a.5.5 0 0 0 .5-.5V8.46Z"/></svg>',
  website: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.92 6h-3.04a15.7 15.7 0 0 0-1.35-3.48A8.03 8.03 0 0 1 18.92 8ZM12 4.04c.83 1.2 1.45 2.54 1.83 3.96h-3.66A13.8 13.8 0 0 1 12 4.04ZM4.26 14a8.15 8.15 0 0 1 0-4h3.25a16.5 16.5 0 0 0 0 4H4.26Zm.82 2h3.04a15.7 15.7 0 0 0 1.35 3.48A8.03 8.03 0 0 1 5.08 16ZM8.12 8H5.08a8.03 8.03 0 0 1 4.39-3.48A15.7 15.7 0 0 0 8.12 8ZM12 19.96A13.8 13.8 0 0 1 10.17 16h3.66A13.8 13.8 0 0 1 12 19.96ZM14.32 14H9.68a14.25 14.25 0 0 1 0-4h4.64a14.25 14.25 0 0 1 0 4Zm.21 5.48A15.7 15.7 0 0 0 15.88 16h3.04a8.03 8.03 0 0 1-4.39 3.48ZM16.49 14a16.5 16.5 0 0 0 0-4h3.25a8.15 8.15 0 0 1 0 4h-3.25Z"/></svg>',
};

const container = document.querySelector<HTMLElement>('#links');

if (!container) throw new Error('Área de links não encontrada.');

container.innerHTML = contactLinks.map((link) => `
  <a class="link-button" href="${link.href}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''}>
    <span class="link-button__icon">${icons[link.icon]}</span>
    <span class="link-button__copy"><strong>${link.label}</strong><small>${link.detail}</small></span>
    <span class="link-button__arrow" aria-hidden="true">→</span>
  </a>
`).join('');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  gsap.set('.ambient-shape', { willChange: 'transform' });

  gsap.to('.ambient-shape--red', {
    x: 34,
    y: -28,
    scale: 1.12,
    rotation: 15,
    duration: 13,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
  gsap.to('.ambient-shape--white', {
    x: -26,
    y: 35,
    scale: 0.92,
    rotation: -12,
    duration: 16,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
  gsap.to('.ambient-shape--concrete', {
    x: 22,
    y: 25,
    rotation: 12,
    duration: 18,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut',
  });
}
