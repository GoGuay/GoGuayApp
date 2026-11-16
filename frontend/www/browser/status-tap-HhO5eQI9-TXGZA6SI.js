import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-SGWRGHUK.js";
import {
  componentOnReady
} from "./chunk-KJR5G6CW.js";
import "./chunk-KD7SVZKO.js";
import {
  readTask,
  writeTask
} from "./chunk-BPLG4SRC.js";
import {
  __async
} from "./chunk-5SZB5ECT.js";

// node_modules/@ionic/core/dist/esm/status-tap-HhO5eQI9.js
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
/*! Bundled license information:

@ionic/core/dist/esm/status-tap-HhO5eQI9.js:
  (*!
   * (C) Ionic http://ionicframework.com - MIT License
   *)
*/
//# sourceMappingURL=status-tap-HhO5eQI9-TXGZA6SI.js.map
