// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plex User Guide',
  tagline: 'Get Started with Using Plex Server',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://guide.shaffer.media',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'drewstopherlee', // Usually your GitHub org/user name.
  projectName: 'plex-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages', // The name of the deployment branch.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
	  routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
	  //     {
          // showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'Plex Docs',
        logo: {
          alt: 'Plex Docs',
          src: 'img/favicon.ico',
        },
        items: [
          {
            href: 'https://app.plex.tv/',
            label: 'Plex Web App',
            position: 'left',
          },
          {
            href: 'https://request.shaffer.media/',
            label: 'Overseerr',
            position: 'left',
          },
          {
            href: 'https://status.shaffer.media/',
            label: 'Status Page',
            position: 'right',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/drewstopherlee/plex-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs Home',
                to: '/',
              },
              {
                label: 'Plex User Guide',
                to: '/category/plex',
              },
              {
                label: 'Overseerr User Guide',
                to: '/category/overseerr',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/drewstopherlee',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/andrewrshaffer',
              },
            ],
          },
          // {
          //   title: 'More',
          //   items: [
          //     // {
          //     //   label: 'Blog',
          //     //   to: '/blog',
          //     // },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Andrew Shaffer Technology. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
