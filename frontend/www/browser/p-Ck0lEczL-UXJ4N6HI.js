import {
  c,
  l
} from "./chunk-4XZH5Q4W.js";
import {
  t
} from "./chunk-77FB7LC2.js";
import {
  H,
  P
} from "./chunk-SE3K5JBJ.js";
import {
  __async
} from "./chunk-MP5LG4CB.js";

// node_modules/@ionic/core/components/p-Ck0lEczL.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var n = () => {
  const n2 = window;
  n2.addEventListener("statusTap", (() => {
    H((() => {
      const o = document.elementFromPoint(n2.innerWidth / 2, n2.innerHeight / 2);
      if (!o) return;
      const i = l(o);
      i && new Promise(((o2) => t(i, o2))).then((() => {
        P((() => __async(null, null, function* () {
          i.style.setProperty("--overflow", "hidden"), yield c(i, 300), i.style.removeProperty("--overflow");
        })));
      }));
    }));
  }));
};
export {
  n as startStatusTap
};
//# debugId=8e7d6a4a-a1fc-5830-8e5c-b118d605795c
//# sourceMappingURL=p-Ck0lEczL-UXJ4N6HI.js.map
