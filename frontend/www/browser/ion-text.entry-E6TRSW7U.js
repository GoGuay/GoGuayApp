import {
  createColorClasses
} from "./chunk-GUHVPX3Y.js";
import {
  getIonMode
} from "./chunk-OUKGZKTF.js";
import {
  Host,
  h,
  registerInstance
} from "./chunk-7O2RIIXI.js";
import "./chunk-MP5LG4CB.js";

// node_modules/@ionic/core/dist/esm/ion-text.entry.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var textCss = () => `:host(.ion-color){color:var(--ion-color-base)}`;
var Text = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    const mode = getIonMode(this);
    return h(Host, { key: "bfaa49d35f43b8036725ae8a322c716fc6e43bdf", class: createColorClasses(this.color, {
      [mode]: true
    }) }, h("slot", { key: "c04880cd1935b42cbe60f58fd523b4d8a96072dc" }));
  }
};
Text.style = textCss();
export {
  Text as ion_text
};
//# debugId=80e60e8f-ffc6-5cb0-a646-571586325c94
//# sourceMappingURL=ion-text.entry-E6TRSW7U.js.map
