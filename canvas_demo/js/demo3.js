let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");
context.translate(200,200)
context.beginPath();
context.arc(50, 50, 50, 0, Math.PI*2, false);
context.closePath();
context.fill();
context.clearRect(50, 50, 50, 50);
