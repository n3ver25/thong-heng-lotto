module.exports = {
  siteMetadata: {
    title: 'ทองเฮง เว็ปหวยออนไลน์ระดับประเทศ',
    description: 'ทองเฮง บริการฝากถอน อัตโนมัติ สมัครง่าย มีโบนัสให้ตลอด แทงหวยออนไลน์ หวยรัฐ หวยไทยลอตโต้ หวยหุ้น หวยหุ้นต่างประเทศ หวนยี่กี(5นาที)มีมากกว่า200รอบต่อวัน แท่งสะสมรับเครดิตฟรี ยิ่งชวนเพื่อนมาเล่นเยอะยิ่งรับโบนัส8%ฟรีๆ',
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
