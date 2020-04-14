module.exports = {
    siteMetadata: {
        title: 'Conrado Cruz - Web Designer',
        author: 'Conrado Cruz',
        description: 'Conrado Cruz is a web designer'
    },
    plugins: [
        'gatsby-plugin-postcss',
        'gatsby-transformer-json',
            {
               resolve: 'gatsby-source-filesystem',
               options:{
                        name:'images',
                        path: `${__dirname}/src/images`
                    },
            },
            {
                resolve:'gatsby-plugin-manifest',
                options:{
                    name:`My portfolio`,
                    short_name:`startet`,
                    start_url:`/`,
                    background_color:`#FFFFFF`,
                    theme_color:`#4299E1`,
                    display:`minimal-ui`,
                    icon:`src/images/fav.jpg`,
                },
            },
    ]
}

