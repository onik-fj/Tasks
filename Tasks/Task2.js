// Инженерный калькулятор
function Calculator(num) {
    if (!new.target) {
        let messageError= alert("Не верный вызов, попробуйте снова");
        throw new Error(messageError); 
    }
    
    this.num = num;
    let arrayOperand = [];
    let arrayValue = [];
    arrayOperand.push("Main");
    arrayValue.push(this.num);
    
    this.plus = function (plusValue) {
        arrayOperand.push("+");
        arrayValue.push(plusValue);
        return this;
    };

    this.mines = function (minesValue) {
        arrayOperand.push("-");
        arrayValue.push(minesValue);
        return this;
    };

    this.multiply = function (multiplyValue) {
        arrayOperand.push("*");
        arrayValue.push(multiplyValue);
        return this;
    };

    this.divide = function (divideValue) {
        if(divideValue!==0){
            arrayOperand.push("/");
            arrayValue.push(divideValue);
            return this;
        }
        else{             
            alert("Сейчас на ноль делить нельзя!");
        }
    };

    this.calculate = function () {
        for(let key=0; key<arrayOperand.length; key++){
            if(arrayOperand[key] ==="*"){
                let res=arrayValue[key-1]*arrayValue[key];
                arrayValue.splice(key-1, 2,res);
                arrayOperand.splice(key,1);
                key--;
            }
            if(arrayOperand[key] ==="/"){
                let res=arrayValue[key-1]/arrayValue[key];
                arrayValue.splice(key-1, 2,res);
                arrayOperand.splice(key,1);
                key--;
            }
        }
        for(let key=0; key<arrayOperand.length; key++){
            if(arrayOperand[key] ==="-"){
                let res=arrayValue[key-1]-arrayValue[key];
                arrayValue.splice(key-1, 2,res);
                arrayOperand.splice(key,1);
                key--;
            }
            if(arrayOperand[key] ==="+"){
                let res=arrayValue[key-1]+arrayValue[key];
                arrayValue.splice(key-1, 2,res);
                arrayOperand.splice(key,1);
                key--;
            }
        }
        return arrayValue[0];
    }
};
let calc = new Calculator(2).plus(3).multiply(5).multiply(2).plus(3).mines(10).divide(2).multiply(2).calculate();
console.log(calc);