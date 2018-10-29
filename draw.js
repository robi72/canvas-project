function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

   
    context.lineWidth = 5;
    context.strokeStyle = "blue";

  
    context.beginPath();
    drawHead(context);
    drawEyes(context);
    drawMouth(context);
    context.stroke();
}

function drawHead(context)  {
    context.arc(310, 310, 300, 0, 2*Math.PI);
}

function drawEyes(context)  {
    context.moveTo(260, 210);
    context.arc(210, 210, 50, 0, 2*Math.PI);

    context.moveTo(460, 210)
    context.arc(410, 210, 50, 0, 2*Math.PI);
}

function drawMouth(context)  {
    context.moveTo();
    context.arc(310, 310, 200, 0.5, 0.8*Math.PI);

}
