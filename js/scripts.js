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

const itemsSelected = {
    food: null,
    drink: null,
    dessert: null
}

function selectFood(type, id) {
    if (type === "food") {
        foodSelected = id;

        itemsSelected.food = foodSelected;
    }

    if (type === "drink") {
        drinkSelected = id;

        itemsSelected.drink = drinkSelected;
    }

    if (type === "dessert") {
        dessertSelected = id;

        itemsSelected.dessert = dessertSelected;
    }
}

function verifyselectedItens() {
    console.log(itemsSelected)
}