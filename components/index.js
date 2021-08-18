import dynamic from "next/dynamic";

// core components
export { default as LeftSideBar } from "./core/LeftSideBar";
export { default as PlayGround } from "./core/PlayGround";
export { default as AppHeader } from "./core/AppHeader";
export { default as AppFooter } from "./core/AppFooter";
export { default as AdvancedSettings } from "./core/AdvancedSettings";
export { default as DefaultLeftSide } from "./core/DefaultLeftSide";
export { default as EditingLeftSide } from "./core/EditingLeftSide";

// util components
export { default as Btn } from "./utils/Btn";
export { default as Accordion } from "./utils/Accordion";
export { default as FancyBtn } from "./utils/FancyBtn";

// dynamic export
export const CodeBlock = dynamic(import("./utils/CodeBlock"), { ssr: false });
