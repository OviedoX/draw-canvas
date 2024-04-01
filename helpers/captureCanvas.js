function captureCanvas(canvas, context) {
  if (!canvas.width || !canvas.height) return;
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

export default captureCanvas;
