import { defineConfig } from 'vocs'

import { version } from './package.json'

export default defineConfig({
  title: 'Cell Script',
  description: 'Cell Script is a new designed statically-typed programming language for smart contracts running on UTXO-based chain CKB.',
  editLink: {
    pattern: 'https://github.com/cell-labs/cellscript.io/edit/main/site/pages/:path',
    text: 'Suggest changes to this page',
  },
  iconUrl: {
    light: '/cellscript-icon-light.svg',
    dark: '/cellscript-icon-dark.svg',
  },
  logoUrl: {
    light: '/cellscript-logo-light.svg',
    dark: '/cellscript-logo-dark.svg',
  },
  ogImageUrl: {
    '/': '/og.jpeg',
    '/docs': '',
  },
  rootDir: 'site',
  socials: [
    {
      icon: 'discord',
      link: 'https://discord.gg/djjDP8QtUu',
    },
    {
      icon: 'telegram',
      link: 'https://t.me/cellscript',
    },
    {
      icon: 'github',
      link: 'https://github.com/cell-labs/cell-script',
    },
  ],
  sidebar: [ // side bar is for docs hierarchy
    {
      text: 'CellScript',
      link: '/docs/',
    },
    {
      text: 'A Tour of CellScript',
      link: '/docs/tour',
    },
    {
      text: 'Standard Library',
      link: '/docs/stdlib',
    },
    {
      text: 'VSCode Extension',
      link: '/docs/vscode-extension',
    }
  ],
  topNav: [
    { text: 'Docs', link: '/docs' },
    { text: 'Blog', link: '/blog' },
    { text: 'Discuss', link: 'https://github.com/orgs/cell-labs/discussions' },
    {
      text: 'v' + version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/cell-labs/cell-script/blob/main/CHANGELOG.md',
        },
        {
          text: 'Download',
          link: 'https://github.com/cell-labs/cell-script/releases',
        },
        // {
        //   text: 'Contributing',
        //   link: 'https://github.com/cell-labs/cell-script/blob/main/.github/CONTRIBUTING.md',
        // },
      ],
    },
  ],
})
