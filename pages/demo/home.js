import React, { useEffect } from "react";

const homepage = ({ data }) => {
  useEffect(() => {
    let anchors = document
      .querySelector(".hashnode-blog-demo")
      .querySelectorAll("a");
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].onclick = function () {
        return false;
      };
    }
  });

  useEffect(() => {
    data.forEach((item) => {
      const element = document.querySelector(`.${item.name}`);

      if (element) {
        element.classList.add("component");
        element.setAttribute("tooltip", item.name);
      }
    });
  });
  return (
    <div className="hashnode-blog-demo">
      <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="stylesheet"
          data-href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=block"
        />
        <style data-emotion-css dangerouslySetInnerHTML={{ __html: "" }} />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".article-width{width:800px}@media (max-width:800px){.article-width{width:100%!important}}.tooltip-handle{position:relative}.tooltip-handle:after{content:attr(data-title);--tw-bg-opacity:1;background-color:rgba(31,41,55,var(--tw-bg-opacity));border-radius:.25rem;font-size:.75rem;line-height:1rem;margin-top:.5rem;opacity:0;padding:.5rem;position:absolute;right:0;top:100%;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);text-align:right;--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity));visibility:hidden;white-space:nowrap;z-index:20;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:150ms}.tooltip-handle.gold-tooltip:after{background:linear-gradient(135.06deg,#fcc201 .05%,#b78628 99.96%)}.tooltip-handle:hover::after{opacity:1;visibility:visible;transition-delay:1s}.tooltip-handle.tooltip-right::after{margin-top:.5rem;margin-left:.5rem;position:absolute;top:0;left:100%;right:auto}.tooltip-handle.tooltip-left-aligned::after{left:0;top:100%;right:auto}.tooltip-handle.tooltip-right-aligned::after{right:0;top:100%}.tooltip-handle.tooltip-left::after{top:0;right:100%;left:auto}@media (max-width:1023px){.tooltip-handle:after{display:none}}.hn-table{display:block;width:100%;overflow-x:auto;margin-top:2em;margin-bottom:2em}.prose .hn-table table{border:1px solid #e0e0e0;margin-top:0;margin-bottom:0}.prose .hn-table table tbody td:first-child{padding-left:.5rem}.prose .hn-table table td{min-width:200px;padding:.5rem}.container{width:100%}@media (min-width:640px){.container{max-width:640px}}@media (min-width:768px){.container{max-width:768px}}@media (min-width:1024px){.container{max-width:1024px}}@media (min-width:1280px){.container{max-width:1280px}}@media (min-width:1536px){.container{max-width:1536px}}@media (min-width:1440px){.feed-width{min-width:850px;max-width:1000px}.container-wrapper{max-width:1232px}}.prose code{border-radius:.25rem;font-weight:400!important;padding:.25rem;--tw-text-opacity:1;color:rgba(0,0,0,var(--tw-text-opacity));font-size:80%;background:#f0efed}.dark .prose code{--tw-bg-opacity:1;background-color:rgba(36,41,46,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(238,238,238,var(--tw-text-opacity))}.prose pre{padding-top:2rem!important;padding-bottom:2rem!important}.prose pre code{background-color:transparent;border-radius:0;font-weight:500!important;padding:0;font-size:100%}.prose blockquote p:first-of-type::before,.prose blockquote p:last-of-type::after{content:none}.dark .prose pre code{background-color:transparent;color:#ddd}.prose .embed-wrapper{max-width:100%;margin-top:1.25em;margin-bottom:1.25em}.prose .embed-wrapper iframe{max-width:100%!important}a.user-mention{color:#2962ff!important;--tw-border-opacity:1;border-color:rgba(158,158,158,var(--tw-border-opacity));border-style:dashed;border-bottom-width:2px;display:inline;font-weight:500;line-height:1.375;text-decoration:none!important}",
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "#nprogress{pointer-events:none}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px}#nprogress .peg{display:block;position:absolute;right:0;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1;-webkit-transform:rotate(3deg) translate(0,-4px);-ms-transform:rotate(3deg) translate(0,-4px);transform:rotate(3deg) translate(0,-4px)}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner .4s linear infinite;animation:nprogress-spinner .4s linear infinite}.nprogress-custom-parent{overflow:hidden;position:relative}.nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner{position:absolute}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes nprogress-spinner{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}",
          }}
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="canonical" href="https://saviomartin.com" itemProp="url" />
        <title>Hey, I am Savio 👋 - A web dev</title>
        <meta
          name="description"
          content="14 year old | An Enthusiastic frontend developer, UI/UX Designer and a learner. Focued on React ⚛️. Build apps with 💖. Lets connect 🍻"
          itemProp="description"
        />
        <meta
          property="og:title"
          content="Hey, I am Savio 👋 - A web dev"
          itemProp="name"
        />
        <meta
          property="og:description"
          content="14 year old | An Enthusiastic frontend developer, UI/UX Designer and a learner. Focued on React ⚛️. Build apps with 💖. Lets connect 🍻"
        />
        <meta property="og:site_name" content="Savio Martin" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://saviomartin.com" />
        <meta
          name="image"
          property="og:image"
          content="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1616762385023%2FVBfnW-waP.png%3Fw%3D800%26h%3D420%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp"
          itemProp="image"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://cdn.hashnode.com/res/hashnode/image/upload/v1616501843305/rvGWQ5ogk.jpeg?auto=compress,format&format=webp&fm=png"
        />
        <meta name="theme-color" content="#f6f7fb" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Hey, I am Savio 👋 - A web dev"
        />
        <meta
          property="twitter:description"
          content="14 year old | An Enthusiastic frontend developer, UI/UX Designer and a learner. Focued on React ⚛️. Build apps with 💖. Lets connect 🍻"
        />
        <meta
          property="twitter:image"
          content="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1616762385023%2FVBfnW-waP.png%3Fw%3D800%26h%3D420%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp"
        />
        <meta name="next-head-count" content={17} />
        <noscript data-n-css />
        <style
          data-href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=block"
          dangerouslySetInnerHTML={{
            __html:
              "@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZs.woff) format('woff')}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:300;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:400;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:500;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:600;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:700;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:800;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+1F00-1FFF}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0370-03FF}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');unicode-range:U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:'Inter';font-style:normal;font-weight:900;font-display:block;src:url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}",
          }}
        />
        <style
          data-emotion="css-global"
          data-s
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <style
          data-emotion="css 3tbo75"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-3tbo75{line-height:1.5;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.dark .css-3tbo75{--tw-bg-opacity:1;background-color:rgba(24, 25, 26, var(--tw-bg-opacity));}",
          }}
        />
        <style
          data-emotion="css 3159x8"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-3159x8{--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));}.dark .css-3159x8{--tw-bg-opacity:1;background-color:rgba(24, 25, 26, var(--tw-bg-opacity));}",
          }}
        />
        <style
          data-emotion="css 1p7bpg"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1p7bpg{position:relative;z-index:50;border-bottom-width:1px;}.dark .css-1p7bpg{--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}",
          }}
        />
        <style
          data-emotion="css yd8da5"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-yd8da5{padding-left:0.5rem;padding-right:0.5rem;margin-left:auto;margin-right:auto;}@media (min-width: 768px){.css-yd8da5{padding-left:1rem;padding-right:1rem;}}@media (min-width: 1536px){.css-yd8da5{padding-left:2.5rem;padding-right:2.5rem;}}",
          }}
        />
        <style
          data-emotion="css 1ll3e1i"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1ll3e1i{position:relative;z-index:40;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding-top:2rem;padding-bottom:0.5rem;margin-bottom:0.5rem;}@media (min-width: 768px){.css-1ll3e1i{margin-bottom:1rem;}}",
          }}
        />
        <style
          data-emotion="css 37nvso"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-37nvso{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:0.25rem;padding-bottom:0.25rem;padding-right:1rem;}",
          }}
        />
        <style
          data-emotion="css 1lfhv42"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1lfhv42{margin-right:1rem;}@media (min-width: 768px){.css-1lfhv42{display:none;}}",
          }}
        />
        <style
          data-emotion="css 1tdo4yy"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1tdo4yy{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0.5rem;font-weight:700;text-transform:uppercase;border-radius:0.5rem;}.css-1tdo4yy:focus{outline:2px solid transparent;outline-offset:2px;}.dark .css-1tdo4yy{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}.css-1tdo4yy:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css 176cdx5"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-176cdx5{width:1.5rem;height:1.5rem;margin-right:0.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 1x6nj8n"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1x6nj8n{width:1.5rem;height:1.5rem;margin-right:0.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css v1ygcs"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-v1ygcs{display:none;}@media (min-width: 768px){.css-v1ygcs{display:block;}}",
          }}
        />
        <style
          data-emotion="css vhqvd7"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-vhqvd7{font-size:1.25rem;line-height:1.375;font-weight:600;letter-spacing:-0.025em;overflow-wrap:break-word;}@media (min-width: 768px){.css-vhqvd7{font-size:1.5rem;line-height:2rem;font-weight:700;}}.dark .css-vhqvd7{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css 4pib4r"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-4pib4r{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:3rem;}.dark .css-4pib4r{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css wme9tu"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-wme9tu{transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.5rem;padding-bottom:0.5rem;margin-left:0.25rem;margin-right:0.25rem;font-weight:600;border-radius:9999px;}.css-wme9tu:focus{outline:2px solid transparent;outline-offset:2px;}.css-wme9tu:hover{background-color:rgba(0,0,0,.1);}.dark .css-wme9tu:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css 1fjoo34"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1fjoo34{width:1.5rem;height:1.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 17mdxl4"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-17mdxl4{width:1.5rem;height:1.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 1g8oej1"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1g8oej1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;padding-top:1rem;padding-bottom:1rem;}@media (min-width: 768px){.css-1g8oej1{display:none;}}",
          }}
        />
        <style
          data-emotion="css 19u4q4r"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-19u4q4r{width:66.666667%;font-size:1.5rem;line-height:1.375;font-weight:700;letter-spacing:-0.025em;text-align:center;overflow-wrap:break-word;}.dark .css-19u4q4r{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css 4zleql"
          data-s
          dangerouslySetInnerHTML={{ __html: ".css-4zleql{display:block;}" }}
        />
        <style
          data-emotion="css 1nl2bbl"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1nl2bbl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;overflow:hidden;font-size:1rem;line-height:1.5rem;font-weight:500;text-transform:uppercase;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));}@media (min-width: 768px){.css-1nl2bbl{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}}.dark .css-1nl2bbl{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css ddbtpe"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-ddbtpe{overflow:hidden;display:none;height:100%;}@media (min-width: 768px){.css-ddbtpe{display:block;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;}}",
          }}
        />
        <style
          data-emotion="css mq47qm"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-mq47qm{display:none;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;height:100%;font-size:0.875rem;line-height:1.25rem;white-space:nowrap;}@media (min-width: 768px){.css-mq47qm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}",
          }}
        />
        <style
          data-emotion="css zaakmz"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-zaakmz{display:block;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;padding-left:0.75rem;padding-right:0.75rem;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;font-weight:700;opacity:1;}.css-zaakmz:hover{opacity:1;}.css-zaakmz:hover{background-color:rgba(0,0,0,.1);}.dark .css-zaakmz:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css tr47eg"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-tr47eg{display:block;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;padding-left:0.75rem;padding-right:0.75rem;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-color:transparent;opacity:0.75;}.css-tr47eg:hover{opacity:1;}.css-tr47eg:hover{background-color:rgba(0,0,0,.1);}.dark .css-tr47eg:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css mwyikp"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-mwyikp{display:block;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;padding-left:0.75rem;padding-right:0.75rem;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;border-color:transparent;opacity:0.75;}.css-mwyikp:hover{opacity:1;}.css-mwyikp:hover{background-color:rgba(0,0,0,.1);}.dark .css-mwyikp:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css ho1qnd"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-ho1qnd{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",
          }}
        />
        <style
          data-emotion="css eqcmow"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-eqcmow{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;padding-left:0.75rem;padding-right:0.75rem;padding-top:0.75rem;padding-bottom:0.75rem;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;opacity:0.5;}.css-eqcmow:hover{opacity:1;}@media (min-width: 768px){.css-eqcmow{padding-left:0.5rem;padding-right:0.5rem;}}.css-eqcmow:hover{background-color:rgba(0,0,0,.1);}.dark .css-eqcmow:hover{background-color:rgba(255,255,255,.2);}",
          }}
        />
        <style
          data-emotion="css ms8fcx"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-ms8fcx{width:1.25rem;height:1.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 1330i9l"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1330i9l{width:1.25rem;height:1.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css akxj19"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-akxj19{border-bottom-width:1px;margin-bottom:2.5rem;}.dark .css-akxj19{--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}",
          }}
        />
        <style
          data-emotion="css ap35cf"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-ap35cf{margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem;}@media (min-width: 768px){.css-ap35cf{width:75%;}}@media (min-width: 1024px){.css-ap35cf{width:66.666667%;}}@media (min-width: 1024px){.css-ap35cf{padding-left:2rem;padding-right:2rem;}}",
          }}
        />
        <style
          data-emotion="css 31caih"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-31caih{padding-left:1rem;padding-right:1rem;padding-top:2rem;padding-bottom:2rem;margin-left:auto;margin-right:auto;}@media (min-width: 768px){.css-31caih{padding-left:2rem;padding-right:2rem;padding-top:3rem;padding-bottom:3rem;}}",
          }}
        />
        <style
          data-emotion="css 1i0unf"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1i0unf{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}@media (min-width: 768px){.css-1i0unf{-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}}",
          }}
        />
        <style
          data-emotion="css 5eoxrw"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-5eoxrw{width:100%;}@media (min-width: 768px){.css-5eoxrw{-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;}}",
          }}
        />
        <style
          data-emotion="css 15n66j1"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-15n66j1{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;margin-bottom:1.25rem;line-height:1.375;}",
          }}
        />
        <style
          data-emotion="css t3unm2"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-t3unm2{width:100%;margin-right:1.25rem;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(51, 51, 51, var(--tw-text-opacity));}.dark .css-t3unm2{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}@media (min-width: 768px){.css-t3unm2{font-size:1.875rem;line-height:2.25rem;width:auto;}}",
          }}
        />
        <style
          data-emotion="css k4ehnf"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-k4ehnf{margin-bottom:0px;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));opacity:0.6;}.dark .css-k4ehnf{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css goznhf"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              '.css-goznhf{letter-spacing:-0.025em;color:rgba(0, 0, 0, var(--tw-text-opacity));max-width:65ch;font-size:1rem;line-height:1.75;--tw-text-opacity:1;opacity:0.75;}.css-goznhf [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.css-goznhf a{color:#111;-webkit-text-decoration:underline;text-decoration:underline;font-weight:500;}.css-goznhf a .user-mention{-webkit-text-decoration:none;text-decoration:none;color:#2962ff;}.css-goznhf strong{color:#111827;font-weight:600;}.css-goznhf ol[type="A"]{--list-counter-style:upper-alpha;}.css-goznhf ol[type="a"]{--list-counter-style:lower-alpha;}.css-goznhf ol[type="A s"]{--list-counter-style:upper-alpha;}.css-goznhf ol[type="a s"]{--list-counter-style:lower-alpha;}.css-goznhf ol[type="I"]{--list-counter-style:upper-roman;}.css-goznhf ol[type="i"]{--list-counter-style:lower-roman;}.css-goznhf ol[type="I s"]{--list-counter-style:upper-roman;}.css-goznhf ol[type="i s"]{--list-counter-style:lower-roman;}.css-goznhf ol[type="1"]{--list-counter-style:decimal;}.css-goznhf ol>li{position:relative;padding-left:1.75em;}.css-goznhf ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0;}.css-goznhf ul>li{position:relative;padding-left:1.75em;}.css-goznhf ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em;}.css-goznhf hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em;}.css-goznhf blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.css-goznhf blockquote p:first-of-type::before{content:open-quote;}.css-goznhf blockquote p:last-of-type::after{content:close-quote;}.css-goznhf h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.css-goznhf h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.css-goznhf h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.css-goznhf h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.css-goznhf figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.css-goznhf code{color:#111827;font-weight:600;font-size:0.875em;}.css-goznhf code::after{display:none;content:"`";}.css-goznhf code::before{display:none;content:"`";}.css-goznhf a code{color:#111827;}.css-goznhf pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.css-goznhf pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.css-goznhf pre code::before{content:none;}.css-goznhf pre code::after{content:none;}.css-goznhf table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.css-goznhf thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db;}.css-goznhf thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-goznhf tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb;}.css-goznhf tbody tr:last-child{border-bottom-width:0;}.css-goznhf tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-goznhf p{margin-top:1.25em;margin-bottom:1.25em;}.css-goznhf img{margin-top:2em;margin-bottom:2em;}.css-goznhf video{margin-top:2em;margin-bottom:2em;}.css-goznhf figure{margin-top:2em;margin-bottom:2em;}.css-goznhf figure>*{margin-top:0;margin-bottom:0;}.css-goznhf h2 code{font-size:0.875em;}.css-goznhf h3 code{font-size:0.9em;}.css-goznhf ol{margin-top:1.25em;margin-bottom:1.25em;}.css-goznhf ul{margin-top:1.25em;margin-bottom:1.25em;}.css-goznhf li{margin-top:0.5em;margin-bottom:0.5em;}.css-goznhf >ul>li p{margin-top:0.75em;margin-bottom:0.75em;}.css-goznhf >ul>li>*:first-child{margin-top:1.25em;}.css-goznhf >ul>li>*:last-child{margin-bottom:1.25em;}.css-goznhf >ol>li>*:first-child{margin-top:1.25em;}.css-goznhf >ol>li>*:last-child{margin-bottom:1.25em;}.css-goznhf ul ul{margin-top:0.75em;margin-bottom:0.75em;}.css-goznhf ul ol{margin-top:0.75em;margin-bottom:0.75em;}.css-goznhf ol ul{margin-top:0.75em;margin-bottom:0.75em;}.css-goznhf ol ol{margin-top:0.75em;margin-bottom:0.75em;}.css-goznhf hr+*{margin-top:0;}.css-goznhf h2+*{margin-top:0;}.css-goznhf h3+*{margin-top:0;}.css-goznhf h4+*{margin-top:0;}.css-goznhf thead th:first-child{padding-left:0;}.css-goznhf thead th:last-child{padding-right:0;}.css-goznhf tbody td:first-child{padding-left:0;}.css-goznhf tbody td:last-child{padding-right:0;}.css-goznhf >:first-child{margin-top:0;}.css-goznhf >:last-child{margin-bottom:0;}.css-goznhf details{border:1px solid rgba(204, 214, 221, .5);border-radius:4px;padding:.5em .5em 0;}.css-goznhf summary{font-weight:bold;margin:-.5em -.5em 0;padding:.5em;}.css-goznhf kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0, 0, 0, .2),0 2px 0 0 rgba(255, 255, 255, .7) inset;color:#333;display:inline-block;font-size:.85em;font-weight:700;line-weight:1;padding:2px 4px;white-space:nowrap;}.css-goznhf abbr{font-style:italic;}.css-goznhf dt{font-weight:bold;}.css-goznhf dd{margin-bottom:1rem;-webkit-margin-start:1rem;margin-inline-start:1rem;}.dark .css-goznhf{color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-text-opacity:1;}.dark .css-goznhf a{color:#fafafa;}.dark .css-goznhf kbd{background-color:#444;border:1px solid #757575;color:#FFF;}.dark .css-goznhf strong{color:#fafafa;}.dark .css-goznhf ol>li::before{color:#bdbdbd;}.dark .css-goznhf blockquote{color:#bdbdbd;}.dark .css-goznhf h1{color:#fafafa;}.dark .css-goznhf h2{color:#fafafa;}.dark .css-goznhf h3{color:#fafafa;}.dark .css-goznhf h4{color:#fafafa;}.dark .css-goznhf figure figcaption{color:#bdbdbd;}.dark .css-goznhf code{color:#fafafa;background-color:#1f2937;}.dark .css-goznhf a code{color:#fafafa;}.dark .css-goznhf pre{color:#fafafa;}.dark .css-goznhf pre code{color:#fafafa;background-color:transparent;}.dark .css-goznhf thead{color:#fafafa;}@media (min-width: 1024px){.css-goznhf{font-size:1.125rem;line-height:1.7777778;}.css-goznhf p{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-goznhf [class~="lead"]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em;}.css-goznhf blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em;}.css-goznhf h1{font-size:1.8em;margin-top:0;margin-bottom:0.8333333em;line-height:1.2;}.css-goznhf h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333;}.css-goznhf h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:0.6666667em;line-height:1.5;}.css-goznhf h4{margin-top:1.7777778em;margin-bottom:0.4444444em;line-height:1.5555556;}.css-goznhf img{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-goznhf video{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-goznhf figure{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-goznhf figure>*{margin-top:0;margin-bottom:0;}.css-goznhf figure figcaption{font-size:0.8888889em;line-height:1.5;margin-top:1em;}.css-goznhf code{font-size:0.8888889em;}.css-goznhf h2 code{font-size:0.8666667em;}.css-goznhf h3 code{font-size:0.875em;}.css-goznhf pre{font-size:0.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:0.375rem;padding-top:1em;padding-right:1.5em;padding-bottom:1em;padding-left:1.5em;}.css-goznhf ol{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-goznhf ul{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-goznhf li{margin-top:0.6666667em;margin-bottom:0.6666667em;}.css-goznhf ol>li{padding-left:1.6666667em;}.css-goznhf ol>li::before{left:0;}.css-goznhf ul>li{padding-left:1.6666667em;}.css-goznhf ul>li::before{width:0.3333333em;height:0.3333333em;top:calc(0.8888889em - 0.1666667em);left:0.2222222em;}.css-goznhf >ul>li p{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-goznhf >ul>li>*:first-child{margin-top:1.3333333em;}.css-goznhf >ul>li>*:last-child{margin-bottom:1.3333333em;}.css-goznhf >ol>li>*:first-child{margin-top:1.3333333em;}.css-goznhf >ol>li>*:last-child{margin-bottom:1.3333333em;}.css-goznhf ul ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-goznhf ul ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-goznhf ol ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-goznhf ol ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-goznhf hr{margin-top:3.1111111em;margin-bottom:3.1111111em;}.css-goznhf hr+*{margin-top:0;}.css-goznhf h2+*{margin-top:0;}.css-goznhf h3+*{margin-top:0;}.css-goznhf h4+*{margin-top:0;}.css-goznhf table{font-size:0.8888889em;line-height:1.5;}.css-goznhf thead th{padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-goznhf thead th:first-child{padding-left:0;}.css-goznhf thead th:last-child{padding-right:0;}.css-goznhf tbody td{padding-top:0.75em;padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-goznhf tbody td:first-child{padding-left:0;}.css-goznhf tbody td:last-child{padding-right:0;}.css-goznhf >:first-child{margin-top:0;}.css-goznhf >:last-child{margin-bottom:0;}}',
          }}
        />
        <style
          data-emotion="css u5qy34"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-u5qy34{margin-bottom:1.25rem;}@media (min-width: 768px){.css-u5qy34{margin-left:2.5rem;margin-bottom:0px;}}",
          }}
        />
        <style
          data-emotion="css r7yz1v"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-r7yz1v{display:block;width:6rem;height:6rem;overflow:hidden;border-radius:9999px;}@media (min-width: 768px){.css-r7yz1v{width:7rem;height:7rem;}}@media (min-width: 1024px){.css-r7yz1v{width:9rem;height:9rem;}}",
          }}
        />
        <style
          data-emotion="css 1082qq3"
          data-s
          dangerouslySetInnerHTML={{
            __html: ".css-1082qq3{display:block;width:100%;}",
          }}
        />
        <style
          data-emotion="css wa6jt3"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-wa6jt3{margin-left:auto;margin-right:auto;}@media (min-width: 768px){.css-wa6jt3{width:66.666667%;}}",
          }}
        />
        <style
          data-emotion="css 16gx0ij"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-16gx0ij{margin-bottom:4rem;padding-left:1rem;padding-right:1rem;}@media (min-width: 1024px){.css-16gx0ij{padding-left:4rem;padding-right:4rem;}}",
          }}
        />
        <style
          data-emotion="css vabva8"
          data-s
          dangerouslySetInnerHTML={{
            __html: ".css-vabva8{position:relative;overflow:hidden;}",
          }}
        />
        <style
          data-emotion="css 1kuuouk"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1kuuouk{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}",
          }}
        />
        <style
          data-emotion="css 1lyu3vj"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1lyu3vj{width:100%;margin-bottom:0.75rem;margin-right:0.5rem;}@media (min-width: 1280px){.css-1lyu3vj{margin-bottom:0px;width:14rem;}}",
          }}
        />
        <style
          data-emotion="css 1x0j9if"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1x0j9if{font-size:0.875rem;line-height:1.375;font-weight:500;letter-spacing:-0.025em;--tw-text-opacity:1;color:rgba(33, 33, 33, var(--tw-text-opacity));}.dark .css-1x0j9if{--tw-text-opacity:1;color:rgba(156, 163, 175, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css sgivcr"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-sgivcr{position:relative;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}@media (min-width: 1280px){.css-sgivcr{width:auto;-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;}}",
          }}
        />
        <style
          data-emotion="css 248rth"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-248rth{position:absolute;top:0px;left:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-left:1rem;--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity));}.dark .css-248rth{--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css 148gys9"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-148gys9{width:100%;padding:1rem;background-color:transparent;border-width:1px;border-radius:0.5rem;outline:2px solid transparent;outline-offset:2px;width:100%;padding:1rem;padding-left:3rem;padding-right:8rem;font-size:0.875rem;line-height:1.25rem;font-weight:600;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-width:1px;border-radius:0.5rem;outline:2px solid transparent;outline-offset:2px;}.css-148gys9::-webkit-input-placeholder{--tw-placeholder-opacity:1;color:rgba(107, 114, 128, var(--tw-placeholder-opacity));}.css-148gys9::-moz-placeholder{--tw-placeholder-opacity:1;color:rgba(107, 114, 128, var(--tw-placeholder-opacity));}.css-148gys9:-ms-input-placeholder{--tw-placeholder-opacity:1;color:rgba(107, 114, 128, var(--tw-placeholder-opacity));}.css-148gys9::placeholder{--tw-placeholder-opacity:1;color:rgba(107, 114, 128, var(--tw-placeholder-opacity));}.css-148gys9:focus{--tw-border-opacity:1;border-color:rgba(41, 98, 255, var(--tw-border-opacity));}.css-148gys9:disabled{--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity));}.dark .css-148gys9{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}.dark .css-148gys9:focus{--tw-bg-opacity:1;background-color:rgba(24, 25, 26, var(--tw-bg-opacity));--tw-border-opacity:1;border-color:rgba(41, 98, 255, var(--tw-border-opacity));}.dark .css-148gys9{--tw-bg-opacity:1;background-color:rgba(24, 25, 26, var(--tw-bg-opacity));}@media (min-width: 768px){.css-148gys9{font-size:1rem;line-height:1.5rem;}}",
          }}
        />
        <style
          data-emotion="css wswes9"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-wswes9{position:absolute;top:0px;right:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;margin-right:0.5rem;}",
          }}
        />
        <style
          data-emotion="css 6dz9u5"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-6dz9u5{padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:700;line-height:1.375;text-transform:uppercase;--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}.dark .css-6dz9u5{--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css azbqzp"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-azbqzp{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:700;line-height:1.375;text-transform:uppercase;--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}.dark .css-azbqzp{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-azbqzp:disabled{opacity:0.5;}.css-azbqzp:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-azbqzp:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-azbqzp:focus{outline:2px solid transparent;outline-offset:2px;}.dark .css-azbqzp{--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css w2ir88"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-w2ir88{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css 4ktcs4"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-4ktcs4{width:1.25rem;height:1.25rem;margin-right:0.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css gflyy0"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-gflyy0{width:1.25rem;height:1.25rem;margin-right:0.5rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css zlewtl"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-zlewtl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}",
          }}
        />
        <style
          data-emotion="css 1fx2wyw"
          data-s
          dangerouslySetInnerHTML={{
            __html: "@media (min-width: 1024px){.css-1fx2wyw{width:60%;}}",
          }}
        />
        <style
          data-emotion="css on3vf4"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-on3vf4{margin-bottom:0.75rem;font-size:1.5rem;line-height:1.25;font-weight:700;letter-spacing:-0.025em;overflow-wrap:break-word;--tw-text-opacity:1;color:rgba(51, 51, 51, var(--tw-text-opacity));}.dark .css-on3vf4{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}@media (min-width: 1024px){.css-on3vf4{font-size:1.875rem;line-height:2.25rem;}}",
          }}
        />
        <style
          data-emotion="css y07gv8"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-y07gv8{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0.75rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity));}.dark .css-y07gv8{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css nfd03i"
          data-s
          dangerouslySetInnerHTML={{
            __html: ".css-nfd03i{margin-right:1rem;}",
          }}
        />
        <style
          data-emotion="css bbt5q4"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-bbt5q4{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:1rem;}",
          }}
        />
        <style
          data-emotion="css 1vlfi6p"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1vlfi6p{width:1rem;height:1rem;margin-right:0.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css hb3dfw"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-hb3dfw{width:1rem;height:1rem;margin-right:0.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 8oy3ng"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-8oy3ng{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-right:0.5rem;}",
          }}
        />
        <style
          data-emotion="css ch9q11"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-ch9q11{display:block;width:100%;font-size:1rem;line-height:1.375;overflow-wrap:break-word;--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity));}.dark .css-ch9q11{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
          }}
        />
        <style
          data-emotion="css 4hopac"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-4hopac{width:100%;margin-top:1.5rem;}@media (min-width: 1024px){.css-4hopac{margin-top:0px;padding-left:2rem;width:40%;}}",
          }}
        />
        <style
          data-emotion="css 1vqi5ql"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1vqi5ql{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;border-width:1px;border-radius:0.5rem;}.dark .css-1vqi5ql{--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}",
          }}
        />
        <style
          data-emotion="css 9sw2nh"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-9sw2nh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;margin-bottom:4rem;}",
          }}
        />
        <style
          data-emotion="css 1nu6jrm"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-1nu6jrm{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.125rem;line-height:1.625;font-weight:500;text-transform:capitalize;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-radius:0.5rem;--tw-border-opacity:1;border-color:rgba(41, 98, 255, var(--tw-border-opacity));--tw-text-opacity:1;color:rgba(41, 98, 255, var(--tw-text-opacity));}.css-1nu6jrm:focus{outline:2px solid transparent;outline-offset:2px;}",
          }}
        />
        <style
          data-emotion="css 2qmeu6"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-2qmeu6{width:2rem;height:2rem;margin-left:0.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css 33mtf5"
          data-s
          dangerouslySetInnerHTML={{
            __html:
              ".css-33mtf5{width:2rem;height:2rem;margin-left:0.25rem;fill:currentColor;}",
          }}
        />
        <style
          data-emotion="css"
          data-s
          dangerouslySetInnerHTML={{ __html: "" }}
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/675-e012f3c16ef4df360957.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/268-31a5652caf9b19c7ab0f.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/103-8e5f048c07da1205839a.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/851-c375aaf86de57fdfc2ad.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/57-6a0df72daf34fc91c121.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/152-826014f42b2f25cfe65e.js"
        />
        <link
          as="script"
          rel="prefetch"
          href="/_next/static/chunks/pages/%5B...slug%5D-b13c2815f17bf5858998.js"
        />
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              '\nbutton.btn[data-v-20e3b604]{display:inline-block;font-weight:300;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;cursor:pointer;letter-spacing:1px;transition:all .15s ease\n}\nbutton.btn.btn-sm[data-v-20e3b604]{padding:.4rem .8rem;font-size:.8rem;border-radius:.2rem\n}\nbutton.btn.btn-primary[data-v-20e3b604]{color:#fff;background-color:#45C8F1;border-color:#45C8F1\n}\nbutton.btn.btn-outline-primary[data-v-20e3b604]{color:#45C8F1;background-color:transparent;border-color:#45C8F1\n}\nbutton.btn.btn-danger[data-v-20e3b604]{color:#fff;background-color:#FF4949;border-color:#FF4949\n}\n.text-muted[data-v-20e3b604]{color:#8492A6\n}\n.text-center[data-v-20e3b604]{text-align:center\n}\n.drop-down-enter[data-v-20e3b604],.drop-down-leave-to[data-v-20e3b604]{transform:translateX(0) translateY(-20px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0\n}\n.drop-down-enter-active[data-v-20e3b604],.drop-down-leave-active[data-v-20e3b604]{transition:all .15s\n}\n.move-left-enter[data-v-20e3b604],.move-left-leave-to[data-v-20e3b604]{transform:translateY(0) translateX(-80px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0\n}\n.move-left-enter-active[data-v-20e3b604],.move-left-leave-active[data-v-20e3b604]{transition:all .15s\n}\n.no-tr[data-v-20e3b604]{transition:none !important\n}\n.no-tr *[data-v-20e3b604]{transition:none !important\n}\n.overlay[data-v-20e3b604]{position:fixed;background:rgba(220,220,220,0.8);display:flex;align-items:center;justify-content:center;top:0;left:0;right:0;bottom:0;transition:all 0.2s ease;opacity:0;visibility:hidden\n}\n.overlay .modal[data-v-20e3b604]{transition:all 0.2s ease;opacity:0;transform:scale(0.6);overflow:hidden\n}\n.overlay.show[data-v-20e3b604]{opacity:1;visibility:visible\n}\n.overlay.show .modal[data-v-20e3b604]{opacity:1;transform:scale(1)\n}\n.panel[data-v-20e3b604]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;transition:all 0.07s ease-in-out\n}\n.btn[data-v-20e3b604]{cursor:pointer;box-sizing:border-box\n}\n.light-btn[data-v-20e3b604]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;cursor:pointer;transition:all 0.07s ease-in-out\n}\n.light-btn[data-v-20e3b604]:hover{background:#e0f4ff;border-color:#8acfff\n}\n.shake[data-v-20e3b604]{animation:shake-data-v-20e3b604 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform:translate3d(0, 0, 0)\n}\n@keyframes shake-data-v-20e3b604{\n10%,90%{transform:translate3d(-1px, 0, 0)\n}\n20%,80%{transform:translate3d(2px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-4px, 0, 0)\n}\n40%,60%{transform:translate3d(4px, 0, 0)\n}\n}\n.pulse[data-v-20e3b604]{animation:pulse-data-v-20e3b604 2s ease infinite\n}\n@keyframes pulse-data-v-20e3b604{\n0%{opacity:.7\n}\n50%{opacity:.4\n}\n100%{opacity:.7\n}\n}\n.flash-once[data-v-20e3b604]{animation:flash-once 3.5s ease 1\n}\n@keyframes fade-up-data-v-20e3b604{\n0%{transform:translate3d(0, 10px, 0);opacity:0\n}\n100%{transform:translate3d(0, 0, 0);opacity:1\n}\n}\n.fade-in[data-v-20e3b604]{animation:fade-in-data-v-20e3b604 .3s ease-in-out\n}\n@keyframes fade-in-data-v-20e3b604{\n0%{opacity:0\n}\n100%{opacity:1\n}\n}\n.spin[data-v-20e3b604]{animation-name:spin-data-v-20e3b604;animation-duration:2000ms;animation-iteration-count:infinite;animation-timing-function:linear\n}\n@keyframes spin-data-v-20e3b604{\nfrom{transform:rotate(0deg)\n}\nto{transform:rotate(360deg)\n}\n}\n.bounceIn[data-v-20e3b604]{animation-name:bounceIn-data-v-20e3b604;transform-origin:center bottom;animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1\n}\n@keyframes bounceIn-data-v-20e3b604{\n0%,20%,40%,60%,80%,100%{-webkit-transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)\n}\n0%{opacity:1;-webkit-transform:scale3d(0.8, 0.8, 0.8);transform:scale3d(0.8, 0.8, 0.8)\n}\n20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)\n}\n40%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)\n}\n60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)\n}\n80%{-webkit-transform:scale3d(0.97, 0.97, 0.97);transform:scale3d(0.97, 0.97, 0.97)\n}\n100%{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)\n}\n}\n@keyframes dots-data-v-20e3b604{\n0%,20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)\n}\n40%{color:#8492A6;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)\n}\n60%{text-shadow:0.25em 0 0 #8492A6,0.5em 0 0 rgba(0,0,0,0)\n}\n80%,100%{text-shadow:.25em 0 0 #8492A6, .5em 0 0 #8492A6\n}\n}\n@keyframes recording-data-v-20e3b604{\n0%{box-shadow:0px 0px 5px 0px rgba(173,0,0,0.3)\n}\n65%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0.3)\n}\n90%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0)\n}\n}\nbody[data-v-20e3b604]{margin:0;font-size:100%;color:#3C4858\n}\na[data-v-20e3b604]{text-decoration:none;color:#45C8F1\n}\nh1[data-v-20e3b604],h2[data-v-20e3b604],h3[data-v-20e3b604],h4[data-v-20e3b604]{margin-top:0\n}\nsvg[data-v-20e3b604]{outline:none\n}\n.container_selected_area[data-v-20e3b604]{display:none;visibility:hidden;padding:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647\n}\n.container_selected_area.active[data-v-20e3b604]{visibility:visible;display:block\n}\n.container_selected_area .label[data-v-20e3b604]{font-family:"Didact Gothic Regular",sans-serif;font-size:22px;text-align:center;padding-top:15px\n}\n.container_selected_area .area[data-v-20e3b604]{display:none;position:fixed;z-index:2147483647;border:1px solid #1e83ff;background:rgba(30,131,255,0.1);box-sizing:border-box\n}\n.container_selected_area .area.active[data-v-20e3b604]{display:block;top:0;left:0\n}\n.hide[data-v-20e3b604]{display:none\n}\n',
          }}
        />
        <input type="hidden" id="hn-user" />
        <div id="__next">
          <div className="blog-body css-3159x8">
            <header
              style={{ backgroundColor: "" }}
              className="blog-header css-1p7bpg"
            >
              <div className="container css-yd8da5">
                <div className="css-1ll3e1i">
                  <div className="css-37nvso">
                    <div className="css-1lfhv42">
                      <button type="button" className="css-1tdo4yy">
                        <svg className="css-1x6nj8n" viewBox="0 0 448 512">
                          <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z" />
                        </svg>
                        <span>Menu</span>
                      </button>
                    </div>
                    <div className="css-v1ygcs">
                      <h1 className="blog-title css-vhqvd7">
                        <a href="/" aria-label="Savio Martin">
                          Savio Martin
                        </a>
                      </h1>
                    </div>
                  </div>
                  <div className="css-4pib4r">
                    <button
                      type="button"
                      aria-label="Search the blog"
                      data-title="Search"
                      className="blog-search-button tooltip-handle css-wme9tu"
                    >
                      <svg
                        className="css-17mdxl4"
                        viewBox="0 0 200 200"
                        fill="none"
                      >
                        <g clipPath="url(#clip0)">
                          <path d="M186.804 176.609l-44.092-44.091a4.054 4.054 0 00-2.905-1.197h-3.521c11.724-12.68 18.902-29.599 18.902-48.227C155.188 43.82 123.366 12 84.094 12 44.82 12 13 43.821 13 83.094c0 39.272 31.821 71.094 71.094 71.094 18.628 0 35.547-7.178 48.227-18.868v3.487c0 1.093.445 2.119 1.197 2.905l44.091 44.092a4.107 4.107 0 005.811 0l3.384-3.384a4.107 4.107 0 000-5.811zM84.094 143.25c-33.257 0-60.156-26.899-60.156-60.156s26.899-60.156 60.156-60.156 60.156 26.899 60.156 60.156-26.899 60.156-60.156 60.156z" />
                        </g>
                        <defs>
                          <clipPath>
                            <path
                              transform="translate(13 12)"
                              d="M0 0h175v175H0z"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    <button
                      type="button"
                      aria-label="Theme switcher"
                      data-title="Toggle dark mode"
                      className="blog-theme-switcher tooltip-handle css-wme9tu"
                    >
                      <svg className="css-17mdxl4" viewBox="0 0 512 512">
                        <path d="M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 00280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z" />
                      </svg>
                    </button>
                    <a
                      aria-label="Go to blog dashboard"
                      href="https://hashnode.com/5fa3ec153e634314b5178e85/dashboard"
                      data-title="Blog Dashboard"
                      className="blog-settings tooltip-handle css-1yca1r0"
                    >
                      <svg className="css-17mdxl4" viewBox="0 0 512 512">
                        <path d="M502.63 214.63l-45.25-45.26c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.47-21.53-48-48-48H176c-26.47 0-48 21.53-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V448c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V237.25c0-8.48-3.37-16.62-9.37-22.62zM160 80c0-8.83 7.19-16 16-16h160c8.81 0 16 7.17 16 16v80H160V80zm320 368H32v-96h96v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h192v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h96v96zm-96-128v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H160v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H32v-82.75L77.25 192h357.49L480 237.25V320h-96z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="css-1g8oej1">
                  <h1 className="blog-title css-19u4q4r">
                    <a
                      href="/"
                      aria-label="Savio Martin"
                      className="css-4zleql"
                    >
                      Savio Martin
                    </a>
                  </h1>
                </div>
                <div
                  className="blog-sub-header css-1nl2bbl"
                  data-tom="blog-sub-header flex flex-row w-full overflow-hidden items-end justify-between text-base uppercase font-medium text-black dark:text-white"
                >
                  <div className="scrollbar-container css-ddbtpe ps">
                    <nav className="css-mq47qm">
                      <a href="/" className="blog-nav-active css-zaakmz">
                        Home
                      </a>
                      <a
                        className="blog-nav css-tr47eg"
                        href="https://saviomartin.com/sponsor"
                      >
                        Support Me
                      </a>
                      <a className="blog-nav css-mwyikp" href="/badges">
                        Badges
                      </a>
                    </nav>
                    <div className="ps__rail-x" style={{ left: 0, top: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, left: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </div>
                  <div className="blog-social-media-section css-ho1qnd">
                    <a
                      href="https://twitter.com/saviomartin7"
                      aria-label="Find me on Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 512 512">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/saviomartin"
                      aria-label="Find me on Github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 496 512">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                      </svg>
                    </a>
                    <a
                      href="https://hashnode.com/@saviomartin"
                      aria-label="Find me on Hashnode"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg
                        className="css-1330i9l"
                        viewBox="0 0 200 200"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://app.daily.dev/savio"
                      aria-label="Find me on daily.dev"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 24 24">
                        <g fillRule="evenodd">
                          <path
                            d="M19.174 11.59l-2.207-2.208 1.103-2.207 3.587 3.587a1.17 1.17 0 010 1.655l-4.415 4.416a1.17 1.17 0 01-1.655-1.656l3.587-3.587z"
                            opacity=".56"
                          />
                          <path d="M15.588 6.343a1.17 1.17 0 011.655 0l.828.828-9.658 9.657a1.17 1.17 0 01-1.655 0L5.93 16l9.658-9.657zm-4.14 3.035l-1.655 1.656-2.208-2.208-2.76 2.76 2.208 2.207L5.93 16l-3.587-3.587a1.17 1.17 0 010-1.655l4.415-4.415a1.17 1.17 0 011.655 0l3.036 3.035z" />
                        </g>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/saviomartin/"
                      aria-label="Find me on LinkedIn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 448 512">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                      </svg>
                    </a>
                    <a
                      href="https://savio.works/"
                      aria-label="Check out my website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 24 24">
                        <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z" />
                      </svg>
                    </a>
                    <a
                      href="/rss.xml"
                      aria-label="Blog's XML Feed"
                      className="css-eqcmow"
                    >
                      <svg className="css-1330i9l" viewBox="0 0 448 512">
                        <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </header>
            <div
              className="blog-author-container css-akxj19"
              style={{ backgroundColor: "" }}
            >
              <div className="blog-author-area feed-width css-ap35cf">
                <div
                  className="blog-author-card css-31caih"
                  itemProp="author"
                  itemScope
                  itemType="http://schema.org/Person"
                >
                  <div className="css-1i0unf">
                    <div className="css-5eoxrw">
                      <div className="css-15n66j1">
                        <h1 className="blog-author-area-name css-t3unm2">
                          <a href="https://hashnode.com/@saviomartin">
                            Savio Martin
                          </a>
                        </h1>
                        <div className="blog-follow-wrapper">
                          <p className="blog-followers-count css-k4ehnf">
                            <span>
                              <strong>309</strong> follower{/* */}s
                            </span>
                          </p>
                        </div>
                      </div>
                      <div itemProp="description" className="css-goznhf">
                        <p>Knowledge is best when shared 🤟</p>
                      </div>
                    </div>
                    <div className="css-u5qy34">
                      <a
                        aria-label="Blog Author Picture"
                        href="https://hashnode.com/@saviomartin"
                        className="blog-author-area-photo css-r7yz1v"
                      >
                        <div
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            overflow: "hidden",
                            position: "relative",
                            boxSizing: "border-box",
                            margin: 0,
                          }}
                        >
                          <div
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              maxWidth: "100%",
                            }}
                          >
                            <img
                              style={{
                                maxWidth: "100%",
                                display: "block",
                                margin: 0,
                                border: "none",
                                padding: 0,
                              }}
                              alt
                              aria-hidden="true"
                              role="presentation"
                              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                            />
                          </div>
                          <img
                            alt="Blog Author Picture"
                            itemProp="image"
                            src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615368428147%2FTMHA5E7Gq.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
                            decoding="async"
                            className="css-1082qq3"
                            style={{
                              position: "absolute",
                              inset: 0,
                              boxSizing: "border-box",
                              padding: 0,
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: 0,
                              height: 0,
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                              filter: "none",
                              backgroundSize: "cover",
                              backgroundImage: "none",
                            }}
                            srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615368428147%2FTMHA5E7Gq.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615368428147%2FTMHA5E7Gq.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75 2x"
                          />
                        </div>
                      </a>
                      <meta itemProp="name" content="Savio Martin" />
                      <meta
                        itemProp="sameAs"
                        content="https://twitter.com/saviomartin7"
                      />
                      <meta
                        itemProp="sameAs"
                        content="https://github.com/saviomartin"
                      />
                      <meta
                        itemProp="sameAs"
                        content="https://www.linkedin.com/in/saviomartin/"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="blog-content-area feed-width css-wa6jt3"
              itemProp="mainEntityOfPage"
            >
              <div>
                <div className="blog-subscription-form css-16gx0ij">
                  <div className="blog-subscription-form-wrapper css-vabva8">
                    <div className="css-1kuuouk">
                      <div className="css-1lyu3vj">
                        <p className="blog-subscription-form-message css-1x0j9if">
                          Subscribe to {/* */}my{/* */} newsletter and never
                          miss
                          {/* */} {/* */}my{/* */} upcoming articles
                        </p>
                      </div>
                      <div className="css-sgivcr">
                        <div className="css-248rth">
                          <svg className="css-1330i9l" viewBox="0 0 512 512">
                            <path d="M464 4.3L16 262.7C-7 276-4.7 309.9 19.8 320L160 378v102c0 30.2 37.8 43.3 56.7 20.3l60.7-73.8 126.4 52.2c19.1 7.9 40.7-4.2 43.8-24.7l64-417.1C515.7 10.2 487-9 464 4.3zM192 480v-88.8l54.5 22.5L192 480zm224-30.9l-206.2-85.2 199.5-235.8c4.8-5.6-2.9-13.2-8.5-8.4L145.5 337.3 32 290.5 480 32l-64 417.1z" />
                          </svg>
                        </div>
                        <input
                          type="text"
                          aria-label="Newsletter subscription form"
                          className="blog-subscription-form-input css-148gys9"
                          placeholder="Email address"
                        />
                        <div className="css-wswes9">
                          <button
                            type="button"
                            variant="transparent"
                            className="blog-subscription-form-button css-azbqzp"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-posts-wrapper css-13wylk3">
                  <div className="blog-post-card css-16gx0ij">
                    <section className="blog-post-card-wrapper css-zlewtl">
                      <div className="css-1fx2wyw">
                        <h1 className="blog-post-card-title css-on3vf4">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            Introducing Slickr - The most powerful Cover Image
                            generator for your Hashnode blog ✨️
                          </a>
                        </h1>
                        <div className="blog-post-card-meta css-y07gv8">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            className="blog-post-card-time css-nfd03i"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            May 24, 2021
                          </a>
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️ min read"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                            className="css-bbt5q4"
                          >
                            <svg className="css-hb3dfw" viewBox="0 0 512 512">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                            </svg>
                            <span>5{/* */} min read </span>
                          </a>
                          <a
                            aria-label="370 views"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                            className="css-8oy3ng"
                          >
                            <svg className="css-hb3dfw" viewBox="0 0 384 512">
                              <path d="M136 320h-16c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8zm64-96h-16c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm40 72v128c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8zM369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z" />
                            </svg>
                            <span>370{/* */} views</span>
                          </a>
                        </div>
                        <p className="blog-post-card-brief css-ch9q11">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            Hello Folks 👋 What's up friends, this is Savio
                            here. I hope you all are doing good. I'm young web
                            dev with an intention to enhance as a successful web
                            developer. The wait is over 🎉, I'm super excited
                            and proud to introduce my latest project, Slick...
                          </a>
                        </p>
                      </div>
                      <div className="blog-post-card-cover css-4hopac">
                        <a
                          aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                          href="/create-a-dark-mode-toggler-with-tailwind"
                          className="css-1vqi5ql"
                        >
                          <img
                            className="post-cover"
                            alt="Create a Dark Mode toggler with Tailwind ⚡️"
                            src="https://saviomartin.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1627545572733%2FjUcmuLxva.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
                          />
                        </a>
                      </div>
                    </section>
                  </div>

                  <div className="blog-post-card css-16gx0ij">
                    <section className="blog-post-card-wrapper css-zlewtl">
                      <div className="css-1fx2wyw">
                        <h1 className="blog-post-card-title css-on3vf4">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            Create a Dark Mode toggler with Tailwind ⚡️
                          </a>
                        </h1>
                        <div className="blog-post-card-meta css-y07gv8">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            className="blog-post-card-time css-nfd03i"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            May 24, 2021
                          </a>
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️ min read"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                            className="css-bbt5q4"
                          >
                            <svg className="css-hb3dfw" viewBox="0 0 512 512">
                              <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                            </svg>
                            <span>5{/* */} min read </span>
                          </a>
                          <a
                            aria-label="370 views"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                            className="css-8oy3ng"
                          >
                            <svg className="css-hb3dfw" viewBox="0 0 384 512">
                              <path d="M136 320h-16c-4.4 0-8 3.6-8 8v96c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8zm64-96h-16c-4.4 0-8 3.6-8 8v192c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8zm40 72v128c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8zM369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z" />
                            </svg>
                            <span>370{/* */} views</span>
                          </a>
                        </div>
                        <p className="blog-post-card-brief css-ch9q11">
                          <a
                            aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                            href="/create-a-dark-mode-toggler-with-tailwind"
                          >
                            Hello Folks 👋 This is Savio here. I'm young dev
                            with an intention to enhance as a successful web
                            developer. I love building web apps with React. I
                            have proved my superiority in frontend technologies.
                            Today, I'll show you the easiest and the effectiv...
                          </a>
                        </p>
                      </div>
                      <div className="blog-post-card-cover css-4hopac">
                        <a
                          aria-label="Create a Dark Mode toggler with Tailwind ⚡️"
                          href="/create-a-dark-mode-toggler-with-tailwind"
                          className="css-1vqi5ql"
                        >
                          <img
                            className="post-cover"
                            alt="Create a Dark Mode toggler with Tailwind ⚡️"
                            src="https://cdn.hashnode.com/res/hashnode/image/upload/v1621847572439/PoQGufqKv.gif?w=1600&h=840&fit=crop&crop=entropy&auto=format,compress&gif-q=60&format=webm"
                          />
                        </a>
                      </div>
                    </section>
                  </div>
                  <div className="css-9sw2nh">
                    <button type="button" className="css-1nu6jrm">
                      <span>Load more</span>
                      <svg className="css-33mtf5" viewBox="0 0 448 512">
                        <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <footer className="blog-footer-area css-4dfc6h">
              <div className="blog-footer-credits css-z0tjgn">
                <p className="css-2559wl">© 2021 Savio Martin</p>
                <a
                  className="button-transparent small css-171wbv4"
                  href="https://hashnode.com/privacy?source=blog-footer"
                  target="_blank"
                  rel="noopener"
                >
                  Privacy
                </a>
                <a
                  className="button-transparent small css-171wbv4"
                  href="https://hashnode.com/terms?source=blog-footer"
                  target="_blank"
                  rel="noopener"
                >
                  Terms
                </a>
              </div>
              <div className="css-1km1bze">
                <span className="css-1v4n890">Proudly part of</span>
                <a
                  aria-label="Hashnode"
                  href="https://hashnode.com?source=blog-footer"
                  target="_blank"
                  rel="noopener"
                >
                  <svg
                    className="css-1trayuc"
                    viewBox="0 0 688 118"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                      fill="#2962FF"
                    />
                    <path
                      d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z"
                      fill="fill-current"
                    />
                  </svg>
                </a>
              </div>
            </footer>
          </div>
        </div>
        <div id="hn-modal" />
        <div id="hn-toast" />
        <next-route-announcer>
          <p
            aria-live="assertive"
            id="__next-route-announcer__"
            role="alert"
            style={{
              border: 0,
              clip: "rect(0px, 0px, 0px, 0px)",
              height: 1,
              margin: "-1px",
              overflow: "hidden",
              padding: 0,
              position: "absolute",
              width: 1,
              whiteSpace: "nowrap",
              overflowWrap: "normal",
            }}
          />
        </next-route-announcer>
        <div id="scrnli_recorder_root" />
        <iframe
          src="chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/audio-devices.html"
          allow="microphone"
          style={{ display: "none" }}
        />
        <input type="file" id name="file" style={{ display: "none" }} />
        <div
          data-v-20e3b604
          className="container_selected_area"
          style={{
            cursor:
              'url("chrome-extension://ijejnggjjphlenbhmjhhgcdpehhacaal/assets/images/cursor-imagen.svg") 9 9, crosshair',
          }}
        >
          <div data-v-20e3b604 className="area" />
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".css-4dfc6h {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n    text-align: center;\n    border-top-width: 1px;\n    --tw-bg-opacity: 1;\n    background-color: rgba(250, 250, 250, var(--tw-bg-opacity));\n    --tw-text-opacity: 1;\n    color: rgba(66, 66, 66, var(--tw-text-opacity));\n}\n.css-1km1bze {\n  display: flex;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}\n.css-z0tjgn {\n  display: flex;\n  flex-direction: row;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n}\n.css-2559wl {\n  margin-right: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.375;\n  --tw-text-opacity: 1;\n  color: rgba(97, 97, 97, var(--tw-text-opacity));\n}\n.css-171wbv4 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.css-171wbv4 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n.css-1km1bze {\n  display: flex;\n  flex-direction: column;\n  -webkit-box-align: center;\n  align-items: center;\n  -webkit-box-pack: center;\n  justify-content: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgba(51, 51, 51, var(--tw-text-opacity));\n}\n.css-1v4n890 {\n  display: block;\n  margin-bottom: 0.25rem;\n  line-height: 1.375;\n  --tw-text-opacity: 1;\n  color: rgba(97, 97, 97, var(--tw-text-opacity));\n} \n.css-1trayuc {\n  width: 8rem;\n  fill: currentcolor;\n}\n          ",
          }}
        />

        <style>
          {`.dark .blog-footer-area{
              background-color: #333;
              border-color: #424242;
              color: #9e9e9e;
            }
            .dark .blog-footer-credits p{
              color: #bdbdbd;
            }
            .dark #hn-dark-logo{
              color: #fff;
            }
            `}
        </style>
        <style id="style"></style>
      </>
    </div>
  );
};

export default homepage;
