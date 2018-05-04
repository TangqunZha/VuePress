module.export = {
    title: 'zhazha Blog',
    dest:'./dest',
    base:'/VuePress_Blog',
    repo:'https://github.com/TangqunZha/VuePress_Blog',
    themeConfig: {
        nav :[
            { text: 'vue', link: '/' },
            { text: 'css', link: '/blog'},
            { text: 'js', linsk: '/zhihu/'},
            {
                text:'github',
                items:[
                    { text: 'vuepressblog', link: 'https://github.com/TangqunZha/VuePress_Blog'}
                ]
            }
        ]
    }
}