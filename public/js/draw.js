// https://gist.github.com/jonobr1/4660204
var hasWebgl = (function() {
  try { return !!window.WebGLRenderingContext
    && !!(document.createElement('canvas').getContext('webgl')
    || document.createElement('canvas').getContext('experimental-webgl'));
  } catch(e) {
    return false;
  }
})();


$(function() {
		Two.Resolution = 24;

          var svg = new Two({
            width: 400,
            height: 400
          }).appendTo(container);
          var webgl = new Two({
            width: 400,
            height: 400,
            type: hasWebgl ? Two.Types.webgl : Two.Types.canvas
          }).appendTo(container);
          var canvas = new Two({
            width: 400,
            height: 400,
            type: Two.Types.canvas
          }).appendTo(container);

          var eyes = [
            makeEye(svg),
            makeEye(webgl),
            makeEye(canvas)
          ];
});

