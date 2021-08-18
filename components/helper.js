export const generateCSS = (data, basicStyles) => {
  let code;

  data.map((item) => {
    if (item.code.length > 0) {
      code += item.code;
    }
  });

  return code;
};
