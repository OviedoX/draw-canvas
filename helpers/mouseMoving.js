import draw from "./draw";

const mouseMovig = (ctx, coordsCanvas) => (event) => {
  event.preventDefault();
  let x, y, coords;

  if(event.changedTouches) {
    coords = event.target.getBoundingClientRect();
    x = event.changedTouches[0].pageX;
    y = event.changedTouches[0].pageY;
  } else {
    coords = coordsCanvas
    x = event.offsetX;
    y = event.offsetY;
  }

  draw(x - coords.left, y - coords.top, ctx);
};

export default mouseMovig;
