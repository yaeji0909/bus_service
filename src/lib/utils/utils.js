export const getScrollTop = () => {
  if (!document.body) return 0;
  const scrollTop = document.documentElement
    ? document.documentElement.scrollTop || document.body.scrollTop
    : document.body.scrollTop;
  return scrollTop;
};

// export const getScrollBottom = () => {
//   if (!document.body) return 0;
//   const { scrollHeight } = document.body;
//   const { innerHeight } = window;
//   const scrollTop = getScrollTop();
//   return scrollHeight - innerHeight - scrollTop;
// };

// export function updateKey(state, key, value) {
//   return {
//     ...state,
//     [key]: value,
//   };
// }

// export const escapeForUrl = (text) => {
//   return text
//     .replace(
//       /[^0-9a-zA-Zㄱ-힣.\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf -]/g,
//       ""
//     )
//     .trim()
//     .replace(/ /g, "-")
//     .replace(/--+/g, "-");
// };

// export function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// export function loadScript(url) {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.onload = function onload() {
//       resolve(null);
//     };
//     script.onerror = function onerror() {
//       reject();
//     };
//     script.src = url;
//     if (!document || !document.head) return;
//     document.head.appendChild(script);
//   });
// }

// export const ssrEnabled = process.env.REACT_APP_SSR === "enabled";

export const objectToParam = (obj, deleteEmpty) => {
  let param = "?";
  for (let key in obj) {
    if (!obj[key] && deleteEmpty) continue;
    if (param !== "?") {
      param += "&";
    }
    param += key + "=" + obj[key];
  }
  return param === "?" ? "" : param;
};
