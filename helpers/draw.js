import { DataC } from "../globalData";

function draw(x, y, ctx) {
  ctx.beginPath();
  ctx.moveTo(DataC.initX, DataC.initY);
  ctx.lineWidth = DataC.line_width;
  ctx.strokeStyle = DataC.stroke_color;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineTo(x, y);
  ctx.stroke();

  DataC.initX = x;
  DataC.initY = y;
}

export default draw;
