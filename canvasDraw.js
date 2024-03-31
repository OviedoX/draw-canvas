import mouseDown from "./helpers/mouseDown";

function canvasDraw(canvas, ctx) {
  const canvas_coords = canvas.getBoundingClientRect();

  canvas.addEventListener("mousedown", mouseDown(ctx, canvas_coords, canvas));
  canvas.addEventListener("touchstart", mouseDown(ctx, canvas_coords, canvas));
}

export default canvasDraw;
