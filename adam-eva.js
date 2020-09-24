
function Apple() {

    this.weight = 10;

    this.decrease = function () {
        if (this.weight > 0)
            this.weight--;
    }

    this.isEmpty = function () {
        return (this.weight === 0);
    }

    this.getWeight = function () {
        return this.weight;
    }
}

let Human = function (name,gender,weight){
    this.name = name;
    this.gender = gender;
    this.weight = weight;
    this.eat=function (apple){
        this.weight++;
        apple.decrease();
    }
}

let apple1 = new Apple();
let adam = new Human("Adam", "male", 100);
let eva  = new Human("Eva", "female", 70);

let adamTurn = true;

let myInterval = setInterval(function () {

    if (adamTurn) {
        adam.eat(apple1);
        document.write("Adam ăn táo. Trọng lượng còn " + apple1.getWeight() + "<br>");
        adamTurn = false;
    } else {
        eva.eat(apple1);
        document.write("Eva ăn táo. Trọng lượng còn " + apple1.getWeight() + "<br>");
        adamTurn = true;
    }

    if (apple1.isEmpty()) {
        clearInterval(myInterval);
    }
}, 1000);

