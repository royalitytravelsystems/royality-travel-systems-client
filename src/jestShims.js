// Jest Shim for requestAnimationFrame
// eslint-disable-next-line no-undef
global.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
};
