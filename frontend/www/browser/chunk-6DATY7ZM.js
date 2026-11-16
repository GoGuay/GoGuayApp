import {
  __async
} from "./chunk-MP5LG4CB.js";

// node_modules/@ionic/core/dist/esm/lock-controller-B-hirT0v.js
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var createLockController = () => {
  let waitPromise;
  const lock = () => __async(null, null, function* () {
    const p = waitPromise;
    let resolve;
    waitPromise = new Promise((r) => resolve = r);
    if (p !== void 0) {
      yield p;
    }
    return resolve;
  });
  return {
    lock
  };
};

export {
  createLockController
};
//# debugId=f2b6cb98-d02c-5540-b203-c313f1c1bea5
//# sourceMappingURL=chunk-6DATY7ZM.js.map
