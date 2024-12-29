import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: 'https://spectralhorizons.vercel.app/',
    },
    {
      text: 'Members',
      href: 'members',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'About Us',
      href: 'about',
    },
    {
      text: 'Contact Us',
      href: 'contact',
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Pages',
      links: [
        { text: 'Home', href: 'https://spectralhorizons.vercel.app/' },
        { text: 'Members', href: 'members' },
        { text: 'Blog', href: 'blog' },
        { text: 'About Us', href: 'about' },
        { text: 'Contact Us', href: 'contact' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'Youtube', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@spectralhorizons' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-twitter', href: 'https://twitter.com/SpectralHorizon' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/spectralhorizons' },
    { ariaLabel: 'Bandcamp', icon: 'tabler:brand-bandcamp', href: 'https://spectralhorizons.bandcamp.com' },
  ],
};
