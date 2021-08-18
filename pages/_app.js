import { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import "../styles/App.css";
import mockData from "../components/data";

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState(mockData);
  const [basicStyles, setBasicStyles] = useState(
    `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap')\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  height: 100%;\n  font-family: "Inter", sans-serif;\n}`
  );
  const [chosenElement, setChosenElement] = useState("");

  const props = {
    data,
    setData,
    chosenElement,
    setChosenElement,
    basicStyles,
    setBasicStyles,
  };

  // useEffect(() => {

  // }, [])

  return <Component {...pageProps} {...props} />;
}

export default MyApp;
