import mouseUp from "./mouseUp";
import { DataC } from "../globalData";

function MouseUpEvent() {
  mouseUp(DataC.canvas, DataC.ctx)();
}

export default MouseUpEvent;
