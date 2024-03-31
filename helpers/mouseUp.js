import { DataC } from "../globalData";

const mouseUp = (canvas, ctx, typeEvent) => {
  canvas.removeEventListener(typeEvent, DataC.mouseMoveHandler);
};

export default mouseUp;
