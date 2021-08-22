export const generateCSS = (data, basicStyles) => {
  let media = {
    sm: "",
    md: "",
    lg: "",
  };

  let code;

  if (basicStyles) {
    code += `\n\n${basicStyles}`;
  }

  data.map((item) => {
    if (item.code !== undefined && item.code.length > 0) {
      code += `\n\n${item.code}`;
    }
    if (item.options.hover !== undefined && item.options.hover.length > 0) {
      code += `\n\n${item.options.hover}`;
    }
    if (
      item.options.darkMode !== undefined &&
      item.options.darkMode.length > 0
    ) {
      code += `\n\n${item.options.darkMode}`;
    }
    if (
      item.options.media.sm !== undefined &&
      item.options.media.sm.length > 0
    ) {
      media.sm += `${item.options.media.sm}\n\n`;
    }
    if (
      item.options.media.md !== undefined &&
      item.options.media.md.length > 0
    ) {
      media.md += `${item.options.media.md}\n\n`;
    }
    if (
      item.options.media.lg !== undefined &&
      item.options.media.lg.length > 0
    ) {
      media.lg += `${item.options.media.lg}\n\n`;
    }
  });

  if (media) {
    if (media.lg && media.lg.charAt(media.lg.length - 2) !== `/n`) {
      code += `\n\n@media only screen and (max-width: 1536px) {\n${media.lg.slice(
        0,
        -1
      )}}`;
    }
    if (media.md) {
      code += `\n\n@media only screen and (max-width: 768px) {\n${media.md.slice(
        0,
        -1
      )}}`;
    }
    if (media.sm) {
      code += `\n\n@media only screen and (max-width: 640px) {\n${media.sm.slice(
        0,
        -1
      )}}`;
    }
  }

  return code.slice(10);
};
