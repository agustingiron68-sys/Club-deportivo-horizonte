// Inicia AOS: animaciones que aparecen al hacer scroll.
// Si la persona pidió menos movimiento en su sistema, se desactivan.
AOS.init({
  duration: 700,
  once: true,
  offset: 80,
  disable: function () {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
});
