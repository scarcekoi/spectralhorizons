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
      text: 'Stories',
      href: 'stories',
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
      title: 'Pages',
      links: [
        { text: 'Home', href: 'https://spectralhorizons.vercel.app/' },
        { text: 'Members', href: 'members' },
        { text: 'Blog', href: 'blog' },
        { text: 'About Us', href: 'about' },
        { text: 'Contact Us', href: 'contact' },
      ],
    },
    {
      title: 'Members',
      links: [
        { text: 'John Doe', href: 'members/john_doe' },
        { text: '1', href: 'members' },
        { text: '2', href: 'members' },
        { text: '3', href: 'members' },
        { text: '4', href: 'members' },
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
