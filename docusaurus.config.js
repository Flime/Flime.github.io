// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '狐莱姆正在跑来跑去',
  tagline: '可安可可可爱了!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://flime.online',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Flime', // Usually your GitHub org/user name.
  projectName: 'Flime.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: {
          blogSidebarTitle: '更新日志',
          blogSidebarCount: 10,
          showReadingTime: true,

        },
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
      image: 'img/fox.jpg',
      /*
      announcementBar: {
        id: 'look_at_me_0',
        content:
          '看我看我!戳<a href="/blog">这里</a>一下',
        backgroundColor: '#288',
        textColor: '#ddd',
        isCloseable: true,
      },*/
      navbar: {
        hideOnScroll: true,
        title: 'Flime的帮助文档',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/blog', label: '更新日志', position: 'left' },
          {
            to: '/docs/intro',
            label: '自我介绍',
            position: 'left',
          },
          {
            to: '/docs/command',
            label: '指令文档',
            position: 'left',
          },
          {
            href: 'https://github.com/QHMY114514',
            label: 'MyGitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '联系狐狸',
            items: [
              {
                label: '我的个人群(QQ)',
                href: 'https://qm.qq.com/q/bImTc3BPsA',
              },
              {
                label: 'Flime官方群(QQ)',
                href: 'https://qm.qq.com/q/qatSwAhTQk',
              }
            ],
          },
          {
            title: '你想找什么?',
            items: [
              {
                label: '乾狐之家',
                href: 'https://qhlg.flime.top',
              },
              {
                label: '狐狸的GitHub主页',
                href: 'https://github.com/QHMY114514',
              },
            ],
          },
          {
            title: '友情链接',
            items: [
              {
                label: '户山兔兔的小站',
                href: 'https://danieltoyama.fun',
              },
              {
                label: 'YukieBot(by 户山兔兔)',
                href: 'https://yukiebot.top',
              },
              {
                label: 'KasumiBot(by 户山兔兔)',
                href: 'https://ksmbot.top',
              }
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} Flime Bot使用说明. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'Flime/Flime.github.io',
        repoId: 'R_kgDONjwLLw',
        category: 'General',
        categoryId: 'DIC_kwDONjwLL84Clmde',
      }
    }),
  // Add the Cloudflare Web Analytics script
  scripts: [
  ],
};

export default config;
