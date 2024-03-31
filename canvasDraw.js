import mouseDown from "./helpers/mouseDown";

function canvasDraw(canvas, ctx) {
  canvas.addEventListener("mousedown", mouseDown(ctx, canvas));
  canvas.addEventListener("touchstart", mouseDown(ctx, canvas));
}

export default canvasDraw;
