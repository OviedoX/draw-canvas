import captureCanvas from "./captureCanvas";

export function resizeViewCanvas($canvas, ctx, respecWidth) {
  let imageData = captureCanvas($canvas, ctx);
  $canvas.width = respecWidth.offsetWidth * 0.95 || window.innerWidth * 0.9;
  $canvas.height = window.innerHeight * 0.8;
  ctx.putImageData(imageData, 0, 0);
}
