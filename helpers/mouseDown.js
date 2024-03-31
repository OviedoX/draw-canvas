import { DataC } from "../globalData";
import captureCanvas from "./captureCanvas";
import draw from "./draw";
import mouseMovig from "./mouseMoving";

const mouseDown = (ctx, coordsCanvas, canvas) => (event) => {
  event.preventDefault();

  let useEvent;

  if (DataC.redo.length > 0) DataC.redo = [];
  DataC.saveCanvas = captureCanvas(canvas, ctx);
  DataC.canvasHst.push(DataC.saveCanvas);

  if (event.changedTouches) {
    useEvent = "touchmove";
    let rect = event.target.getBoundingClientRect();
    DataC.initX = event.changedTouches[0].pageX - rect.left;
    DataC.initY = event.changedTouches[0].pageY - rect.top;
  } else {
    useEvent = "mousemove";
    DataC.initX = event.offsetX - coordsCanvas.left;
    DataC.initY = event.offsetY - coordsCanvas.top;
  }

  draw(DataC.initX, DataC.initY, ctx);
  DataC.mouseMoveHandler = mouseMovig(ctx, coordsCanvas);
  canvas.addEventListener(useEvent, DataC.mouseMoveHandler);
};

export default mouseDown;
