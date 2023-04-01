


const maths = {
    a: 0,
    b: 0,
    values(n1, n2){
        this.a = n1
        this.b = n2
        return this;
    },
    add(){
        console.log(this.a + this.b);
        return this;
    },
    minus(){
        console.log(this.a - this.b);
        return this;
    },
    multiply(){
        console.log(this.a * this.b);
        return this;
    },
    divide(){
        console.log(this.a / this.b);
        return this;
    }

}


maths.values(15, 5)
    .add()
     .minus()
     .multiply()
     .divide()
     .add()
     .add()
     .add()




     const crypto = {}



    