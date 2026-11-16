import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-5CAQ4TCF.js";
import {
  componentOnReady
} from "./chunk-ZO2Q2TV5.js";
import "./chunk-NZ2QYBMG.js";
import {
  readTask,
  writeTask
} from "./chunk-5MFCCRYD.js";
import {
  __async
} from "./chunk-5SZB5ECT.js";

// node_modules/@ionic/core/dist/esm/status-tap-HhO5eQI9.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(null, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
//# sourceMappingURL=status-tap-HhO5eQI9-WO4TPK4C.js.map
