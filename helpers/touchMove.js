const touchMove = (ctx, canvas) => event =>  {
    console.log(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
    console.log(canvas.getBoundingClientRect())
}

export default touchMove;