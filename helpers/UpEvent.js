import { DataC } from "../globalData";
import Up from "./Up";

function UpEvent(event) {
  let typeEvent = event.changedTouches ? "touchmove" : "mousemove";
  Up(DataC.canvas, DataC.ctx, typeEvent);
}

export default UpEvent;
