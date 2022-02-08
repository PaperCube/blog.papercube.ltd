// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PaperCube\'s Non-Cubic Blog',
    tagline: 'Under construction. Susceptible to destruction. Dependent on demonstration\n',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        [
            require.resolve("@easyops-cn/docusaurus-search-local"),
            {
                // ... Your options.
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                // ```
                language: ["zh", "en"],
                // ```
                // When applying `zh` in language, please install `nodejieba` in your project.
                translations: {
                    search_placeholder: "Search",
                    see_all_results: "See all results",
                    no_results: "No results.",
                    search_results_for: 'Search results for "{{ keyword }}"',
                    search_the_documentation: "Search the documentation",
                    count_documents_found: "{{ count }} document found",
                    count_documents_found_plural: "{{ count }} documents found",
                    no_documents_were_found: "No documents were found",
                },
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        navbar: {
            title: 'PaperCublog',
            logo: {
                alt: 'My Site Logo To Be Replaced',
                src: 'img/logo.svg',
            },
            items: [
                // {
                //     label: 'Document test',   
                //     type: 'doc', 
                //     docId: 'intro2', 
                //     position: 'left', 
                // },
                { to: '/blog', label: 'Blog', position: 'left' },

                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: ' ',
                },

                // { to: 'https://baidu.com', label: 'Blog2', position: 'left'},
                {
                    href: "/about",
                    label: "About & Links",
                    position: "right",
                  },
                {
                    href: 'https://github.com/PaperCube/blog.papercube.ltd',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Tutorial',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/docusaurus',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/docusaurus',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [{
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/facebook/docusaurus',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;