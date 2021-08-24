import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/App.css";
import mockData from "../components/data";
import { generateCSS } from "../components/helper";
import { UserProvider } from "@auth0/nextjs-auth0";

// Router from next
import Router from "next/router";

// showing progress using nprogress
import NProgress from "nprogress";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(mockData);
  const [basicStyles, setBasicStyles] = useState(
    `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  font-family: "Inter", sans-serif;\n}`
  );
  const [chosenElement, setChosenElement] = useState("");
  const [CSSCode, setCSSCode] = useState("");

  const props = {
    data,
    setData,
    chosenElement,
    setChosenElement,
    basicStyles,
    setBasicStyles,
    CSSCode,
    setCSSCode,
  };

  useEffect(() => {
    setCSSCode(generateCSS(data, basicStyles));
  }, [data, basicStyles]);

  // config nprogress
  NProgress.configure({ showSpinner: false });

  // showing loading and progress
  Router.events.on("routeChangeStart", (url) => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", (url) => {
    NProgress.done();
  });

  return (
    <UserProvider>
      <Component {...pageProps} {...props} />
    </UserProvider>
  );
}

export default MyApp;
