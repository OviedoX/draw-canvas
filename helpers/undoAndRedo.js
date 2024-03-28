import { DataC } from "../globalData";
import captureCanvas from "./captureCanvas";

function undoAndRedo(ctx, boolean, canvas) {
  if (!boolean) {
    if (DataC.redo.length === 0) return;
    let redoCanvas = DataC.redo.pop();
    DataC.canvasHst.push(captureCanvas(canvas, ctx));
    ctx.putImageData(redoCanvas, 0, 0);
    return;
  }

  if (DataC.canvasHst.length === 0) return;

  let presentCanvas = captureCanvas(canvas, ctx);
  DataC.redo.push(presentCanvas);
  let previusState = DataC.canvasHst.pop();
  ctx.putImageData(previusState, 0, 0);
}

export default undoAndRedo;
