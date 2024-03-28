import { DataC } from "../globalData";
import captureCanvas from "./captureCanvas";
import draw from "./draw";
import mouseMovig from "./mouseMoving";

const mouseDown = (ctx, coordsCanvas, canvas) => (event) => {
  event.preventDefault();

  DataC.initX = event.offsetX - coordsCanvas.left;
  DataC.initY = event.offsetY - coordsCanvas.top;

  DataC.saveCanvas = captureCanvas(canvas, ctx);
  if (DataC.redo.length > 0) DataC.redo = [];

  DataC.canvasHst.push(DataC.saveCanvas);
  draw(DataC.initX, DataC.initY, ctx);
  DataC.mouseMoveHandler = mouseMovig(ctx, coordsCanvas);
  canvas.addEventListener("mousemove", DataC.mouseMoveHandler);
};

export default mouseDown;
