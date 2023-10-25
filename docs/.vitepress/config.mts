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

            ],
          },
        ],
        sidebar: {  
         "/articles/other/": [
              {
                items: [
                  {
                    text: "暂无",
                    link: "/articles/other/",
                  },
                ],
              }
            ],
        },
        socialLinks: [{ icon: "github", link: "https://github.com/lyc59621" }],
      },
  }
  