import React, { useEffect } from "react";

const article = ({ data }) => {
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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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
      <link
        rel="canonical"
        href="https://Saviotesting.hashnode.dev/demo-title-for-styler"
        itemProp="url"
      />
      <title>Demo Title for Styler ✌️</title>
      <meta
        name="description"
        content="Subtitle Example."
        itemProp="description"
      />
      <meta
        property="og:title"
        content="Demo Title for Styler ✌️"
        itemProp="name"
      />
      <meta property="og:description" content="Subtitle Example." />
      <meta property="og:site_name" content="Savio's Blog" />
      <meta property="og:type" content="article" />
      <meta
        property="og:url"
        content="https://Saviotesting.hashnode.dev/demo-title-for-styler"
      />
      <meta
        name="image"
        property="og:image"
        content="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629395719097%2FyM_neaoo7.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng"
        itemProp="image"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="https://cdn.hashnode.com/res/hashnode/image/upload/v1611242155728/W3_BYVVVh.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="https://cdn.hashnode.com/res/hashnode/image/upload/v1611242173172/AOX1gE2jc.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="https://cdn.hashnode.com/res/hashnode/image/upload/v1611242187756/TRTNYp32O.png"
      />
      <link
        rel="mask-icon"
        href="/static/images/brand/safari-pinned-tab-new.svg"
        color="#2962ff"
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#f6f7fb" />
      <meta property="twitter:card" content="sumSavio_large_image" />
      <meta property="twitter:title" content="Demo Title for Styler ✌️" />
      <meta property="twitter:description" content="Subtitle Example." />
      <meta
        property="twitter:image"
        content="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629395719097%2FyM_neaoo7.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "/* Monkai theme */\n          .hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}\n            /* Monkai theme ends */",
        }}
      />
      <meta name="next-head-count" content={22} />
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
        data-emotion="css qcu6iv"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-qcu6iv{position:relative;z-index:50;border-bottom-width:1px;}.dark .css-qcu6iv{--tw-border-opacity:1;border-color:rgba(31, 41, 55, var(--tw-border-opacity));}",
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
          __html: ".css-1fjoo34{width:1.5rem;height:1.5rem;fill:currentColor;}",
        }}
      />
      <style
        data-emotion="css 17mdxl4"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-17mdxl4{width:1.5rem;height:1.5rem;fill:currentColor;}",
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
        data-emotion="css baperf"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-baperf{display:block;padding-top:0.75rem;padding-bottom:0.75rem;font-weight:600;transition-property:background-color,border-color,color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:100ms;padding-left:0.75rem;padding-right:0.75rem;border-top-left-radius:0.5rem;border-top-right-radius:0.5rem;opacity:0.75;}.css-baperf:hover{opacity:1;}.css-baperf:hover{background-color:rgba(0,0,0,.1);}.dark .css-baperf:hover{background-color:rgba(255,255,255,.2);}",
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
        data-emotion="css 78a8kl"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-78a8kl{position:relative;z-index:40;}",
        }}
      />
      <style
        data-emotion="css 9slcbn"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-9slcbn{padding-bottom:6rem;}",
        }}
      />
      <style
        data-emotion="css m96uju"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-m96uju{position:relative;z-index:40;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}",
        }}
      />
      <style
        data-emotion="css 1ffmpwz"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1ffmpwz{position:relative;z-index:20;padding-left:1rem;padding-right:1rem;margin-bottom:2.5rem;}@media (min-width: 768px){.css-1ffmpwz{z-index:10;}}@media (min-width: 1280px){.css-1ffmpwz{padding-left:0px;padding-right:3rem;}}",
        }}
      />
      <style
        data-emotion="css 1jqt27n"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-1jqt27n{display:block;width:100%;margin-bottom:0px;}",
        }}
      />
      <style
        data-emotion="css csc6hy"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            '.css-csc6hy{margin-top:2.5rem;line-height:1.75;letter-spacing:-0.025em;color:#111;max-width:65ch;font-size:1rem;overflow-wrap:break-word;margin-bottom:0.5rem;}.css-csc6hy [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.css-csc6hy a{color:#111;-webkit-text-decoration:underline;text-decoration:underline;font-weight:500;}.css-csc6hy a .user-mention{-webkit-text-decoration:none;text-decoration:none;color:#2962ff;}.css-csc6hy strong{color:#111827;font-weight:600;}.css-csc6hy ol[type="A"]{--list-counter-style:upper-alpha;}.css-csc6hy ol[type="a"]{--list-counter-style:lower-alpha;}.css-csc6hy ol[type="A s"]{--list-counter-style:upper-alpha;}.css-csc6hy ol[type="a s"]{--list-counter-style:lower-alpha;}.css-csc6hy ol[type="I"]{--list-counter-style:upper-roman;}.css-csc6hy ol[type="i"]{--list-counter-style:lower-roman;}.css-csc6hy ol[type="I s"]{--list-counter-style:upper-roman;}.css-csc6hy ol[type="i s"]{--list-counter-style:lower-roman;}.css-csc6hy ol[type="1"]{--list-counter-style:decimal;}.css-csc6hy ol>li{position:relative;padding-left:1.75em;}.css-csc6hy ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0;}.css-csc6hy ul>li{position:relative;padding-left:1.75em;}.css-csc6hy ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em;}.css-csc6hy hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em;}.css-csc6hy blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.css-csc6hy blockquote p:first-of-type::before{content:open-quote;}.css-csc6hy blockquote p:last-of-type::after{content:close-quote;}.css-csc6hy h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.css-csc6hy h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.css-csc6hy h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.css-csc6hy h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.css-csc6hy figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.css-csc6hy code{color:#111827;font-weight:600;font-size:0.875em;}.css-csc6hy code::after{display:none;content:"`";}.css-csc6hy code::before{display:none;content:"`";}.css-csc6hy a code{color:#111827;}.css-csc6hy pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.css-csc6hy pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.css-csc6hy pre code::before{content:none;}.css-csc6hy pre code::after{content:none;}.css-csc6hy table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.css-csc6hy thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db;}.css-csc6hy thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-csc6hy tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb;}.css-csc6hy tbody tr:last-child{border-bottom-width:0;}.css-csc6hy tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-csc6hy p{margin-top:1.25em;margin-bottom:1.25em;}.css-csc6hy img{margin-top:2em;margin-bottom:2em;}.css-csc6hy video{margin-top:2em;margin-bottom:2em;}.css-csc6hy figure{margin-top:2em;margin-bottom:2em;}.css-csc6hy figure>*{margin-top:0;margin-bottom:0;}.css-csc6hy h2 code{font-size:0.875em;}.css-csc6hy h3 code{font-size:0.9em;}.css-csc6hy ol{margin-top:1.25em;margin-bottom:1.25em;}.css-csc6hy ul{margin-top:1.25em;margin-bottom:1.25em;}.css-csc6hy li{margin-top:0.5em;margin-bottom:0.5em;}.css-csc6hy >ul>li p{margin-top:0.75em;margin-bottom:0.75em;}.css-csc6hy >ul>li>*:first-child{margin-top:1.25em;}.css-csc6hy >ul>li>*:last-child{margin-bottom:1.25em;}.css-csc6hy >ol>li>*:first-child{margin-top:1.25em;}.css-csc6hy >ol>li>*:last-child{margin-bottom:1.25em;}.css-csc6hy ul ul{margin-top:0.75em;margin-bottom:0.75em;}.css-csc6hy ul ol{margin-top:0.75em;margin-bottom:0.75em;}.css-csc6hy ol ul{margin-top:0.75em;margin-bottom:0.75em;}.css-csc6hy ol ol{margin-top:0.75em;margin-bottom:0.75em;}.css-csc6hy hr+*{margin-top:0;}.css-csc6hy h2+*{margin-top:0;}.css-csc6hy h3+*{margin-top:0;}.css-csc6hy h4+*{margin-top:0;}.css-csc6hy thead th:first-child{padding-left:0;}.css-csc6hy thead th:last-child{padding-right:0;}.css-csc6hy tbody td:first-child{padding-left:0;}.css-csc6hy tbody td:last-child{padding-right:0;}.css-csc6hy >:first-child{margin-top:0;}.css-csc6hy >:last-child{margin-bottom:0;}.css-csc6hy details{border:1px solid rgba(204, 214, 221, .5);border-radius:4px;padding:.5em .5em 0;}.css-csc6hy sumSavio{font-weight:bold;margin:-.5em -.5em 0;padding:.5em;}.css-csc6hy kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0, 0, 0, .2),0 2px 0 0 rgba(255, 255, 255, .7) inset;color:#333;display:inline-block;font-size:.85em;font-weight:700;line-weight:1;padding:2px 4px;white-space:nowrap;}.css-csc6hy abbr{font-style:italic;}.css-csc6hy dt{font-weight:bold;}.css-csc6hy dd{margin-bottom:1rem;-webkit-margin-start:1rem;margin-inline-start:1rem;}.dark .css-csc6hy{color:#fafafa;}.dark .css-csc6hy a{color:#fafafa;}.dark .css-csc6hy kbd{background-color:#444;border:1px solid #757575;color:#FFF;}.dark .css-csc6hy strong{color:#fafafa;}.dark .css-csc6hy ol>li::before{color:#bdbdbd;}.dark .css-csc6hy blockquote{color:#bdbdbd;}.dark .css-csc6hy h1{color:#fafafa;}.dark .css-csc6hy h2{color:#fafafa;}.dark .css-csc6hy h3{color:#fafafa;}.dark .css-csc6hy h4{color:#fafafa;}.dark .css-csc6hy figure figcaption{color:#bdbdbd;}.dark .css-csc6hy code{color:#fafafa;background-color:#1f2937;}.dark .css-csc6hy a code{color:#fafafa;}.dark .css-csc6hy pre{color:#fafafa;}.dark .css-csc6hy pre code{color:#fafafa;background-color:transparent;}.dark .css-csc6hy thead{color:#fafafa;}@media (min-width: 1024px){.css-csc6hy{font-size:1.125rem;line-height:1.7777778;}.css-csc6hy p{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-csc6hy [class~="lead"]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em;}.css-csc6hy blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em;}.css-csc6hy h1{font-size:1.8em;margin-top:0;margin-bottom:0.8333333em;line-height:1.2;}.css-csc6hy h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333;}.css-csc6hy h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:0.6666667em;line-height:1.5;}.css-csc6hy h4{margin-top:1.7777778em;margin-bottom:0.4444444em;line-height:1.5555556;}.css-csc6hy img{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-csc6hy video{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-csc6hy figure{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-csc6hy figure>*{margin-top:0;margin-bottom:0;}.css-csc6hy figure figcaption{font-size:0.8888889em;line-height:1.5;margin-top:1em;}.css-csc6hy code{font-size:0.8888889em;}.css-csc6hy h2 code{font-size:0.8666667em;}.css-csc6hy h3 code{font-size:0.875em;}.css-csc6hy pre{font-size:0.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:0.375rem;padding-top:1em;padding-right:1.5em;padding-bottom:1em;padding-left:1.5em;}.css-csc6hy ol{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-csc6hy ul{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-csc6hy li{margin-top:0.6666667em;margin-bottom:0.6666667em;}.css-csc6hy ol>li{padding-left:1.6666667em;}.css-csc6hy ol>li::before{left:0;}.css-csc6hy ul>li{padding-left:1.6666667em;}.css-csc6hy ul>li::before{width:0.3333333em;height:0.3333333em;top:calc(0.8888889em - 0.1666667em);left:0.2222222em;}.css-csc6hy >ul>li p{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-csc6hy >ul>li>*:first-child{margin-top:1.3333333em;}.css-csc6hy >ul>li>*:last-child{margin-bottom:1.3333333em;}.css-csc6hy >ol>li>*:first-child{margin-top:1.3333333em;}.css-csc6hy >ol>li>*:last-child{margin-bottom:1.3333333em;}.css-csc6hy ul ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-csc6hy ul ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-csc6hy ol ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-csc6hy ol ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-csc6hy hr{margin-top:3.1111111em;margin-bottom:3.1111111em;}.css-csc6hy hr+*{margin-top:0;}.css-csc6hy h2+*{margin-top:0;}.css-csc6hy h3+*{margin-top:0;}.css-csc6hy h4+*{margin-top:0;}.css-csc6hy table{font-size:0.8888889em;line-height:1.5;}.css-csc6hy thead th{padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-csc6hy thead th:first-child{padding-left:0;}.css-csc6hy thead th:last-child{padding-right:0;}.css-csc6hy tbody td{padding-top:0.75em;padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-csc6hy tbody td:first-child{padding-left:0;}.css-csc6hy tbody td:last-child{padding-right:0;}.css-csc6hy >:first-child{margin-top:0;}.css-csc6hy >:last-child{margin-bottom:0;}}@media (min-width: 1280px){.css-csc6hy{font-size:1.25rem;line-height:1.8;}.css-csc6hy p{margin-top:1.2em;margin-bottom:1.2em;}.css-csc6hy [class~="lead"]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em;}.css-csc6hy blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em;}.css-csc6hy h1{font-size:2em;margin-top:0;margin-bottom:0.8571429em;line-height:1.2;}.css-csc6hy h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:0.8888889em;line-height:1.1111111;}.css-csc6hy h3{font-size:1.5em;margin-top:1.6em;margin-bottom:0.6666667em;line-height:1.3333333;}.css-csc6hy h4{margin-top:1.8em;margin-bottom:0.6em;line-height:1.6;}.css-csc6hy img{margin-top:2em;margin-bottom:2em;}.css-csc6hy video{margin-top:2em;margin-bottom:2em;}.css-csc6hy figure{margin-top:2em;margin-bottom:2em;}.css-csc6hy figure>*{margin-top:0;margin-bottom:0;}.css-csc6hy figure figcaption{font-size:0.9em;line-height:1.5555556;margin-top:1em;}.css-csc6hy code{font-size:0.9em;}.css-csc6hy h2 code{font-size:0.8611111em;}.css-csc6hy h3 code{font-size:0.9em;}.css-csc6hy pre{font-size:0.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:0.5rem;padding-top:1.1111111em;padding-right:1.3333333em;padding-bottom:1.1111111em;padding-left:1.3333333em;}.css-csc6hy ol{margin-top:1.2em;margin-bottom:1.2em;}.css-csc6hy ul{margin-top:1.2em;margin-bottom:1.2em;}.css-csc6hy li{margin-top:0.6em;margin-bottom:0.6em;}.css-csc6hy ol>li{padding-left:1.8em;}.css-csc6hy ol>li::before{left:0;}.css-csc6hy ul>li{padding-left:1.8em;}.css-csc6hy ul>li::before{width:0.35em;height:0.35em;top:calc(0.9em - 0.175em);left:0.25em;}.css-csc6hy >ul>li p{margin-top:0.8em;margin-bottom:0.8em;}.css-csc6hy >ul>li>*:first-child{margin-top:1.2em;}.css-csc6hy >ul>li>*:last-child{margin-bottom:1.2em;}.css-csc6hy >ol>li>*:first-child{margin-top:1.2em;}.css-csc6hy >ol>li>*:last-child{margin-bottom:1.2em;}.css-csc6hy ul ul{margin-top:0.8em;margin-bottom:0.8em;}.css-csc6hy ul ol{margin-top:0.8em;margin-bottom:0.8em;}.css-csc6hy ol ul{margin-top:0.8em;margin-bottom:0.8em;}.css-csc6hy ol ol{margin-top:0.8em;margin-bottom:0.8em;}.css-csc6hy hr{margin-top:2.8em;margin-bottom:2.8em;}.css-csc6hy hr+*{margin-top:0;}.css-csc6hy h2+*{margin-top:0;}.css-csc6hy h3+*{margin-top:0;}.css-csc6hy h4+*{margin-top:0;}.css-csc6hy table{font-size:0.9em;line-height:1.5555556;}.css-csc6hy thead th{padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.css-csc6hy thead th:first-child{padding-left:0;}.css-csc6hy thead th:last-child{padding-right:0;}.css-csc6hy tbody td{padding-top:0.8888889em;padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.css-csc6hy tbody td:first-child{padding-left:0;}.css-csc6hy tbody td:last-child{padding-right:0;}.css-csc6hy >:first-child{margin-top:0;}.css-csc6hy >:last-child{margin-bottom:0;}}',
        }}
      />
      <style
        data-emotion="css hj8uh5"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-hj8uh5{margin-bottom:2.5rem;}",
        }}
      />
      <style
        data-emotion="css n9m7tc"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-n9m7tc{font-size:1.5rem;line-height:1.375;letter-spacing:-0.025em;--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity));}.dark .css-n9m7tc{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css zd4cjh"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-zd4cjh{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:1.25rem;margin-top:-1.25rem;}",
        }}
      />
      <style
        data-emotion="css 1pt9cni"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1pt9cni{position:relative;z-index:10;padding-top:1.25rem;padding-bottom:1.25rem;margin-bottom:1.25rem;border-top-width:1px;border-bottom-width:1px;}.dark .css-1pt9cni{--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}@media (min-width: 768px){.css-1pt9cni{margin-bottom:2.5rem;}}",
        }}
      />
      <style
        data-emotion="css 4c6dm7"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-4c6dm7{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;}",
        }}
      />
      <style
        data-emotion="css 12sdugl"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-12sdugl{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}@media (min-width: 768px){.css-12sdugl{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}}",
        }}
      />
      <style
        data-emotion="css nbo283"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-nbo283{width:3rem;height:3rem;margin-right:0.5rem;overflow:hidden;border-radius:9999px;}@media (min-width: 768px){.css-nbo283{width:4rem;height:4rem;margin-right:1.25rem;}}",
        }}
      />
      <style
        data-emotion="css 34p3w6"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-34p3w6{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-34p3w6{--tw-bg-opacity:1;background-color:rgba(24, 25, 26, var(--tw-bg-opacity));}",
        }}
      />
      <style
        data-emotion="css mi6gjf"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-mi6gjf{display:block;width:100%;height:100%;position:relative;}",
        }}
      />
      <style
        data-emotion="css f4162x"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-f4162x{display:block;width:100%;border-radius:9999px;z-index:20;position:relative;}",
        }}
      />
      <style
        data-emotion="css 1k5pqev"
        data-s
        dangerouslySetInnerHTML={{ __html: ".css-1k5pqev{line-height:1.375;}" }}
      />
      <style
        data-emotion="css 51a556"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-51a556{margin-bottom:0.25rem;font-size:1.125rem;line-height:1.75rem;font-weight:700;--tw-text-opacity:1;color:rgba(51, 51, 51, var(--tw-text-opacity));}.dark .css-51a556{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 1dyl29k"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1dyl29k{margin-bottom:0.5rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity));}.dark .css-1dyl29k{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 16ceglb"
        data-s
        dangerouslySetInnerHTML={{ __html: ".css-16ceglb{font-weight:600;}" }}
      />
      <style
        data-emotion="css fhxb3m"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-fhxb3m{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",
        }}
      />
      <style
        data-emotion="css tb6s22"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-tb6s22{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:0.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(117, 117, 117, var(--tw-text-opacity));}.dark .css-tb6s22{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
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
        data-emotion="css bjn8wh"
        data-s
        dangerouslySetInnerHTML={{ __html: ".css-bjn8wh{position:relative;}" }}
      />
      <style
        data-emotion="css 1wbxjo6"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            '.css-1wbxjo6{margin-left:auto;margin-right:auto;margin-bottom:2.5rem;letter-spacing:-0.025em;color:#111;max-width:65ch;font-size:1rem;line-height:1.75;overflow-wrap:break-word;min-height:30vh;}.css-1wbxjo6 [class~="lead"]{color:#4b5563;font-size:1.25em;line-height:1.6;margin-top:1.2em;margin-bottom:1.2em;}.css-1wbxjo6 a{color:#111;-webkit-text-decoration:underline;text-decoration:underline;font-weight:500;}.css-1wbxjo6 a .user-mention{-webkit-text-decoration:none;text-decoration:none;color:#2962ff;}.css-1wbxjo6 strong{color:#111827;font-weight:600;}.css-1wbxjo6 ol[type="A"]{--list-counter-style:upper-alpha;}.css-1wbxjo6 ol[type="a"]{--list-counter-style:lower-alpha;}.css-1wbxjo6 ol[type="A s"]{--list-counter-style:upper-alpha;}.css-1wbxjo6 ol[type="a s"]{--list-counter-style:lower-alpha;}.css-1wbxjo6 ol[type="I"]{--list-counter-style:upper-roman;}.css-1wbxjo6 ol[type="i"]{--list-counter-style:lower-roman;}.css-1wbxjo6 ol[type="I s"]{--list-counter-style:upper-roman;}.css-1wbxjo6 ol[type="i s"]{--list-counter-style:lower-roman;}.css-1wbxjo6 ol[type="1"]{--list-counter-style:decimal;}.css-1wbxjo6 ol>li{position:relative;padding-left:1.75em;}.css-1wbxjo6 ol>li::before{content:counter(list-item, var(--list-counter-style, decimal)) ".";position:absolute;font-weight:400;color:#6b7280;left:0;}.css-1wbxjo6 ul>li{position:relative;padding-left:1.75em;}.css-1wbxjo6 ul>li::before{content:"";position:absolute;background-color:#d1d5db;border-radius:50%;width:0.375em;height:0.375em;top:calc(0.875em - 0.1875em);left:0.25em;}.css-1wbxjo6 hr{border-color:#e5e7eb;border-top-width:1px;margin-top:3em;margin-bottom:3em;}.css-1wbxjo6 blockquote{font-weight:500;font-style:italic;color:#111827;border-left-width:0.25rem;border-left-color:#e5e7eb;quotes:"\\201C""\\201D""\\2018""\\2019";margin-top:1.6em;margin-bottom:1.6em;padding-left:1em;}.css-1wbxjo6 blockquote p:first-of-type::before{content:open-quote;}.css-1wbxjo6 blockquote p:last-of-type::after{content:close-quote;}.css-1wbxjo6 h1{color:#111827;font-weight:800;font-size:2.25em;margin-top:0;margin-bottom:0.8888889em;line-height:1.1111111;}.css-1wbxjo6 h2{color:#111827;font-weight:700;font-size:1.5em;margin-top:2em;margin-bottom:1em;line-height:1.3333333;}.css-1wbxjo6 h3{color:#111827;font-weight:600;font-size:1.25em;margin-top:1.6em;margin-bottom:0.6em;line-height:1.6;}.css-1wbxjo6 h4{color:#111827;font-weight:600;margin-top:1.5em;margin-bottom:0.5em;line-height:1.5;}.css-1wbxjo6 figure figcaption{color:#6b7280;font-size:0.875em;line-height:1.4285714;margin-top:0.8571429em;}.css-1wbxjo6 code{color:#111827;font-weight:600;font-size:0.875em;}.css-1wbxjo6 code::after{display:none;content:"`";}.css-1wbxjo6 code::before{display:none;content:"`";}.css-1wbxjo6 a code{color:#111827;}.css-1wbxjo6 pre{color:#e5e7eb;background-color:#1f2937;overflow-x:auto;font-size:0.875em;line-height:1.7142857;margin-top:1.7142857em;margin-bottom:1.7142857em;border-radius:0.375rem;padding-top:0.8571429em;padding-right:1.1428571em;padding-bottom:0.8571429em;padding-left:1.1428571em;}.css-1wbxjo6 pre code{background-color:transparent;border-width:0;border-radius:0;padding:0;font-weight:400;color:inherit;font-size:inherit;font-family:inherit;line-height:inherit;}.css-1wbxjo6 pre code::before{content:none;}.css-1wbxjo6 pre code::after{content:none;}.css-1wbxjo6 table{width:100%;table-layout:auto;text-align:left;margin-top:2em;margin-bottom:2em;font-size:0.875em;line-height:1.7142857;}.css-1wbxjo6 thead{color:#111827;font-weight:600;border-bottom-width:1px;border-bottom-color:#d1d5db;}.css-1wbxjo6 thead th{vertical-align:bottom;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-1wbxjo6 tbody tr{border-bottom-width:1px;border-bottom-color:#e5e7eb;}.css-1wbxjo6 tbody tr:last-child{border-bottom-width:0;}.css-1wbxjo6 tbody td{vertical-align:top;padding-top:0.5714286em;padding-right:0.5714286em;padding-bottom:0.5714286em;padding-left:0.5714286em;}.css-1wbxjo6 p{margin-top:1.25em;margin-bottom:1.25em;}.css-1wbxjo6 img{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 video{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 figure{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 figure>*{margin-top:0;margin-bottom:0;}.css-1wbxjo6 h2 code{font-size:0.875em;}.css-1wbxjo6 h3 code{font-size:0.9em;}.css-1wbxjo6 ol{margin-top:1.25em;margin-bottom:1.25em;}.css-1wbxjo6 ul{margin-top:1.25em;margin-bottom:1.25em;}.css-1wbxjo6 li{margin-top:0.5em;margin-bottom:0.5em;}.css-1wbxjo6 >ul>li p{margin-top:0.75em;margin-bottom:0.75em;}.css-1wbxjo6 >ul>li>*:first-child{margin-top:1.25em;}.css-1wbxjo6 >ul>li>*:last-child{margin-bottom:1.25em;}.css-1wbxjo6 >ol>li>*:first-child{margin-top:1.25em;}.css-1wbxjo6 >ol>li>*:last-child{margin-bottom:1.25em;}.css-1wbxjo6 ul ul{margin-top:0.75em;margin-bottom:0.75em;}.css-1wbxjo6 ul ol{margin-top:0.75em;margin-bottom:0.75em;}.css-1wbxjo6 ol ul{margin-top:0.75em;margin-bottom:0.75em;}.css-1wbxjo6 ol ol{margin-top:0.75em;margin-bottom:0.75em;}.css-1wbxjo6 hr+*{margin-top:0;}.css-1wbxjo6 h2+*{margin-top:0;}.css-1wbxjo6 h3+*{margin-top:0;}.css-1wbxjo6 h4+*{margin-top:0;}.css-1wbxjo6 thead th:first-child{padding-left:0;}.css-1wbxjo6 thead th:last-child{padding-right:0;}.css-1wbxjo6 tbody td:first-child{padding-left:0;}.css-1wbxjo6 tbody td:last-child{padding-right:0;}.css-1wbxjo6 >:first-child{margin-top:0;}.css-1wbxjo6 >:last-child{margin-bottom:0;}.css-1wbxjo6 details{border:1px solid rgba(204, 214, 221, .5);border-radius:4px;padding:.5em .5em 0;}.css-1wbxjo6 sumSavio{font-weight:bold;margin:-.5em -.5em 0;padding:.5em;}.css-1wbxjo6 kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0, 0, 0, .2),0 2px 0 0 rgba(255, 255, 255, .7) inset;color:#333;display:inline-block;font-size:.85em;font-weight:700;line-weight:1;padding:2px 4px;white-space:nowrap;}.css-1wbxjo6 abbr{font-style:italic;}.css-1wbxjo6 dt{font-weight:bold;}.css-1wbxjo6 dd{margin-bottom:1rem;-webkit-margin-start:1rem;margin-inline-start:1rem;}.dark .css-1wbxjo6{color:#fafafa;}.dark .css-1wbxjo6 a{color:#fafafa;}.dark .css-1wbxjo6 kbd{background-color:#444;border:1px solid #757575;color:#FFF;}.dark .css-1wbxjo6 strong{color:#fafafa;}.dark .css-1wbxjo6 ol>li::before{color:#bdbdbd;}.dark .css-1wbxjo6 blockquote{color:#bdbdbd;}.dark .css-1wbxjo6 h1{color:#fafafa;}.dark .css-1wbxjo6 h2{color:#fafafa;}.dark .css-1wbxjo6 h3{color:#fafafa;}.dark .css-1wbxjo6 h4{color:#fafafa;}.dark .css-1wbxjo6 figure figcaption{color:#bdbdbd;}.dark .css-1wbxjo6 code{color:#fafafa;background-color:#1f2937;}.dark .css-1wbxjo6 a code{color:#fafafa;}.dark .css-1wbxjo6 pre{color:#fafafa;}.dark .css-1wbxjo6 pre code{color:#fafafa;background-color:transparent;}.dark .css-1wbxjo6 thead{color:#fafafa;}@media (min-width: 1024px){.css-1wbxjo6{font-size:1.125rem;line-height:1.7777778;}.css-1wbxjo6 p{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-1wbxjo6 [class~="lead"]{font-size:1.2222222em;line-height:1.4545455;margin-top:1.0909091em;margin-bottom:1.0909091em;}.css-1wbxjo6 blockquote{margin-top:1.6666667em;margin-bottom:1.6666667em;padding-left:1em;}.css-1wbxjo6 h1{font-size:1.8em;margin-top:0;margin-bottom:0.8333333em;line-height:1.2;}.css-1wbxjo6 h2{font-size:1.6666667em;margin-top:1.8666667em;margin-bottom:1.0666667em;line-height:1.3333333;}.css-1wbxjo6 h3{font-size:1.3333333em;margin-top:1.6666667em;margin-bottom:0.6666667em;line-height:1.5;}.css-1wbxjo6 h4{margin-top:1.7777778em;margin-bottom:0.4444444em;line-height:1.5555556;}.css-1wbxjo6 img{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-1wbxjo6 video{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-1wbxjo6 figure{margin-top:1.7777778em;margin-bottom:1.7777778em;}.css-1wbxjo6 figure>*{margin-top:0;margin-bottom:0;}.css-1wbxjo6 figure figcaption{font-size:0.8888889em;line-height:1.5;margin-top:1em;}.css-1wbxjo6 code{font-size:0.8888889em;}.css-1wbxjo6 h2 code{font-size:0.8666667em;}.css-1wbxjo6 h3 code{font-size:0.875em;}.css-1wbxjo6 pre{font-size:0.8888889em;line-height:1.75;margin-top:2em;margin-bottom:2em;border-radius:0.375rem;padding-top:1em;padding-right:1.5em;padding-bottom:1em;padding-left:1.5em;}.css-1wbxjo6 ol{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-1wbxjo6 ul{margin-top:1.3333333em;margin-bottom:1.3333333em;}.css-1wbxjo6 li{margin-top:0.6666667em;margin-bottom:0.6666667em;}.css-1wbxjo6 ol>li{padding-left:1.6666667em;}.css-1wbxjo6 ol>li::before{left:0;}.css-1wbxjo6 ul>li{padding-left:1.6666667em;}.css-1wbxjo6 ul>li::before{width:0.3333333em;height:0.3333333em;top:calc(0.8888889em - 0.1666667em);left:0.2222222em;}.css-1wbxjo6 >ul>li p{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-1wbxjo6 >ul>li>*:first-child{margin-top:1.3333333em;}.css-1wbxjo6 >ul>li>*:last-child{margin-bottom:1.3333333em;}.css-1wbxjo6 >ol>li>*:first-child{margin-top:1.3333333em;}.css-1wbxjo6 >ol>li>*:last-child{margin-bottom:1.3333333em;}.css-1wbxjo6 ul ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-1wbxjo6 ul ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-1wbxjo6 ol ul{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-1wbxjo6 ol ol{margin-top:0.8888889em;margin-bottom:0.8888889em;}.css-1wbxjo6 hr{margin-top:3.1111111em;margin-bottom:3.1111111em;}.css-1wbxjo6 hr+*{margin-top:0;}.css-1wbxjo6 h2+*{margin-top:0;}.css-1wbxjo6 h3+*{margin-top:0;}.css-1wbxjo6 h4+*{margin-top:0;}.css-1wbxjo6 table{font-size:0.8888889em;line-height:1.5;}.css-1wbxjo6 thead th{padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-1wbxjo6 thead th:first-child{padding-left:0;}.css-1wbxjo6 thead th:last-child{padding-right:0;}.css-1wbxjo6 tbody td{padding-top:0.75em;padding-right:0.75em;padding-bottom:0.75em;padding-left:0.75em;}.css-1wbxjo6 tbody td:first-child{padding-left:0;}.css-1wbxjo6 tbody td:last-child{padding-right:0;}.css-1wbxjo6 >:first-child{margin-top:0;}.css-1wbxjo6 >:last-child{margin-bottom:0;}}@media (min-width: 1280px){.css-1wbxjo6{font-size:1.25rem;line-height:1.8;}.css-1wbxjo6 p{margin-top:1.2em;margin-bottom:1.2em;}.css-1wbxjo6 [class~="lead"]{font-size:1.2em;line-height:1.5;margin-top:1em;margin-bottom:1em;}.css-1wbxjo6 blockquote{margin-top:1.6em;margin-bottom:1.6em;padding-left:1.0666667em;}.css-1wbxjo6 h1{font-size:2em;margin-top:0;margin-bottom:0.8571429em;line-height:1.2;}.css-1wbxjo6 h2{font-size:1.8em;margin-top:1.5555556em;margin-bottom:0.8888889em;line-height:1.1111111;}.css-1wbxjo6 h3{font-size:1.5em;margin-top:1.6em;margin-bottom:0.6666667em;line-height:1.3333333;}.css-1wbxjo6 h4{margin-top:1.8em;margin-bottom:0.6em;line-height:1.6;}.css-1wbxjo6 img{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 video{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 figure{margin-top:2em;margin-bottom:2em;}.css-1wbxjo6 figure>*{margin-top:0;margin-bottom:0;}.css-1wbxjo6 figure figcaption{font-size:0.9em;line-height:1.5555556;margin-top:1em;}.css-1wbxjo6 code{font-size:0.9em;}.css-1wbxjo6 h2 code{font-size:0.8611111em;}.css-1wbxjo6 h3 code{font-size:0.9em;}.css-1wbxjo6 pre{font-size:0.9em;line-height:1.7777778;margin-top:2em;margin-bottom:2em;border-radius:0.5rem;padding-top:1.1111111em;padding-right:1.3333333em;padding-bottom:1.1111111em;padding-left:1.3333333em;}.css-1wbxjo6 ol{margin-top:1.2em;margin-bottom:1.2em;}.css-1wbxjo6 ul{margin-top:1.2em;margin-bottom:1.2em;}.css-1wbxjo6 li{margin-top:0.6em;margin-bottom:0.6em;}.css-1wbxjo6 ol>li{padding-left:1.8em;}.css-1wbxjo6 ol>li::before{left:0;}.css-1wbxjo6 ul>li{padding-left:1.8em;}.css-1wbxjo6 ul>li::before{width:0.35em;height:0.35em;top:calc(0.9em - 0.175em);left:0.25em;}.css-1wbxjo6 >ul>li p{margin-top:0.8em;margin-bottom:0.8em;}.css-1wbxjo6 >ul>li>*:first-child{margin-top:1.2em;}.css-1wbxjo6 >ul>li>*:last-child{margin-bottom:1.2em;}.css-1wbxjo6 >ol>li>*:first-child{margin-top:1.2em;}.css-1wbxjo6 >ol>li>*:last-child{margin-bottom:1.2em;}.css-1wbxjo6 ul ul{margin-top:0.8em;margin-bottom:0.8em;}.css-1wbxjo6 ul ol{margin-top:0.8em;margin-bottom:0.8em;}.css-1wbxjo6 ol ul{margin-top:0.8em;margin-bottom:0.8em;}.css-1wbxjo6 ol ol{margin-top:0.8em;margin-bottom:0.8em;}.css-1wbxjo6 hr{margin-top:2.8em;margin-bottom:2.8em;}.css-1wbxjo6 hr+*{margin-top:0;}.css-1wbxjo6 h2+*{margin-top:0;}.css-1wbxjo6 h3+*{margin-top:0;}.css-1wbxjo6 h4+*{margin-top:0;}.css-1wbxjo6 table{font-size:0.9em;line-height:1.5555556;}.css-1wbxjo6 thead th{padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.css-1wbxjo6 thead th:first-child{padding-left:0;}.css-1wbxjo6 thead th:last-child{padding-right:0;}.css-1wbxjo6 tbody td{padding-top:0.8888889em;padding-right:0.6666667em;padding-bottom:0.8888889em;padding-left:0.6666667em;}.css-1wbxjo6 tbody td:first-child{padding-left:0;}.css-1wbxjo6 tbody td:last-child{padding-right:0;}.css-1wbxjo6 >:first-child{margin-top:0;}.css-1wbxjo6 >:last-child{margin-bottom:0;}}',
        }}
      />
      <style
        data-emotion="css 12n6jp"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-12n6jp{-webkit-flex:1 1 0%;-ms-flex:1 1 0%;flex:1 1 0%;}",
        }}
      />
      <style
        data-emotion="css 16i1tr9"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-16i1tr9{position:absolute;width:0px;height:0px;overflow:hidden;}",
        }}
      />
      <style
        data-emotion="css 1yzq4q2"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1yzq4q2{position:absolute;top:0px;left:0px;width:0px;height:0px;overflow:hidden;}",
        }}
      />
      <style
        data-emotion="css pzj4ej"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-pzj4ej{position:absolute;z-index:50;margin-top:1rem;display:none;}",
        }}
      />
      <style
        data-emotion="css 6oz16o"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-6oz16o{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:1rem;--tw-bg-opacity:1;background-color:rgba(255, 255, 255, var(--tw-bg-opacity));border-width:1px;border-radius:0.5rem;--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow);--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity));--tw-border-opacity:1;border-color:rgba(224, 224, 224, var(--tw-border-opacity));}.dark .css-6oz16o{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(224, 224, 224, var(--tw-text-opacity));--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));}",
        }}
      />
      <style
        data-emotion="css 1gc63p3"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-1gc63p3{display:block;margin-right:0.75rem;}",
        }}
      />
      <style
        data-emotion="css pzw4ir"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-pzw4ir{--tw-text-opacity:1;color:rgba(29, 161, 242, var(--tw-text-opacity));}.dark .css-pzw4ir{--tw-text-opacity:1;color:rgba(29, 161, 242, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css mok5km"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-mok5km{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(29, 161, 242, var(--tw-text-opacity));}.dark .css-mok5km{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-mok5km:disabled{opacity:0.5;}.css-mok5km:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-mok5km:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-mok5km:focus{outline:2px solid transparent;outline-offset:2px;}.dark .css-mok5km{--tw-text-opacity:1;color:rgba(29, 161, 242, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 1jogb9w"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1jogb9w{--tw-text-opacity:1;color:rgba(255, 101, 78, var(--tw-text-opacity));}.dark .css-1jogb9w{--tw-text-opacity:1;color:rgba(255, 101, 78, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 15weny5"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-15weny5{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(255, 101, 78, var(--tw-text-opacity));}.dark .css-15weny5{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-15weny5:disabled{opacity:0.5;}.css-15weny5:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-15weny5:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-15weny5:focus{outline:2px solid transparent;outline-offset:2px;}.dark .css-15weny5{--tw-text-opacity:1;color:rgba(255, 101, 78, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 197yt2c"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-197yt2c{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;}.dark .css-197yt2c{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-197yt2c:disabled{opacity:0.5;}.css-197yt2c:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-197yt2c:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-197yt2c:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css g5d1mf"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-g5d1mf{position:relative;z-index:10;width:100%;}@media (min-width: 768px){.css-g5d1mf{z-index:20;}}@media (min-width: 1280px){.css-g5d1mf{width:10rem;height:100%;}}",
        }}
      />
      <style
        data-emotion="css 1qz4saa"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1qz4saa{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;width:100%;padding-bottom:2.5rem;}@media (min-width: 1280px){.css-1qz4saa{padding-bottom:0px;padding-top:4rem;-webkit-box-pack:start;-ms-flex-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}",
        }}
      />
      <style
        data-emotion="css sm43i1"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-sm43i1{z-index:20;width:100%;}@media (min-width: 1280px){.css-sm43i1{z-index:30;}}",
        }}
      />
      <style
        data-emotion="css yn21pq"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-yn21pq{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-flex-wrap:wrap;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}",
        }}
      />
      <style
        data-emotion="css 18nz7be"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-18nz7be{padding-top:0.25rem;padding-bottom:0.25rem;padding-right:0.5rem;}@media (min-width: 768px){.css-18nz7be{padding-right:0.25rem;}}@media (min-width: 1280px){.css-18nz7be{width:50%;}}",
        }}
      />
      <style
        data-emotion="css 1jve0bf"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1jve0bf{height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}",
        }}
      />
      <style
        data-emotion="css tozgq3"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-tozgq3{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0.5;height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}.dark .css-tozgq3{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-tozgq3:disabled{opacity:0.5;}.css-tozgq3:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-tozgq3:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-tozgq3:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css o6765v"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-o6765v{margin-right:0.25rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:2rem;}",
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
        data-emotion="css 13n4lde"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-13n4lde{position:relative;z-index:30;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-bottom:1.25rem;}@media (min-width: 1280px){.css-13n4lde{margin-top:2.5rem;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;z-index:20;}}",
        }}
      />
      <style
        data-emotion="css 1oe7b48"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1oe7b48{margin-right:1rem;}@media (min-width: 1280px){.css-1oe7b48{margin-bottom:2rem;margin-right:0px;}}",
        }}
      />
      <style
        data-emotion="css x80nqe"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-x80nqe:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css d0b8tw"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-d0b8tw{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dark .css-d0b8tw{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-d0b8tw:disabled{opacity:0.5;}.css-d0b8tw:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-d0b8tw:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-d0b8tw:focus{outline:2px solid transparent;outline-offset:2px;}.css-d0b8tw:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css 1qeko8u"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1qeko8u{width:1.5rem;height:1.5rem;opacity:0.75;fill:currentColor;}",
        }}
      />
      <style
        data-emotion="css gd2y62"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-gd2y62{width:1.5rem;height:1.5rem;opacity:0.75;fill:currentColor;}",
        }}
      />
      <style
        data-emotion="css 1o50nro"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1o50nro{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.dark .css-1o50nro{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-1o50nro:disabled{opacity:0.5;}.css-1o50nro:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-1o50nro:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-1o50nro:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css 1wt4vg7"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1wt4vg7{padding-left:0.75rem;padding-right:0.75rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:1rem;line-height:1.625;font-weight:500;--tw-text-opacity:1;color:rgba(55, 65, 81, var(--tw-text-opacity));border-width:1px;border-color:transparent;border-radius:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:block;}.dark .css-1wt4vg7{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}.css-1wt4vg7:disabled{opacity:0.5;}.css-1wt4vg7:hover{--tw-bg-opacity:1;background-color:rgba(238, 238, 238, var(--tw-bg-opacity));}.dark .css-1wt4vg7:hover{--tw-bg-opacity:1;background-color:rgba(35, 38, 38, var(--tw-bg-opacity));}.css-1wt4vg7:focus{outline:2px solid transparent;outline-offset:2px;}",
        }}
      />
      <style
        data-emotion="css ec6vv8"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-ec6vv8{position:relative;z-index:30;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;}",
        }}
      />
      <style
        data-emotion="css xl2uon"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            "@media (min-width: 1280px){.css-xl2uon{padding-right:3rem;}}",
        }}
      />
      <style
        data-emotion="css 12orxyd"
        data-s
        dangerouslySetInnerHTML={{
          __html: "@media (min-width: 1280px){.css-12orxyd{width:10rem;}}",
        }}
      />
      <style
        data-emotion="css 4dfc6h"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-4dfc6h{padding-top:3rem;padding-bottom:3rem;text-align:center;border-top-width:1px;--tw-bg-opacity:1;background-color:rgba(250, 250, 250, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(66, 66, 66, var(--tw-text-opacity));}.dark .css-4dfc6h{--tw-bg-opacity:1;background-color:rgba(51, 51, 51, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(158, 158, 158, var(--tw-text-opacity));--tw-border-opacity:1;border-color:rgba(66, 66, 66, var(--tw-border-opacity));}",
        }}
      />
      <style
        data-emotion="css z0tjgn"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-z0tjgn{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;margin-bottom:1.25rem;}",
        }}
      />
      <style
        data-emotion="css 2559wl"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-2559wl{margin-right:1rem;font-size:0.875rem;line-height:1.375;--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity));}.dark .css-2559wl{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 171wbv4"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-171wbv4{padding-left:0.5rem;padding-right:0.5rem;}",
        }}
      />
      <style
        data-emotion="css 1km1bze"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1km1bze{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;-webkit-justify-content:center;justify-content:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(51, 51, 51, var(--tw-text-opacity));}.dark .css-1km1bze{--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 1v4n890"
        data-s
        dangerouslySetInnerHTML={{
          __html:
            ".css-1v4n890{display:block;margin-bottom:0.25rem;line-height:1.375;--tw-text-opacity:1;color:rgba(97, 97, 97, var(--tw-text-opacity));}.dark .css-1v4n890{--tw-text-opacity:1;color:rgba(189, 189, 189, var(--tw-text-opacity));}",
        }}
      />
      <style
        data-emotion="css 5l2a7j"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-5l2a7j{width:8rem;fill:currentColor;}",
        }}
      />
      <style
        data-emotion="css 1trayuc"
        data-s
        dangerouslySetInnerHTML={{
          __html: ".css-1trayuc{width:8rem;fill:currentColor;}",
        }}
      />
      <style
        data-emotion="css"
        data-s
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            '\nbutton.btn[data-v-20e3b604]{display:inline-block;font-weight:300;line-height:1.25;text-align:center;white-space:nowrap;vertical-align:middle;user-select:none;border:1px solid transparent;cursor:pointer;letter-spacing:1px;transition:all .15s ease\n}\nbutton.btn.btn-sm[data-v-20e3b604]{padding:.4rem .8rem;font-size:.8rem;border-radius:.2rem\n}\nbutton.btn.btn-priSavio[data-v-20e3b604]{color:#fff;background-color:#45C8F1;border-color:#45C8F1\n}\nbutton.btn.btn-outline-priSavio[data-v-20e3b604]{color:#45C8F1;background-color:transparent;border-color:#45C8F1\n}\nbutton.btn.btn-danger[data-v-20e3b604]{color:#fff;background-color:#FF4949;border-color:#FF4949\n}\n.text-muted[data-v-20e3b604]{color:#8492A6\n}\n.text-center[data-v-20e3b604]{text-align:center\n}\n.drop-down-enter[data-v-20e3b604],.drop-down-leave-to[data-v-20e3b604]{transform:translateX(0) translateY(-20px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0\n}\n.drop-down-enter-active[data-v-20e3b604],.drop-down-leave-active[data-v-20e3b604]{transition:all .15s\n}\n.move-left-enter[data-v-20e3b604],.move-left-leave-to[data-v-20e3b604]{transform:translateY(0) translateX(-80px);transition-timing-function:cubic-bezier(0.74, 0.04, 0.26, 1.05);opacity:0\n}\n.move-left-enter-active[data-v-20e3b604],.move-left-leave-active[data-v-20e3b604]{transition:all .15s\n}\n.no-tr[data-v-20e3b604]{transition:none !important\n}\n.no-tr *[data-v-20e3b604]{transition:none !important\n}\n.overlay[data-v-20e3b604]{position:fixed;background:rgba(220,220,220,0.8);display:flex;align-items:center;justify-content:center;top:0;left:0;right:0;bottom:0;transition:all 0.2s ease;opacity:0;visibility:hidden\n}\n.overlay .modal[data-v-20e3b604]{transition:all 0.2s ease;opacity:0;transform:scale(0.6);overflow:hidden\n}\n.overlay.show[data-v-20e3b604]{opacity:1;visibility:visible\n}\n.overlay.show .modal[data-v-20e3b604]{opacity:1;transform:scale(1)\n}\n.panel[data-v-20e3b604]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;transition:all 0.07s ease-in-out\n}\n.btn[data-v-20e3b604]{cursor:pointer;box-sizing:border-box\n}\n.light-btn[data-v-20e3b604]{padding:6px 10px;display:flex;width:100%;box-sizing:border-box;align-items:center;border-radius:4px;position:relative;border:1px solid #eaf7ff;background:#f7fcff;outline:none;cursor:pointer;transition:all 0.07s ease-in-out\n}\n.light-btn[data-v-20e3b604]:hover{background:#e0f4ff;border-color:#8acfff\n}\n.shake[data-v-20e3b604]{animation:shake-data-v-20e3b604 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform:translate3d(0, 0, 0)\n}\n@keyframes shake-data-v-20e3b604{\n10%,90%{transform:translate3d(-1px, 0, 0)\n}\n20%,80%{transform:translate3d(2px, 0, 0)\n}\n30%,50%,70%{transform:translate3d(-4px, 0, 0)\n}\n40%,60%{transform:translate3d(4px, 0, 0)\n}\n}\n.pulse[data-v-20e3b604]{animation:pulse-data-v-20e3b604 2s ease infinite\n}\n@keyframes pulse-data-v-20e3b604{\n0%{opacity:.7\n}\n50%{opacity:.4\n}\n100%{opacity:.7\n}\n}\n.flash-once[data-v-20e3b604]{animation:flash-once 3.5s ease 1\n}\n@keyframes fade-up-data-v-20e3b604{\n0%{transform:translate3d(0, 10px, 0);opacity:0\n}\n100%{transform:translate3d(0, 0, 0);opacity:1\n}\n}\n.fade-in[data-v-20e3b604]{animation:fade-in-data-v-20e3b604 .3s ease-in-out\n}\n@keyframes fade-in-data-v-20e3b604{\n0%{opacity:0\n}\n100%{opacity:1\n}\n}\n.spin[data-v-20e3b604]{animation-name:spin-data-v-20e3b604;animation-duration:2000ms;animation-iteration-count:infinite;animation-timing-function:linear\n}\n@keyframes spin-data-v-20e3b604{\nfrom{transform:rotate(0deg)\n}\nto{transform:rotate(360deg)\n}\n}\n.bounceIn[data-v-20e3b604]{animation-name:bounceIn-data-v-20e3b604;transform-origin:center bottom;animation-duration:1s;animation-fill-mode:both;animation-iteration-count:1\n}\n@keyframes bounceIn-data-v-20e3b604{\n0%,20%,40%,60%,80%,100%{-webkit-transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)\n}\n0%{opacity:1;-webkit-transform:scale3d(0.8, 0.8, 0.8);transform:scale3d(0.8, 0.8, 0.8)\n}\n20%{-webkit-transform:scale3d(1.1, 1.1, 1.1);transform:scale3d(1.1, 1.1, 1.1)\n}\n40%{-webkit-transform:scale3d(0.9, 0.9, 0.9);transform:scale3d(0.9, 0.9, 0.9)\n}\n60%{opacity:1;-webkit-transform:scale3d(1.03, 1.03, 1.03);transform:scale3d(1.03, 1.03, 1.03)\n}\n80%{-webkit-transform:scale3d(0.97, 0.97, 0.97);transform:scale3d(0.97, 0.97, 0.97)\n}\n100%{opacity:1;-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)\n}\n}\n@keyframes dots-data-v-20e3b604{\n0%,20%{color:rgba(0,0,0,0);text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)\n}\n40%{color:#8492A6;text-shadow:0.25em 0 0 rgba(0,0,0,0),0.5em 0 0 rgba(0,0,0,0)\n}\n60%{text-shadow:0.25em 0 0 #8492A6,0.5em 0 0 rgba(0,0,0,0)\n}\n80%,100%{text-shadow:.25em 0 0 #8492A6, .5em 0 0 #8492A6\n}\n}\n@keyframes recording-data-v-20e3b604{\n0%{box-shadow:0px 0px 5px 0px rgba(173,0,0,0.3)\n}\n65%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0.3)\n}\n90%{box-shadow:0px 0px 5px 5px rgba(173,0,0,0)\n}\n}\nbody[data-v-20e3b604]{margin:0;font-size:100%;color:#3C4858\n}\na[data-v-20e3b604]{text-decoration:none;color:#45C8F1\n}\nh1[data-v-20e3b604],h2[data-v-20e3b604],h3[data-v-20e3b604],h4[data-v-20e3b604]{margin-top:0\n}\nsvg[data-v-20e3b604]{outline:none\n}\n.container_selected_area[data-v-20e3b604]{display:none;visibility:hidden;padding:0;position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483647\n}\n.container_selected_area.active[data-v-20e3b604]{visibility:visible;display:block\n}\n.container_selected_area .label[data-v-20e3b604]{font-family:"Didact Gothic Regular",sans-serif;font-size:22px;text-align:center;padding-top:15px\n}\n.container_selected_area .area[data-v-20e3b604]{display:none;position:fixed;z-index:2147483647;border:1px solid #1e83ff;background:rgba(30,131,255,0.1);box-sizing:border-box\n}\n.container_selected_area .area.active[data-v-20e3b604]{display:block;top:0;left:0\n}\n.hide[data-v-20e3b604]{display:none\n}\n',
        }}
      />
      <input type="hidden" id="hn-user" />
      <div id="__next">
        <div className="css-3159x8">
          <header
            style={{ backgroundColor: "" }}
            className="blog-header css-1p7bpg"
          >
            <style
              data-emotion="css yd8da5"
              dangerouslySetInnerHTML={{
                __html:
                  "\n                        .css-yd8da5 {\n                            padding-left: 0.5rem;\n                            padding-right: 0.5rem;\n                            margin-left: auto;\n                            margin-right: auto;\n                        }\n\n                        @media (min-width: 768px) {\n                            .css-yd8da5 {\n                                padding-left:1rem;\n                                padding-right: 1rem;\n                            }\n                        }\n\n                        @media (min-width: 1536px) {\n                            .css-yd8da5 {\n                                padding-left:2.5rem;\n                                padding-right: 2.5rem;\n                            }\n                        }\n                    ",
              }}
            />
            <div className="container css-yd8da5">
              <style
                data-emotion="css 1ll3e1i"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                            .css-1ll3e1i {\n                                position: relative;\n                                z-index: 40;\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                -webkit-flex-direction: row;\n                                -ms-flex-direction: row;\n                                flex-direction: row;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-box-pack: justify;\n                                -webkit-justify-content: space-between;\n                                justify-content: space-between;\n                                padding-top: 2rem;\n                                padding-bottom: 0.5rem;\n                                margin-bottom: 0.5rem;\n                            }\n\n                            @media (min-width: 768px) {\n                                .css-1ll3e1i {\n                                    margin-bottom:1rem;\n                                }\n                            }\n                        ",
                }}
              />
              <div className="css-1ll3e1i">
                <style
                  data-emotion="css 37nvso"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-37nvso {\n                                    display: -webkit-box;\n                                    display: -webkit-flex;\n                                    display: -ms-flexbox;\n                                    display: flex;\n                                    -webkit-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-align-items: center;\n                                    -webkit-box-align: center;\n                                    -ms-flex-align: center;\n                                    align-items: center;\n                                    padding-top: 0.25rem;\n                                    padding-bottom: 0.25rem;\n                                    padding-right: 1rem;\n                                }\n                            ",
                  }}
                />
                <div className="css-37nvso">
                  <style
                    data-emotion="css 1lfhv42"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-1lfhv42 {\n                                        margin-right: 1rem;\n                                    }\n\n                                    @media (min-width: 768px) {\n                                        .css-1lfhv42 {\n                                            display:none;\n                                        }\n                                    }\n                                ",
                    }}
                  />
                  <div className="css-1lfhv42">
                    <style
                      data-emotion="css 1tdo4yy"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-1tdo4yy {\n                                            display: -webkit-box;\n                                            display: -webkit-flex;\n                                            display: -ms-flexbox;\n                                            display: flex;\n                                            -webkit-flex-direction: row;\n                                            -ms-flex-direction: row;\n                                            flex-direction: row;\n                                            -webkit-align-items: center;\n                                            -webkit-box-align: center;\n                                            -ms-flex-align: center;\n                                            align-items: center;\n                                            padding: 0.5rem;\n                                            font-weight: 700;\n                                            text-transform: uppercase;\n                                            border-radius: 0.5rem;\n                                        }\n\n                                        .css-1tdo4yy:focus {\n                                            outline: 2px solid transparent;\n                                            outline-offset: 2px;\n                                        }\n\n                                        .dark .css-1tdo4yy {\n                                            --tw-text-opacity: 1;\n                                            color: rgba(255, 255, 255, var(--tw-text-opacity));\n                                        }\n\n                                        .css-1tdo4yy:hover {\n                                            background-color: rgba(255,255,255,.2);\n                                        }\n                                    ",
                      }}
                    />
                    <button type="button" className="css-1tdo4yy">
                      <style
                        data-emotion="css 176cdx5"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-176cdx5 {\n                                                width: 1.5rem;\n                                                height: 1.5rem;\n                                                margin-right: 0.5rem;\n                                                fill: currentColor;\n                                            }\n                                        ",
                        }}
                      />
                      <style
                        data-emotion="css 1x6nj8n"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-1x6nj8n {\n                                                width: 1.5rem;\n                                                height: 1.5rem;\n                                                margin-right: 0.5rem;\n                                                fill: currentColor;\n                                            }\n                                        ",
                        }}
                      />
                      <svg className="css-1x6nj8n" viewBox="0 0 448 512">
                        <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z" />
                      </svg>
                      <span>Menu</span>
                    </button>
                  </div>
                  <style
                    data-emotion="css v1ygcs"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-v1ygcs {\n                                        display: none;\n                                    }\n\n                                    @media (min-width: 768px) {\n                                        .css-v1ygcs {\n                                            display:block;\n                                        }\n                                    }\n                                ",
                    }}
                  />
                  <div className="css-v1ygcs">
                    <style
                      data-emotion="css vhqvd7"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-vhqvd7 {\n                                            font-size: 1.25rem;\n                                            line-height: 1.375;\n                                            font-weight: 600;\n                                            letter-spacing: -0.025em;\n                                            overflow-wrap: break-word;\n                                        }\n\n                                        @media (min-width: 768px) {\n                                            .css-vhqvd7 {\n                                                font-size:1.5rem;\n                                                line-height: 2rem;\n                                                font-weight: 700;\n                                            }\n                                        }\n\n                                        .dark .css-vhqvd7 {\n                                            --tw-text-opacity: 1;\n                                            color: rgba(255, 255, 255, var(--tw-text-opacity));\n                                        }\n                                    ",
                      }}
                    />
                    <h1 className="blog-title css-vhqvd7">
                      <a href="/" aria-label="Nazeeh's Blog">
                        Savio's Blog
                      </a>
                    </h1>
                  </div>
                </div>
                <style
                  data-emotion="css 4pib4r"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-4pib4r {\n                                    display: -webkit-box;\n                                    display: -webkit-flex;\n                                    display: -ms-flexbox;\n                                    display: flex;\n                                    -webkit-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                    -webkit-align-items: center;\n                                    -webkit-box-align: center;\n                                    -ms-flex-align: center;\n                                    align-items: center;\n                                    height: 3rem;\n                                }\n\n                                .dark .css-4pib4r {\n                                    --tw-text-opacity: 1;\n                                    color: rgba(255, 255, 255, var(--tw-text-opacity));\n                                }\n                            ",
                  }}
                />
                <div className="css-4pib4r">
                  <style
                    data-emotion="css wme9tu"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-wme9tu {\n                                        transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;\n                                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n                                        transition-duration: 100ms;\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-flex-direction: row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                        -webkit-align-items: center;\n                                        -webkit-box-align: center;\n                                        -ms-flex-align: center;\n                                        align-items: center;\n                                        padding-left: 0.5rem;\n                                        padding-right: 0.5rem;\n                                        padding-top: 0.5rem;\n                                        padding-bottom: 0.5rem;\n                                        margin-left: 0.25rem;\n                                        margin-right: 0.25rem;\n                                        font-weight: 600;\n                                        border-radius: 9999px;\n                                    }\n\n                                    .css-wme9tu:focus {\n                                        outline: 2px solid transparent;\n                                        outline-offset: 2px;\n                                    }\n\n                                    .css-wme9tu:hover {\n                                        background-color: rgba(0,0,0,.1);\n                                    }\n\n                                    .dark .css-wme9tu:hover {\n                                        background-color: rgba(255,255,255,.2);\n                                    }\n                                ",
                    }}
                  />
                  <button
                    type="button"
                    aria-label="Search the blog"
                    data-title="Search"
                    className="blog-search-button tooltip-handle css-wme9tu"
                  >
                    <style
                      data-emotion="css 1fjoo34"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-1fjoo34 {\n                                            width: 1.5rem;\n                                            height: 1.5rem;\n                                            fill: currentColor;\n                                        }\n                                    ",
                      }}
                    />
                    <style
                      data-emotion="css 17mdxl4"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-17mdxl4 {\n                                            width: 1.5rem;\n                                            height: 1.5rem;\n                                            fill: currentColor;\n                                        }\n                                    ",
                      }}
                    />
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
                </div>
              </div>
              <style
                data-emotion="css 1g8oej1"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                            .css-1g8oej1 {\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                -webkit-flex-direction: row;\n                                -ms-flex-direction: row;\n                                flex-direction: row;\n                                -webkit-align-items: center;\n                                -webkit-box-align: center;\n                                -ms-flex-align: center;\n                                align-items: center;\n                                -webkit-box-pack: center;\n                                -ms-flex-pack: center;\n                                -webkit-justify-content: center;\n                                justify-content: center;\n                                width: 100%;\n                                padding-top: 1rem;\n                                padding-bottom: 1rem;\n                            }\n\n                            @media (min-width: 768px) {\n                                .css-1g8oej1 {\n                                    display:none;\n                                }\n                            }\n                        ",
                }}
              />
              <div className="css-1g8oej1">
                <style
                  data-emotion="css 19u4q4r"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-19u4q4r {\n                                    width: 66.666667%;\n                                    font-size: 1.5rem;\n                                    line-height: 1.375;\n                                    font-weight: 700;\n                                    letter-spacing: -0.025em;\n                                    text-align: center;\n                                    overflow-wrap: break-word;\n                                }\n\n                                .dark .css-19u4q4r {\n                                    --tw-text-opacity: 1;\n                                    color: rgba(255, 255, 255, var(--tw-text-opacity));\n                                }\n                            ",
                  }}
                />
                <h1 className="blog-title css-19u4q4r">
                  <style
                    data-emotion="css 4zleql"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-4zleql {\n                                        display: block;\n                                    }\n                                ",
                    }}
                  />
                  <a href="/" aria-label="Nazeeh's Blog" className="css-4zleql">
                    Nazeeh 's Blog
                  </a>
                </h1>
              </div>
              <style
                data-emotion="css 1nl2bbl"
                dangerouslySetInnerHTML={{
                  __html:
                    "\n                            .css-1nl2bbl {\n                                display: -webkit-box;\n                                display: -webkit-flex;\n                                display: -ms-flexbox;\n                                display: flex;\n                                -webkit-flex-direction: row;\n                                -ms-flex-direction: row;\n                                flex-direction: row;\n                                -webkit-align-items: flex-end;\n                                -webkit-box-align: flex-end;\n                                -ms-flex-align: flex-end;\n                                align-items: flex-end;\n                                -webkit-box-pack: center;\n                                -ms-flex-pack: center;\n                                -webkit-justify-content: center;\n                                justify-content: center;\n                                width: 100%;\n                                overflow: hidden;\n                                font-size: 1rem;\n                                line-height: 1.5rem;\n                                font-weight: 500;\n                                text-transform: uppercase;\n                                --tw-text-opacity: 1;\n                                color: rgba(0, 0, 0, var(--tw-text-opacity));\n                            }\n\n                            @media (min-width: 768px) {\n                                .css-1nl2bbl {\n                                    -webkit-box-pack:justify;\n                                    -webkit-justify-content: space-between;\n                                    justify-content: space-between;\n                                }\n                            }\n\n                            .dark .css-1nl2bbl {\n                                --tw-text-opacity: 1;\n                                color: rgba(255, 255, 255, var(--tw-text-opacity));\n                            }\n                        ",
                }}
              />
              <div
                className="blog-sub-header css-1nl2bbl"
                data-tom="blog-sub-header flex flex-row w-full overflow-hidden items-end justify-between text-base uppercase font-medium text-black dark:text-white"
              >
                <style
                  data-emotion="css ddbtpe"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-ddbtpe {\n                                    overflow: hidden;\n                                    display: none;\n                                    height: 100%;\n                                }\n\n                                @media (min-width: 768px) {\n                                    .css-ddbtpe {\n                                        display:block;\n                                        -webkit-flex: 1 1 0%;\n                                        -ms-flex: 1 1 0%;\n                                        flex: 1 1 0%;\n                                    }\n                                }\n                            ",
                  }}
                />
                <div>
                  <style
                    data-emotion="css mq47qm"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-mq47qm {\n                                        display: none;\n                                        -webkit-flex-direction: row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                        -webkit-flex: 1 1 0%;\n                                        -ms-flex: 1 1 0%;\n                                        flex: 1 1 0%;\n                                        height: 100%;\n                                        font-size: 0.875rem;\n                                        line-height: 1.25rem;\n                                        white-space: nowrap;\n                                    }\n\n                                    @media (min-width: 768px) {\n                                        .css-mq47qm {\n                                            display:-webkit-box;\n                                            display: -webkit-flex;\n                                            display: -ms-flexbox;\n                                            display: flex;\n                                        }\n                                    }\n                                ",
                    }}
                  />
                  <nav className="css-mq47qm">
                    <style
                      data-emotion="css zaakmz"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-zaakmz {\n                                            display: block;\n                                            padding-top: 0.75rem;\n                                            padding-bottom: 0.75rem;\n                                            font-weight: 600;\n                                            transition-property: background-color,border-color,color,fill,stroke;\n                                            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n                                            transition-duration: 100ms;\n                                            padding-left: 0.75rem;\n                                            padding-right: 0.75rem;\n                                            border-top-left-radius: 0.5rem;\n                                            border-top-right-radius: 0.5rem;\n                                            font-weight: 700;\n                                            opacity: 1;\n                                        }\n\n                                        .css-zaakmz:hover {\n                                            opacity: 1;\n                                        }\n\n                                        .css-zaakmz:hover {\n                                            background-color: rgba(0,0,0,.1);\n                                        }\n\n                                        .dark .css-zaakmz:hover {\n                                            background-color: rgba(255,255,255,.2);\n                                        }\n                                    ",
                      }}
                    />
                    <a href="/" className="blog-nav-active css-zaakmz">
                      Home
                    </a>
                    <style
                      data-emotion="css mwyikp"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-mwyikp {\n                                            display: block;\n                                            padding-top: 0.75rem;\n                                            padding-bottom: 0.75rem;\n                                            font-weight: 600;\n                                            transition-property: background-color,border-color,color,fill,stroke;\n                                            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n                                            transition-duration: 100ms;\n                                            padding-left: 0.75rem;\n                                            padding-right: 0.75rem;\n                                            border-top-left-radius: 0.5rem;\n                                            border-top-right-radius: 0.5rem;\n                                            border-color: transparent;\n                                            opacity: 0.75;\n                                        }\n\n                                        .css-mwyikp:hover {\n                                            opacity: 1;\n                                        }\n\n                                        .css-mwyikp:hover {\n                                            background-color: rgba(0,0,0,.1);\n                                        }\n\n                                        .dark .css-mwyikp:hover {\n                                            background-color: rgba(255,255,255,.2);\n                                        }\n                                    ",
                      }}
                    />
                    <a className="blog-nav css-mwyikp" href="/badges">
                      Badges
                    </a>
                  </nav>
                </div>
                <style
                  data-emotion="css ho1qnd"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-ho1qnd {\n                                    display: -webkit-box;\n                                    display: -webkit-flex;\n                                    display: -ms-flexbox;\n                                    display: flex;\n                                    -webkit-flex-direction: row;\n                                    -ms-flex-direction: row;\n                                    flex-direction: row;\n                                }\n                            ",
                  }}
                />
                <div className="blog-social-media-section css-ho1qnd">
                  <style
                    data-emotion="css eqcmow"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-eqcmow {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-flex-direction: row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                        -webkit-align-items: center;\n                                        -webkit-box-align: center;\n                                        -ms-flex-align: center;\n                                        align-items: center;\n                                        -webkit-box-pack: center;\n                                        -ms-flex-pack: center;\n                                        -webkit-justify-content: center;\n                                        justify-content: center;\n                                        padding-left: 0.75rem;\n                                        padding-right: 0.75rem;\n                                        padding-top: 0.75rem;\n                                        padding-bottom: 0.75rem;\n                                        transition-property: background-color,border-color,color,fill,stroke;\n                                        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n                                        transition-duration: 100ms;\n                                        border-top-left-radius: 0.5rem;\n                                        border-top-right-radius: 0.5rem;\n                                        opacity: 0.5;\n                                    }\n\n                                    .css-eqcmow:hover {\n                                        opacity: 1;\n                                    }\n\n                                    @media (min-width: 768px) {\n                                        .css-eqcmow {\n                                            padding-left:0.5rem;\n                                            padding-right: 0.5rem;\n                                        }\n                                    }\n\n                                    .css-eqcmow:hover {\n                                        background-color: rgba(0,0,0,.1);\n                                    }\n\n                                    .dark .css-eqcmow:hover {\n                                        background-color: rgba(255,255,255,.2);\n                                    }\n                                ",
                    }}
                  />
                  <a
                    href="https://twitter.com/Nazeeh21"
                    aria-label="Find me on Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="css-eqcmow"
                  >
                    <style
                      data-emotion="css ms8fcx"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-ms8fcx {\n                                            width: 1.25rem;\n                                            height: 1.25rem;\n                                            fill: currentColor;\n                                        }\n                                    ",
                      }}
                    />
                    <style
                      data-emotion="css 1330i9l"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-1330i9l {\n                                            width: 1.25rem;\n                                            height: 1.25rem;\n                                            fill: currentColor;\n                                        }\n                                    ",
                      }}
                    />
                    <svg className="css-1330i9l" viewBox="0 0 512 512">
                      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/Nazeeh21"
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
                    href="https://hashnode.com/@Nazeeh21"
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
                    href="https://linkedin.com/in/nazeeh-vahora-a48abb196"
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
          <div className="blog-post-area css-78a8kl">
            <main className="blog-post-detail-card css-9slcbn">
              <article itemScope itemType="http://schema.org/Article">
                <div className="blog-content-wrapper article-main-wrapper css-m96uju">
                  <section
                    className="blog-content-main article-width css-1ffmpwz"
                    itemProp="articleBody mainEntityOfPage"
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
                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwMCIgaGVpZ2h0PSI4NDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                        />
                      </div>
                      <img
                        alt="Demo Title for Styler ✌️"
                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629395719097%2FyM_neaoo7.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
                        decoding="async"
                        className="css-1jqt27n"
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
                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629395719097%2FyM_neaoo7.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1629395719097%2FyM_neaoo7.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75 2x"
                      />
                    </div>
                    <div className="css-csc6hy">
                      <h1 itemProp="headline name">Demo Title for Styler ✌️</h1>
                    </div>
                    <div className="css-hj8uh5">
                      <h2 className="css-n9m7tc">Subtitle Example.</h2>
                    </div>
                    <div className="css-zd4cjh" />
                    <meta
                      itemProp="thumbnailUrl image"
                      content="https://cdn.hashnode.com/res/hashnode/image/upload/v1629395719097/yM_neaoo7.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                    />
                    <div className="css-1pt9cni">
                      <div className="css-4c6dm7">
                        <div
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                          className="css-12sdugl"
                        >
                          <div className="css-nbo283">
                            <a
                              href="https://hashnode.com/@Saviopaily"
                              className=" css-mi6gjf"
                              data-title="false"
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
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                                  />
                                </div>
                                <img
                                  alt="Savio's photo"
                                  src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1612450328798%2FeI-jfhlcf.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75"
                                  decoding="async"
                                  className="css-f4162x"
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    bottom: 0,
                                    right: 0,
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
                                  }}
                                  srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615368428147%2FTMHA5E7Gq.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1612450328798%2FeI-jfhlcf.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=640&q=75 2x"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="css-1k5pqev">
                            <a
                              href="https://hashnode.com/@Saviopaily"
                              itemProp="sameAs url"
                              className="css-51a556"
                            >
                              <span itemProp="name">Savio</span>
                            </a>
                            <p className="css-1dyl29k">
                              <a
                                href="https://Saviotesting.hashnode.dev/demo-title-for-styler"
                                className="tooltip-handle css-4zleql"
                                data-title="Aug 19, 2021 18:05"
                              >
                                Published on{" "}
                                <span className="css-16ceglb">
                                  Aug 19, 2021
                                </span>
                              </a>
                            </p>
                            <div className="css-fhxb3m">
                              <p className="css-tb6s22">
                                <svg
                                  className="css-hb3dfw"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                                </svg>
                                <span>1{/* */} min read</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="css-ho1qnd">
                            <div className="css-bjn8wh">
                              <button
                                type="button"
                                variant="transparent"
                                aria-label="Post actions dropdown"
                                className="button-transparent small css-gq5dp1"
                              >
                                <svg
                                  className="css-1330i9l"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-207.5 86.6l115-115.1c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L256 303l-99.5-99.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l115 115.1c4.8 4.6 12.4 4.6 17.1-.1z" />
                                </svg>
                                <span className="css-14o749n">More</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <meta
                        itemProp="dateCreated datePublished"
                        content="2021-08-19T18:05:45.067Z"
                      />
                      <meta
                        itemProp="dateModified"
                        content="2021-08-19T18:05:45.067Z"
                      />
                    </div>
                    <div className="css-bjn8wh">
                      <div itemProp="text" className="prose css-1wbxjo6">
                        <h1 id="headers">Headers</h1>
                        <p>
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Unde neque natus praesentium distinctio at, ut
                          architecto dolor eius inventore assumenda.
                        </p>
                        <p>
                          Here is a link{" "}
                          <a target="_blank" href="http://hashnode.com/">
                            hashnode.com
                          </a>
                        </p>
                        <p>
                          Here is the <strong>Bold Text</strong> and the{" "}
                          <em>Italic Text</em>
                        </p>
                        <h1 id="here-are-the-types-of-heading">
                          Here are the types of heading
                        </h1>
                        <p>Here is some Code 👇</p>
                        <div style={{ position: "relative" }}>
                          <div>
                            <button className="css-1vwx61">
                              <span className="css-2305pr">
                                <span className="css-qqykjf">Copy</span>
                                <svg
                                  viewBox="0 0 384 512"
                                  className="css-1se2ttb"
                                >
                                  <path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z" />
                                </svg>
                              </span>
                            </button>
                          </div>
                          <pre>
                            <code>
                              &lt;<span className="hljs-keyword">link</span>
                              {"\n"}
                              {"        "}rel=
                              <span className="hljs-string">"stylesheet"</span>
                              {"\n"}
                              {"        "}data-href=
                              <span className="hljs-string">
                                "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&amp;display=block"
                              </span>
                              {"\n"} /&gt;{"\n"}
                            </code>
                          </pre>
                        </div>
                        <h2 id="this-is-heading-2">This is Heading 2</h2>
                        <h3 id="this-is-heading-3">This is Heading 3</h3>
                        <h4 id="this-is-heading-4">This is Heading 4</h4>
                        <h5 id="this-is-heading-5">This is Heading 5</h5>
                        <h6 id="this-is-heading-6">This is Heading 6</h6>
                        <blockquote>
                          <p>Here is a quote</p>
                        </blockquote>
                        <h1 id="some-special-components">
                          Some Special Components
                        </h1>
                        <p>Here is an Image 👇</p>
                        <p>
                          <img
                            src="https://github.githubassets.com/images/modules/site/social-cards/readme-project.png"
                            alt="Alt text of image"
                          />
                        </p>
                        <p> Here is an ordered list 👇</p>
                        <ul>
                          <li>Some Text 1</li>
                          <li>Some Text 2</li>
                          <li>Some Text 3</li>
                          <li>Some Text 4</li>
                          <li>Some Text 5</li>
                        </ul>
                        <p>That's it. We looked almost at all components 🎊</p>
                      </div>
                      <div className="css-fhxb3m">
                        <div className="css-12n6jp">
                          <div className="css-37oymn">
                            <a
                              href="https://hashnode.com/n/css"
                              className="css-h6a8j6"
                            >
                              <span>#css</span>
                            </a>
                            <a
                              href="https://hashnode.com/n/javascript"
                              className="css-h6a8j6"
                            >
                              <span>#javascript</span>
                            </a>
                            <a
                              href="https://hashnode.com/n/reactjs"
                              className="css-h6a8j6"
                            >
                              <span>#reactjs</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div
                        id="refNode1"
                        style={{ top: 100, left: 100 }}
                        className="css-16i1tr9"
                      >
                        &nbsp;
                      </div>
                      <div id="refNode2" className="css-1yzq4q2">
                        {" "}
                      </div>
                      <div className="css-pzj4ej">
                        <div className="css-6oz16o">
                          <span className="css-1gc63p3">Share this</span>
                          <a
                            href="https://twitter.com/share?url=https%3A%2F%2FSaviotesting.hashnode.dev%2Fdemo-title-for-styler&text=%20%40Saviopaily"
                            variant="transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="css-mok5km"
                          >
                            <svg className="css-17mdxl4" viewBox="0 0 512 512">
                              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                            </svg>
                          </a>
                          <a
                            href="http://www.reddit.com/submit?title=Demo%20Title%20for%20Styler%20%E2%9C%8C%EF%B8%8F&selftext=true&text=%20https%3A%2F%2FSaviotesting.hashnode.dev%2Fdemo-title-for-styler"
                            variant="transparent"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="css-15weny5"
                          >
                            <svg className="css-17mdxl4" viewBox="0 0 512 512">
                              <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
                            </svg>
                          </a>
                          <button
                            type="button"
                            variant="transparent"
                            data-clipboard-text=" https://Saviotesting.hashnode.dev/demo-title-for-styler"
                            id="text-sharer"
                            className="css-197yt2c"
                          >
                            <svg className="css-17mdxl4" viewBox="0 0 384 512">
                              <path d="M336 64h-88.6c.4-2.6.6-5.3.6-8 0-30.9-25.1-56-56-56s-56 25.1-56 56c0 2.7.2 5.4.6 8H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 32c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm160 432c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h48v20c0 6.6 5.4 12 12 12h168c6.6 0 12-5.4 12-12V96h48c8.8 0 16 7.2 16 16z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="blog-content-sidebar css-g5d1mf">
                    <div style={{ minHeight: 244 }}>
                      <div
                        className=" "
                        style={{ transform: "translateZ(0px)" }}
                      >
                        <div className="css-1qz4saa">
                          <div className="css-sm43i1">
                            <div
                              itemProp="interactionStatistic"
                              itemScope
                              itemType="https://schema.org/InteractionCounter"
                              className="css-yn21pq"
                            >
                              <meta
                                itemProp="interactionType"
                                content="LikeAction"
                              />
                              <meta
                                itemProp="userInteractionCount"
                                content={10}
                              />
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Here's my like"
                                  title="Here's my like"
                                  data-reaction-id="5c090d96c2a9c2a674d35484"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643688456%2FnznpsvvJs.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643688456%2FnznpsvvJs.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643688456%2FnznpsvvJs.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Love it"
                                  title="Love it"
                                  data-reaction-id="5c090d96c2a9c2a674d35485"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643755644%2F40RNtU1Zj.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643755644%2F40RNtU1Zj.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643755644%2F40RNtU1Zj.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="You're a unicorn"
                                  title="You're a unicorn"
                                  data-reaction-id="5c090d96c2a9c2a674d35486"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643772437%2FFYDU5k2kQ.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643772437%2FFYDU5k2kQ.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643772437%2FFYDU5k2kQ.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Claps claps"
                                  title="Claps claps"
                                  data-reaction-id="567453d0b73d6a82ac8c5abd"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643783311%2FZ4fzAt9ln.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643783311%2FZ4fzAt9ln.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643783311%2FZ4fzAt9ln.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Cheers!"
                                  title="Cheers!"
                                  data-reaction-id="567453d0b73d6a82ac8c5abc"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643793473%2FwxrlC2BFn.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643793473%2FwxrlC2BFn.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643793473%2FwxrlC2BFn.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="You deserve a trophy!"
                                  title="You deserve a trophy!"
                                  data-reaction-id="567453d0b73d6a82ac8c5ab9"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643804463%2F703oh6Yci.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643804463%2F703oh6Yci.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643804463%2F703oh6Yci.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="I am loving it!"
                                  title="I am loving it!"
                                  data-reaction-id="5c090d96c2a9c2a674d35488"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643814744%2F9iXxz71TL.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643814744%2F9iXxz71TL.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643814744%2F9iXxz71TL.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Take my money"
                                  title="Take my money"
                                  data-reaction-id="5c090d96c2a9c2a674d3548a"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643825482%2FByM5eIxJW.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643825482%2FByM5eIxJW.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643825482%2FByM5eIxJW.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="It's party time"
                                  title="It's party time"
                                  data-reaction-id="5c090d96c2a9c2a674d3548b"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643839183%2FCvUptN73c.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643839183%2FCvUptN73c.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643839183%2FCvUptN73c.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                              <div className="css-18nz7be">
                                <button
                                  type="button"
                                  variant="transparent"
                                  aria-label="Fly high"
                                  title="Fly high"
                                  data-reaction-id="5d9dd859f31791c942dc5b52"
                                  className="btn-reaction-spp button-transparent css-1iibo65"
                                >
                                  <span className="css-o6765v">
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
                                          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIi8+"
                                        />
                                      </div>
                                      <img
                                        alt="Post reaction"
                                        src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643854601%2FcP8rWFP9I.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75"
                                        decoding="async"
                                        className="css-1082qq3"
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          bottom: 0,
                                          right: 0,
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
                                        }}
                                        srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643854601%2FcP8rWFP9I.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643854601%2FcP8rWFP9I.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=128&q=75 2x"
                                      />
                                    </div>
                                  </span>
                                  <span className="css-16ceglb">1</span>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="css-13n4lde">
                            <div className="css-1oe7b48">
                              <button
                                type="button"
                                variant="transparent"
                                data-title="Bookmark"
                                title="Bookmark"
                                className="tooltip-handle css-d0b8tw"
                              >
                                <svg
                                  className="css-gd2y62"
                                  viewBox="0 0 384 512"
                                >
                                  <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z" />
                                </svg>
                              </button>
                            </div>
                            <div className="css-1oe7b48">
                              <a
                                href="https://twitter.com/share?url=https%3A%2F%2FSaviotesting.hashnode.dev%2Fdemo-title-for-styler&text=Demo%20Title%20for%20Styler%20%E2%9C%8C%EF%B8%8F%0D%0A%7B%20by%20Savio%20%7D%20from%20%40hashnode%0D%0A%0A%23css%20%23javascript%20%23reactjs"
                                variant="transparent"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-title="Say Thanks!"
                                aria-label="Share on Twitter"
                                className="css-1o50nro"
                              >
                                <svg
                                  className="css-gd2y62"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                                </svg>
                              </a>
                            </div>
                            <div className="css-bjn8wh">
                              <button
                                type="button"
                                variant="transparent"
                                aria-label="Toggle social share widget"
                                className="css-1wt4vg7"
                              >
                                <svg
                                  className="css-gd2y62"
                                  viewBox="0 0 448 512"
                                >
                                  <path d="M352 320c-28.6 0-54.2 12.5-71.8 32.3l-95.5-59.7c9.6-23.4 9.7-49.8 0-73.2l95.5-59.7c17.6 19.8 43.2 32.3 71.8 32.3 53 0 96-43 96-96S405 0 352 0s-96 43-96 96c0 13 2.6 25.3 7.2 36.6l-95.5 59.7C150.2 172.5 124.6 160 96 160c-53 0-96 43-96 96s43 96 96 96c28.6 0 54.2-12.5 71.8-32.3l95.5 59.7c-4.7 11.3-7.2 23.6-7.2 36.6 0 53 43 96 96 96s96-43 96-96c-.1-53-43.1-96-96.1-96zm0-288c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM96 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm256 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div />
                <style>
                  {`.css-ec6vv8 {
                                    position: relative;
                                    z-index: 30;
                                    display: -webkit-box;
                                    display: -webkit-flex;
                                    display: -ms-flexbox;
                                    display: flex;
                                    -webkit-flex-direction: row;
                                    -ms-flex-direction: row;
                                    flex-direction: row;
                                    -webkit-box-pack: center;
                                    -ms-flex-pack: center;
                                    -webkit-justify-content: center;
                                    justify-content: center;
                                }
                                .css-zlz3sh {
                                  margin-left: 0.5rem;
                                  margin-right: 0.5rem;
                                  padding: 1rem;
                                  --tw-bg-opacity: 1;
                                  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
                                  border-radius: 0.5rem;
                                  border-width: 1px;
                                  margin-bottom: 1.5rem;
                                  display: flex;
                                  flex-flow: row wrap;
                                  -webkit-box-pack: justify;
                                  justify-content: space-between;
                                  -webkit-box-align: center;
                                  align-items: center;
                              }
                              .css-1p3i9fg {
                                display: flex;
                                flex-direction: row;
                                -webkit-box-align: center;
                                align-items: center;
                            }
                            .css-zyq43c {
                              font-weight: 700;
                              margin-right: 1rem;
                          }

.css-1t9ht7m {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: 0.75rem;
}
.css-1yh8bzs {
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 500;
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  border-width: 1px;
  border-radius: 0.5rem;
  --tw-border-opacity: 1;
  border-color: rgba(41, 98, 255, var(--tw-border-opacity));
  --tw-text-opacity: 1;
  color: rgba(41, 98, 255, var(--tw-text-opacity));
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}
.css-5920wb {
  width: 1.25rem;
  height: 1.25rem;
  fill: currentcolor;
  margin-right: 0.5rem;
}
.css-171wbv4 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.css-1h026t7 {
  margin-bottom: 1.5rem;
}
.css-oustij {
  display: flex;
  padding: 2rem;
    flex-wrap: nowrap;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  border-width: 1px;
  border-radius: 0.5rem;
}
.css-pjy4g2 {
  margin-bottom: 0px;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
}
.css-mi6gjf {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
}
.css-1phb1l0 {
  width: 100%;
  min-width: 0px;
}
.css-128gdh4 {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.css-xbik8w {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  --tw-text-opacity: 1;
  color: rgba(33, 33, 33, var(--tw-text-opacity));
}
.css-1a8w6q9 {
  font-size: 0.875rem;
  line-height: 1.25rem;
  --tw-text-opacity: 1;
  color: rgba(97, 97, 97, var(--tw-text-opacity));
}
.css-bbt5q4 {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1rem;
}
.css-3wzlx2 {
  margin-right: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
}
.css-8y9r1h {
  font-weight: 400;
  --tw-text-opacity: 1;
  color: rgba(97, 97, 97, var(--tw-text-opacity));
}
.css-bo95k {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
  color: rgb(17, 17, 17);
  max-width: 65ch;
  font-size: 1rem;
  line-height: 1.75;
  overflow-wrap: break-word;
}
.css-18tahff {
  position: relative;
  z-index: 50;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  -webkit-box-pack: justify;
  justify-content: space-between;
}
.css-1uoy4r2 {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
  margin-right: 1rem;
}
.css-1qdpm1w {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
}
.css-1qdpm1w {
  margin-top: 0px;
  width: auto;
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.css-1uoy4r2 {
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  width: 100%;
  margin-right: 1rem;
}
.css-1m34rxg {
  position: relative;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
.css-gz01ch {
  padding: 0.25rem 0.75rem;
  font-size: 1rem;
  line-height: 1.625;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.css-1urjqmf {
  flex-shrink: 0;
  width: 1.5rem;
  opacity: 0.75;
  fill: currentcolor;
}
.css-uaob3j {
  margin-left: 0.5rem;
}
.css-1qdpm1w {
    margin-top: 0px;
    width: auto;
    -webkit-box-pack: start;
    justify-content: flex-start;
}
.css-1qdpm1w {
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: end;
    justify-content: flex-end;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
}
.css-34vjm1 {
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  margin-right: 1rem;
}

.css-gflyy0 {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    fill: currentcolor;
}
.css-bjn8wh {
  position: relative;
}
.css-gq5dp1 {
  padding: 0.25rem 0.5rem;
  font-weight: 500;
  --tw-text-opacity: 1;
  color: rgba(55, 65, 81, var(--tw-text-opacity));
  border-width: 1px;
  border-color: transparent;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
}
.css-1330i9l {
  width: 1.25rem;
  height: 1.25rem;
  fill: currentColor;
}
.css-18nz7be button{
  display: flex;
}
.css-1vwx61 {
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, var(--tw-text-opacity));
  font-weight: 600;
  text-transform: uppercase;
}
.css-2305pr {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  line-height: 1;
}
.css-qqykjf {
  margin-right: 0.25rem;
}
.css-1se2ttb {
  width: 1rem;
  height: 1rem;
  fill: currentcolor;
}
code * {
  font-family: 'Fira Code';
}
                                `}
                </style>
                <div className="css-ec6vv8">
                  <div
                    className="blog-comments-section-wrapper article-width css-xl2uon"
                    style={{ width: 800 }}
                  >
                    <div id="comments">
                      <div className="css-zlz3sh">
                        <div className="css-1p3i9fg">
                          <h3 className="css-zyq43c">Comments (1)</h3>
                        </div>
                        <div className="css-1t9ht7m">
                          <button
                            type="button"
                            variant="priSavio"
                            className="css-1yh8bzs"
                          >
                            <svg className="css-5920wb" viewBox="0 0 512 512">
                              <path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z" />
                            </svg>
                            <span>Add a comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="css-171wbv4">
                      <div
                        itemProp="comment"
                        itemScope
                        itemType="https://schema.org/Comment"
                        className="css-1h026t7"
                      >
                        <div
                          id="cksj917io04do1ws1ffusb8i9"
                          className="css-oustij"
                        >
                          <div className="css-pjy4g2">
                            <a
                              href="https://hashnode.com/@Saviopaily"
                              className=" css-mi6gjf"
                              data-title="false"
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
                                    alt
                                    aria-hidden="true"
                                    role="presentation"
                                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYwIiBoZWlnaHQ9IjE2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                                    style={{
                                      maxWidth: "100%",
                                      display: "block",
                                      margin: 0,
                                      border: "none",
                                      padding: 0,
                                    }}
                                  />
                                </div>
                                <img
                                  alt="Savio's photo"
                                  src="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1612450328798%2FeI-jfhlcf.jpeg%3Fw%3D160%26h%3D160%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=384&q=75"
                                  decoding="async"
                                  className="css-f4162x"
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
                                  }}
                                  srcSet="https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1615368428147%2FTMHA5E7Gq.jpeg%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75 1x, https://townhall.hashnode.com/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1612450328798%2FeI-jfhlcf.jpeg%3Fw%3D160%26h%3D160%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=384&q=75 2x"
                                />
                              </div>
                            </a>
                          </div>
                          <div className="css-1phb1l0">
                            <div
                              itemProp="author"
                              itemScope
                              itemType="https://schema.org/Person"
                              className="css-128gdh4"
                            >
                              <div className="css-xbik8w">
                                <div className="css-bbt5q4">
                                  <p className="css-3wzlx2">
                                    <a
                                      itemProp="sameAs"
                                      href="https://hashnode.com/@Saviopaily"
                                    >
                                      <span itemProp="name">Savio</span>
                                    </a>
                                  </p>
                                </div>
                                <p className="css-8y9r1h">
                                  <a
                                    href="#cksj917io04do1ws1ffusb8i9"
                                    title="Aug 19, 2021 23:50"
                                    className="date-time"
                                    aria-label="Response added at"
                                  >
                                    Just now
                                  </a>
                                </p>
                              </div>
                              <p itemProp="description" className="css-1a8w6q9">
                                Freelancer
                              </p>
                            </div>
                            <meta
                              itemProp="dateCreated datePublished"
                              content="2021-08-19T18:20:17.618Z"
                            />
                            <div itemProp="text" className="css-bo95k">
                              <p>Comment Example</p>
                            </div>
                            <div className="css-1d3w5wq">
                              <div className="css-18tahff">
                                <div
                                  itemProp="interactionStatistic"
                                  itemScope
                                  itemType="https://schema.org/InteractionCounter"
                                  className="css-1uoy4r2"
                                >
                                  <meta
                                    itemProp="interactionType"
                                    content="LikeAction"
                                  />
                                  <meta
                                    itemProp="userInteractionCount"
                                    content={0}
                                  />
                                  <div className="css-1m34rxg">
                                    <button
                                      type="button"
                                      variant="transparent"
                                      aria-label="Add reaction to Response"
                                      className="css-gz01ch"
                                    >
                                      <svg
                                        className="css-1urjqmf"
                                        viewBox="0 0 496 512"
                                      >
                                        <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216zm90.2-146.2C315.8 352.6 282.9 368 248 368s-67.8-15.4-90.2-42.2c-5.7-6.8-15.8-7.7-22.5-2-6.8 5.7-7.7 15.7-2 22.5C161.7 380.4 203.6 400 248 400s86.3-19.6 114.8-53.8c5.7-6.8 4.8-16.9-2-22.5-6.8-5.6-16.9-4.7-22.6 2.1zM168 240c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z" />
                                      </svg>
                                      <span className="css-uaob3j">Like</span>
                                    </button>
                                  </div>
                                </div>
                                <div className="css-1qdpm1w">
                                  <button
                                    type="button"
                                    variant="transparent"
                                    className="css-34vjm1"
                                  >
                                    <svg
                                      className="css-gflyy0"
                                      viewBox="0 0 576 512"
                                    >
                                      <path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 010-11.06z" />
                                    </svg>
                                    <span className="button-text">Reply</span>
                                  </button>
                                  <div className="css-bjn8wh">
                                    <button
                                      type="button"
                                      variant="transparent"
                                      aria-label="Post actions dropdown"
                                      className="button-transparent small css-gq5dp1"
                                    >
                                      <svg
                                        className="css-1330i9l"
                                        viewBox="0 0 512 512"
                                      >
                                        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-207.5 86.6l115-115.1c4.7-4.7 4.7-12.3 0-17l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L256 303l-99.5-99.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l115 115.1c4.8 4.6 12.4 4.6 17.1-.1z" />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      itemProp="publisher"
                      itemScope
                      itemType="https://schema.org/Organization"
                    >
                      <meta itemProp="name" content="Savio's Blog" />
                      <meta
                        itemProp="url"
                        content="https://Saviotesting.hashnode.dev"
                      />
                      <div
                        itemProp="logo"
                        itemScope
                        itemType="https://schema.org/ImageObject"
                      >
                        <meta
                          itemProp="url"
                          content="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1559814205701%2Fek9fO-yT0.jpeg%3Fw%3D800%26bm%3Dnormal%26balph%3D100%26txt64%3DTWFyeSdzIEJsb2c%26txtsize%3D42%26txtfit%3Dmax%26txtalign%3Dmiddle%2Ccenter%26txtfont%3DHelvetica%20Neue%2CBold%26txtclr%3D000000%26blend%3Dffffff"
                        />
                      </div>
                      <meta
                        itemProp="sameAs"
                        content="https://hashnode.com/@Saviopaily"
                      />
                    </div>
                  </div>
                  <div className="css-12orxyd" />
                </div>
              </article>
            </main>
          </div>
          <footer className="blog-footer-area css-4dfc6h">
            <div className="blog-footer-credits css-z0tjgn">
              <p className="css-2559wl">
                © {/* */}2021{/* */} {/* */}Savio's Blog
              </p>
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
                <svg className="css-1trayuc" viewBox="0 0 688 118" fill="none">
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
      <style id="style"></style>
    </div>
  );
};

export default article;
