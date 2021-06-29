let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");

context.strokeStyle="rgb(99,88,67)"
context.strokeRect(40,40,100,100)

context.fillStyle="rgb(99,88,67)"
context.fillRect(200,40,100,100)

let text="我爱你中国"
context.font="30px serif"
context.fillText(text,40,200)
context.font="italic 40px serif"
context.strokeText(text,200,200)