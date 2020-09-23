
function Apple (type, color) {

    let anotherVar = "day la bien gi do";
    this.myType = type;
    this.myColor = color;

    this.getInfo = function () {
        return "Đây là táo từ " + this.myType + ". Có màu " + this.myColor;
    }

}

let apple1 = new Apple("New Zeland", "đỏ");
let apple2 = new Apple("Viet Nam", "xanh");

document.write(apple1.getInfo()  + "<br/>");
document.write(apple2.getInfo()  + "<br/>");
