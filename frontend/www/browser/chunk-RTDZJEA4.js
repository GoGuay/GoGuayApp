// node_modules/@ionic/core/dist/esm/item-multiple-inputs-DlNuqNJm.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var createItemMultipleInputsObserver = (el, onChange, classNames = ["item-multiple-inputs"]) => {
  const item = el.closest("ion-item");
  if (!item || false || typeof MutationObserver === "undefined") {
    return void 0;
  }
  const readClasses = () => classNames.map((name) => item.classList.contains(name)).join(",");
  let previousClasses = readClasses();
  const observer = new MutationObserver(() => {
    const currentClasses = readClasses();
    if (currentClasses !== previousClasses) {
      previousClasses = currentClasses;
      onChange();
    }
  });
  observer.observe(item, { attributes: true, attributeFilter: ["class"] });
  return observer;
};

export {
  createItemMultipleInputsObserver
};
//# debugId=fcec3cf1-ea87-5b69-bf0c-800cb394a4e4
//# sourceMappingURL=chunk-RTDZJEA4.js.map
