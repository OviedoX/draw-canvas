import draw from "./draw";

const mouseMovig = (ctx) => (event) => {
  event.preventDefault();
  let coords = event.target.getBoundingClientRect();

  let {pageX: x, pageY: y} = event.changedTouches ?
  event.changedTouches[0] : event

  draw(x - coords.left, y - coords.top, ctx);
};

export default mouseMovig;
