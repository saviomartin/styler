import { useEffect, useState } from "react";

// css files
import "tailwindcss/tailwind.css";
import "../styles/App.css";

// mockData to be used as default data
import mockData from "../components/data";

// helper that will convert data to css
import { generateCSS } from "../components/helper";

// auth0 wrapper
import { UserProvider } from "@auth0/nextjs-auth0";

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

  return (
    <UserProvider>
      <Component {...pageProps} {...props} />
    </UserProvider>
  );
}

export default MyApp;
