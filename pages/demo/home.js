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
      <style data-emotion-css dangerouslySetInnerHTML={{ __html: "" }} />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .article-width {\n                width: 800px\n            }\n\n            @media (max-width: 800px) {\n                .article-width {\n                    width:100%!important\n                }\n            }\n\n            .tooltip-handle {\n                position: relative\n            }\n\n            .tooltip-handle:after {\n                content: attr(data-title);\n                --tw-bg-opacity: 1;\n                background-color: rgba(31,41,55,var(--tw-bg-opacity));\n                border-radius: .25rem;\n                font-size: .75rem;\n                line-height: 1rem;\n                margin-top: .5rem;\n                opacity: 0;\n                padding: .5rem;\n                position: absolute;\n                right: 0;\n                top: 100%;\n                --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),0 4px 6px -2px rgba(0, 0, 0, 0.05);\n                box-shadow: var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);\n                text-align: right;\n                --tw-text-opacity: 1;\n                color: rgba(255,255,255,var(--tw-text-opacity));\n                visibility: hidden;\n                white-space: nowrap;\n                z-index: 20;\n                transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;\n                transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;\n                transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;\n                transition-timing-function: cubic-bezier(.4,0,.2,1);\n                transition-duration: 150ms\n            }\n\n            .tooltip-handle.gold-tooltip:after {\n                background: linear-gradient(135.06deg,#fcc201 .05%,#b78628 99.96%)\n            }\n\n            .tooltip-handle:hover::after {\n                opacity: 1;\n                visibility: visible;\n                transition-delay: 1s\n            }\n\n            .tooltip-handle.tooltip-right::after {\n                margin-top: .5rem;\n                margin-left: .5rem;\n                position: absolute;\n                top: 0;\n                left: 100%;\n                right: auto\n            }\n\n            .tooltip-handle.tooltip-left-aligned::after {\n                left: 0;\n                top: 100%;\n                right: auto\n            }\n\n            .tooltip-handle.tooltip-right-aligned::after {\n                right: 0;\n                top: 100%\n            }\n\n            .tooltip-handle.tooltip-left::after {\n                top: 0;\n                right: 100%;\n                left: auto\n            }\n\n            @media (max-width: 1023px) {\n                .tooltip-handle:after {\n                    display:none\n                }\n            }\n\n            .hn-table {\n                display: block;\n                width: 100%;\n                overflow-x: auto;\n                margin-top: 2em;\n                margin-bottom: 2em\n            }\n\n            .prose .hn-table table {\n                border: 1px solid #e0e0e0;\n                margin-top: 0;\n                margin-bottom: 0\n            }\n\n            .prose .hn-table table tbody td:first-child {\n                padding-left: .5rem\n            }\n\n            .prose .hn-table table td {\n                min-width: 200px;\n                padding: .5rem\n            }\n\n            .container {\n                width: 100%\n            }\n\n            @media (min-width: 640px) {\n                .container {\n                    max-width:640px\n                }\n            }\n\n            @media (min-width: 768px) {\n                .container {\n                    max-width:768px\n                }\n            }\n\n            @media (min-width: 1024px) {\n                .container {\n                    max-width:1024px\n                }\n            }\n\n            @media (min-width: 1280px) {\n                .container {\n                    max-width:1280px\n                }\n            }\n\n            @media (min-width: 1536px) {\n                .container {\n                    max-width:1536px\n                }\n            }\n\n            @media (min-width: 1440px) {\n                .feed-width {\n                    min-width:850px;\n                    max-width: 1000px\n                }\n\n                .container-wrapper {\n                    max-width: 1232px\n                }\n            }\n\n            .prose code {\n                border-radius: .25rem;\n                font-weight: 400!important;\n                padding: .25rem;\n                --tw-text-opacity: 1;\n                color: rgba(0,0,0,var(--tw-text-opacity));\n                font-size: 80%;\n                background: #f0efed\n            }\n\n            .dark .prose code {\n                --tw-bg-opacity: 1;\n                background-color: rgba(36,41,46,var(--tw-bg-opacity));\n                --tw-text-opacity: 1;\n                color: rgba(238,238,238,var(--tw-text-opacity))\n            }\n\n            .prose pre {\n                padding-top: 2rem!important;\n                padding-bottom: 2rem!important\n            }\n\n            .prose pre code {\n                background-color: transparent;\n                border-radius: 0;\n                font-weight: 500!important;\n                padding: 0;\n                font-size: 100%\n            }\n\n            .prose blockquote p:first-of-type::before,.prose blockquote p:last-of-type::after {\n                content: none\n            }\n\n            .dark .prose pre code {\n                background-color: transparent;\n                color: #ddd\n            }\n\n            .prose .embed-wrapper {\n                max-width: 100%;\n                margin-top: 1.25em;\n                margin-bottom: 1.25em\n            }\n\n            .prose .embed-wrapper iframe {\n                max-width: 100%!important\n            }\n\n            a.user-mention {\n                color: #2962ff!important;\n                --tw-border-opacity: 1;\n                border-color: rgba(158,158,158,var(--tw-border-opacity));\n                border-style: dashed;\n                border-bottom-width: 2px;\n                display: inline;\n                font-weight: 500;\n                line-height: 1.375;\n                text-decoration: none!important\n            }\n        ",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            #nprogress {\n                pointer-events: none\n            }\n\n            #nprogress .bar {\n                background: #29d;\n                position: fixed;\n                z-index: 1031;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 2px\n            }\n\n            #nprogress .peg {\n                display: block;\n                position: absolute;\n                right: 0;\n                width: 100px;\n                height: 100%;\n                box-shadow: 0 0 10px #29d,0 0 5px #29d;\n                opacity: 1;\n                -webkit-transform: rotate(3deg) translate(0,-4px);\n                -ms-transform: rotate(3deg) translate(0,-4px);\n                transform: rotate(3deg) translate(0,-4px)\n            }\n\n            #nprogress .spinner {\n                display: block;\n                position: fixed;\n                z-index: 1031;\n                top: 15px;\n                right: 15px\n            }\n\n            #nprogress .spinner-icon {\n                width: 18px;\n                height: 18px;\n                box-sizing: border-box;\n                border: solid 2px transparent;\n                border-top-color: #29d;\n                border-left-color: #29d;\n                border-radius: 50%;\n                -webkit-animation: nprogress-spinner .4s linear infinite;\n                animation: nprogress-spinner .4s linear infinite\n            }\n\n            .nprogress-custom-parent {\n                overflow: hidden;\n                position: relative\n            }\n\n            .nprogress-custom-parent #nprogress .bar,.nprogress-custom-parent #nprogress .spinner {\n                position: absolute\n            }\n\n            @-webkit-keyframes nprogress-spinner {\n                0% {\n                    -webkit-transform: rotate(0)\n                }\n\n                100% {\n                    -webkit-transform: rotate(360deg)\n                }\n            }\n\n            @keyframes nprogress-spinner {\n                0% {\n                    transform: rotate(0)\n                }\n\n                100% {\n                    transform: rotate(360deg)\n                }\n            }\n        ",
        }}
      />
      <style
        data-href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=block"
        dangerouslySetInnerHTML={{
          __html:
            "\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuOKfMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuI6fMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyYMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuBWYMZs.woff) format('woff')\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 300;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 400;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 500;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 600;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 700;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 800;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0460-052F,U+1C80-1C88,U+20B4,U+2DE0-2DFF,U+A640-A69F,U+FE2E-FE2F\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0400-045F,U+0490-0491,U+04B0-04B1,U+2116\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+1F00-1FFF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0370-03FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EF9,U+20AB\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format('woff2');\n                unicode-range: U+0100-024F,U+0259,U+1E00-1EFF,U+2020,U+20A0-20AB,U+20AD-20CF,U+2113,U+2C60-2C7F,U+A720-A7FF\n            }\n\n            @font-face {\n                font-family: 'Inter';\n                font-style: normal;\n                font-weight: 900;\n                font-display: block;\n                src: url(https://fonts.gstatic.com/s/inter/v3/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format('woff2');\n                unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD\n            }\n        ",
        }}
      />
      <style
        data-emotion="css 3tbo75"
        dangerouslySetInnerHTML={{
          __html:
            "\n        .css-3tbo75 {\n            line-height: 1.5;\n            --tw-bg-opacity: 1;\n            background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n        }\n\n        .dark .css-3tbo75 {\n            --tw-bg-opacity: 1;\n            background-color: rgba(24, 25, 26, var(--tw-bg-opacity));\n        }\n    ",
        }}
      />
      <input type="hidden" id="hn-user" />
      <div id="__next">
        <style
          data-emotion="css-global 1950jyy"
          dangerouslySetInnerHTML={{
            __html:
              '\n                *,*::before,*::after {\n                    box-sizing: border-box;\n                }\n\n                :root {\n                    -moz-tab-size: 4;\n                    tab-size: 4;\n                }\n\n                html {\n                    line-height: 1.15;\n                    -webkit-text-size-adjust: 100%;\n                }\n\n                body {\n                    margin: 0;\n                }\n\n                body {\n                    font-family: system-ui,-apple-system,\'Segoe UI\',Roboto,Helvetica,Arial,sans-serif,\'Apple Color Emoji\',\'Segoe UI Emoji\';\n                }\n\n                hr {\n                    height: 0;\n                    color: inherit;\n                }\n\n                abbr[title] {\n                    -webkit-text-decoration: underline dotted;\n                    text-decoration: underline dotted;\n                }\n\n                b,strong {\n                    font-weight: bolder;\n                }\n\n                code,kbd,samp,pre {\n                    font-family: ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;\n                    font-size: 1em;\n                }\n\n                small {\n                    font-size: 80%;\n                }\n\n                sub,sup {\n                    font-size: 75%;\n                    line-height: 0;\n                    position: relative;\n                    vertical-align: baseline;\n                }\n\n                sub {\n                    bottom: -0.25em;\n                }\n\n                sup {\n                    top: -0.5em;\n                }\n\n                table {\n                    text-indent: 0;\n                    border-color: inherit;\n                }\n\n                button,input,optgroup,select,textarea {\n                    font-family: inherit;\n                    font-size: 100%;\n                    line-height: 1.15;\n                    margin: 0;\n                }\n\n                button,select {\n                    text-transform: none;\n                }\n\n                button,[type=\'button\'],[type=\'reset\'],[type=\'submit\'] {\n                    -webkit-appearance: button;\n                }\n\n                ::-moz-focus-inner {\n                    border-style: none;\n                    padding: 0;\n                }\n\n                :-moz-focusring {\n                    outline: 1px dotted ButtonText;\n                }\n\n                :-moz-ui-invalid {\n                    box-shadow: none;\n                }\n\n                legend {\n                    padding: 0;\n                }\n\n                progress {\n                    vertical-align: baseline;\n                }\n\n                ::-webkit-inner-spin-button,::-webkit-outer-spin-button {\n                    height: auto;\n                }\n\n                [type=\'search\'] {\n                    -webkit-appearance: textfield;\n                    outline-offset: -2px;\n                }\n\n                ::-webkit-search-decoration {\n                    -webkit-appearance: none;\n                }\n\n                ::-webkit-file-upload-button {\n                    -webkit-appearance: button;\n                    font: inherit;\n                }\n\n                summary {\n                    display: -webkit-box;\n                    display: -webkit-list-item;\n                    display: -ms-list-itembox;\n                    display: list-item;\n                }\n\n                blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre {\n                    margin: 0;\n                }\n\n                button {\n                    background-color: transparent;\n                    background-image: none;\n                }\n\n                button:focus {\n                    outline: 1px dotted;\n                    outline: 5px auto -webkit-focus-ring-color;\n                }\n\n                fieldset {\n                    margin: 0;\n                    padding: 0;\n                }\n\n                ol,ul {\n                    list-style: none;\n                    margin: 0;\n                    padding: 0;\n                }\n\n                html {\n                    font-family: Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";\n                    line-height: 1.5;\n                }\n\n                body {\n                    font-family: inherit;\n                    line-height: inherit;\n                }\n\n                *,::before,::after {\n                    box-sizing: border-box;\n                    border-width: 0;\n                    border-style: solid;\n                    border-color: #e5e7eb;\n                }\n\n                hr {\n                    border-top-width: 1px;\n                }\n\n                img {\n                    border-style: solid;\n                }\n\n                textarea {\n                    resize: vertical;\n                }\n\n                input::-webkit-input-placeholder {\n                    color: #9ca3af;\n                }\n\n                input::-moz-placeholder {\n                    color: #9ca3af;\n                }\n\n                input:-ms-input-placeholder {\n                    color: #9ca3af;\n                }\n\n                textarea::-webkit-input-placeholder {\n                    color: #9ca3af;\n                }\n\n                textarea::-moz-placeholder {\n                    color: #9ca3af;\n                }\n\n                textarea:-ms-input-placeholder {\n                    color: #9ca3af;\n                }\n\n                input::placeholder,textarea::placeholder {\n                    color: #9ca3af;\n                }\n\n                button,[role="button"] {\n                    cursor: pointer;\n                }\n\n                table {\n                    border-collapse: collapse;\n                }\n\n                h1,h2,h3,h4,h5,h6 {\n                    font-size: inherit;\n                    font-weight: inherit;\n                }\n\n                a {\n                    color: inherit;\n                    -webkit-text-decoration: inherit;\n                    text-decoration: inherit;\n                }\n\n                button,input,optgroup,select,textarea {\n                    padding: 0;\n                    line-height: inherit;\n                    color: inherit;\n                }\n\n                pre,code,kbd,samp {\n                    font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;\n                }\n\n                img,svg,video,canvas,audio,iframe,embed,object {\n                    display: block;\n                    vertical-align: middle;\n                }\n\n                img,video {\n                    max-width: 100%;\n                    height: auto;\n                }\n\n                @-webkit-keyframes spin {\n                    to {\n                        -webkit-transform: rotate(360deg);\n                        -moz-transform: rotate(360deg);\n                        -ms-transform: rotate(360deg);\n                        transform: rotate(360deg);\n                    }\n                }\n\n                @keyframes spin {\n                    to {\n                        -webkit-transform: rotate(360deg);\n                        -moz-transform: rotate(360deg);\n                        -ms-transform: rotate(360deg);\n                        transform: rotate(360deg);\n                    }\n                }\n\n                @-webkit-keyframes ping {\n                    75%,100% {\n                        -webkit-transform: scale(2);\n                        -moz-transform: scale(2);\n                        -ms-transform: scale(2);\n                        transform: scale(2);\n                        opacity: 0;\n                    }\n                }\n\n                @keyframes ping {\n                    75%,100% {\n                        -webkit-transform: scale(2);\n                        -moz-transform: scale(2);\n                        -ms-transform: scale(2);\n                        transform: scale(2);\n                        opacity: 0;\n                    }\n                }\n\n                @-webkit-keyframes pulse {\n                    50% {\n                        opacity: .5;\n                    }\n                }\n\n                @keyframes pulse {\n                    50% {\n                        opacity: .5;\n                    }\n                }\n\n                @-webkit-keyframes bounce {\n                    0%,100% {\n                        -webkit-transform: translateY(-25%);\n                        -moz-transform: translateY(-25%);\n                        -ms-transform: translateY(-25%);\n                        transform: translateY(-25%);\n                        animationTimingFunction: cubic-bezier(0.8,0,1,1);\n                    }\n\n                    50% {\n                        -webkit-transform: none;\n                        -moz-transform: none;\n                        -ms-transform: none;\n                        transform: none;\n                        animationTimingFunction: cubic-bezier(0,0,0.2,1);\n                    }\n                }\n\n                @keyframes bounce {\n                    0%,100% {\n                        -webkit-transform: translateY(-25%);\n                        -moz-transform: translateY(-25%);\n                        -ms-transform: translateY(-25%);\n                        transform: translateY(-25%);\n                        animationTimingFunction: cubic-bezier(0.8,0,1,1);\n                    }\n\n                    50% {\n                        -webkit-transform: none;\n                        -moz-transform: none;\n                        -ms-transform: none;\n                        transform: none;\n                        animationTimingFunction: cubic-bezier(0,0,0.2,1);\n                    }\n                }\n\n                * {\n                    --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);\n                    --tw-ring-offset-width: 0px;\n                    --tw-ring-offset-color: #fff;\n                    --tw-ring-color: rgba(59, 130, 246, 0.5);\n                    --tw-ring-offset-shadow: 0 0 #0000;\n                    --tw-ring-shadow: 0 0 #0000;\n                }\n\n                * {\n                    --tw-shadow: 0 0 #0000;\n                }\n            ',
          }}
        />
        <style
          data-emotion="css 3159x8"
          dangerouslySetInnerHTML={{
            __html:
              "\n                .css-3159x8 {\n                    --tw-bg-opacity: 1;\n                    background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n                }\n\n                .dark .css-3159x8 {\n                    --tw-bg-opacity: 1;\n                    background-color: rgba(24, 25, 26, var(--tw-bg-opacity));\n                }\n            ",
          }}
        />
        <div className="blog-body css-3159x8">
          <style
            data-emotion="css 1p7bpg"
            dangerouslySetInnerHTML={{
              __html:
                "\n                    .css-1p7bpg {\n                        position: relative;\n                        z-index: 50;\n                        border-bottom-width: 1px;\n                    }\n\n                    .dark .css-1p7bpg {\n                        --tw-border-opacity: 1;\n                        border-color: rgba(66, 66, 66, var(--tw-border-opacity));\n                    }\n                ",
            }}
          />
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
          <style
            data-emotion="css a7ols6"
            dangerouslySetInnerHTML={{
              __html:
                "\n                    .css-a7ols6 {\n                        margin-left: auto;\n                        margin-right: auto;\n                        margin-top: 3rem;\n                    }\n\n                    @media (min-width: 768px) {\n                        .css-a7ols6 {\n                            width:66.666667%;\n                        }\n                    }\n                ",
            }}
          />
          <div
            className="blog-content-area feed-width css-a7ols6"
            itemProp="mainEntityOfPage"
          >
            <div>
              <div className="blog-posts-wrapper css-13wylk3">
                <style
                  data-emotion="css 16gx0ij"
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                .css-16gx0ij {\n                                    margin-bottom: 4rem;\n                                    padding-left: 1rem;\n                                    padding-right: 1rem;\n                                }\n\n                                @media (min-width: 1024px) {\n                                    .css-16gx0ij {\n                                        padding-left:4rem;\n                                        padding-right: 4rem;\n                                    }\n                                }\n                            ",
                  }}
                />
                <div className="blog-post-card css-16gx0ij">
                  <style
                    data-emotion="css zlewtl"
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .css-zlewtl {\n                                        display: -webkit-box;\n                                        display: -webkit-flex;\n                                        display: -ms-flexbox;\n                                        display: flex;\n                                        -webkit-box-flex-wrap: wrap;\n                                        -webkit-flex-wrap: wrap;\n                                        -ms-flex-wrap: wrap;\n                                        flex-wrap: wrap;\n                                        -webkit-align-items: flex-start;\n                                        -webkit-box-align: flex-start;\n                                        -ms-flex-align: flex-start;\n                                        align-items: flex-start;\n                                        -webkit-flex-direction: row;\n                                        -ms-flex-direction: row;\n                                        flex-direction: row;\n                                    }\n                                ",
                    }}
                  />
                  <section className="blog-post-card-wrapper css-zlewtl">
                    <style
                      data-emotion="css 1fx2wyw"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        @media (min-width: 1024px) {\n                                            .css-1fx2wyw {\n                                                width:60%;\n                                            }\n                                        }\n                                    ",
                      }}
                    />
                    <div className="css-1fx2wyw">
                      <style
                        data-emotion="css on3vf4"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-on3vf4 {\n                                                margin-bottom: 0.75rem;\n                                                font-size: 1.5rem;\n                                                line-height: 1.25;\n                                                font-weight: 700;\n                                                letter-spacing: -0.025em;\n                                                overflow-wrap: break-word;\n                                                --tw-text-opacity: 1;\n                                                color: rgba(51, 51, 51, var(--tw-text-opacity));\n                                            }\n\n                                            .dark .css-on3vf4 {\n                                                --tw-text-opacity: 1;\n                                                color: rgba(255, 255, 255, var(--tw-text-opacity));\n                                            }\n\n                                            @media (min-width: 1024px) {\n                                                .css-on3vf4 {\n                                                    font-size:1.875rem;\n                                                    line-height: 2.25rem;\n                                                }\n                                            }\n                                        ",
                        }}
                      />
                      <h1 className="blog-post-card-title css-on3vf4">
                        <a
                          aria-label="Integrate your React App with Smart Contracts"
                          href="/integrate-your-react-app-with-smart-contracts"
                        >
                          Integrate your React App with Smart Contracts
                        </a>
                      </h1>
                      <style
                        data-emotion="css y07gv8"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-y07gv8 {\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                -webkit-flex-direction: row;\n                                                -ms-flex-direction: row;\n                                                flex-direction: row;\n                                                -webkit-box-flex-wrap: wrap;\n                                                -webkit-flex-wrap: wrap;\n                                                -ms-flex-wrap: wrap;\n                                                flex-wrap: wrap;\n                                                -webkit-align-items: center;\n                                                -webkit-box-align: center;\n                                                -ms-flex-align: center;\n                                                align-items: center;\n                                                margin-bottom: 0.75rem;\n                                                font-size: 0.875rem;\n                                                line-height: 1.25rem;\n                                                --tw-text-opacity: 1;\n                                                color: rgba(97, 97, 97, var(--tw-text-opacity));\n                                            }\n\n                                            .dark .css-y07gv8 {\n                                                --tw-text-opacity: 1;\n                                                color: rgba(189, 189, 189, var(--tw-text-opacity));\n                                            }\n                                        ",
                        }}
                      />
                      <div className="blog-post-card-meta css-y07gv8">
                        <style
                          data-emotion="css nfd03i"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                                                .css-nfd03i {\n                                                    margin-right: 1rem;\n                                                }\n                                            ",
                          }}
                        />
                        <a
                          aria-label="Integrate your React App with Smart Contracts"
                          className="blog-post-card-time css-nfd03i"
                          href="/integrate-your-react-app-with-smart-contracts"
                        >
                          Jul 19, 2021
                        </a>
                        <style
                          data-emotion="css bbt5q4"
                          dangerouslySetInnerHTML={{
                            __html:
                              "\n                                                .css-bbt5q4 {\n                                                    display: -webkit-box;\n                                                    display: -webkit-flex;\n                                                    display: -ms-flexbox;\n                                                    display: flex;\n                                                    -webkit-flex-direction: row;\n                                                    -ms-flex-direction: row;\n                                                    flex-direction: row;\n                                                    -webkit-align-items: center;\n                                                    -webkit-box-align: center;\n                                                    -ms-flex-align: center;\n                                                    align-items: center;\n                                                    margin-right: 1rem;\n                                                }\n                                            ",
                          }}
                        />
                        <a
                          aria-label="Integrate your React App with Smart Contracts min read"
                          href="/integrate-your-react-app-with-smart-contracts"
                          className="css-bbt5q4"
                        >
                          <style
                            data-emotion="css 1vlfi6p"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                    .css-1vlfi6p {\n                                                        width: 1rem;\n                                                        height: 1rem;\n                                                        margin-right: 0.25rem;\n                                                        fill: currentColor;\n                                                    }\n                                                ",
                            }}
                          />
                          <style
                            data-emotion="css hb3dfw"
                            dangerouslySetInnerHTML={{
                              __html:
                                "\n                                                    .css-hb3dfw {\n                                                        width: 1rem;\n                                                        height: 1rem;\n                                                        margin-right: 0.25rem;\n                                                        fill: currentColor;\n                                                    }\n                                                ",
                            }}
                          />
                          <svg className="css-hb3dfw" viewBox="0 0 512 512">
                            <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm216 248c0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216zm-148.9 88.3l-81.2-59c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h14c6.6 0 12 5.4 12 12v146.3l70.5 51.3c5.4 3.9 6.5 11.4 2.6 16.8l-8.2 11.3c-3.9 5.3-11.4 6.5-16.8 2.6z" />
                          </svg>
                          <span>
                            9{/* */}
                            min read{" "}
                          </span>
                        </a>
                      </div>
                      <style
                        data-emotion="css ch9q11"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-ch9q11 {\n                                                display: block;\n                                                width: 100%;\n                                                font-size: 1rem;\n                                                line-height: 1.375;\n                                                overflow-wrap: break-word;\n                                                --tw-text-opacity: 1;\n                                                color: rgba(97, 97, 97, var(--tw-text-opacity));\n                                            }\n\n                                            .dark .css-ch9q11 {\n                                                --tw-text-opacity: 1;\n                                                color: rgba(189, 189, 189, var(--tw-text-opacity));\n                                            }\n                                        ",
                        }}
                      />
                      <p className="blog-post-card-brief css-ch9q11">
                        <a
                          aria-label="Integrate your React App with Smart Contracts"
                          href="/integrate-your-react-app-with-smart-contracts"
                        >
                          In the previous blog, we discussed writing a Smart
                          Contract using Solidity and interacting with it using
                          Remix IDE. Now, we 'll deploy our Lottery contract
                          wrote in previous blog. Note: You can refer this repo
                          to follow along. Initialize an empty reac...
                        </a>
                      </p>
                    </div>
                    <style
                      data-emotion="css 4hopac"
                      dangerouslySetInnerHTML={{
                        __html:
                          "\n                                        .css-4hopac {\n                                            width: 100%;\n                                            margin-top: 1.5rem;\n                                        }\n\n                                        @media (min-width: 1024px) {\n                                            .css-4hopac {\n                                                margin-top:0px;\n                                                padding-left: 2rem;\n                                                width: 40%;\n                                            }\n                                        }\n                                    ",
                      }}
                    />
                    <div className="blog-post-card-cover css-4hopac">
                      <style
                        data-emotion="css 1vqi5ql"
                        dangerouslySetInnerHTML={{
                          __html:
                            "\n                                            .css-1vqi5ql {\n                                                display: -webkit-box;\n                                                display: -webkit-flex;\n                                                display: -ms-flexbox;\n                                                display: flex;\n                                                overflow: hidden;\n                                                border-width: 1px;\n                                                border-radius: 0.5rem;\n                                            }\n\n                                            .dark .css-1vqi5ql {\n                                                --tw-border-opacity: 1;\n                                                border-color: rgba(66, 66, 66, var(--tw-border-opacity));\n                                            }\n                                        ",
                        }}
                      />
                      <a
                        aria-label="Integrate your React App with Smart Contracts"
                        href="/integrate-your-react-app-with-smart-contracts"
                        className="css-1vqi5ql"
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
                            alt="Integrate your React App with Smart Contracts"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                            decoding="async"
                            className="post-cover"
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
                              filter: "blur(20px)",
                              backgroundSize: "cover",
                              backgroundImage:
                                'url("https://cdn.hashnode.com/res/hashnode/image/upload/v1626706306258/knGEJ2Gki.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp&fm=blurhash")',
                            }}
                          />
                        </div>
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
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

          <footer class="blog-footer-area css-4dfc6h">
            <div class="blog-footer-credits css-z0tjgn">
              <p class="css-2559wl">© 2021 Nazeeh's Blog</p>
              <a
                class="button-transparent small css-171wbv4"
                href="https://hashnode.com/privacy?source=blog-footer"
                target="_blank"
                rel="noopener"
              >
                Privacy
              </a>
              <a
                class="button-transparent small css-171wbv4"
                href="https://hashnode.com/terms?source=blog-footer"
                target="_blank"
                rel="noopener"
              >
                Terms
              </a>
            </div>
            <div class="css-1km1bze">
              <span class="css-1v4n890">Proudly part of</span>
              <a
                aria-label="Hashnode"
                href="https://hashnode.com?source=blog-footer"
                target="_blank"
                rel="noopener"
              >
                <svg class="css-1trayuc" viewBox="0 0 688 118" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                    fill="#2962FF"
                  ></path>
                  <path
                    d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z"
                    fill="fill-current"
                    id="hn-dark-logo"
                  ></path>
                </svg>
              </a>
            </div>
          </footer>
        </div>
      </div>
      <div id="hn-modal" />
      <div id="hn-toast" />
    </div>
  );
};

export default homepage;
