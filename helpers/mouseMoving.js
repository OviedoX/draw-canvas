import draw from "./draw";

const mouseMovig = (ctx, coordsCanvas) => (event) => {
  event.preventDefault();
  draw(
    event.offsetX - coordsCanvas.left,
    event.offsetY - coordsCanvas.top,
    ctx
  );
};

export default mouseMovig;
