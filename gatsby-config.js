module.exports = {
  siteMetadata: {
    title: "ทองเฮง เว็ปหวยออนไลน์ระดับประเทศ",
    description:
      "ทองเฮง บริการฝากถอน อัตโนมัติ สมัครง่าย มีโบนัสให้ตลอด แทงหวยออนไลน์ หวยรัฐ หวยไทยลอตโต้ หวยหุ้น หวยหุ้นต่างประเทศ หวนยี่กี(5นาที)มีมากกว่า200รอบต่อวัน แท่งสะสมรับเครดิตฟรี ยิ่งชวนเพื่อนมาเล่นเยอะยิ่งรับโบนัส8%ฟรีๆ",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "thong-heng",
        schemas: {
          home_page: require("./custom_types/homepage.json"),
          navigation: require("./custom_types/navigation.json"),
          page: require("./custom_types/page.json"),
          announcepage: require("./custom_types/announcepage.json"),
          announce: require("./custom_types/announce.json"),
          contact: require("./custom_types/contact.json"),
          promotion_main: require("./custom_types/promotion_main.json"),
          promotion_sup: require("./custom_types/promotion_sup.json"),
          rules: require("./custom_types/rules.json"),
          rule: require("./custom_types/rules.json"),
          about: require("./custom_types/about.json"),
          manual_user: require("./custom_types/manual_user.json"),
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.jpg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
