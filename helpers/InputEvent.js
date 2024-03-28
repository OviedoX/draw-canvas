import { DataC } from "../globalData";

const handlerElemt = {
  color: (element) => {
    DataC.stroke_color = element.value;
  },
  lineWidth: (element) => {
    DataC.line_width = parseInt(element.value);
  },
};

function InputEvent(event) {
  const ELEMENT = event.target,
    handlerType = ELEMENT.dataset.handlerType,
    handler = handlerElemt[handlerType];

  console.log(ELEMENT.dataset);

  if (handler) handler(ELEMENT);
}

export default InputEvent;
