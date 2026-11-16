// node_modules/@ionic/core/dist/esm/dir-o8OKV5aD.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var isRTL = (hostEl) => {
  var _a, _b;
  for (let el = hostEl; el; el = el.parentElement) {
    const dir = (_a = el.getAttribute("dir")) === null || _a === void 0 ? void 0 : _a.toLowerCase();
    if (dir === "rtl") {
      return true;
    }
    if (dir === "ltr") {
      return false;
    }
  }
  return ((_b = document === null || document === void 0 ? void 0 : document.dir) === null || _b === void 0 ? void 0 : _b.toLowerCase()) === "rtl";
};

export {
  isRTL
};
//# debugId=f32e9a74-b601-5bad-a07f-bdac34efe2e1
//# sourceMappingURL=chunk-NZ2QYBMG.js.map
