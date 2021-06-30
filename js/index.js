 let color = $(".selected").css("background-color");
let $canvas = $("canvas");
let context = $canvas[0].getContext("2d");
let lastEvent;
let mouseDown = false;

$(".controls").on("click", "li", function () {
    $(this).siblings().removeClass("selected");
    $(this).addClass("selected");
    color = $(this).css("background-color");
});

$("#revealColorSelect").click(function () {
    changeColor();
    $("#colorSelect").toggle();
});

function changeColor() {
    let r = $("#red").val();
    let g = $("#green").val();
    let b = $("#blue").val();
    $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

$("input[type=range]").change(changeColor);

$("#addNewColor").click(function () {
    let $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".controls ul").append($newColor);
    $newColor.click();
});

$canvas.mousedown(function (e) {
    lastEvent = e;
    mouseDown = true;
}).mousemove(function (e) {
    if (mouseDown) {
        context.beginPath();
        context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
        context.lineTo(e.offsetX, e.offsetY);
        context.strokeStyle = color;
        context.stroke();
        lastEvent = e;
    }
}).mouseup(function () {
    mouseDown = false;
}).mouseleave(function () {
    $canvas.mouseup();

}).mouseleave(function () {
    $canvas.mouseup();
});