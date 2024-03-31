import mouseUp from "./mouseUp";
import { DataC } from "../globalData";

function MouseUpEvent(event) {
  let typeEvent = event.changedTouches ? "touchmove" : "mousemove";
  mouseUp(DataC.canvas, DataC.ctx, typeEvent);
}

export default MouseUpEvent;
