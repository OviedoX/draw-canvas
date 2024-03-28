import { DataC } from "../globalData";

const mouseUp = (canvas, ctx) => () => {
  canvas.removeEventListener("mousemove", DataC.mouseMoveHandler);
};

export default mouseUp;
