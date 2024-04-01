import heldDown from "./helpers/heldDown";

function canvasDraw(canvas, ctx) {
  canvas.addEventListener("mousedown", heldDown(ctx, canvas));
  canvas.addEventListener("touchstart", heldDown(ctx, canvas));
}

export default canvasDraw;
