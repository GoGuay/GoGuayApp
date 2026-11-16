import {
  n
} from "./chunk-SWNU2J3M.js";
import {
  o,
  v
} from "./chunk-77FB7LC2.js";
import "./chunk-SE3K5JBJ.js";
import "./chunk-MP5LG4CB.js";

// node_modules/@ionic/core/components/p-CgkrslTX.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var s = (s2, e, n2, a, c) => {
  const i = s2.ownerDocument.defaultView;
  let p = o(s2);
  const m = (t) => p ? -t.deltaX : t.deltaX;
  return n({ el: s2, gestureName: "goback-swipe", gesturePriority: 101, threshold: 10, canStart: (t) => (p = o(s2), ((t2) => {
    const { startX: o2 } = t2;
    return p ? o2 >= i.innerWidth - 50 : o2 <= 50;
  })(t) && e()), onStart: n2, onMove: (t) => {
    const o2 = m(t);
    a(o2 / i.innerWidth);
  }, onEnd: (o2) => {
    const r = m(o2), s3 = i.innerWidth, e2 = r / s3, n3 = ((t) => p ? -t.velocityX : t.velocityX)(o2), a2 = n3 >= 0 && (n3 > 0.2 || r > s3 / 2), f = (a2 ? 1 - e2 : e2) * s3;
    let u = 0;
    if (f > 5) {
      const t = f / Math.abs(n3);
      u = Math.min(t, 540);
    }
    c(a2, e2 <= 0 ? 0.01 : v(0, e2, 0.9999), u);
  } });
};
export {
  s as createSwipeBackGesture
};
//# debugId=7068af62-60c1-51ba-895f-6b64a2122eb3
//# sourceMappingURL=p-CgkrslTX-CMQT6D45.js.map
