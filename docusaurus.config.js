// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Replugged Developer Guide",
  tagline: "A guide to developing plugins and themes for Replugged",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://guide.replugged.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "replugged-org", // Usually your GitHub org/user name.
  projectName: "guide", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      navbar: {
        title: "Replugged Developer Guide",
        logo: {
          alt: "Replugged Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            position: "left",
            label: "Docs",
            to: "/docs/intro",
          },
          {
            position: "left",
            label: "Plugin Guide",
            to: "/docs/category/plugins",
            activeBaseRegex: "/docs/(category/)?plugins",
          },
          {
            position: "left",
            label: "Theme Guide",
            to: "/docs/category/themes",
            activeBaseRegex: "/docs/(category/)?themes",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Plugin Guide",
                to: "/docs/category/plugins",
              },
              {
                label: "Theme Guide",
                to: "/docs/category/themes",
              },
              {
                label: "Replugged API Docs",
                href: "https://docs.replugged.dev/modules.html",
              },
              {
                label: "Contribute",
                href: "/docs/category/contributing",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/replugged",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Website",
                href: "https://replugged.dev",
              },
              {
                label: "GitHub",
                href: "https://github.com/replugged-org/replugged",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Replugged. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "VPX2W4QZO1",

        // Public API key: it is safe to commit it
        apiKey: "b7bb8af20ae0a71cd7a3b5857d509b69",
        indexName: "guide",
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
