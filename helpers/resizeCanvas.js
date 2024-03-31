import captureCanvas from "./captureCanvas";

export function resizeViewCanvas($canvas, ctx) {
  
  let imageData = captureCanvas($canvas, ctx);
  $canvas.width = window.innerWidth * 0.9;
  $canvas.height = window.innerHeight * 0.7;
  ctx.putImageData(imageData, 0, 0);
}
