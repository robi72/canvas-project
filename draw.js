function draw() {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");

   
    context.lineWidth = 5;
    context.strokeStyle = "blue";
    
    context.beginPath();
    context.arc(310, 310, 300, 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(210, 210, 50, 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(410, 210, 50, 0, 2*Math.PI);
    context.stroke();

    context.beginPath();
    context.arc(310, 310, 200, 0.5, 0.8*Math.PI);
    context.stroke();


    
    
}