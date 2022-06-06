import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, title }) => {
  const queryData = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaTitle = title
    ? `${title} | ${queryData.site?.siteMetadata?.title}`
    : queryData.site?.siteMetadata?.title;
  const metaDescription =
    description || queryData.site?.siteMetadata?.description;

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta
        name="google-site-verification"
        content="nYEcAiVi0-wvNqXEt5LI-Y0nRQyQ8DbY_3VpOdeZL0M"
      />
      <meta name="keywords" cpntent={metaTitle} />
      {/* Global site tag (gtag.js) - Google Analytics  */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-SSMH38P1YE"
      ></script>
      <script>
        {`
   window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());
 
   gtag('config', 'G-SSMH38P1YE');
  `}
      </script>
      <script>
        {`(function (w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
          var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != "dataLayer" ? "&l=" + l : "";
          j.async = true;
          j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, "script", "dataLayer", "GTM-PV9ZZQZ")`}
      </script>
      <body className="dark" data-react-helmet="class">
        {`<noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PV9ZZQZ"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>`}
      </body>
    </Helmet>
  );
};
