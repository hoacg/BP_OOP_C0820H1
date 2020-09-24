function Circle(x, y, radius, color){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.draw = function (context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius,  Math.PI ,0 );
        context.fillStyle = this.color;
        context.fill();
    }
}


let circle1 = new Circle(100, 50, 20, "red");
let circle2 = new Circle(30, 70, 10, "blue");
let circle3 = new Circle(300, 70, 20, "purple");


let myCanvas = document.getElementById("myCanvas");
let myContext = myCanvas.getContext("2d");

circle1.draw(myContext);
circle2.draw(myContext);
circle3.draw(myContext);
