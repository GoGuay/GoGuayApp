import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-ZTU76WXH.js";
import {
  componentOnReady
} from "./chunk-QZNKOL6V.js";
import "./chunk-NZ2QYBMG.js";
import {
  readTask,
  writeTask
} from "./chunk-7O2RIIXI.js";
import {
  __async
} from "./chunk-MP5LG4CB.js";

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
//# debugId=7723bba2-b213-5471-a2a8-63b57d094839
//# sourceMappingURL=status-tap-HhO5eQI9-MFEX3W6I.js.map
