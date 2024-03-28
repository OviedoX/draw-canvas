function captureCanvas(canvas, context) {
  return context.getImageData(0, 0, canvas.width, canvas.height);
}

export default captureCanvas;
