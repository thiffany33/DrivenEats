const itens = {
    food: [{
        id: 1,
        foodName: "Frango Yin Yang",
        amount: 14.90
    }],
    drink: [{
        id: 4,
        foodName: "Coca cola",
        amount: 4.90
    }],
    dessert: [{
        id: 7,
        foodName: "Pudim",
        amount: 7.90
    }]
}

var foodSelected

const itemsSelected = {
    food: null,
    drink: null,
    dessert: null
}

function selectFood(id) {
    foodSelected = id;

    itemsSelected.food = foodSelected;
}

function selectDrink(id) {
    drinkSelected = id;

    itemsSelected.drink = drinkSelected;
}

function selectDessert(id) {
    dessertSelected = id;

    itemsSelected.dessert = dessertSelected;
}

function verifyselectedItens() {
    console.log(itemsSelected)
}