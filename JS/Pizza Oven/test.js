function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
    
var crusttype=["deepdish","handtossed","normal dish","flat dish"];
var saucetype=["traditional","marinara","traditional","marinara"];
var cheese=["mozarella","feta","chedar","blue cheese"];
var topping=["pepperoni","mushrooms","olive","ketchup"];
var x= Math.floor(Math.random() * 4);

var s1 = pizzaOven("deep dish", "traditional", ["mozarella"] ,["pepperoni", "sausage"]);
var s2 = pizzaOven("hand tossed","marinara",["mozarella","feta"],["mushrooms","olives","onions"]);
var s3 = pizzaOven("normal dish", "traditional", ["mozarella"] ,["pepperoni", "sausage","mushrooms","onions"]);
var s4 = pizzaOven("flat dish", "marinara", ["mozarella"] ,["tomato", "ketchup"]);
var s5 = pizzaOven(crusttype[x],saucetype[x],cheese[x],topping[x]);


console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
