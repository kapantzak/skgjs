import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Past Events',
      href: getPermalink('/past-events'),
    },
  ],
  actions: [{ text: 'Join Us', href: 'https://www.meetup.com/skg-js/events/311173640/', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Community',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Past Events', href: getPermalink('/past-events') },
        { text: 'Home', href: getPermalink('/') },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', href: 'https://github.com/skgjs' },
        { text: 'Twitter', href: '#' },
        { text: 'Meetup', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'JavaScript Docs', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { text: 'Node.js', href: 'https://nodejs.org' },
        { text: 'TypeScript', href: 'https://www.typescriptlang.org' },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Meetup', icon: 'tabler:calendar-event', href: '#' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/skgjs' },
  ],
  footNote: `
    <span class="dark:text-gray-400">SKG-JS Community · Thessaloniki JavaScript Developers</span>
  `,
};
