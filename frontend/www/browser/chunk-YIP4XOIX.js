// node_modules/@ionic/core/dist/esm/watch-options-Dtdm8lKC.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var watchForOptions = (containerEl, tagName, onChange) => {
  if (typeof MutationObserver === "undefined") {
    return;
  }
  const mutation = new MutationObserver((mutationList) => {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};
var getSelectedOption = (mutationList, tagName) => {
  let newOption;
  mutationList.forEach((mut) => {
    for (let i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};
var findCheckedOption = (node, tagName) => {
  if (node.nodeType !== 1) {
    return void 0;
  }
  const el = node;
  const options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find((o) => o.value === el.value);
};

export {
  watchForOptions
};
//# debugId=74530ad8-33c6-598b-9b15-272cc61fdc9b
//# sourceMappingURL=chunk-YIP4XOIX.js.map
