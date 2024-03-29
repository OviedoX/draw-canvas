import draw from "./draw";

const mouseMovig = (ctx, coordsCanvas) => (event) => {
  event.preventDefault();

  if(event.changedTouches) {
    draw(
      event.changedTouches[0].pageX - coordsCanvas.left,
      event.changedTouches[0].pageY - coordsCanvas.top,
      ctx
    );
  } else {
    draw(
      event.offsetX - coordsCanvas.left,
      event.offsetY - coordsCanvas.top,
      ctx
    );
  }
};

export default mouseMovig;
