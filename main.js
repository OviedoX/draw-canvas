import { DataC } from "./globalData.js";
import canvasDraw from "./canvasDraw.js";
import ClickEventFun from "./helpers/ClickEvent.js";
import { resizeViewCanvas } from "./helpers/resizeCanvas.js";
import InputEvent from "./helpers/InputEvent.js";
import MouseUpEvent from "./helpers/MouseUpEvent.js";

const APP = document.getElementById("app");

DataC.canvas =  document.querySelector("canvas");
DataC.ctx = DataC.canvas.getContext("2d", { willReadFrequently: true });

canvasDraw(DataC.canvas, DataC.ctx);

resizeViewCanvas(DataC.canvas, DataC.ctx);
window.addEventListener("resize", () => resizeViewCanvas(DataC.canvas, DataC.ctx));

//delegacion de eventos
document.addEventListener("click", ClickEventFun);
document.addEventListener("input", InputEvent);
document.addEventListener("mouseup", MouseUpEvent);
document.addEventListener("touchend", MouseUpEvent)

// window.matchMedia("(orientation: portrait)").addEventListener('change', event => {
//     const portrait = event.matches;
    
//     if (portrait) {
//         canvasDraw(DataC.canvas, DataC.ctx);
//     } else {
//         canvasDraw(DataC.canvas, DataC.ctx);
//     }
// })