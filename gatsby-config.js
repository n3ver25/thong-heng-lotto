module.exports = {
  siteMetadata: {
    title: 'ทองเฮง เว็ปหวยออนไลน์ระดับประเทศ',
    description: 'เฮง เฮง เฮง ไปกับ "ทองเฮง" เว็ปหวยออนไลน์ที่ดีที่สุด',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/logo.jpg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [`Lato\:400,400,700,700i,900`, `Amiri\:400,400,700,700i`],
      },
    },
  ],
}
