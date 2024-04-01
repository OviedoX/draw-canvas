import { DataC } from "../globalData";

const Up = (canvas, ctx, typeEvent) => {
  canvas.removeEventListener(typeEvent, DataC.moveHandler);
};

export default Up;
