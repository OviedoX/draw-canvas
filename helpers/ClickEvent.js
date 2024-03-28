import undoAndRedo from "./undoAndRedo";
import { DataC } from "../globalData";

function ClickEventFun(event) {
  const ELEMENT = event.target;

  if (ELEMENT.closest(".btn-return")) {
    const isLeftButton = ELEMENT.closest(".btn-left");
    undoAndRedo(DataC.ctx, !isLeftButton, DataC.canvas);
    return;
  }

  if(ELEMENT.closest('.btn-reset')) {
    DataC.ctx.clearRect(0, 0, DataC.canvas.width, DataC.canvas.height);
    DataC.canvasHst = [];
    DataC.redo = [];
  }
}

export default ClickEventFun;
