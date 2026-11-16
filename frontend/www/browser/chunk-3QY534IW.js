import {
  B,
  FilterMatchMode,
  H,
  N,
  Z,
  ae,
  c,
  fe,
  l,
  p,
  s,
  x
} from "./chunk-Q5CK7R7A.js";
import {
  isPlatformServer
} from "./chunk-XCBA4FSK.js";
import {
  DOCUMENT,
  DestroyRef,
  Injectable,
  InjectionToken,
  NgZone,
  PLATFORM_ID,
  Subject,
  effect,
  inject,
  isDevMode,
  makeEnvironmentProviders,
  provideAppInitializer,
  setClassMetadata,
  signal,
  untracked,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-4LZZ5H7X.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-MP5LG4CB.js";

// node_modules/primeng/node_modules/@primeuix/utils/dist/classnames/index.mjs
function a(...t3) {
  let e3 = [];
  for (let n4 = 0; n4 < t3.length; n4++) {
    let r3 = t3[n4];
    if (!r3) continue;
    let s4 = typeof r3;
    if (s4 === "string" || s4 === "number") e3.push(r3);
    else if (s4 === "object") {
      let o3 = Array.isArray(r3) ? [a(...r3)] : Object.entries(r3).map(([i3, f2]) => f2 ? i3 : void 0);
      e3 = o3.length ? e3.concat(o3.filter((i3) => !!i3)) : e3;
    }
  }
  return e3.join(" ").trim();
}
var p2;
var g = (t3) => t3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function d(t3) {
  let { prefix: e3, from: n4 = "p", keep: r3 = [] } = typeof t3 == "object" && t3 !== null ? t3 : { prefix: t3 };
  return { prefix: e3 && e3 !== n4 ? e3 : void 0, from: n4, keep: r3 };
}
function x2(t3, e3, n4) {
  let r3 = `${e3}
${t3}
${n4.join(`
`)}`;
  p2 != null || (p2 = /* @__PURE__ */ new Map());
  let s4 = p2.get(r3);
  if (!s4) {
    let o3 = n4.length ? `(?!${g(e3)}-(?:${n4.map(g).join("|")})(?!\\w))` : "", i3 = `(?!${g(`${t3}-`)})${o3}`, f2 = g(`${e3}-`);
    s4 = { token: new RegExp(`(^|\\s)${i3}${f2}(?=[a-z])`, "g"), dot: new RegExp(`\\.${i3}${f2}(?=[a-z])`, "g"), attribute: /\[\s*class\s*([~|^$*]?=)\s*(?:"([^"]*)"|'([^']*)'|([^\s"'\]]+))/gi, value: new RegExp(`(^|\\s)${i3}${f2}(?=[a-z]|$)`, "g") }, p2.size > 32 && p2.clear(), p2.set(r3, s4);
  }
  return s4;
}
function O(t3, ...e3) {
  let n4 = a(...e3), { prefix: r3, from: s4, keep: o3 } = d(t3);
  return !n4 || !r3 ? n4 : n4.replace(x2(r3, s4, o3).token, `$1${r3}-`);
}
function y(t3, e3) {
  let { prefix: n4, from: r3, keep: s4 } = d(t3);
  if (!e3 || !n4) return e3;
  let { dot: o3, attribute: i3, value: f2 } = x2(n4, r3, s4), R3 = (c5) => c5.replace(f2, `$1${n4}-`);
  return e3.replace(o3, `.${n4}-`).replace(i3, (c5, E4, u3, m2, h2) => {
    var k3, P4;
    let $4 = (P4 = (k3 = u3 != null ? u3 : m2) != null ? k3 : h2) != null ? P4 : "", l4 = u3 !== void 0 ? '"' : m2 !== void 0 ? "'" : "";
    return c5.slice(0, c5.length - $4.length - l4.length * 2) + l4 + R3($4) + l4;
  });
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/dom/index.mjs
function D(t3, e3) {
  return t3 ? t3.classList ? t3.classList.contains(e3) : new RegExp("(^| )" + e3 + "( |$)", "gi").test(t3.className) : false;
}
function M(t3, e3) {
  if (t3 && e3) {
    let o3 = (n4) => {
      D(t3, n4) || (t3.classList ? t3.classList.add(n4) : t3.className += " " + n4);
    };
    [e3].flat().filter(Boolean).forEach((n4) => n4.split(" ").forEach(o3));
  }
}
function I() {
  return window.innerWidth - document.documentElement.offsetWidth;
}
function xt(t3) {
  typeof t3 == "string" ? M(document.body, t3 || "p-overflow-hidden") : (t3 != null && t3.variableName && document.body.style.setProperty(t3.variableName, I() + "px"), M(document.body, (t3 == null ? void 0 : t3.className) || "p-overflow-hidden"));
}
function W(t3, e3) {
  if (t3 && e3) {
    let o3 = (n4) => {
      t3.classList ? t3.classList.remove(n4) : t3.className = t3.className.replace(new RegExp("(^|\\b)" + n4.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    [e3].flat().filter(Boolean).forEach((n4) => n4.split(" ").forEach(o3));
  }
}
function wt(t3) {
  typeof t3 == "string" ? W(document.body, t3 || "p-overflow-hidden") : (t3 != null && t3.variableName && document.body.style.removeProperty(t3.variableName), W(document.body, (t3 == null ? void 0 : t3.className) || "p-overflow-hidden"));
}
var we = /expression\s*\(|url\s*\(\s*['"]?\s*(?:javascript|vbscript):|@import\s+['"]?\s*(?:javascript|vbscript|data):/i;
var Et = /url\s*\(\s*['"]?\s*(data:[^'")]*)/gi;
var Ee = /* @__PURE__ */ new Set(["href", "src", "xlink:href", "action", "formaction"]);
var Te = /* @__PURE__ */ new Set(["http", "https", "mailto", "tel", "sms", "ftp", "ftps", "blob"]);
var Tt = /^data:image\/(?:png|gif|jpeg|jpg|webp|bmp|avif);base64,[a-z0-9+/=\s]+$/i;
function _(t3) {
  if (typeof t3 != "string") return false;
  if (we.test(t3)) return true;
  Et.lastIndex = 0;
  let e3;
  for (; e3 = Et.exec(t3); ) if (!Tt.test(e3[1].trim())) return true;
  return false;
}
function ve(t3) {
  let e3 = "";
  for (let o3 of t3) {
    let n4 = o3.charCodeAt(0);
    n4 <= 31 || n4 === 127 || /\s/.test(o3) || (e3 += o3);
  }
  return e3;
}
function Ce(t3, e3) {
  var i3, s4;
  let o3 = ve(t3), n4 = e3.toLowerCase();
  if (o3.startsWith("#") || o3.startsWith("/") || o3.startsWith("./") || o3.startsWith("../") || o3.startsWith("?")) return true;
  let r3 = (s4 = (i3 = o3.match(/^([a-z][a-z0-9+.-]*):/i)) == null ? void 0 : i3[1]) == null ? void 0 : s4.toLowerCase();
  return r3 ? r3 === "data" ? (n4 === "src" || n4 === "xlink:href") && Tt.test(t3.trim()) : Te.has(r3) : true;
}
function P(t3, e3) {
  return typeof e3 == "string" && Ee.has(t3.toLowerCase()) && !Ce(e3, t3);
}
function O2(t3, e3) {
  return t3.toLowerCase() === "srcdoc" && typeof e3 == "string" && /<\s*script\b|on\w+\s*=|javascript:|data:text\/html/i.test(e3);
}
function He(t3) {
  return t3.startsWith("--") ? t3 : t3.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function X(t3, e3, o3 = {}) {
  o3.clear && (t3.style.cssText = ""), e3.forEach((n4) => {
    let r3 = n4.indexOf(":");
    if (r3 < 0) return;
    let i3 = n4.slice(0, r3).trim(), s4 = n4.slice(r3 + 1).trim();
    if (!i3 || _(s4)) return;
    let l4 = "";
    /!\s*important$/i.test(s4) && (s4 = s4.replace(/!\s*important$/i, "").trim(), l4 = "important"), t3.style.setProperty(i3, s4, l4);
  });
}
function Ae(t3, e3) {
  let o3 = 0;
  for (; e3 - 1 - o3 >= 0 && t3[e3 - 1 - o3] === "\\"; ) o3++;
  return o3 % 2 === 1;
}
function Re(t3) {
  let e3 = [], o3 = 0, n4 = "", r3 = 0;
  for (let i3 = 0; i3 < t3.length; i3++) {
    let s4 = t3[i3];
    n4 ? s4 === n4 && !Ae(t3, i3) && (n4 = "") : s4 === "'" || s4 === '"' ? n4 = s4 : s4 === "(" ? r3++ : s4 === ")" ? r3 = Math.max(0, r3 - 1) : s4 === ";" && r3 === 0 && (e3.push(t3.slice(o3, i3)), o3 = i3 + 1);
  }
  return e3.push(t3.slice(o3)), e3;
}
function E(t3, e3, o3 = {}) {
  if (typeof e3 == "string") {
    let n4 = Re(e3);
    X(t3, n4, o3);
    return;
  }
  o3.clear && (t3.style.cssText = ""), Object.entries(e3).forEach(([n4, r3]) => {
    if (r3 == null || _(r3)) return;
    let i3 = String(r3), s4 = "";
    /!\s*important$/i.test(i3) && (i3 = i3.replace(/!\s*important$/i, "").trim(), s4 = "important"), t3.style.setProperty(He(n4), i3, s4);
  });
}
function c2(t3) {
  return typeof Element != "undefined" ? t3 instanceof Element : t3 !== null && typeof t3 == "object" && t3.nodeType === 1 && typeof t3.nodeName == "string";
}
function b(t3) {
  var o3;
  if (c2(t3)) return t3;
  if (!t3 || typeof t3 != "object") return;
  let e3 = t3;
  if ("current" in t3) e3 = t3.current, e3 = (o3 = b(e3 == null ? void 0 : e3.elementRef)) != null ? o3 : e3;
  else if ("value" in t3) e3 = t3.value;
  else if ("nativeElement" in t3) e3 = t3.nativeElement;
  else if ("el" in t3) {
    let n4 = t3.el;
    n4 && typeof n4 == "object" && "nativeElement" in n4 ? e3 = n4.nativeElement : e3 = n4;
  } else if ("elementRef" in t3) return b(t3.elementRef);
  return e3 = x(e3), c2(e3) ? e3 : void 0;
}
function A(t3, e3, o3) {
  if (typeof o3 != "function" && !(typeof o3 == "object" && o3 !== null && "handleEvent" in o3)) return;
  let n4 = t3, r3 = n4._pListeners || (n4._pListeners = []), i3 = false;
  for (let s4 = r3.length - 1; s4 >= 0; s4--) r3[s4][0] === e3 && (r3[s4][1] === o3 ? i3 = true : (t3.removeEventListener(e3, r3[s4][1]), r3.splice(s4, 1)));
  i3 || (t3.addEventListener(e3, o3), r3.push([e3, o3]));
}
function $(t3, e3 = {}) {
  if (c2(t3)) {
    let o3 = t3 == null ? void 0 : t3.$attrs, n4 = (s4, l4) => {
      let d4 = o3 != null && o3[s4] ? [o3[s4]] : [];
      return [l4].flat().reduce((f2, a5) => {
        if (a5 != null) {
          let u3 = typeof a5;
          if (u3 === "string" || u3 === "number") f2.push(a5);
          else if (u3 === "object") {
            let p3 = Array.isArray(a5) ? n4(s4, a5) : Object.entries(a5).map(([m2, T3]) => s4 === "style" && (T3 || T3 === 0) ? `${m2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()}:${T3}` : T3 ? m2 : void 0);
            f2 = p3.length ? f2.concat(p3.filter((m2) => !!m2)) : f2;
          }
        }
        return f2;
      }, d4);
    }, r3 = (s4) => {
      let l4 = n4("style", s4);
      X(t3, l4);
    }, i3 = t3;
    Object.entries(e3).forEach(([s4, l4]) => {
      if (l4 != null) {
        let d4 = s4.match(/^on(.+)/);
        if (d4) A(t3, d4[1].toLowerCase(), l4);
        else if (s4 === "p-bind" || s4 === "pBind") $(t3, l4);
        else if (s4 === "style") r3(l4), i3.$attrs = i3.$attrs || {}, i3.$attrs[s4] = t3.style.cssText;
        else {
          if (P(s4, l4) || O2(s4, l4)) return;
          l4 = s4 === "class" ? [...new Set(n4("class", l4))].join(" ").trim() : l4, i3.$attrs = i3.$attrs || {}, i3.$attrs[s4] = l4, t3.setAttribute(s4, l4);
        }
      }
    });
  }
}
function Q(t3) {
  return (t3 != null ? t3 : "").replace(/<\/(style)/gi, "<\\/$1");
}
function J(t3) {
  return String(t3).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function K(t3 = {}) {
  return Object.keys(t3).filter((e3) => /^[^\s"'<>/=]+$/.test(e3)).map((e3) => `${e3}="${J(t3[e3])}"`);
}
function rt(t3) {
  var o3, n4, r3, i3, s4;
  if (t3 && t3.nodeType !== 9) {
    let l4 = (o3 = t3.getRootNode) == null ? void 0 : o3.call(t3);
    if ((l4 == null ? void 0 : l4.nodeType) === 9 || (l4 == null ? void 0 : l4.nodeType) === 11) return (n4 = l4.activeElement) != null ? n4 : null;
    t3 = void 0;
  }
  let e3 = (i3 = (r3 = t3 != null ? t3 : typeof document == "undefined" ? void 0 : document) == null ? void 0 : r3.activeElement) != null ? i3 : null;
  for (; (s4 = e3 == null ? void 0 : e3.shadowRoot) != null && s4.activeElement; ) e3 = e3.shadowRoot.activeElement;
  return e3;
}
function Gt(t3) {
  var o3;
  let e3 = (o3 = t3 == null ? void 0 : t3.getRootNode) == null ? void 0 : o3.call(t3);
  return e3 && e3.nodeType === 11 && "host" in e3 ? e3 : null;
}
function ue() {
  return new Promise((t3) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => t3());
    });
  });
}
function be(t3, e3 = "", o3) {
  if (c2(t3) && o3 !== null && o3 !== void 0) {
    let n4 = e3.toLowerCase();
    if (/^on[a-z]/.test(n4)) {
      A(t3, n4.slice(2), o3);
      return;
    }
    if (n4 === "style") {
      typeof o3 == "string" ? E(t3, o3, { clear: true }) : typeof o3 == "object" && E(t3, o3);
      return;
    }
    if (P(e3, o3) || O2(e3, o3)) return;
    t3.setAttribute(e3, o3);
  }
}
function Se(t3) {
  return `"${String(t3).replace(/["\\]/g, "\\$&").replace(/[\n\r\f]/g, (e3) => `\\${e3.charCodeAt(0).toString(16)} `)}"`;
}

// node_modules/primeng/node_modules/@primeuix/utils/dist/eventbus/index.mjs
function v() {
  let s4 = /* @__PURE__ */ new Map(), r3 = { on(n4, t3) {
    let e3 = s4.get(n4);
    return e3 ? e3.push(t3) : e3 = [t3], s4.set(n4, e3), r3;
  }, off(n4, t3) {
    let e3 = s4.get(n4);
    if (e3) {
      let o3 = e3.indexOf(t3);
      o3 !== -1 && e3.splice(o3, 1);
    }
    return r3;
  }, emit(n4, ...t3) {
    let e3 = s4.get(n4);
    e3 && e3.forEach((o3) => {
      o3(t3[0]);
    });
  }, clear() {
    s4.clear();
  } };
  return r3;
}

// node_modules/primeng/node_modules/@primeuix/styled/dist/chunk-J33ABP3O.mjs
var e = Object.defineProperty;
var t = Object.defineProperties;
var r = Object.getOwnPropertyDescriptors;
var s2 = Object.getOwnPropertySymbols;
var n = Object.prototype.hasOwnProperty;
var i = Object.prototype.propertyIsEnumerable;
var o = (t3, r3, s4) => r3 in t3 ? e(t3, r3, { enumerable: true, configurable: true, writable: true, value: s4 }) : t3[r3] = s4;
var l2 = (e3, t3) => {
  for (var r3 in t3 || (t3 = {})) n.call(t3, r3) && o(e3, r3, t3[r3]);
  if (s2) for (var r3 of s2(t3)) i.call(t3, r3) && o(e3, r3, t3[r3]);
  return e3;
};
var a2 = (e3, s4) => t(e3, r(s4));
var c3 = (e3, t3) => {
  var r3 = {};
  for (var o3 in e3) n.call(e3, o3) && t3.indexOf(o3) < 0 && (r3[o3] = e3[o3]);
  if (null != e3 && s2) for (var o3 of s2(e3)) t3.indexOf(o3) < 0 && i.call(e3, o3) && (r3[o3] = e3[o3]);
  return r3;
};
var d2 = /* @__PURE__ */ v();
var $2 = /{([^{}]*)}/g;
var k = /(?:^|\D)(\d+\s+[+*/-]\s+\d+)/g;
var b2 = /var\((?:(?!var\()[^)])+\)/g;
function x3(e3) {
  return c(e3) ? e3.replace(/[A-Z]/g, (e4, t3) => 0 === t3 ? e4 : "." + e4.toLowerCase()).toLowerCase() : e3;
}
function _2(e3) {
  return s(e3) && Object.prototype.hasOwnProperty.call(e3, "$value") && Object.prototype.hasOwnProperty.call(e3, "$type") ? e3.$value : e3;
}
function C(e3) {
  return /[^\w-]/.test(e3) ? e3.replace(/ /g, "").replace(/[^\w]/g, "-") : e3;
}
function P2(e3 = "", t3 = "") {
  return C(`${c(e3, false) && c(t3, false) ? `${e3}-` : e3}${t3}`);
}
function j(e3 = "", t3 = "") {
  return `--${P2(e3, t3)}`;
}
function N2(e3 = "") {
  let t3 = 0;
  for (let r3 = 0; r3 < e3.length; r3++) {
    const s4 = e3.charCodeAt(r3);
    123 !== s4 && 125 !== s4 || t3++;
  }
  return t3 % 2 != 0;
}
var T = (e3) => -1 === e3.indexOf("\r") && -1 === e3.indexOf("\f") ? e3 : e3.replace(/\r\n?|\f/g, "\n");
var A3 = (e3) => 32 === e3 || 9 === e3 || 10 === e3 || 12 === e3 || 13 === e3;
var L = (e3) => e3 >= 48 && e3 <= 57 || (32 | e3) >= 97 && (32 | e3) <= 102;
var R = (e3) => e3 >= 128 || 45 === e3 || 95 === e3 || e3 >= 48 && e3 <= 57 || (32 | e3) >= 97 && (32 | e3) <= 122;
function M2(e3) {
  if (-1 !== e3.indexOf("\0")) return false;
  const t3 = T(e3), r3 = t3.length;
  let s4 = 0, n4 = 0, i3 = false, o3 = 0;
  for (; o3 < r3; ) {
    const e4 = t3[o3++];
    if ("\\" === e4) {
      if (o3 >= r3) return false;
      let e5 = 0;
      for (; e5 < 6 && L(t3.charCodeAt(o3)); ) o3++, e5++;
      e5 ? A3(t3.charCodeAt(o3)) && o3++ : o3++, i3 = true;
    } else if ('"' === e4 || "'" === e4) for (; ; ) {
      if (o3 >= r3) return false;
      const s5 = t3[o3++];
      if (s5 === e4) break;
      if ("\\" === s5) o3++;
      else if ("\n" === s5 || "\r" === s5 || "\f" === s5) return false;
    }
    else if ("(" === e4) {
      if (i3) return false;
      if (108 == (32 | t3.charCodeAt(o3 - 2)) && 114 == (32 | t3.charCodeAt(o3 - 3)) && 117 == (32 | t3.charCodeAt(o3 - 4)) && !R(t3.charCodeAt(o3 - 5)) && "#" !== t3[o3 - 5] && "@" !== t3[o3 - 5]) {
        let e5 = o3;
        for (; e5 < r3 && A3(t3.charCodeAt(e5)); ) e5++;
        if ('"' !== t3[e5] && "'" !== t3[e5]) {
          for (; ; ) {
            if (e5 >= r3) return false;
            const s5 = t3.charCodeAt(e5++);
            if (41 === s5) break;
            if (A3(s5)) {
              for (; e5 < r3 && A3(t3.charCodeAt(e5)); ) e5++;
              if (41 !== t3.charCodeAt(e5++)) return false;
              break;
            }
            if (34 === s5 || 39 === s5 || 40 === s5 || s5 <= 8 || 11 === s5 || s5 >= 14 && s5 <= 31 || 127 === s5) return false;
            if (92 === s5) {
              if (e5 >= r3 || 10 === t3.charCodeAt(e5)) return false;
              let s6 = 0;
              for (; s6 < 6 && L(t3.charCodeAt(e5)); ) e5++, s6++;
              s6 ? A3(t3.charCodeAt(e5)) && e5++ : e5++;
            }
          }
          o3 = e5;
          continue;
        }
      }
      if (n4++ > 29) return false;
      s4 <<= 1;
    } else if ("[" === e4) {
      if (n4++ > 29) return false;
      s4 = s4 << 1 | 1;
    } else if (")" === e4 || "]" === e4) {
      if (n4-- < 1 || (1 & s4) != ("]" === e4 ? 1 : 0)) return false;
      s4 >>= 1;
    } else if ("/" === e4 && "*" === t3[o3]) {
      const e5 = t3.indexOf("*/", o3 + 1);
      if (e5 < 0) return false;
      o3 = e5 + 2;
    } else {
      if (";" === e4 || "{" === e4 || "}" === e4 || "<" === e4) return false;
      R(t3.charCodeAt(o3 - 1)) || (i3 = false);
    }
  }
  return 0 === n4;
}
function V(e3, t3 = "", r3 = "", s4 = [], n4) {
  if (c(e3)) {
    if (e3.length > 1e5) return;
    const t4 = e3.trim();
    if (N2(t4)) return;
    if (H(t4, $2)) {
      const e4 = t4.replace($2, (e5) => {
        const t5 = e5.replace(/{|}/g, "").split(".").filter((e6) => !s4.some((t6) => H(e6, t6)));
        return `var(${j(r3, fe(t5.join("-")))}${l(n4) ? `, ${n4}` : ""})`;
      });
      if (!M2(e4)) return;
      return H(e4.replace(b2, "0"), k) ? `calc(${e4})` : e4;
    }
    return M2(t4) ? t4 : void 0;
  }
  if (Z(e3)) return e3;
}
function I2(e3, t3, r3) {
  c(t3, false) && e3.push(`${t3}:${r3};`);
}
function D2(e3, t3) {
  return e3 ? `${e3}{${t3}}` : "";
}
var K3;
var W2 = ["icon"];
function z(e3, t3) {
  if (!t3 || "p" === t3 || "string" != typeof e3 || !e3) return e3;
  const r3 = /^p-[a-z]/.test(t3) ? `p\\-${t3.slice(2)}` : t3, { css: s4, attribute: n4 } = null != K3 ? K3 : (() => {
    const e4 = `(?!(?:${W2.join("|")})(?!\\w))`, t4 = new RegExp(String.raw`\/\*[\s\S]*?(?:\*\/|$)|"(?:[^"\\\n\r\f]|\\[\s\S])*"?|'(?:[^'\\\n\r\f]|\\[\s\S])*'?|\\[\s\S]|(?:^|[^\w\\-])[uU][rR][lL]\((?!\s*["'])[^)]*\)?|(\.p-${e4}(?=[a-z]))|(\[\s*[cC][lL][aA][sS][sS]\s*[~^*]=\s*(?:"[ \t]*p-(?:[^"\\\n\r\f]|\\[\s\S])*"?|'[ \t]*p-(?:[^'\\\n\r\f]|\\[\s\S])*'?|p-))`, "g");
    return null != K3 ? K3 : K3 = { css: t4, attribute: new RegExp(String.raw`(=\s*["']?[ \t]*)p-${e4}`) };
  })();
  return e3.replace(s4, (e4, t4, s5) => t4 ? `.${r3}-` : s5 ? s5.replace(n4, (e5, t5) => `${t5}${r3}-`) : e4);
}
function U(e3, t3) {
  let r3 = e3.indexOf("dt(");
  if (-1 === r3) return e3;
  const s4 = [];
  for (; -1 !== r3; ) {
    let t4 = 1, n5 = e3.indexOf("dt(", r3 + 3), i4 = e3.indexOf(")", r3 + 3);
    for (; -1 !== i4; ) if (-1 !== n5 && n5 < i4) t4++, n5 = e3.indexOf("dt(", n5 + 3);
    else {
      if (0 === --t4) break;
      i4 = e3.indexOf(")", i4 + 1);
    }
    if (-1 === i4) break;
    s4.push([r3, i4]), r3 = e3.indexOf("dt(", i4 + 1);
  }
  if (!s4.length) return e3;
  const n4 = new Array(s4.length);
  for (let r4 = s4.length - 1; r4 >= 0; r4--) {
    const [i4, o4] = s4[r4];
    n4[r4] = String(t3(...Z2(e3.slice(i4 + 3, o4), t3)));
  }
  let i3 = "", o3 = 0;
  for (let t4 = 0; t4 < s4.length; t4++) i3 += e3.slice(o3, s4[t4][0]) + n4[t4], o3 = s4[t4][1] + 1;
  return i3 + e3.slice(o3);
}
function Z2(e3, t3) {
  const r3 = [];
  let s4 = 0, n4 = null, i3 = 0;
  for (let o3 = 0; o3 <= e3.length; o3++) {
    const l4 = e3[o3];
    if ('"' !== l4 && "'" !== l4 && "`" !== l4 || "\\" === e3[o3 - 1] || (n4 = n4 === l4 ? null : l4), !n4 && ("(" === l4 && i3++, ")" === l4 && i3--, ("," === l4 || o3 === e3.length) && 0 === i3)) {
      const n5 = e3.slice(s4, o3).trim();
      r3.push(n5.startsWith("dt(") ? U(n5, t3) : q(n5)), s4 = o3 + 1;
    }
  }
  return r3;
}
function q(e3) {
  const t3 = e3[0];
  if (('"' === t3 || "'" === t3 || "`" === t3) && e3[e3.length - 1] === t3) return e3.slice(1, -1);
  const r3 = Number(e3);
  return isNaN(r3) ? e3 : r3;
}
var F = "primeui.base";
function G(e3, t3) {
  const r3 = null == t3 ? void 0 : t3.replace(/^@layer\s*/, "").replace(/;\s*$/, "").trim();
  if (e3 && r3) {
    const t4 = r3.split(",").map((e4) => e4.trim()), s5 = t4.indexOf(e3.slice(0, e3.lastIndexOf(".")));
    if (s5 > 0) return t4.splice(s5 + 1, 0, e3), `@layer ${t4.join(",")};`;
  }
  const s4 = [e3, r3].filter(l).join(",");
  return l(s4) ? `@layer ${s4};` : t3;
}
var me = { variable: { prefix: "p", selector: ":root,:host", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false, cssVariables: true, scoped: false } };
var ge = (e3, t3, r3) => ({ name: t3, theme: e3.theme, params: r3, defaults: e3.defaults, region: e3._region(), set: { layerNames: e3.setLayerNames.bind(e3) }, dt: e3._dt });
var ve2 = /^[A-Za-z_][\w-]*$/;
var ye = (e3) => {
  if (void 0 !== e3 && "" !== e3 && ("string" != typeof e3 || !ve2.test(e3))) throw new TypeError('[primeuix] classPrefix takes letters, digits, "_" or "-".');
};
var Se2 = class {
  constructor(e3) {
    this.defaults = me, this._theme = void 0, this._layerNames = /* @__PURE__ */ new Set(), this._loadedStyleNames = /* @__PURE__ */ new Set(), this._loadingStyles = /* @__PURE__ */ new Set(), this._tokens = {}, this._scopedTokenPaths = /* @__PURE__ */ new Set();
    for (let e4 = Object.getPrototypeOf(this); e4 && e4 !== Object.prototype; e4 = Object.getPrototypeOf(e4)) for (const t3 of Object.getOwnPropertyNames(e4)) "constructor" === t3 || Object.prototype.hasOwnProperty.call(this, t3) || Object.defineProperty(this, t3, a2(l2({}, Object.getOwnPropertyDescriptor(e4, t3)), { enumerable: true }));
    this.service = e3;
  }
  static get defaults() {
    return me;
  }
  _styleId() {
    return this.key ? this.styleName.bind(this) : void 0;
  }
  _region() {
  }
  styleName(e3) {
    var t3;
    const { prefix: r3 = "p", classPrefix: s4 = "p" } = this.options, n4 = null != (t3 = this.key) ? t3 : "p" === s4 ? "" : `${r3}-${s4}`;
    return n4 ? `${e3}@${n4}` : e3;
  }
  update(e3 = {}) {
    const { theme: t3 } = e3;
    if (t3) {
      const e4 = l2(l2({}, this.defaults.options), t3.options);
      ye(e4.classPrefix), this._theme = a2(l2({}, t3), { options: e4 }), this._tokens = Be.createTokens(this.preset, this.defaults), this.resetCaches();
    }
  }
  get theme() {
    return this._theme;
  }
  get preset() {
    var e3;
    return (null == (e3 = this.theme) ? void 0 : e3.preset) || {};
  }
  get options() {
    var e3;
    return (null == (e3 = this.theme) ? void 0 : e3.options) || {};
  }
  get tokens() {
    return this._tokens;
  }
  hasScopedTokenPath(e3) {
    return this._scopedTokenPaths.has(e3);
  }
  getScopedTokenPaths() {
    return [...this._scopedTokenPaths];
  }
  addScopedToken(e3) {
    let t3 = false;
    return l(e3) && N(e3).forEach((e4) => {
      const r3 = ae(e4);
      this._scopedTokenPaths.has(r3) || (this._scopedTokenPaths.add(r3), t3 = true);
    }), t3;
  }
  clearScopedTokenPaths() {
    this._scopedTokenPaths.clear();
  }
  getTheme() {
    return this.theme;
  }
  setTheme(e3) {
    this.update({ theme: e3 }), this.service.emit("theme:change", e3);
  }
  getPreset() {
    return this.preset;
  }
  setPreset(e3) {
    this._theme = a2(l2({}, this.theme), { preset: e3 }), this._tokens = Be.createTokens(e3, this.defaults), this.resetCaches(), this.service.emit("preset:change", e3), this.service.emit("theme:change", this.theme);
  }
  getOptions() {
    return this.options;
  }
  setOptions(e3) {
    ye(null == e3 ? void 0 : e3.classPrefix), this._theme = a2(l2({}, this.theme), { options: e3 }), this.resetStyleCaches(), this.service.emit("options:change", e3), this.service.emit("theme:change", this.theme);
  }
  resetStyleCaches() {
    this.clearLoadedStyleNames(), this.clearLayerNames();
  }
  resetCaches() {
    this.resetStyleCaches(), this.clearScopedTokenPaths();
  }
  getLayerNames() {
    return [...this._layerNames];
  }
  setLayerNames(e3) {
    this._layerNames.add(e3);
  }
  clearLayerNames() {
    this._layerNames.clear();
  }
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  }
  isStyleNameLoaded(e3) {
    return this._loadedStyleNames.has(e3);
  }
  setLoadedStyleName(e3) {
    this._loadedStyleNames.add(e3);
  }
  deleteLoadedStyleName(e3) {
    this._loadedStyleNames.delete(e3);
  }
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
  getTokenValue(e3) {
    return Be.getTokenValue(this.tokens, e3, this.defaults);
  }
  getCommon(e3 = "", t3) {
    return Be.getCommon(ge(this, e3, t3));
  }
  getComponent(e3 = "", t3) {
    return Be.getPresetC(ge(this, e3, t3));
  }
  getDirective(e3 = "", t3) {
    return Be.getPresetD(ge(this, e3, t3));
  }
  getCustomPreset(e3 = "", t3, r3, s4) {
    var n4, i3, o3;
    const c5 = l2({}, this._region());
    return r3 && Object.assign(c5, { selector: null != (i3 = null == (n4 = c5.within) ? void 0 : n4.call(c5, r3)) ? i3 : r3, darkSelector: null == (o3 = c5.within) ? void 0 : o3.call(c5, r3, true) }), Be.getPreset(a2(l2({}, ge(this, e3, s4)), { preset: t3, options: this.options, region: c5, isScopedTokenPaths: true }));
  }
  getLayerOrderCSS(e3 = "") {
    return Be.getLayerOrder(e3, this.options, { names: this.getLayerNames() }, this.defaults);
  }
  transformCSS(e3 = "", t3, r3 = "style", s4) {
    return Be.transformCSS(e3, t3, s4, r3, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults, void 0, this._region());
  }
  getCommonStyleSheet(e3 = "", t3, r3 = {}, s4) {
    return Be.getCommonStyleSheet(a2(l2({}, ge(this, e3, t3)), { props: r3, styleId: null != s4 ? s4 : this._styleId() }));
  }
  getStyleSheet(e3, t3, r3 = {}, s4) {
    return Be.getStyleSheet(a2(l2({}, ge(this, e3, t3)), { props: r3, styleId: null != s4 ? s4 : this._styleId() }));
  }
  onStyleMounted(e3) {
    this._loadingStyles.add(e3);
  }
  onStyleUpdated(e3) {
    this._loadingStyles.add(e3);
  }
  onStyleLoaded(e3, { name: t3 }) {
    this._loadingStyles.size && (this._loadingStyles.delete(t3), this.service.emit(`theme:${t3}:load`, e3), this._loadingStyles.size || this.service.emit("theme:load"));
  }
};
var $e = /* @__PURE__ */ new Se2(d2);
var xe = (e3, t3, r3, s4, n4, i3) => {
  if ("string" != typeof t3) return null != t3 ? t3 : e3.getTokenValue(r3);
  if ($2.lastIndex = 0, !$2.test(t3)) return t3;
  const o3 = r3.slice(0, r3.indexOf("."));
  return V(t3.replace($2, (t4) => {
    const r4 = t4.slice(1, -1), s5 = r4.indexOf(".");
    if ((-1 === s5 ? r4 : r4.slice(0, s5)) !== o3) return t4;
    const n5 = e3.getTokenValue(r4);
    return null == n5 ? t4 : `${n5}`;
  }), void 0, s4, [n4], i3);
};
var Oe = (e3, t3, r3, s4, n4) => {
  var i3, o3, l4, a5;
  const c5 = ((e4, t4) => {
    const r4 = e4.split(".");
    let s5 = "";
    for (let e5 = 0; e5 < r4.length; e5++) {
      const n5 = x3(r4[e5]);
      t4.lastIndex = 0, t4.test(n5) || (s5 = s5 ? `${s5}.${n5}` : n5);
    }
    return s5;
  })(t3, s4), u3 = e3.tokens;
  let d4 = Be._caches.strict.get(u3);
  d4 || Be._caches.strict.set(u3, d4 = /* @__PURE__ */ new Map());
  const h2 = null == n4 || "object" != typeof n4, p3 = h2 && null != n4 ? `${r3}|${c5}|${n4}` : `${r3}|${c5}`;
  let f2 = h2 ? d4.get(p3) : void 0;
  if (!(void 0 !== f2 || h2 && d4.has(p3))) {
    const t4 = null == (i3 = u3[c5]) ? void 0 : i3.paths, m2 = null == t4 ? void 0 : t4.find((e4) => "none" === e4.scheme), g3 = null != (o3 = null == t4 ? void 0 : t4.find((e4) => "light" === e4.scheme)) ? o3 : m2, v3 = null != (l4 = null == t4 ? void 0 : t4.find((e4) => "dark" === e4.scheme)) ? l4 : m2;
    if (g3 && v3 && g3 !== v3) {
      const t5 = xe(e3, g3.value, c5, r3, s4, n4), i4 = xe(e3, v3.value, c5, r3, s4, n4);
      f2 = t5 === i4 ? t5 : `light-dark(${t5},${i4})`;
    } else f2 = xe(e3, null == (a5 = null != g3 ? g3 : v3) ? void 0 : a5.value, c5, r3, s4, n4);
    "string" != typeof f2 || M2(f2) || (f2 = void 0), h2 && d4.set(p3, f2);
  }
  return e3.hasScopedTokenPath(c5) ? V(`{${c5}}`, void 0, r3, [s4], f2) : f2;
};
var _e = (e3) => we2($e, e3);
var we2 = (e3, t3) => {
  var r3, s4, n4;
  const i3 = e3.getTheme(), o3 = `${null != (r3 = je(e3, i3, t3, void 0, "variable")) ? r3 : ""}`;
  return { name: null != (n4 = null == (s4 = o3.match(/--[\w-]+/g)) ? void 0 : s4[0]) ? n4 : "", variable: o3, value: je(e3, i3, t3, void 0, "value") };
};
var Ce2 = (e3, t3, r3) => je($e, $e.getTheme(), e3, t3, r3);
var je = (e3, t3 = {}, r3, s4, n4) => {
  var i3, o3, l4, a5, c5;
  if (!r3) return "";
  const u3 = e3.defaults, d4 = null == t3 ? void 0 : t3.options, h2 = null == u3 ? void 0 : u3.variable, p3 = null != (o3 = null == d4 ? void 0 : d4.prefix) ? o3 : null == (i3 = null == u3 ? void 0 : u3.options) ? void 0 : i3.prefix, f2 = null == (c5 = null != (a5 = null == d4 ? void 0 : d4.cssVariables) ? a5 : null == (l4 = null == u3 ? void 0 : u3.options) ? void 0 : l4.cssVariables) || c5;
  if ("value" === n4) return e3.getTokenValue(r3);
  if (p(n4) && !f2) return Oe(e3, r3, p3, h2.excludedKeyRegex, s4);
  const m2 = "object" == typeof s4 && null !== s4 || !h2.excludedKeyRegex ? void 0 : Ae2(h2.excludedKeyRegex), g3 = m2 && `${p3}\0${r3}\0${null != s4 ? s4 : ""}\0${void 0 === s4 ? 0 : "number" == typeof s4 ? 1 : 2}`;
  let v3 = null == m2 ? void 0 : m2.get(g3);
  if (void 0 === v3 && !(null == m2 ? void 0 : m2.has(g3))) {
    v3 = V(H(r3, $2) ? r3 : `{${r3}}`, void 0, p3, [h2.excludedKeyRegex], s4), m2 && (m2.size >= Ne && m2.clear(), m2.set(g3, v3));
  }
  return v3;
};
var Ne = 4096;
var Te2 = /* @__PURE__ */ new WeakMap();
var Ae2 = (e3) => {
  let t3 = Te2.get(e3);
  return t3 || Te2.set(e3, t3 = /* @__PURE__ */ new Map()), t3;
};
var Me = (...e3) => {
  var t3;
  return `${null != (t3 = Ce2(...e3)) ? t3 : ""}`;
};
function Ie(e3, ...t3) {
  var r3;
  const s4 = null == (r3 = $e.getOptions()) ? void 0 : r3.classPrefix;
  if (e3 instanceof Array) {
    return z(U(e3.reduce((e4, r4, s5) => {
      var n4;
      return e4 + r4 + (null != (n4 = x(t3[s5], { dt: Ce2 })) ? n4 : "");
    }, ""), Me), s4);
  }
  return z(x(e3, { dt: Ce2 }), s4);
}
function Ze(e3, t3 = {}) {
  const r3 = $e.defaults.variable, { prefix: s4 = r3.prefix, selector: n4 = r3.selector, excludedKeyRegex: i3 = r3.excludedKeyRegex } = t3, o3 = [], l4 = [], a5 = [{ node: e3, path: s4 }];
  for (; a5.length; ) {
    const { node: e4, path: t4 } = a5.pop();
    for (const r4 of Object.keys(e4)) {
      const n5 = _2(e4[r4]), c6 = H(r4, i3) ? P2(t4) : P2(t4, fe(r4));
      if (s(n5)) a5.push({ node: n5, path: c6 });
      else {
        const e5 = j(c6), t5 = V(n5, c6, s4, [i3]);
        void 0 === t5 && "string" == typeof n5 || I2(l4, e5, null == t5 ? t5 : `${t5}`);
        let r5 = c6;
        s4 && r5.startsWith(s4 + "-") && (r5 = r5.slice(s4.length + 1)), o3.push(r5.replace(/-/g, "."));
      }
    }
  }
  const c5 = l4.join("");
  return { value: l4, tokens: o3, declarations: c5, css: D2(n4, c5) };
}
var qe = (...e3) => [...new Set(e3.flatMap((e4) => null != e4 ? e4 : []))];
var Be = { _caches: { value: /* @__PURE__ */ new WeakMap(), strict: /* @__PURE__ */ new WeakMap() }, regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e3) {
  return { type: "class", selector: e3, matched: this.pattern.test(e3.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e3) {
  const t3 = /^(\[[^\]]*\])+$/.test(e3.trim()) ? `:host(${e3})` : `:host${e3}`;
  return { type: "attr", selector: `:root${e3},${t3}`, matched: this.pattern.test(e3.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e3) {
  return { type: "media", selector: e3, matched: this.pattern.test(e3.trim()) };
} }, system: { pattern: /^system$/, resolve(e3) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e3.trim()) };
} }, custom: { resolve: (e3) => ({ type: "custom", selector: e3, matched: true }) } }, resolve(e3) {
  const t3 = Object.keys(this.rules).filter((e4) => "custom" !== e4).map((e4) => this.rules[e4]);
  return [e3].flat().map((e4) => {
    var r3;
    return null != (r3 = t3.map((t4) => t4.resolve(e4)).find((e5) => e5.matched)) ? r3 : this.rules.custom.resolve(e4);
  });
} }, _toVariables: (e3, t3) => Ze(e3, { prefix: null == t3 ? void 0 : t3.prefix }), getCommon({ name: e3 = "", theme: t3 = {}, params: r3, set: s4, defaults: n4, selector: i3, region: o3, dt: l4 }) {
  const { preset: a5, options: u3 } = t3;
  let d4, h2, p3, f2, m2, g3, v3;
  if (l(a5)) {
    const { primitive: t4, semantic: r4, extend: y3 } = a5, S2 = r4 || {}, { colorScheme: $4 } = S2, k3 = c3(S2, ["colorScheme"]), b4 = y3 || {}, { colorScheme: x5 } = b4, O5 = c3(b4, ["colorScheme"]), _4 = $4 || {}, { dark: w3 } = _4, C3 = c3(_4, ["dark"]), P4 = x5 || {}, { dark: j3 } = P4, N4 = c3(P4, ["dark"]), T3 = (e4, t5) => {
      var r5;
      const s5 = l(t5) ? this._toVariables({ [e4]: t5 }, u3) : {};
      return [null != (r5 = s5.declarations) ? r5 : "", s5.tokens];
    }, [A5, L3] = T3("primitive", t4), [R3, M4] = T3("semantic", k3), [V3, E4] = T3("light", C3), [I4, D4] = T3("dark", w3), [K5, W4] = T3("semantic", O5), [U3, Z4] = T3("light", N4), [q3, B3] = T3("dark", j3);
    d4 = this.transformCSS(e3, A5, "light", "variable", u3, s4, n4, i3, o3), h2 = L3;
    p3 = `${this.transformCSS(e3, `${R3}${V3}`, "light", "variable", u3, s4, n4, i3, o3)}${this.transformCSS(e3, `${I4}`, "dark", "variable", u3, s4, n4, i3, o3)}`, f2 = qe(M4, E4, D4);
    m2 = `${this.transformCSS(e3, `${K5}${U3}color-scheme:light`, "light", "variable", u3, s4, n4, i3, o3)}${this.transformCSS(e3, `${q3}color-scheme:dark`, "dark", "variable", u3, s4, n4, i3, o3)}`, g3 = qe(W4, Z4, B3), v3 = z(x(a5.css, { dt: null != l4 ? l4 : Ce2 }), null == u3 ? void 0 : u3.classPrefix);
  }
  return { primitive: { css: d4, tokens: h2 }, semantic: { css: p3, tokens: f2 }, global: { css: m2, tokens: g3 }, style: v3 };
}, getPreset({ name: e3 = "", preset: t3 = {}, options: r3, params: s4, set: n4, defaults: i3, selector: o3, region: a5, isScopedTokenPaths: u3, dt: d4 }) {
  var h2, p3, f2, m2;
  let g3, v3, y3;
  if (l(t3) && (null == (h2 = null == r3 ? void 0 : r3.cssVariables) || h2 || u3)) {
    const s5 = e3.replace("-directive", ""), u4 = t3, { colorScheme: h3, extend: S2, css: $4 } = u4, k3 = c3(u4, ["colorScheme", "extend", "css"]), b4 = S2 || {}, { colorScheme: x5 } = b4, O5 = c3(b4, ["colorScheme"]), _4 = h3 || {}, { dark: w3 } = _4, C3 = c3(_4, ["dark"]), P4 = x5 || {}, { dark: j3 } = P4, N4 = c3(P4, ["dark"]), T3 = l(k3) ? this._toVariables({ [s5]: l2(l2({}, k3), O5) }, r3) : {}, A5 = l(C3) ? this._toVariables({ [s5]: l2(l2({}, C3), N4) }, r3) : {}, L3 = l(w3) ? this._toVariables({ [s5]: l2(l2({}, w3), j3) }, r3) : {};
    g3 = `${this.transformCSS(s5, `${null != (p3 = T3.declarations) ? p3 : ""}${null != (f2 = A5.declarations) ? f2 : ""}`, "light", "variable", r3, n4, i3, o3, a5)}${this.transformCSS(s5, null != (m2 = L3.declarations) ? m2 : "", "dark", "variable", r3, n4, i3, o3, a5)}`, v3 = qe(T3.tokens, A5.tokens, L3.tokens), y3 = z(x($4, { dt: null != d4 ? d4 : Ce2 }), null == r3 ? void 0 : r3.classPrefix);
  }
  return { css: g3, tokens: v3, style: y3 };
}, getScopedSelector(e3, t3) {
  if ((null == t3 ? void 0 : t3.scoped) && e3) return `[data-styled="${e3}"]`;
}, withinRuntime: (e3, t3) => e3 && t3 ? `${t3} ${e3}` : null != e3 ? e3 : t3, withinRegion(e3, t3, r3 = {}) {
  var s4;
  const n4 = e3 && !t3 && (null == (s4 = r3.within) ? void 0 : s4.call(r3, e3));
  return a2(l2({}, r3), n4 ? { selector: n4, darkSelector: r3.within(e3, true) } : { selector: this.withinRuntime(e3, null != t3 ? t3 : r3.selector), darkSelector: r3.darkSelector && this.withinRuntime(e3, r3.darkSelector) });
}, getPresetC({ name: e3 = "", theme: t3 = {}, params: r3, set: s4, defaults: n4, selector: i3, region: o3, dt: l4 }) {
  var a5;
  const { preset: c5, options: u3 } = t3, d4 = null == (a5 = null == c5 ? void 0 : c5.components) ? void 0 : a5[e3], h2 = this.getScopedSelector(e3, u3);
  return this.getPreset({ name: e3, preset: d4, options: u3, params: r3, set: s4, defaults: n4, region: this.withinRegion(h2, i3, o3), dt: l4 });
}, getPresetD({ name: e3 = "", theme: t3 = {}, params: r3, set: s4, defaults: n4, selector: i3, region: o3, dt: l4 }) {
  var a5, c5;
  const u3 = e3.replace("-directive", ""), { preset: d4, options: h2 } = t3, p3 = (null == (a5 = null == d4 ? void 0 : d4.components) ? void 0 : a5[u3]) || (null == (c5 = null == d4 ? void 0 : d4.directives) ? void 0 : c5[u3]), f2 = this.getScopedSelector(u3, h2);
  return this.getPreset({ name: u3, preset: p3, options: h2, params: r3, set: s4, defaults: n4, region: this.withinRegion(f2, i3, o3), dt: l4 });
}, applyDarkColorScheme(e3) {
  const t3 = e3.darkModeSelector;
  return !("none" === t3 || false === t3);
}, getColorSchemeOption(e3, t3) {
  var r3;
  return this.applyDarkColorScheme(e3) ? this.regex.resolve(true === e3.darkModeSelector ? t3.options.darkModeSelector : null != (r3 = e3.darkModeSelector) ? r3 : t3.options.darkModeSelector) : [];
}, getLayerOrder(e3, t3 = {}, r3, s4) {
  const { cssLayer: n4 } = t3;
  if (n4) {
    return `@layer ${x(n4.order || n4.name || "primeui", r3)}`;
  }
  return "";
}, getCommonStyleSheet({ name: e3 = "", theme: t3 = {}, params: r3, props: s4 = {}, set: n4, defaults: i3, selector: o3, region: l4, styleId: a5 = (e4) => e4, dt: c5 }) {
  const u3 = this.getCommon({ name: e3, theme: t3, params: r3, set: n4, defaults: i3, selector: o3, region: l4, dt: c5 }), d4 = K(s4).join(" ");
  return Object.entries(u3 || {}).reduce((e4, [t4, r4]) => {
    if (s(r4) && Object.prototype.hasOwnProperty.call(r4, "css")) {
      const s5 = B(r4.css);
      e4.push(`<style type="text/css" ${this.styleIdAttributes(a5(`${t4}-variables`))} ${d4}>${Q(s5)}</style>`);
    }
    return e4;
  }, []).join("");
}, getStyleSheet({ name: e3 = "", theme: t3 = {}, params: r3, props: s4 = {}, set: n4, defaults: i3, selector: o3, region: l4, styleId: a5 = (e4) => e4, dt: c5 }) {
  var u3;
  const d4 = { name: e3, theme: t3, params: r3, set: n4, defaults: i3, selector: o3, region: l4, dt: c5 }, h2 = null == (u3 = e3.includes("-directive") ? this.getPresetD(d4) : this.getPresetC(d4)) ? void 0 : u3.css, p3 = K(s4).join(" ");
  return h2 ? `<style type="text/css" ${this.styleIdAttributes(a5(`${e3}-variables`))} ${p3}>${Q(B(h2))}</style>` : "";
}, styleIdAttributes: (e3) => `data-primevue-style-id="${J(e3)}"`, createTokens(e3 = {}, t3, r3 = "", s4 = "", n4 = /* @__PURE__ */ Object.create(null)) {
  const i3 = function(e4, t4, r4, s5) {
    return e4.replace($2, (e5) => {
      var n5;
      const i4 = e5.slice(1, -1), o4 = this.tokens[i4];
      if (!o4) return console.warn(`Token not found for path: ${i4}`), "__UNRESOLVED__";
      const l5 = o4.computed(t4, r4, s5);
      if (Array.isArray(l5) && 2 === l5.length) {
        const e6 = l5[0].value, t5 = l5[1].value;
        return e6 === t5 ? null != e6 ? e6 : "__UNRESOLVED__" : `light-dark(${e6},${t5})`;
      }
      return null != (n5 = null == l5 ? void 0 : l5.value) ? n5 : "__UNRESOLVED__";
    });
  }, o3 = function(e4, t4, r4, s5) {
    if (-1 === e4.indexOf("light-dark(")) return e4;
    const n5 = [], l5 = e4.length;
    let a6 = 0;
    for (; a6 < l5; ) {
      const c5 = e4.indexOf("light-dark(", a6);
      if (-1 === c5) {
        n5.push(e4.slice(a6));
        break;
      }
      n5.push(e4.slice(a6, c5));
      let u3 = 1, d4 = c5 + 11, h2 = -1;
      for (; d4 < l5 && u3 > 0; ) {
        const t5 = e4.charCodeAt(d4);
        40 === t5 ? u3++ : 41 === t5 ? u3-- : 44 === t5 && 1 === u3 && -1 === h2 && (h2 = d4), d4++;
      }
      if (0 !== u3 || -1 === h2) {
        n5.push(e4.slice(c5));
        break;
      }
      const p3 = e4.slice(c5 + 11, h2).trim(), f2 = e4.slice(h2 + 1, d4 - 1).trim();
      if ("light" === t4 || "dark" === t4) n5.push(o3.call(this, "light" === t4 ? p3 : f2, t4, r4, s5));
      else {
        const e5 = i3.call(this, o3.call(this, p3, "light", r4, s5), "light", r4, s5), t5 = i3.call(this, o3.call(this, f2, "dark", r4, s5), "dark", r4, s5);
        n5.push(e5 === t5 ? e5 : `light-dark(${e5},${t5})`);
      }
      a6 = d4;
    }
    return n5.join("");
  }, l4 = function(e4, t4 = {}, r4 = []) {
    if (r4.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: e4, path: this.path, paths: t4, value: void 0 };
    r4.push(this.path), t4.name = this.path, t4.binding || (t4.binding = {});
    let s5 = this.value;
    if ("string" == typeof this.value) {
      const n5 = this.value.trim(), l5 = -1 !== n5.indexOf("light-dark("), a6 = -1 !== n5.indexOf("{");
      if (l5 || a6) {
        const a7 = l5 ? o3.call(this, n5, e4, t4, r4) : n5, c5 = -1 !== a7.indexOf("{") ? i3.call(this, a7, e4, t4, r4) : a7;
        k.lastIndex = 0, b2.lastIndex = 0, s5 = k.test(c5.replace(b2, "0")) ? `calc(${c5})` : c5;
      }
    }
    return p(t4.binding) && delete t4.binding, r4.pop(), { colorScheme: e4, path: this.path, paths: t4, value: "string" == typeof s5 && -1 !== s5.indexOf("__UNRESOLVED__") ? void 0 : s5 };
  }, a5 = (e4, r4, s5) => {
    Object.entries(e4).forEach(([e5, i4]) => {
      const o4 = H(e5, t3.variable.excludedKeyRegex) ? r4 : r4 ? `${r4}.${x3(e5)}` : x3(e5), c5 = s5 ? [s5, e5].join(".") : e5;
      if (s(i4)) a5(i4, o4, c5);
      else {
        const e6 = { path: c5, value: i4, scheme: c5.includes("colorScheme.light") ? "light" : c5.includes("colorScheme.dark") ? "dark" : "none", computed: l4, tokens: n4 }, t4 = n4[o4];
        if (t4) t4.paths.push(e6);
        else {
          const t5 = { paths: [e6] };
          t5.computed = /* @__PURE__ */ ((e7) => (t6, r5 = {}, s6 = []) => {
            const n5 = e7.paths;
            if (1 === n5.length) {
              const e8 = n5[0], i5 = "none" !== e8.scheme ? e8.scheme : t6;
              return e8.computed(i5, r5.binding, s6);
            }
            if (t6 && "none" !== t6) for (let e8 = 0; e8 < n5.length; e8++) {
              const i5 = n5[e8];
              if (i5.scheme === t6) return i5.computed(t6, r5.binding, s6);
            }
            return n5.map((e8) => e8.computed(e8.scheme, r5[e8.scheme], s6));
          })(t5), n4[o4] = t5;
        }
      }
    });
  };
  return a5(e3, r3, s4), n4;
}, getTokenValue(e3, t3, r3) {
  let s4 = this._caches.value.get(e3);
  s4 || this._caches.value.set(e3, s4 = /* @__PURE__ */ new Map());
  const n4 = s4.get(t3);
  if (void 0 !== n4 || s4.has(t3)) return n4;
  const i3 = r3.variable.excludedKeyRegex, o3 = t3.split("."), l4 = [];
  for (let e4 = 0; e4 < o3.length; e4++) {
    const t4 = o3[e4];
    i3.lastIndex = 0, i3.test(t4.toLowerCase()) || l4.push(t4);
  }
  const a5 = l4.join("."), c5 = -1 !== t3.indexOf("colorScheme.light") ? "light" : -1 !== t3.indexOf("colorScheme.dark") ? "dark" : void 0, u3 = e3[a5];
  if (!(null == u3 ? void 0 : u3.paths)) return void s4.set(t3, void 0);
  const d4 = (e4) => {
    var t4;
    const r4 = u3.computed(e4);
    return Array.isArray(r4) ? null == (t4 = r4.find((t5) => (null == t5 ? void 0 : t5.colorScheme) === e4)) ? void 0 : t4.value : null == r4 ? void 0 : r4.value;
  };
  let h2;
  if (c5) h2 = d4(c5);
  else {
    const e4 = d4("light"), t4 = d4("dark");
    h2 = void 0 === e4 && void 0 === t4 ? void 0 : void 0 === e4 ? t4 : void 0 === t4 || e4 === t4 ? e4 : `light-dark(${e4},${t4})`;
  }
  return s4.set(t3, h2), h2;
}, getSelectorRule(e3, t3, r3, s4, n4 = ":root,:host", i3) {
  if ("class" === r3 || "attr" === r3) {
    if (!t3) return D2(e3, s4);
    const n5 = e3.split(/,(?=:host\()/).flatMap((e4) => {
      if (e4.startsWith(":host")) return [`${e4} ${t3}`];
      return [("attr" === r3 && /^:root(\[[^\]]*\])+$/.test(e4) ? e4.slice(5) : e4) + t3, `${e4} ${t3}`];
    });
    return D2((null == i3 ? void 0 : i3.darkSelector) ? [...n5, i3.darkSelector].join(",") : n5.join(","), s4);
  }
  return D2(e3, D2(null != t3 ? t3 : n4, s4));
}, transformCSS(e3, t3, r3, s4, n4 = {}, i3, o3, l4, a5) {
  var c5, u3;
  if (l(t3)) {
    const { cssLayer: d4 } = n4;
    if ("style" === s4) t3 = z(t3, n4.classPrefix), (null == a5 ? void 0 : a5.scope) && (t3 = a5.scope(t3));
    else {
      const e4 = this.getColorSchemeOption(n4, o3), s5 = null != (u3 = null == (c5 = null == o3 ? void 0 : o3.variable) ? void 0 : c5.selector) ? u3 : ":root,:host", i4 = null != l4 ? l4 : null == a5 ? void 0 : a5.selector;
      t3 = "dark" === r3 ? e4.reduce((e5, { type: r4, selector: n5 }) => (l(n5) && (e5 += n5.includes("[CSS]") ? n5.replace("[CSS]", () => t3) : this.getSelectorRule(n5, i4, r4, t3, s5, a5)), e5), "") : D2(null != i4 ? i4 : s5, t3);
    }
    if (d4) {
      const r4 = { name: "primeui", order: "primeui" };
      s(d4) && (r4.name = x(d4.name, { name: e3, type: s4 })), l(r4.name) && (t3 = D2(`@layer ${r4.name}`, t3), null == i3 || i3.layerNames(r4.name));
    }
    return t3;
  }
  return "";
} };

// node_modules/@primeuix/styles/dist/base/index.mjs
var n2 = "\n@layer primeui.base {\n    :where(:is([data-scope], [data-pc-section])),\n    :where(:is([data-scope], [data-pc-section]))::before,\n    :where(:is([data-scope], [data-pc-section]))::after {\n        box-sizing: border-box;\n    }\n\n    :where(button:is([data-scope], [data-pc-section])),\n    :where([type='button']:is([data-scope], [data-pc-section])),\n    :where([type='reset']:is([data-scope], [data-pc-section])),\n    :where([type='submit']:is([data-scope], [data-pc-section])) {\n        appearance: button;\n        background-color: transparent;\n        background-image: none;\n        border: 0 solid;\n        border-radius: 0;\n        padding: 0;\n        margin: 0;\n        font: inherit;\n        font-feature-settings: inherit;\n        font-variation-settings: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        text-align: inherit;\n        text-transform: none;\n        cursor: pointer;\n    }\n\n    :where(button:disabled:is([data-scope], [data-pc-section])) {\n        cursor: default;\n    }\n\n    :where(input:is([data-scope], [data-pc-section])),\n    :where(select:is([data-scope], [data-pc-section])),\n    :where(textarea:is([data-scope], [data-pc-section])),\n    :where(optgroup:is([data-scope], [data-pc-section])) {\n        appearance: none;\n        background-color: transparent;\n        background-image: none;\n        border: 0 solid;\n        border-radius: 0;\n        padding: 0;\n        margin: 0;\n        font: inherit;\n        font-feature-settings: inherit;\n        font-variation-settings: inherit;\n        letter-spacing: inherit;\n        color: inherit;\n        opacity: 1;\n    }\n\n    :where(textarea:is([data-scope], [data-pc-section])) {\n        resize: vertical;\n    }\n\n    :where(:is([data-scope], [data-pc-section]))::placeholder {\n        opacity: 1;\n        color: color-mix(in oklab, currentcolor 50%, transparent);\n    }\n\n    :where(:is([data-scope], [data-pc-section]))::-webkit-inner-spin-button,\n    :where(:is([data-scope], [data-pc-section]))::-webkit-outer-spin-button {\n        height: auto;\n    }\n\n    :where(:is([data-scope], [data-pc-section]))::-webkit-search-decoration {\n        -webkit-appearance: none;\n    }\n\n    :where(:is([data-scope], [data-pc-section]))::-webkit-datetime-edit {\n        display: inline-flex;\n    }\n\n    :where(:is([data-scope], [data-pc-section]))::-webkit-datetime-edit-fields-wrapper {\n        padding: 0;\n    }\n\n    :where(:-moz-ui-invalid:is([data-scope], [data-pc-section])) {\n        box-shadow: none;\n    }\n\n    :where(ul:is([data-scope], [data-pc-section])),\n    :where(ol:is([data-scope], [data-pc-section])),\n    :where(menu:is([data-scope], [data-pc-section])) {\n        list-style: none;\n        margin: 0;\n        padding: 0;\n    }\n\n    :where(table:is([data-scope], [data-pc-section])) {\n        border-collapse: collapse;\n        border-color: inherit;\n        text-indent: 0;\n    }\n\n    :where(caption:is([data-scope], [data-pc-section])),\n    :where(th:is([data-scope], [data-pc-section])),\n    :where(td:is([data-scope], [data-pc-section])) {\n        text-align: inherit;\n        font-weight: inherit;\n        padding: 0;\n    }\n\n    :where(h1:is([data-scope], [data-pc-section])),\n    :where(h2:is([data-scope], [data-pc-section])),\n    :where(h3:is([data-scope], [data-pc-section])),\n    :where(h4:is([data-scope], [data-pc-section])),\n    :where(h5:is([data-scope], [data-pc-section])),\n    :where(h6:is([data-scope], [data-pc-section])),\n    :where(p:is([data-scope], [data-pc-section])),\n    :where(figure:is([data-scope], [data-pc-section])),\n    :where(blockquote:is([data-scope], [data-pc-section])),\n    :where(dl:is([data-scope], [data-pc-section])),\n    :where(dd:is([data-scope], [data-pc-section])) {\n        font-size: inherit;\n        font-weight: inherit;\n        margin: 0;\n    }\n\n    :where(a:is([data-scope], [data-pc-section])) {\n        color: inherit;\n        -webkit-text-decoration: inherit;\n        text-decoration: inherit;\n    }\n\n    :where(fieldset:is([data-scope], [data-pc-section])),\n    :where(legend:is([data-scope], [data-pc-section])) {\n        border: 0 solid;\n        margin: 0;\n        padding: 0;\n    }\n\n    :where(img:is([data-scope], [data-pc-section])),\n    :where(svg:is([data-scope], [data-pc-section])),\n    :where(video:is([data-scope], [data-pc-section])),\n    :where(canvas:is([data-scope], [data-pc-section])),\n    :where(iframe:is([data-scope], [data-pc-section])),\n    :where(embed:is([data-scope], [data-pc-section])),\n    :where(object:is([data-scope], [data-pc-section])) {\n        display: block;\n        vertical-align: middle;\n    }\n\n    :where(img:is([data-scope], [data-pc-section])),\n    :where(video:is([data-scope], [data-pc-section])) {\n        max-width: 100%;\n    }\n\n    :where(img:is([data-scope], [data-pc-section]):not([height])),\n    :where(video:is([data-scope], [data-pc-section]):not([height])) {\n        height: auto;\n    }\n\n    :where(hr:is([data-scope], [data-pc-section])) {\n        height: 0;\n        color: inherit;\n        border-top-width: 1px;\n    }\n\n    :where(summary:is([data-scope], [data-pc-section])) {\n        display: list-item;\n    }\n\n    :where(dialog:is([data-scope], [data-pc-section])) {\n        border: 0 solid;\n        padding: 0;\n        margin: 0;\n        max-width: none;\n        max-height: none;\n        background-color: transparent;\n        color: inherit;\n    }\n\n    :where(:-moz-focusring:is([data-scope], [data-pc-section])) {\n        outline: auto;\n    }\n}\n";
var style = "\n    *,\n    ::before,\n    ::after {\n        box-sizing: border-box;\n    }\n\n    .p-component {\n        font-family: dt('typography.font.family');\n        font-feature-settings: inherit;\n        line-height: dt('typography.line.height');\n    }\n\n    .p-collapsible-enter-active {\n        animation: p-animate-collapsible-expand 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    .p-collapsible-leave-active {\n        animation: p-animate-collapsible-collapse 0.2s ease-out;\n        overflow: hidden;\n    }\n\n    @keyframes p-animate-collapsible-expand {\n        from {\n            grid-template-rows: 0fr;\n        }\n        to {\n            grid-template-rows: 1fr;\n        }\n    }\n\n    @keyframes p-animate-collapsible-collapse {\n        from {\n            grid-template-rows: 1fr;\n        }\n        to {\n            grid-template-rows: 0fr;\n        }\n    }\n\n    .p-disabled,\n    .p-disabled * {\n        cursor: default;\n        pointer-events: none;\n        user-select: none;\n    }\n\n    .p-disabled,\n    .p-component:disabled {\n        opacity: dt('disabled.opacity');\n    }\n\n    .pi {\n        font-size: dt('icon.size');\n    }\n\n    .p-icon {\n        width: var(--px-icon-size, dt('icon.size'));\n        height: var(--px-icon-size, dt('icon.size'));\n        flex-shrink: 0;\n    }\n\n    .p-icon-spin {\n        -webkit-animation: p-icon-spin 2s infinite linear;\n        animation: p-icon-spin 2s infinite linear;\n    }\n\n    @-webkit-keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    @keyframes p-icon-spin {\n        0% {\n            -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n        }\n        100% {\n            -webkit-transform: rotate(359deg);\n            transform: rotate(359deg);\n        }\n    }\n\n    .p-overlay-mask {\n        background: var(--px-mask-background, dt('mask.background'));\n        color: dt('mask.color');\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-overlay-mask-enter-active {\n        animation: p-animate-overlay-mask-enter dt('mask.transition.duration') forwards;\n    }\n\n    .p-overlay-mask-leave-active {\n        animation: p-animate-overlay-mask-leave dt('mask.transition.duration') forwards;\n    }\n\n    @keyframes p-animate-overlay-mask-enter {\n        from {\n            background: transparent;\n        }\n        to {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n    }\n    @keyframes p-animate-overlay-mask-leave {\n        from {\n            background: var(--px-mask-background, dt('mask.background'));\n        }\n        to {\n            background: transparent;\n        }\n    }\n\n    .p-anchored-overlay-enter-active {\n        animation: p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);\n    }\n\n    .p-anchored-overlay-leave-active {\n        animation: p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);\n        pointer-events: none;\n    }\n\n    @keyframes p-animate-anchored-overlay-enter {\n        from {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n\n    @keyframes p-animate-anchored-overlay-leave {\n        to {\n            opacity: 0;\n            transform: scale(0.93);\n        }\n    }\n";

// node_modules/primeng/fesm2022/primeng-utils.mjs
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  const getZIndex = (el) => el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) el.style.zIndex = String(generateZIndex(key, baseZIndex));
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex(),
    generateZIndex,
    revertZIndex
  };
}
var zindexutils_default = ZIndexUtils();
var unsupportedClassPrefix = false;
function getClassPrefix(theme) {
  var _a, _b;
  const classPrefix = (_b = (_a = theme == null ? void 0 : theme.getOptions) == null ? void 0 : _a.call(theme)) == null ? void 0 : _b.classPrefix;
  if (!classPrefix || classPrefix === "p" || (theme == null ? void 0 : theme.styleName)) return classPrefix;
  if (!unsupportedClassPrefix && isDevMode()) {
    unsupportedClassPrefix = true;
    console.warn(`[PrimeNG] The theme option classPrefix "${classPrefix}" needs a newer @primeuix/styled; class names keep the "p-" prefix.`);
  }
}
function prefixClasses(value, prefix) {
  return O({
    prefix,
    keep: W2
  }, value);
}
function prefixSelector(selector, prefix) {
  return !prefix || prefix === "p" || !selector ? selector : y({
    prefix,
    keep: W2
  }, selector);
}
function markInstance(el, ids) {
  var _a;
  if (!el || !ids) return;
  const added = ids.split(" ").filter(Boolean);
  const current = ((_a = el.getAttribute("data-pc-id")) == null ? void 0 : _a.split(" ").filter(Boolean)) ?? [];
  const next = [.../* @__PURE__ */ new Set([...current, ...added])];
  if (next.length !== current.length) el.setAttribute("data-pc-id", next.join(" "));
  added.forEach((id) => el.setAttribute(id, ""));
}

// node_modules/primeng/node_modules/@primeuix/styled/dist/isolation/index.mjs
var a3 = "data-p-dark";
function u(e3, { warn: t3 = console.warn } = {}) {
  const n4 = /* @__PURE__ */ new Set(), r3 = /* @__PURE__ */ new Map();
  let o3 = "";
  const s4 = (e4) => {
    try {
      return !!o3 && e4.documentElement.matches(o3);
    } catch (e5) {
      return false;
    }
  };
  function c5(e4) {
    !(function(e5) {
      if (!o3 || r3.has(e5)) return;
      const t4 = new MutationObserver(() => {
        const t5 = s4(e5);
        n4.forEach((n5) => n5.ownerDocument === e5 && n5.toggleAttribute(a3, t5));
      });
      t4.observe(e5.documentElement, { attributes: true }), r3.set(e5, t4);
    })(e4.ownerDocument), e4.toggleAttribute(a3, s4(e4.ownerDocument));
  }
  function l4() {
    r3.forEach((e4) => e4.disconnect()), r3.clear();
  }
  function u3(e4) {
    if (f2 || h2 && e4 === d4) return;
    h2 = true, d4 = e4;
    const r4 = null == e4 || "none" === e4 || "boolean" == typeof e4 ? [] : Be.regex.resolve(e4), s5 = r4.filter(({ type: e5 }) => "custom" === e5);
    s5.length && t3 && t3(`[primeuix] darkModeSelector ${s5.map((e5) => JSON.stringify(e5.selector)).join(", ")} cannot be mirrored into an isolated scope; use a class (".dark"), an attribute ("[data-theme=dark]") or "system".`), o3 = r4.filter(({ type: e5 }) => "class" === e5 || "attr" === e5).map((e5) => e5.selector.split(",:host(")[0]).join(","), l4(), n4.forEach(c5);
  }
  let d4, f2 = false, h2 = false;
  return u3(e3), { add: (e4) => f2 ? () => {
  } : (n4.add(e4), c5(e4), () => {
    var t4;
    if (!n4.delete(e4)) return;
    e4.removeAttribute(a3);
    const o4 = e4.ownerDocument;
    [...n4].some((e5) => e5.ownerDocument === o4) || (null == (t4 = r3.get(o4)) || t4.disconnect(), r3.delete(o4));
  }), update: u3, dispose() {
    f2 = true, n4.forEach((e4) => e4.removeAttribute(a3)), n4.clear(), l4();
  } };
}

// node_modules/primeng/fesm2022/primeng-usestyle.mjs
var _id = 0;
var STYLE_ID_ATTRIBUTE = "data-primeng-style-id";
var styleSelector = (name) => `style[${STYLE_ID_ATTRIBUTE}=${Se(name)}]`;
var escapeRegExp = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
function darkHeadsOf() {
  const heads = Be.getColorSchemeOption($e.getOptions(), $e.defaults).filter(({ type }) => type === "class" || type === "attr").map(({ selector }) => escapeRegExp(selector.split(",:host(")[0]));
  return heads.length ? new RegExp(`(^|[,{}])\\s*(?:${heads.join("|")})\\s+(?=[^\\s,{}])`, "g") : void 0;
}
var canAdopt = (root) => {
  var _a;
  return "adoptedStyleSheets" in root && ((_a = root.ownerDocument.defaultView) == null ? void 0 : _a.CSSStyleSheet) === CSSStyleSheet;
};
function sheetOf(style2) {
  if (!style2.sheet) {
    style2.sheet = new CSSStyleSheet();
    style2.sheet.replaceSync(style2.hostCss);
  }
  return style2.sheet;
}
var UseStyle = class UseStyle2 {
  document = inject(DOCUMENT);
  zone = inject(NgZone);
  sharedStyles = /* @__PURE__ */ new Map();
  shadowRoots = /* @__PURE__ */ new Map();
  owned = /* @__PURE__ */ new WeakSet();
  keyed = false;
  dark;
  onThemeChange = () => {
    var _a;
    const selector = (_a = $e.getOptions()) == null ? void 0 : _a.darkModeSelector;
    if (!this.dark || selector === this.dark.selector) return;
    this.dark.selector = selector;
    this.dark.heads = darkHeadsOf();
    this.dark.mirror.update(selector);
    this.sharedStyles.forEach((style2, name) => {
      const old = style2.sheet;
      style2.hostCss = this.toHost(style2.css);
      style2.sheet = void 0;
      this.shadowRoots.forEach((state, shadowRoot) => this.update(shadowRoot, state, name, style2, old));
    });
  };
  addShadowRoot(shadowRoot) {
    if ((shadowRoot == null ? void 0 : shadowRoot.nodeType) !== 11 || !("host" in shadowRoot)) return () => {
    };
    const state = this.shadowRoots.get(shadowRoot) ?? this.register(shadowRoot);
    state.count++;
    d2.off("theme:change", this.onThemeChange);
    d2.on("theme:change", this.onThemeChange);
    let released = false;
    return () => {
      if (released) return;
      released = true;
      if (!--state.count && this.shadowRoots.get(shadowRoot) === state) this.removeShadowRoot(shadowRoot);
    };
  }
  removeShadowRoot(shadowRoot) {
    const state = this.shadowRoots.get(shadowRoot);
    if (!state) return;
    this.shadowRoots.delete(shadowRoot);
    state.unmark();
    this.clear(shadowRoot, state);
    if (this.shadowRoots.size || !this.dark) return;
    d2.off("theme:change", this.onThemeChange);
    this.dark.mirror.dispose();
    this.dark = void 0;
  }
  remove(name, el) {
    var _a, _b;
    const style2 = this.sharedStyles.get(name);
    this.sharedStyles.delete(name);
    (_b = (el == null ? void 0 : el.isConnected) && el.getAttribute("data-primeng-style-id") === name ? el : (_a = this.document) == null ? void 0 : _a.querySelector(styleSelector(name))) == null ? void 0 : _b.remove();
    if (!style2) return;
    this.shadowRoots.forEach((state, shadowRoot) => {
      var _a2;
      (_a2 = state.copies.get(name)) == null ? void 0 : _a2.remove();
      state.copies.delete(name);
      if (state.adopt && style2.sheet) shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((sheet) => sheet !== style2.sheet);
    });
  }
  use(css2, options = {}) {
    let cssRef = css2;
    let styleRef = null;
    const { name = `style_${++_id}`, id = void 0, media = void 0, nonce = void 0, first = false, variables = false, unkeyed = void 0 } = options;
    if (!this.document) return;
    this.keyed ||= !!unkeyed && unkeyed !== name;
    if (unkeyed) this.dropStale(unkeyed, name);
    styleRef = this.document.querySelector(styleSelector(name)) || id && this.document.getElementById(id) || this.document.createElement("style");
    this.owned.add(styleRef);
    if (styleRef) {
      if (!styleRef.isConnected) {
        cssRef = css2;
        const HEAD = this.document.head;
        be(styleRef, "nonce", nonce);
        if (first && HEAD.firstChild) HEAD.insertBefore(styleRef, HEAD.firstChild);
        else HEAD.appendChild(styleRef);
        $(styleRef, {
          type: "text/css",
          media,
          nonce,
          [STYLE_ID_ATTRIBUTE]: name
        });
      }
      if (styleRef.textContent !== cssRef) styleRef.textContent = cssRef;
    }
    if (!variables) this.share(name, cssRef ?? "", first, nonce);
    return {
      id,
      name,
      el: styleRef,
      css: cssRef
    };
  }
  dropStale(unkeyed, name) {
    if (!this.keyed) return;
    this.document.querySelectorAll(`${styleSelector(unkeyed)},style[${STYLE_ID_ATTRIBUTE}^=${Se(`${unkeyed}@`)}]`).forEach((el) => {
      const staleName = el.getAttribute(STYLE_ID_ATTRIBUTE);
      if (staleName !== name && this.owned.has(el)) this.remove(staleName);
    });
  }
  register(shadowRoot) {
    var _a;
    if (!this.dark) {
      const selector = (_a = $e.getOptions()) == null ? void 0 : _a.darkModeSelector;
      this.dark = {
        selector,
        heads: darkHeadsOf(),
        mirror: this.zone.runOutsideAngular(() => u(selector))
      };
      this.sharedStyles.forEach((style2) => (style2.hostCss = this.toHost(style2.css), style2.sheet = void 0));
    }
    const dark = this.dark;
    const state = {
      count: 0,
      adopt: canAdopt(shadowRoot),
      copies: /* @__PURE__ */ new Map(),
      unmark: this.zone.runOutsideAngular(() => dark.mirror.add(shadowRoot.host))
    };
    this.shadowRoots.set(shadowRoot, state);
    this.apply(shadowRoot, state);
    return state;
  }
  apply(shadowRoot, state) {
    const sheets = [];
    this.sharedStyles.forEach((style2, name) => style2.first || !state.adopt ? this.copy(shadowRoot, state, name, style2) : sheets.push(sheetOf(style2)));
    if (sheets.length) shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, ...sheets.filter((sheet) => !shadowRoot.adoptedStyleSheets.includes(sheet))];
  }
  clear(shadowRoot, state) {
    state.copies.forEach((el) => el.remove());
    state.copies.clear();
    if (!state.adopt) return;
    const sheets = new Set([...this.sharedStyles.values()].map((style2) => style2.sheet));
    shadowRoot.adoptedStyleSheets = shadowRoot.adoptedStyleSheets.filter((sheet) => !sheets.has(sheet));
  }
  toHost(css2) {
    var _a;
    const heads = (_a = this.dark) == null ? void 0 : _a.heads;
    return heads ? css2.replace(heads, "$1:host([data-p-dark]) ") : css2;
  }
  share(name, css2, first, nonce) {
    const old = this.sharedStyles.get(name);
    if (old && old.css === css2 && old.first === first) return;
    const style2 = {
      css: css2,
      first,
      nonce,
      hostCss: this.toHost(css2)
    };
    this.sharedStyles.set(name, style2);
    this.shadowRoots.forEach((state, shadowRoot) => this.update(shadowRoot, state, name, style2, old == null ? void 0 : old.sheet));
  }
  update(shadowRoot, state, name, style2, old) {
    var _a;
    const sheets = state.adopt ? shadowRoot.adoptedStyleSheets : [];
    const at = old ? sheets.indexOf(old) : -1;
    if (style2.first || !state.adopt) {
      this.copy(shadowRoot, state, name, style2);
      if (at >= 0) shadowRoot.adoptedStyleSheets = sheets.filter((sheet) => sheet !== old);
      return;
    }
    (_a = state.copies.get(name)) == null ? void 0 : _a.remove();
    state.copies.delete(name);
    shadowRoot.adoptedStyleSheets = at >= 0 ? sheets.map((sheet, i3) => i3 === at ? sheetOf(style2) : sheet) : [...sheets, sheetOf(style2)];
  }
  copy(shadowRoot, state, name, { hostCss: css2, first, nonce }) {
    let el = state.copies.get(name);
    if (!el) {
      el = shadowRoot.ownerDocument.createElement("style");
      el.setAttribute(STYLE_ID_ATTRIBUTE, name);
      if (nonce) el.setAttribute("nonce", nonce);
      if (first) shadowRoot.prepend(el);
      else shadowRoot.append(el);
      state.copies.set(name, el);
    }
    if (el.textContent !== css2) el.textContent = css2;
  }
  static \u0275fac = function UseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UseStyle2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: UseStyle2,
    factory: UseStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UseStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var StyleScope = class StyleScope2 {
  isolated = false;
  document = inject(DOCUMENT);
  platformId = inject(PLATFORM_ID);
  useStyle = inject(UseStyle);
  theme = this.createTheme();
  resolvers = this.createResolvers();
  service = this.theme.service ?? d2;
  coreStyleNames = void 0;
  isolation = void 0;
  _classPrefix = signal(this.readClassPrefix(), ...ngDevMode ? [{ debugName: "_classPrefix" }] : (
    /* istanbul ignore next */
    []
  ));
  classPrefix = this._classPrefix.asReadonly();
  onThemeChange = () => this.themeChanged();
  bodyLock;
  constructor() {
    this.service.on("theme:change", this.onThemeChange);
    this.service.on("options:change", this.onThemeChange);
  }
  get key() {
  }
  styleName(name) {
    var _a, _b;
    return ((_b = (_a = this.theme).styleName) == null ? void 0 : _b.call(_a, name)) ?? name;
  }
  prime(_theme) {
  }
  pcn(...classes) {
    return prefixClasses(classes.length > 1 ? classes : classes[0], this._classPrefix());
  }
  psel(selector) {
    return prefixSelector(selector, this._classPrefix());
  }
  batch(fn) {
    return fn();
  }
  connect(el, injector) {
    var _a;
    if (isPlatformServer(this.platformId)) return;
    const rootNode = (_a = el == null ? void 0 : el.getRootNode) == null ? void 0 : _a.call(el);
    if ((rootNode == null ? void 0 : rootNode.nodeType) !== 11) return;
    injector.get(DestroyRef).onDestroy(this.useStyle.addShadowRoot(rootNode));
  }
  scopeCSS(css2) {
    return css2;
  }
  keyedId(id) {
    return id;
  }
  setInstanceStyle(_name, _css, _nonce) {
  }
  removeInstanceStyle(_name) {
  }
  overlayParent(target, _overlay) {
    return target;
  }
  lockBodyScroll(options) {
    var _a;
    if (!this.isolation || !options || this.bodyLock || !((_a = this.document) == null ? void 0 : _a.body)) return;
    this.isolation.set("body-scroll-lock", `body.${options.className}{overflow:hidden;padding-right:var(${options.variableName})}`);
    this.bodyLock = this.isolation.retain(this.document);
  }
  unlockBodyScroll() {
    var _a;
    if (!this.bodyLock) return;
    (_a = this.isolation) == null ? void 0 : _a.delete("body-scroll-lock");
    this.bodyLock();
    this.bodyLock = void 0;
  }
  ngOnDestroy() {
    this.unlockBodyScroll();
    this.service.off("theme:change", this.onThemeChange);
    this.service.off("options:change", this.onThemeChange);
  }
  createTheme() {
    return $e;
  }
  createResolvers() {
    return {
      dt: Ce2,
      $dt: _e,
      css: Ie
    };
  }
  themeChanged() {
    this._classPrefix.set(this.readClassPrefix());
  }
  readClassPrefix() {
    return getClassPrefix(this.theme) ?? "p";
  }
  static \u0275fac = function StyleScope_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StyleScope2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: StyleScope2,
    factory: StyleScope2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleScope, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-base.mjs
var base_default = {
  _loadedStyleNames: /* @__PURE__ */ new Set(),
  getLoadedStyleNames() {
    return this._loadedStyleNames;
  },
  isStyleNameLoaded(name) {
    return this._loadedStyleNames.has(name);
  },
  setLoadedStyleName(name) {
    this._loadedStyleNames.add(name);
  },
  deleteLoadedStyleName(name) {
    this._loadedStyleNames.delete(name);
  },
  clearLoadedStyleNames() {
    this._loadedStyleNames.clear();
  }
};
var css = `
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`;
var BaseStyle = class BaseStyle2 {
  name = "base";
  useStyle = inject(UseStyle);
  #scope = inject(StyleScope);
  css = void 0;
  style = void 0;
  classes = {};
  inlineStyles = {};
  load = (style2, options = {}, transform = (cs) => cs) => {
    const { css: Css, dt } = this.#scope.resolvers;
    const computedStyle = transform(options.raw ? style2 : Css`${x(style2, { dt })}`);
    return computedStyle ? this.#use(computedStyle, options) : {};
  };
  loadCSS = (options = {}) => this.load(this.css, options, (computedStyle) => this.#scope.scopeCSS(computedStyle));
  loadStyle = (options = {}, style2 = "") => this.load(this.style, options, (computedStyle = "") => this.#scope.theme.transformCSS(options.name || this.name, `${computedStyle}${this.#scope.resolvers.css`${style2}`}`));
  loadBaseCSS = (options = {}) => this.load(css, options, (computedStyle) => this.#scope.scopeCSS(computedStyle));
  loadBaseStyle = (options = {}, style$1 = "") => this.load(style, options, (computedStyle = "") => this.#scope.theme.transformCSS(options.name || this.name, `${computedStyle}${this.#scope.resolvers.css`${style$1}`}`));
  loadPreflight = (options = {}) => this.load(n2, __spreadProps(__spreadValues({}, options), {
    name: "preflight-style",
    raw: true
  }), (computedStyle) => this.#scope.scopeCSS(computedStyle));
  getCommonTheme = (params) => this.#scope.theme.getCommon(this.name, params);
  getComponentTheme = (params) => this.#scope.theme.getComponent(this.name, params);
  getPresetTheme = (preset, selector, params) => this.#scope.theme.getCustomPreset(this.name, preset, selector, params);
  getLayerOrderThemeCSS = () => this.#scope.theme.getLayerOrderCSS(this.name);
  getStyleSheet = (extendedCSS = "", props = {}) => {
    if (this.css) {
      const { css: Css, dt } = this.#scope.resolvers;
      const _css = x(this.css, { dt });
      const _style = B(Css`${_css}${extendedCSS}`);
      const _props = K(props).join(" ");
      return `<style type="text/css" ${this.styleIdAttributes(this.name)} ${_props}>${Q(_style)}</style>`;
    }
    return "";
  };
  styleIdAttributes(name) {
    return `${STYLE_ID_ATTRIBUTE}="${J(this.#scope.styleName(name))}"`;
  }
  getCommonThemeStyleSheet = (params, props = {}) => this.#scope.theme.getCommonStyleSheet(this.name, params, props, (name) => this.#scope.styleName(name));
  getThemeStyleSheet = (params, props = {}) => {
    let css2 = [this.#scope.theme.getStyleSheet(this.name, params, props, (name) => this.#scope.styleName(name))];
    if (this.style) {
      const { css: Css, dt } = this.#scope.resolvers;
      const name = this.name === "base" ? "global-style" : `${this.name}-style`;
      const _css = Css`${x(this.style, { dt })}`;
      const _style = B(this.#scope.theme.transformCSS(name, _css));
      const _props = K(props).join(" ");
      css2.push(`<style type="text/css" ${this.styleIdAttributes(name)} ${_props}>${Q(_style)}</style>`);
    }
    return css2.join("");
  };
  #use(css2, options) {
    const name = options.name || this.name;
    return this.useStyle.use(B(css2), __spreadProps(__spreadValues({}, options), {
      name: this.#scope.styleName(name),
      unkeyed: name
    }));
  }
  static \u0275fac = function BaseStyle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || BaseStyle2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: BaseStyle2,
    factory: BaseStyle2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseStyle, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/@primeui/license-manager/dist/index.mjs
var e2 = Object.defineProperty;
var t2 = Object.getOwnPropertySymbols;
var r2 = Object.prototype.hasOwnProperty;
var n3 = Object.prototype.propertyIsEnumerable;
var i2 = (t3, r3, n4) => r3 in t3 ? e2(t3, r3, { enumerable: true, configurable: true, writable: true, value: n4 }) : t3[r3] = n4;
var o2 = (e3, o3) => {
  for (var c5 in o3 || (o3 = {})) r2.call(o3, c5) && i2(e3, c5, o3[c5]);
  if (t2) for (var c5 of t2(o3)) n3.call(o3, c5) && i2(e3, c5, o3[c5]);
  return e3;
};
var c4 = (e3, t3, r3) => new Promise((n4, i3) => {
  var o3 = (e4) => {
    try {
      u3(r3.next(e4));
    } catch (e5) {
      i3(e5);
    }
  }, c5 = (e4) => {
    try {
      u3(r3.throw(e4));
    } catch (e5) {
      i3(e5);
    }
  }, u3 = (e4) => e4.done ? n4(e4.value) : Promise.resolve(e4.value).then(o3, c5);
  u3((r3 = r3.apply(e3, t3)).next());
});
var u2 = class extends Error {
};
var l3 = (e3) => " " === e3 || "\n" === e3 || "\r" === e3 || "	" === e3;
var a4 = (e3) => void 0 !== e3 && e3 >= "0" && e3 <= "9";
function s3(e3) {
  if (void 0 === e3) throw new u2("Bad escape");
  if (e3 >= "0" && e3 <= "9") return e3.charCodeAt(0) - 48;
  if (e3 >= "a" && e3 <= "f") return e3.charCodeAt(0) - 87;
  if (e3 >= "A" && e3 <= "F") return e3.charCodeAt(0) - 55;
  throw new u2("Bad escape");
}
var f = (() => {
  const e3 = /* @__PURE__ */ Object.create(null);
  for (let t3 = 0; t3 < 64; t3++) e3["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[t3]] = t3;
  return e3;
})();
function d3(e3) {
  if (1 == e3.length % 4) throw new Error("Invalid base64url length");
  const t3 = Math.floor(6 * e3.length / 8), r3 = new Uint8Array(t3);
  let n4 = 0, i3 = 0, o3 = 0;
  for (let t4 = 0; t4 < e3.length; t4++) {
    const c5 = e3[t4], u3 = f[c5];
    if (void 0 === u3) throw new Error("Invalid base64url character");
    n4 = n4 << 6 | u3, i3 += 6, i3 >= 8 && (i3 -= 8, r3[o3++] = n4 >> i3 & 255);
  }
  if (i3 > 0 && n4 & (1 << i3) - 1) throw new Error("Invalid base64url trailing bits");
  return r3;
}
var h = "primeui";
var w2 = "primeui-pro:";
var y2 = Object.freeze({ primeui: "primeui", scheduler: "primeui-pro:scheduler", texteditor: "primeui-pro:text-editor", charts: "primeui-pro:charts", diagram: "primeui-pro:diagram", pdfviewer: "primeui-pro:pdf-viewer", taskboard: "primeui-pro:task-board", datagrid: "primeui-pro:datagrid", ganttchart: "primeui-pro:gantt-chart", filemanager: "primeui-pro:file-manager" });
var g2 = 16;
var v2 = 65536;
var m = () => new Array(g2).fill(0);
function b3(e3) {
  const t3 = m();
  let r3 = e3;
  for (let e4 = 0; e4 < g2 && 0 !== r3; e4++) t3[e4] = r3 % v2, r3 = Math.floor(r3 / v2);
  return t3;
}
var x4 = m();
var U2 = b3(1);
var E3 = (() => {
  const e3 = m();
  e3[0] = 65517;
  for (let t3 = 1; t3 < 15; t3++) e3[t3] = 65535;
  return e3[15] = 32767, e3;
})();
function z2(e3, t3) {
  let r3 = t3;
  for (; 0 !== r3; ) {
    let t4 = 38 * r3;
    r3 = 0;
    for (let r4 = 0; r4 < g2; r4++) {
      const n4 = e3[r4] + t4;
      if (t4 = Math.floor(n4 / v2), e3[r4] = n4 - t4 * v2, 0 === t4) break;
    }
    r3 = t4;
  }
}
function k2(e3, t3) {
  const r3 = new Array(32).fill(0);
  for (let n4 = 0; n4 < g2; n4++) {
    const i3 = e3[n4];
    if (0 !== i3) {
      for (let e4 = 0; e4 < g2; e4++) r3[n4 + e4] = r3[n4 + e4] + i3 * t3[e4];
      if (n4 % 4 == 3) {
        let e4 = 0;
        for (let t4 = 0; t4 < 32; t4++) {
          const n5 = r3[t4] + e4;
          e4 = Math.floor(n5 / v2), r3[t4] = n5 - e4 * v2;
        }
      }
    }
  }
  return (function(e4) {
    for (let t5 = g2; t5 < e4.length; t5++) e4[t5 - g2] = e4[t5 - g2] + 38 * e4[t5], e4[t5] = 0;
    let t4 = 0;
    for (let r5 = 0; r5 < g2; r5++) {
      const n4 = e4[r5] + t4;
      t4 = Math.floor(n4 / v2), e4[r5] = n4 - t4 * v2;
    }
    const r4 = e4.slice(0, g2);
    return z2(r4, t4), r4;
  })(r3);
}
function A4(e3) {
  return k2(e3, e3);
}
function O4(e3, t3) {
  const r3 = m();
  let n4 = 0;
  for (let i3 = 0; i3 < g2; i3++) {
    const o3 = e3[i3] + t3[i3] + n4;
    n4 = o3 >= v2 ? 1 : 0, r3[i3] = o3 - n4 * v2;
  }
  return z2(r3, n4), r3;
}
function j2(e3, t3) {
  const r3 = m();
  let n4 = 0;
  for (let i3 = 0; i3 < g2; i3++) {
    const o3 = e3[i3] - t3[i3] - n4;
    n4 = o3 < 0 ? 1 : 0, r3[i3] = o3 + n4 * v2;
  }
  return z2(r3, -n4), r3;
}
function P3(e3) {
  return j2(x4, e3);
}
function I3(e3) {
  for (let t3 = 15; t3 >= 0; t3--) {
    if (e3[t3] > E3[t3]) return true;
    if (e3[t3] < E3[t3]) return false;
  }
  return true;
}
function D3(e3) {
  const t3 = (function(e4) {
    const t4 = e4.slice();
    let r4 = 0;
    for (let e5 = 0; e5 < g2; e5++) {
      const n4 = t4[e5] + r4;
      r4 = Math.floor(n4 / v2), t4[e5] = n4 - r4 * v2;
    }
    z2(t4, r4);
    for (let e5 = 0; e5 < 2 && I3(t4); e5++) {
      let e6 = 0;
      for (let r5 = 0; r5 < g2; r5++) {
        const n4 = t4[r5] - E3[r5] - e6;
        e6 = n4 < 0 ? 1 : 0, t4[r5] = n4 + e6 * v2;
      }
    }
    return t4;
  })(e3), r3 = new Uint8Array(32);
  for (let e4 = 0; e4 < g2; e4++) r3[2 * e4] = 255 & t3[e4], r3[2 * e4 + 1] = t3[e4] >> 8 & 255;
  return r3;
}
function T2(e3) {
  const t3 = D3(e3);
  let r3 = 0;
  for (let e4 = 0; e4 < 32; e4++) r3 |= t3[e4];
  return 0 === r3;
}
function F2(e3, t3) {
  return T2(j2(e3, t3));
}
function C2(e3, t3) {
  let r3 = e3;
  for (let e4 = 0; e4 < t3; e4++) r3 = A4(r3);
  return r3;
}
function M3(e3) {
  const t3 = A4(e3), r3 = k2(e3, C2(t3, 2)), n4 = k2(t3, r3), i3 = k2(r3, A4(n4)), o3 = k2(C2(i3, 5), i3), c5 = k2(C2(o3, 10), o3), u3 = k2(C2(c5, 20), c5), l4 = k2(C2(u3, 10), o3), a5 = k2(C2(l4, 50), l4), s4 = k2(C2(a5, 100), a5);
  return { z11: n4, z250: k2(C2(s4, 50), l4) };
}
function $3(e3) {
  const { z11: t3, z250: r3 } = M3(e3);
  return k2(C2(r3, 5), t3);
}
var B2 = k2(P3(b3(121665)), $3(b3(121666)));
var N3 = (() => {
  const e3 = new Uint8Array(32);
  e3[0] = 251;
  for (let t4 = 1; t4 < 31; t4++) e3[t4] = 255;
  e3[31] = 31;
  let t3 = U2, r3 = b3(2);
  for (let n4 = 0; n4 < 32; n4++) for (let i3 = 0; i3 < 8; i3++) 1 == (e3[n4] >> i3 & 1) && (t3 = k2(t3, r3)), r3 = A4(r3);
  return t3;
})();
function L2(e3, t3) {
  const r3 = k2(j2(e3.y, e3.x), j2(t3.y, t3.x)), n4 = k2(O4(e3.y, e3.x), O4(t3.y, t3.x)), i3 = k2(k2(O4(B2, B2), e3.t), t3.t), o3 = k2(O4(e3.z, e3.z), t3.z), c5 = j2(n4, r3), u3 = j2(o3, i3), l4 = O4(o3, i3), a5 = O4(n4, r3);
  return { x: k2(c5, u3), y: k2(l4, a5), z: k2(u3, l4), t: k2(c5, a5) };
}
function S(e3) {
  return L2(e3, e3);
}
function _3(e3, t3) {
  let r3 = { x: x4.slice(), y: U2.slice(), z: U2.slice(), t: x4.slice() }, n4 = false;
  for (let i3 = e3.length - 1; i3 >= 0; i3--) for (let o3 = 7; o3 >= 0; o3--) n4 && (r3 = S(r3)), 1 == (e3[i3] >> o3 & 1) && (n4 ? r3 = L2(r3, t3) : (r3 = { x: t3.x.slice(), y: t3.y.slice(), z: t3.z.slice(), t: t3.t.slice() }, n4 = true));
  return r3;
}
function V2(e3) {
  if (32 !== e3.length) return null;
  const t3 = Uint8Array.from(e3), r3 = 1 == (t3[31] >> 7 & 1);
  t3[31] = 127 & t3[31];
  const n4 = (function(e4) {
    const t4 = m();
    for (let r4 = 0; r4 < g2; r4++) t4[r4] = e4[2 * r4] | e4[2 * r4 + 1] << 8;
    return t4;
  })(t3);
  if (I3(n4)) return null;
  const i3 = A4(n4), o3 = j2(i3, U2), c5 = O4(k2(B2, i3), U2), u3 = k2(A4(c5), c5), l4 = k2(A4(u3), c5);
  let a5 = k2(k2(o3, u3), (function(e4) {
    const { z250: t4 } = M3(e4);
    return k2(C2(t4, 2), e4);
  })(k2(o3, l4)));
  return F2(k2(A4(a5), c5), o3) || (a5 = k2(a5, N3), F2(k2(A4(a5), c5), o3)) ? T2(a5) && r3 ? null : (!(1 & ~D3(a5)[0]) !== r3 && (a5 = P3(a5)), { x: a5, y: n4, z: U2.slice(), t: k2(a5, n4) }) : null;
}
var W3 = (() => {
  const e3 = V2(D3(k2(b3(4), $3(b3(5)))));
  if (!e3) throw new Error("[@primeui/license-manager] Ed25519 base point failed to initialise");
  return e3;
})();
function G2(e3) {
  const t3 = S(S(S(e3)));
  return T2(k2(t3.x, t3.z)) && F2(t3.y, t3.z);
}
var R2 = new Uint8Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);
function q2(e3) {
  for (let t3 = 31; t3 >= 0; t3--) {
    if (e3[t3] < R2[t3]) return true;
    if (e3[t3] > R2[t3]) return false;
  }
  return false;
}
var K4 = Object.freeze({ primeui: "PrimeUI", scheduler: "Scheduler", texteditor: "TextEditor", charts: "Charts", diagram: "Diagram", pdfviewer: "PDF Viewer", taskboard: "Task Board", datagrid: "DataGrid", ganttchart: "Gantt", filemanager: "File Manager" });
var H2 = (e3, t3) => Object.prototype.hasOwnProperty.call(e3, t3);
function J2(e3) {
  return H2(K4, e3) ? K4[e3] : "PrimeUI";
}
function Q2(e3) {
  return H2(y2, e3) ? y2[e3] : void 0;
}
function X3(e3, t3 = "PrimeUI") {
  switch (e3) {
    case "active":
      return `${t3} license is active.`;
    case "grace":
      return `${t3} license is in its grace period. Renew soon to keep using this version.`;
    case "expired":
      return `${t3} license does not cover this version. Renew at primeui.store, or downgrade to a version released within your updates window.`;
    case "tampered":
      return `${t3} license signature is invalid.`;
    case "wrong-product":
      return `License does not cover ${t3}.`;
    case "missing":
      return `No license key configured for ${t3}.`;
    case "invalid":
      return `${t3} license is malformed.`;
    case "unconfigured":
      return `${t3} license is not configured.`;
    default:
      return `${t3} license status unknown.`;
  }
}
var Y2 = [[1116352408, 3609767458], [1899447441, 602891725], [3049323471, 3964484399], [3921009573, 2173295548], [961987163, 4081628472], [1508970993, 3053834265], [2453635748, 2937671579], [2870763221, 3664609560], [3624381080, 2734883394], [310598401, 1164996542], [607225278, 1323610764], [1426881987, 3590304994], [1925078388, 4068182383], [2162078206, 991336113], [2614888103, 633803317], [3248222580, 3479774868], [3835390401, 2666613458], [4022224774, 944711139], [264347078, 2341262773], [604807628, 2007800933], [770255983, 1495990901], [1249150122, 1856431235], [1555081692, 3175218132], [1996064986, 2198950837], [2554220882, 3999719339], [2821834349, 766784016], [2952996808, 2566594879], [3210313671, 3203337956], [3336571891, 1034457026], [3584528711, 2466948901], [113926993, 3758326383], [338241895, 168717936], [666307205, 1188179964], [773529912, 1546045734], [1294757372, 1522805485], [1396182291, 2643833823], [1695183700, 2343527390], [1986661051, 1014477480], [2177026350, 1206759142], [2456956037, 344077627], [2730485921, 1290863460], [2820302411, 3158454273], [3259730800, 3505952657], [3345764771, 106217008], [3516065817, 3606008344], [3600352804, 1432725776], [4094571909, 1467031594], [275423344, 851169720], [430227734, 3100823752], [506948616, 1363258195], [659060556, 3750685593], [883997877, 3785050280], [958139571, 3318307427], [1322822218, 3812723403], [1537002063, 2003034995], [1747873779, 3602036899], [1955562222, 1575990012], [2024104815, 1125592928], [2227730452, 2716904306], [2361852424, 442776044], [2428436474, 593698344], [2756734187, 3733110249], [3204031479, 2999351573], [3329325298, 3815920427], [3391569614, 3928383900], [3515267271, 566280711], [3940187606, 3454069534], [4118630271, 4000239992], [116418474, 1914138554], [174292421, 2731055270], [289380356, 3203993006], [460393269, 320620315], [685471733, 587496836], [852142971, 1086792851], [1017036298, 365543100], [1126000580, 2618297676], [1288033470, 3409855158], [1501505948, 4234509866], [1607167915, 987167468], [1816402316, 1246189591]];
var Z3 = [[1779033703, 4089235720], [3144134277, 2227873595], [1013904242, 4271175723], [2773480762, 1595750129], [1359893119, 2917565137], [2600822924, 725511199], [528734635, 4215389547], [1541459225, 327033209]];
function ee2(e3, t3, r3) {
  return 32 === r3 ? [0 | t3, 0 | e3] : r3 < 32 ? [e3 >>> r3 | t3 << 32 - r3, t3 >>> r3 | e3 << 32 - r3] : [t3 >>> r3 - 32 | e3 << 64 - r3, e3 >>> r3 - 32 | t3 << 64 - r3];
}
function te(e3, t3, r3) {
  return r3 < 32 ? [e3 >>> r3, t3 >>> r3 | e3 << 32 - r3] : [0, e3 >>> r3 - 32];
}
function re(e3, t3, r3, n4) {
  const i3 = (t3 >>> 0) + (n4 >>> 0);
  return [e3 + r3 + (i3 / 4294967296 | 0) | 0, 0 | i3];
}
function ne(e3) {
  const t3 = e3.length, r3 = Math.floor(t3 / 536870912), n4 = t3 << 3 >>> 0, i3 = 128 * Math.ceil((t3 + 17) / 128), o3 = new Uint8Array(i3);
  o3.set(e3), o3[t3] = 128;
  const c5 = new DataView(o3.buffer);
  c5.setUint32(i3 - 8, r3), c5.setUint32(i3 - 4, n4);
  const u3 = Z3.map((e4) => [e4[0], e4[1]]), l4 = new Array(160);
  for (let e4 = 0; e4 < i3; e4 += 128) {
    for (let t5 = 0; t5 < 16; t5++) l4[2 * t5] = c5.getUint32(e4 + 8 * t5), l4[2 * t5 + 1] = c5.getUint32(e4 + 8 * t5 + 4);
    for (let e5 = 16; e5 < 80; e5++) {
      const t5 = l4[2 * (e5 - 15)], r5 = l4[2 * (e5 - 15) + 1], [n6, i5] = ee2(t5, r5, 1), [o5, c6] = ee2(t5, r5, 8), [u4, a7] = te(t5, r5, 7), s6 = n6 ^ o5 ^ u4, f3 = i5 ^ c6 ^ a7, d5 = l4[2 * (e5 - 2)], p4 = l4[2 * (e5 - 2) + 1], [h3, w4] = ee2(d5, p4, 19), [y4, g4] = ee2(d5, p4, 61), [v4, m3] = te(d5, p4, 6), b4 = h3 ^ y4 ^ v4, x5 = w4 ^ g4 ^ m3;
      let [U3, E4] = re(l4[2 * (e5 - 16)], l4[2 * (e5 - 16) + 1], s6, f3);
      [U3, E4] = re(U3, E4, l4[2 * (e5 - 7)], l4[2 * (e5 - 7) + 1]), [U3, E4] = re(U3, E4, b4, x5), l4[2 * e5] = U3, l4[2 * e5 + 1] = E4;
    }
    let [t4, r4] = u3[0], [n5, i4] = u3[1], [o4, a6] = u3[2], [s5, f2] = u3[3], [d4, p3] = u3[4], [h2, w3] = u3[5], [y3, g3] = u3[6], [v3, m2] = u3[7];
    for (let e5 = 0; e5 < 80; e5++) {
      const [c6, u4] = ee2(d4, p3, 14), [b4, x5] = ee2(d4, p3, 18), [U3, E4] = ee2(d4, p3, 41), z3 = c6 ^ b4 ^ U3, k3 = u4 ^ x5 ^ E4, A5 = d4 & h2 ^ ~d4 & y3, O5 = p3 & w3 ^ ~p3 & g3;
      let [j3, P4] = re(v3, m2, z3, k3);
      [j3, P4] = re(j3, P4, A5, O5), [j3, P4] = re(j3, P4, Y2[e5][0], Y2[e5][1]), [j3, P4] = re(j3, P4, l4[2 * e5], l4[2 * e5 + 1]);
      const [I4, D4] = ee2(t4, r4, 28), [T3, F3] = ee2(t4, r4, 34), [C3, M4] = ee2(t4, r4, 39), $4 = I4 ^ T3 ^ C3, B3 = D4 ^ F3 ^ M4, N4 = t4 & n5 ^ t4 & o4 ^ n5 & o4, L3 = r4 & i4 ^ r4 & a6 ^ i4 & a6, [S2, _4] = re($4, B3, N4, L3);
      v3 = y3, m2 = g3, y3 = h2, g3 = w3, h2 = d4, w3 = p3, [d4, p3] = re(s5, f2, j3, P4), s5 = o4, f2 = a6, o4 = n5, a6 = i4, n5 = t4, i4 = r4, [t4, r4] = re(j3, P4, S2, _4);
    }
    u3[0] = re(u3[0][0], u3[0][1], t4, r4), u3[1] = re(u3[1][0], u3[1][1], n5, i4), u3[2] = re(u3[2][0], u3[2][1], o4, a6), u3[3] = re(u3[3][0], u3[3][1], s5, f2), u3[4] = re(u3[4][0], u3[4][1], d4, p3), u3[5] = re(u3[5][0], u3[5][1], h2, w3), u3[6] = re(u3[6][0], u3[6][1], y3, g3), u3[7] = re(u3[7][0], u3[7][1], v3, m2);
  }
  const a5 = new Uint8Array(64), s4 = new DataView(a5.buffer);
  for (let e4 = 0; e4 < 8; e4++) s4.setUint32(8 * e4, u3[e4][0] >>> 0), s4.setUint32(8 * e4 + 4, u3[e4][1] >>> 0);
  return a5;
}
var ie = 864e5;
var oe = Date.UTC(2025, 0, 1);
var ce = (() => Object.assign(/* @__PURE__ */ Object.create(null), { community: true, commercial: true }))();
var ue2 = /* @__PURE__ */ Object.create(null);
var le = [];
function ae2(e3) {
  let t3 = "";
  for (let r3 = 0; r3 < e3.length; r3++) t3 += (256 | e3[r3]).toString(16).slice(1);
  return t3;
}
function se(e3, t3, r3 = {}) {
  return o2({ valid: "active" === e3 || "grace" === e3, status: e3, message: X3(e3, t3) }, r3);
}
function fe2(e3) {
  return "community" === e3.tier;
}
function de(e3, t3) {
  return c4(this, null, function* () {
    const r3 = t3.productLabel;
    if ("string" != typeof e3 || e3.length > 2048 || !e3.includes(".")) return se("invalid", r3);
    const n4 = e3.split(".");
    if (2 !== n4.length) return se("invalid", r3);
    const [i3, o3] = n4;
    let f2;
    try {
      f2 = (function(e4) {
        let t4 = 0;
        const r4 = () => {
          for (; t4 < e4.length && l3(e4[t4]); ) t4++;
        }, n5 = (r5) => {
          if (e4.substr(t4, r5.length) !== r5) throw new u2("Unexpected token");
          t4 += r5.length;
        }, i4 = () => {
          let r5 = "";
          for (; ; ) {
            if (t4 >= e4.length) throw new u2("Unterminated string");
            const n6 = e4[t4++];
            if ('"' === n6) return r5;
            if (n6 < " ") throw new u2("Control character in string");
            if ("\\" !== n6) {
              r5 += n6;
              continue;
            }
            const i5 = e4[t4++];
            switch (i5) {
              case '"':
              case "\\":
              case "/":
                r5 += i5;
                break;
              case "b":
                r5 += "\b";
                break;
              case "f":
                r5 += "\f";
                break;
              case "n":
                r5 += "\n";
                break;
              case "r":
                r5 += "\r";
                break;
              case "t":
                r5 += "	";
                break;
              case "u": {
                const n7 = s3(e4[t4]) << 12 | s3(e4[t4 + 1]) << 8 | s3(e4[t4 + 2]) << 4 | s3(e4[t4 + 3]);
                t4 += 4, r5 += String.fromCharCode(n7);
                break;
              }
              default:
                throw new u2("Bad escape");
            }
          }
        }, o4 = (c6) => {
          if (c6 > 16) throw new u2("Too deep");
          r4();
          const l4 = e4[t4];
          if (void 0 === l4) throw new u2("Unexpected end");
          if ("{" === l4) {
            t4++;
            const n6 = {};
            if (r4(), "}" === e4[t4]) return t4++, n6;
            for (; ; ) {
              if (r4(), '"' !== e4[t4]) throw new u2("Expected key");
              t4++;
              const l5 = i4();
              if ("__proto__" === l5 || Object.prototype.hasOwnProperty.call(n6, l5)) throw new u2("Bad key");
              if (r4(), ":" !== e4[t4]) throw new u2("Expected colon");
              if (t4++, n6[l5] = o4(c6 + 1), r4(), "," !== e4[t4]) {
                if ("}" === e4[t4]) return t4++, n6;
                throw new u2("Expected , or }");
              }
              t4++;
            }
          }
          if ("[" === l4) {
            t4++;
            const n6 = [];
            if (r4(), "]" === e4[t4]) return t4++, n6;
            for (; ; ) {
              if (n6.push(o4(c6 + 1)), r4(), "," !== e4[t4]) {
                if ("]" === e4[t4]) return t4++, n6;
                throw new u2("Expected , or ]");
              }
              t4++;
            }
          }
          if ('"' === l4) return t4++, i4();
          if ("t" === l4) return n5("true"), true;
          if ("f" === l4) return n5("false"), false;
          if ("n" === l4) return n5("null"), null;
          if ("-" === l4 || a4(l4)) return (() => {
            const r5 = t4;
            if ("-" === e4[t4] && t4++, "0" === e4[t4]) t4++;
            else {
              if (!a4(e4[t4])) throw new u2("Bad number");
              for (; a4(e4[t4]); ) t4++;
            }
            if ("." === e4[t4]) {
              if (t4++, !a4(e4[t4])) throw new u2("Bad number");
              for (; a4(e4[t4]); ) t4++;
            }
            if ("e" === e4[t4] || "E" === e4[t4]) {
              if (t4++, "+" !== e4[t4] && "-" !== e4[t4] || t4++, !a4(e4[t4])) throw new u2("Bad number");
              for (; a4(e4[t4]); ) t4++;
            }
            return Number(e4.slice(r5, t4));
          })();
          throw new u2("Unexpected token");
        }, c5 = o4(0);
        if (r4(), t4 !== e4.length) throw new u2("Trailing characters");
        return c5;
      })((function(e4) {
        const t4 = [];
        let r4 = 0;
        for (; r4 < e4.length; ) {
          const n6 = e4[r4++];
          if (n6 < 128) {
            t4.push(n6);
            continue;
          }
          let i4, o4, c5;
          if (n6 >= 194 && n6 <= 223) i4 = 31 & n6, o4 = 1, c5 = 128;
          else if (n6 >= 224 && n6 <= 239) i4 = 15 & n6, o4 = 2, c5 = 2048;
          else {
            if (!(n6 >= 240 && n6 <= 244)) throw new u2("Invalid UTF-8");
            i4 = 7 & n6, o4 = 3, c5 = 65536;
          }
          if (r4 + o4 > e4.length) throw new u2("Invalid UTF-8");
          for (let t5 = 0; t5 < o4; t5++) {
            const t6 = e4[r4++];
            if (128 != (192 & t6)) throw new u2("Invalid UTF-8");
            i4 = i4 << 6 | 63 & t6;
          }
          if (i4 < c5 || i4 > 1114111 || i4 >= 55296 && i4 <= 57343) throw new u2("Invalid UTF-8");
          i4 >= 65536 ? (i4 -= 65536, t4.push(55296 | i4 >> 10, 56320 | 1023 & i4)) : t4.push(i4);
        }
        let n5 = "";
        for (let e5 = 0; e5 < t4.length; e5 += 4096) n5 += String.fromCharCode.apply(null, t4.slice(e5, e5 + 4096));
        return n5;
      })(d3(i3)));
    } catch (e4) {
      return se("invalid", r3);
    }
    if (!f2 || "object" != typeof f2 || Array.isArray(f2)) return se("invalid", r3);
    const p3 = f2, y3 = (e4) => Object.prototype.hasOwnProperty.call(p3, e4) ? p3[e4] : void 0, g3 = { id: y3("id"), product: y3("product"), tier: y3("tier"), type: y3("type"), iat: y3("iat"), exp: y3("exp") };
    if ("string" != typeof g3.product || "string" != typeof g3.type || !Number.isFinite(g3.exp) || !Number.isFinite(g3.iat) || "string" != typeof g3.id) return se("invalid", r3);
    if (void 0 !== g3.tier && ("string" != typeof g3.tier || true !== ce[g3.tier])) return se("invalid", r3);
    if (g3.product === h && void 0 === g3.tier) return se("invalid", r3);
    let v3, m2, b4;
    try {
      v3 = d3(o3), m2 = new TextEncoder().encode(i3);
    } catch (e4) {
      return se("invalid", r3);
    }
    try {
      b4 = (function(e4) {
        if (!/^[0-9a-fA-F]*$/.test(e4)) throw new Error("Invalid hex character");
        const t4 = new Uint8Array(32);
        for (let r4 = 0; r4 < t4.length; r4++) t4[r4] = parseInt(e4.slice(2 * r4, 2 * r4 + 2), 16);
        return t4;
      })("dae75e66b9f59bebf87d4bb29ca6494f37deccfcc2b132b98ee159ee7505373b");
    } catch (e4) {
      return se("invalid", r3);
    }
    let x5 = false;
    try {
      x5 = yield (function(e4, t4, r4) {
        return c4(this, null, function* () {
          const n5 = (function(e5, t5, r5) {
            const n6 = ae2(r5) + ":" + ae2(e5) + ":" + ae2(t5), i5 = ue2[n6];
            if (true === i5 || false === i5) return i5;
            const o4 = (function(e6, t6, r6, n7) {
              if (64 !== e6.length || 32 !== r6.length) return false;
              const i6 = e6.slice(32, 64);
              if (!q2(i6)) return false;
              const o5 = V2(r6);
              if (!o5) return false;
              if (G2(o5)) return false;
              const c5 = e6.slice(0, 32), u3 = V2(c5);
              if (!u3) return false;
              if (G2(u3)) return false;
              const l4 = new Uint8Array(64 + t6.length);
              l4.set(c5, 0), l4.set(r6, 32), l4.set(t6, 64);
              const a5 = (function(e7) {
                const t7 = new Uint8Array(32);
                for (let r7 = e7.length - 1; r7 >= 0; r7--) {
                  let n8 = e7[r7];
                  for (let e8 = 0; e8 < 32; e8++) {
                    const r8 = 256 * t7[e8] + n8;
                    t7[e8] = 255 & r8, n8 = r8 >> 8;
                  }
                  for (; n8 > 0 || !q2(t7); ) {
                    let e8 = 0;
                    for (let r8 = 0; r8 < 32; r8++) {
                      const n9 = t7[r8] - R2[r8] - e8;
                      e8 = n9 < 0 ? 1 : 0, t7[r8] = n9 + 256 * e8;
                    }
                    n8 -= e8, n8 < 0 && (n8 = 0);
                  }
                }
                return t7;
              })(n7(l4)), s4 = _3(i6, W3);
              return d4 = L2(u3, _3(a5, o5)), F2(k2((f3 = s4).x, d4.z), k2(d4.x, f3.z)) && F2(k2(f3.y, d4.z), k2(d4.y, f3.z));
              var f3, d4;
            })(e5, t5, r5, ne);
            return le.length >= 32 && delete ue2[le.shift()], le.push(n6), ue2[n6] = true === o4, true === o4;
          })(e4, t4, r4);
          if (!n5) return false;
          const i4 = yield (function(e5, t5, r5) {
            return c4(this, null, function* () {
              var n6;
              const i5 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0, o4 = null == (n6 = null == i5 ? void 0 : i5.crypto) ? void 0 : n6.subtle;
              if (o4) try {
                const n7 = yield o4.importKey("raw", r5, { name: "Ed25519" }, false, ["verify"]);
                return yield o4.verify({ name: "Ed25519" }, n7, e5, t5);
              } catch (e6) {
                return;
              }
            });
          })(e4, t4, r4);
          return void 0 === i4 || true === i4;
        });
      })(v3, m2, b4);
    } catch (e4) {
      return se("tampered", r3, { payload: g3 });
    }
    if (!x5) return se("tampered", r3, { payload: g3 });
    if (!(function(e4, t4) {
      return e4.product === t4 || !(!t4.startsWith(w2) || e4.product !== h || "commercial" !== e4.tier);
    })(g3, t3.product)) return se("wrong-product", r3, { payload: g3 });
    const U3 = 1e3 * g3.exp, E4 = Date.now(), z3 = Math.floor((U3 - E4) / ie), A5 = (function(e4) {
      const t4 = (function(e5) {
        if ("number" == typeof e5) return Number.isFinite(e5) ? 1e3 * e5 : null;
        if ("string" != typeof e5 || "" === e5) return null;
        const t5 = Date.parse(e5);
        return Number.isNaN(t5) ? null : t5;
      })(e4);
      return null !== t4 && t4 >= oe ? t4 : null;
    })(t3.releaseDate);
    if (null === A5 && !fe2(g3)) return se("invalid", r3, { daysUntilExpiry: z3, payload: g3 });
    if (null !== A5 && A5 > U3) return se("expired", r3, { daysUntilExpiry: z3, payload: g3 });
    if (fe2(g3)) {
      if (E4 > U3 + 30 * ie) return se("expired", r3, { daysUntilExpiry: z3, payload: g3 });
      if (E4 > U3) return se("grace", r3, { daysUntilExpiry: z3, payload: g3 });
    }
    return se("active", r3, { daysUntilExpiry: z3, payload: g3 });
  });
}
function pe(e3, t3) {
  const r3 = Object.prototype.hasOwnProperty.call(e3, t3) ? e3[t3] : void 0;
  return "string" == typeof r3 ? r3 : void 0;
}
function he(e3, t3) {
  return { valid: false, status: e3, message: X3(e3, t3) };
}
function we3(e3, t3) {
  const r3 = {};
  return { verify(t4, n4) {
    return c4(this, null, function* () {
      const i3 = Q2(t4), c5 = J2(t4), u3 = null == n4 ? void 0 : n4.releaseDate;
      if (!i3) return he("invalid", c5);
      const l4 = pe(e3, t4), a5 = pe(e3, "primeui");
      if (l4) {
        const e4 = yield de(l4, o2({ product: i3, productLabel: c5, releaseDate: u3 }, r3));
        if (e4.valid) return e4;
        if ("wrong-product" !== e4.status) return e4;
      }
      return a5 && "primeui" !== t4 && i3.startsWith(w2) ? de(a5, o2({ product: i3, productLabel: c5, releaseDate: u3 }, r3)) : he(l4 ? "wrong-product" : "missing", c5);
    });
  }, has(t4) {
    const r4 = Q2(t4);
    return !!r4 && (!!pe(e3, t4) || "primeui" !== t4 && r4.startsWith(w2) && !!pe(e3, "primeui"));
  } };
}
var ye2 = null;
function ge2(e3, t3) {
  if (!e3) throw new Error("[@primeui/license-manager] registerLicense: keys argument is required.");
  return ye2 = we3(e3);
}
function me2(e3, t3) {
  if (!ye2) {
    const t4 = J2(e3);
    return Promise.resolve({ valid: false, status: "unconfigured", message: X3("unconfigured", t4) });
  }
  return ye2.verify(e3, t3);
}

// node_modules/primeng/fesm2022/primeng-license.mjs
function showInvalidLicenseBanner() {
  if (typeof document === "undefined") return;
  if (document.getElementById("p-license-host")) return;
  const host = document.createElement("div");
  host.id = "p-license-host";
  host.style.cssText = "all:initial;position:fixed;bottom:16px;right:16px;z-index:2147483647;pointer-events:none;";
  const shadow = host.attachShadow({ mode: "closed" });
  shadow.innerHTML = '<div role="alert" style="padding:10px 14px;background:#991b1b;color:#fff;font:600 13px/1.2 system-ui,-apple-system,sans-serif;border-radius:6px;box-shadow:0 4px 12px rgba(0,0,0,0.2);">Invalid PrimeUI License</div>';
  document.body.appendChild(host);
}

// node_modules/primeng/fesm2022/primeng-config.mjs
var ThemeProvider = class ThemeProvider2 {
  theme = signal(void 0, ...ngDevMode ? [{ debugName: "theme" }] : (
    /* istanbul ignore next */
    []
  ));
  csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : (
    /* istanbul ignore next */
    []
  ));
  isThemeChanged = false;
  document = inject(DOCUMENT);
  baseStyle = inject(BaseStyle);
  styleScope = inject(StyleScope);
  clearCoreStyleNames = () => (this.styleScope.coreStyleNames ?? base_default).clearLoadedStyleNames();
  constructor() {
    this.styleScope.service.on("theme:change", this.clearCoreStyleNames);
    effect(() => {
      this.styleScope.service.on("theme:change", (newTheme) => {
        untracked(() => {
          this.isThemeChanged = true;
          this.theme.set(newTheme);
        });
      });
    });
    effect(() => {
      const themeValue = this.theme();
      if (this.document && themeValue) {
        if (!this.isThemeChanged) this.onThemeChange(themeValue);
        this.isThemeChanged = false;
      }
    });
  }
  ngOnDestroy() {
    this.styleScope.service.off("theme:change", this.clearCoreStyleNames);
    if (this.styleScope.isolated) return;
    base_default.clearLoadedStyleNames();
    $e.clearLoadedStyleNames();
    d2.clear();
  }
  onThemeChange(value) {
    this.styleScope.theme.setTheme(value);
    if (this.document) this.loadCommonTheme();
  }
  loadCommonTheme() {
    var _a, _b, _c, _d;
    if (this.theme() === "none") return;
    if (!this.styleScope.theme.isStyleNameLoaded("common")) {
      const { primitive, semantic, global, style: style2 } = ((_b = (_a = this.baseStyle).getCommonTheme) == null ? void 0 : _b.call(_a)) || {};
      const styleOptions = { nonce: (_d = (_c = this.csp) == null ? void 0 : _c.call(this)) == null ? void 0 : _d.nonce };
      this.baseStyle.load(primitive == null ? void 0 : primitive.css, __spreadValues({
        name: "primitive-variables",
        variables: true,
        raw: true
      }, styleOptions));
      this.baseStyle.load(semantic == null ? void 0 : semantic.css, __spreadValues({
        name: "semantic-variables",
        variables: true,
        raw: true
      }, styleOptions));
      this.baseStyle.load(global == null ? void 0 : global.css, __spreadValues({
        name: "global-variables",
        variables: true,
        raw: true
      }, styleOptions));
      this.baseStyle.loadBaseStyle(__spreadValues({
        name: "global-style"
      }, styleOptions), style2);
      this.styleScope.theme.setLoadedStyleName("common");
    }
  }
  setThemeConfig(config) {
    const { theme, csp } = config || {};
    if (theme) this.styleScope.prime(theme);
    if (theme) this.theme.set(theme);
    if (csp) this.csp.set(csp);
  }
  static \u0275fac = function ThemeProvider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ThemeProvider2)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: ThemeProvider2,
    factory: ThemeProvider2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ThemeProvider, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();
var PrimeNG = class PrimeNG2 extends ThemeProvider {
  ripple = signal(false, ...ngDevMode ? [{ debugName: "ripple" }] : (
    /* istanbul ignore next */
    []
  ));
  platformId = inject(PLATFORM_ID);
  inputVariant = signal(null, ...ngDevMode ? [{ debugName: "inputVariant" }] : (
    /* istanbul ignore next */
    []
  ));
  _verified = signal(null, ...ngDevMode ? [{ debugName: "_verified" }] : (
    /* istanbul ignore next */
    []
  ));
  verified = this._verified.asReadonly();
  overlayAppendTo = signal("self", ...ngDevMode ? [{ debugName: "overlayAppendTo" }] : (
    /* istanbul ignore next */
    []
  ));
  overlayOptions = {};
  csp = signal({ nonce: void 0 }, ...ngDevMode ? [{ debugName: "csp" }] : (
    /* istanbul ignore next */
    []
  ));
  unstyled = signal(void 0, ...ngDevMode ? [{ debugName: "unstyled" }] : (
    /* istanbul ignore next */
    []
  ));
  preflight = signal(false, ...ngDevMode ? [{ debugName: "preflight" }] : (
    /* istanbul ignore next */
    []
  ));
  pt = signal(void 0, ...ngDevMode ? [{ debugName: "pt" }] : (
    /* istanbul ignore next */
    []
  ));
  ptOptions = signal(void 0, ...ngDevMode ? [{ debugName: "ptOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  filterMatchModeOptions = {
    text: [
      FilterMatchMode.STARTS_WITH,
      FilterMatchMode.CONTAINS,
      FilterMatchMode.NOT_CONTAINS,
      FilterMatchMode.ENDS_WITH,
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS
    ],
    numeric: [
      FilterMatchMode.EQUALS,
      FilterMatchMode.NOT_EQUALS,
      FilterMatchMode.LESS_THAN,
      FilterMatchMode.LESS_THAN_OR_EQUAL_TO,
      FilterMatchMode.GREATER_THAN,
      FilterMatchMode.GREATER_THAN_OR_EQUAL_TO
    ],
    date: [
      FilterMatchMode.DATE_IS,
      FilterMatchMode.DATE_IS_NOT,
      FilterMatchMode.DATE_BEFORE,
      FilterMatchMode.DATE_AFTER
    ]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    completed: "Completed",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: [
      "B",
      "KB",
      "MB",
      "GB",
      "TB",
      "PB",
      "EB",
      "ZB",
      "YB"
    ],
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    dayNamesShort: [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    dayNamesMin: [
      "Su",
      "Mo",
      "Tu",
      "We",
      "Th",
      "Fr",
      "Sa"
    ],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "Search results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    fileChosenMessage: "Files",
    noFileChosenMessage: "No file chosen",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      expand: "Expand",
      collapse: "Collapse",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filter: "Filter",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize",
      minimizeLabel: "Minimize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  _setVerified(value) {
    this._verified.set(value);
  }
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  setConfig(config) {
    const { csp, ripple, inputVariant, theme, overlayOptions, translation, filterMatchModeOptions, overlayAppendTo, zIndex, ptOptions, pt, unstyled, preflight } = config || {};
    if (csp) this.csp.set(csp);
    if (overlayAppendTo) this.overlayAppendTo.set(overlayAppendTo);
    if (ripple) this.ripple.set(ripple);
    if (inputVariant) this.inputVariant.set(inputVariant);
    if (overlayOptions) this.overlayOptions = overlayOptions;
    if (translation) this.setTranslation(translation);
    if (filterMatchModeOptions) this.filterMatchModeOptions = filterMatchModeOptions;
    if (zIndex) this.zIndex = zIndex;
    if (pt) this.pt.set(pt);
    if (ptOptions) this.ptOptions.set(ptOptions);
    if (unstyled) this.unstyled.set(unstyled);
    if (preflight !== void 0) this.preflight.set(preflight);
    if (theme) this.setThemeConfig({
      theme,
      csp
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275PrimeNG_BaseFactory = void 0;
    return function PrimeNG_Factory(__ngFactoryType__) {
      return (\u0275PrimeNG_BaseFactory || (\u0275PrimeNG_BaseFactory = \u0275\u0275getInheritedFactory(PrimeNG2)))(__ngFactoryType__ || PrimeNG2);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: PrimeNG2,
    factory: PrimeNG2.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNG, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PRIME_NG_CONFIG = new InjectionToken("PRIME_NG_CONFIG");
var RELEASE_DATE = "2026-11-12";
var isFeature = (value) => Array.isArray(value == null ? void 0 : value.\u0275providers);
function providePrimeNG(...features) {
  const configs = features.filter((feature) => !isFeature(feature));
  const installed = features.filter(isFeature);
  const providers = configs.map((feature) => ({
    provide: PRIME_NG_CONFIG,
    useValue: feature,
    multi: false
  }));
  const initializer = provideAppInitializer(() => {
    const PrimeNGConfig = inject(PrimeNG);
    configs.forEach((feature) => PrimeNGConfig.setConfig(feature));
    const license = configs.map((f2) => f2.license).find(Boolean);
    if (license) ge2({ primeui: license });
    me2("primeui", { releaseDate: RELEASE_DATE }).then((result) => {
      PrimeNGConfig._setVerified(result.valid);
      if (!result.valid) {
        console.warn(`[PrimeUI] ${result.message}`);
        showInvalidLicenseBanner();
      }
    });
  });
  return makeEnvironmentProviders([
    ...providers,
    ...installed.flatMap((feature) => feature.\u0275providers),
    initializer
  ]);
}

export {
  a,
  M,
  xt,
  W,
  wt,
  b,
  rt,
  Gt,
  ue,
  be,
  F,
  G,
  _e,
  zindexutils_default,
  markInstance,
  StyleScope,
  base_default,
  BaseStyle,
  showInvalidLicenseBanner,
  PrimeNG,
  providePrimeNG
};
//# debugId=d9edc5ed-684e-5c90-a2cc-a533165ba91e
//# sourceMappingURL=chunk-3QY534IW.js.map
