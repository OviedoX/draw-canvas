import { DataC } from "../globalData";

function draw(x, y, ctx) {
  const { initX, initY, line_width, stroke_color } = DataC;

  ctx.beginPath();
  ctx.moveTo(initX, initY);
  ctx.lineWidth = line_width;
  ctx.strokeStyle = stroke_color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(x, y);
  ctx.stroke();

  DataC.initX = x;
  DataC.initY = y;
}

export default draw;
