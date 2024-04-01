import { DataC } from "./globalData.js";
import canvasDraw from "./canvasDraw.js";
import ClickEventFun from "./helpers/ClickEvent.js";
import { resizeViewCanvas } from "./helpers/resizeCanvas.js";
import InputEvent from "./helpers/InputEvent.js";
import UpEvent from "./helpers/UpEvent.js";

const APP = document.getElementById("app");
DataC.canvas = document.querySelector("canvas");
DataC.ctx = DataC.canvas.getContext("2d", { willReadFrequently: true });

resizeViewCanvas(DataC.canvas, DataC.ctx, APP);
canvasDraw(DataC.canvas, DataC.ctx);

window.addEventListener("resize", () =>
  resizeViewCanvas(DataC.canvas, DataC.ctx, APP)
);

//delegacion de eventos
document.addEventListener("click", ClickEventFun);
document.addEventListener("input", InputEvent);
document.addEventListener("mouseup", UpEvent);
document.addEventListener("touchend", UpEvent);
