// node_modules/@ionic/core/dist/esm/compare-with-utils-sObYyvOy.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === "function") {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === "string") {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
var isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === void 0) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};

export {
  compareOptions,
  isOptionSelected
};
//# debugId=43115994-ed8f-55f2-b1ce-7f3608668469
//# sourceMappingURL=chunk-BS7A5WM2.js.map
