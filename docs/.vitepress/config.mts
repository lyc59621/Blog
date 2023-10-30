// .vitepress/config.js
export default {
    // site-level options
    title: 'JDragon',
    description: '莫愁前路无知己',
    base: '/Blog/',
    themeConfig: {
        logo: "/images/logo.png",
        nav: [
          {
            text: '随手记',
            items: [
              { text: '首记', link: '/articles/home/首记' },
              { text: '2023-10-25随记', link: '/articles/home/2023-10-25随记' },
              { text: '2023-10-27随记', link: '/articles/home/2023-10-27随记' },
              { text: '2023-10-30随记', link: '/articles/home/2023-10-30随记' },

            ],
          },
        ],
        sidebar: {  
         "/articles/other/": [
              {
                items: [
                  { text: 'Markdown 语法记录', link: '/articles/other/Markdown 语法记录' },
                  { text: 'Mark 速查表', link: '/articles/other/Mark 速查表' },
                ],
              }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/lyc59621" }],
      },
  }
  