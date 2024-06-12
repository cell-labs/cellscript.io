import { defineConfig } from 'vocs'

import { version } from './package.json'

export default defineConfig({
  title: 'Cell Script',
  description: 'Cell Script is a new designed statically-typed programming language for smart contracts running on UTXO-based chain CKB.',
  editLink: {
    pattern: 'https://github.com/cell-labs/cellscript.io/edit/main/docs/pages/:path',
    text: 'Suggest changes to this page',
  },

  rootDir: 'site',
  socials: [
    {
      icon: 'discord',
      link: 'https://discord.gg/djjDP8QtUu',
    },
    {
      icon: 'github',
      link: 'https://github.com/cell-labs/cell-script',
    },
  ],
  sidebar: [
    {
      text: 'Getting Started',
      link: '/docs/getting-started',
    },
    {
      text: 'Example',
      link: '/docs/example',
    },
  ],
  topNav: [
    { text: 'Docs', link: '/docs' },
    { text: 'Blog', link: '/blog' },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/cell-labs/cell-script/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/cell-labs/cell-script/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
})
