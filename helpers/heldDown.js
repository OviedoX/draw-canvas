import { DataC } from "../globalData";
import captureCanvas from "./captureCanvas";
import draw from "./draw";
import handlerMove from "./handlerMove";

const heldDown = (ctx, canvas) => (event) => {
  if (event.cancelable) event.preventDefault();

  let useEvent;
  let coords = event.target.getBoundingClientRect();

  if (DataC.redo.length > 0) DataC.redo = [];
  DataC.saveCanvas = captureCanvas(canvas, ctx);
  DataC.canvasHst.push(DataC.saveCanvas);

  if (event.changedTouches) {
    useEvent = "touchmove";
    DataC.initX = event.changedTouches[0].pageX - coords.left;
    DataC.initY = event.changedTouches[0].pageY - coords.top;
  } else {
    useEvent = "mousemove";
    DataC.initX = event.pageX - coords.left;
    DataC.initY = event.pageY - coords.top;
  }

  draw(DataC.initX, DataC.initY, ctx);
  DataC.moveHandler = handlerMove(ctx);
  canvas.addEventListener(useEvent, DataC.moveHandler);
};

export default heldDown;
