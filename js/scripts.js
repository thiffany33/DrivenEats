const items = [{
        id: 1,
        foodName: "Frango Yin Yang",
        amount: 14.9,
    },
    {
        id: 2,
        foodName: "Picanha Argentina",
        amount: 14.9,
    },
    {
        id: 3,
        foodName: "Linguiça",
        amount: 14.9,
    },
    {
        id: 4,
        foodName: "Coca Cola",
        amount: 14.9,
    },
    {
        id: 5,
        foodName: "Pepsi",
        amount: 14.9,
    },
    {
        id: 6,
        foodName: "Dolly",
        amount: 14.9,
    },
    {
        id: 7,
        foodName: "Pudim",
        amount: 14.9,
    },
    {
        id: 8,
        foodName: "Brownie",
        amount: 14.9,
    },
    {
        id: 9,
        foodName: "Bolo de chocolate",
        amount: 14.9,
    },
];


const itemsSelected = {
    food: null,
    drink: null,
    dessert: null
}

var selectedCardFood = null;
var selectedCardDrink = null;
var selectedCardDessert = null;

function selectFood(type, id) {

    if (type === "food") {
        foodSelected = id;

        itemsSelected.food = foodSelected;

        if (selectedCardFood === null) {
            var card = document.getElementById(`food${id}`);
            card.classList.add("selected");
            selectedCardFood = `food${id}`
        } else {
            var removeCard = document.getElementById(selectedCardFood);
            removeCard.classList.remove("selected")
            var card = document.getElementById(`food${id}`);
            card.classList.add("selected");
            selectedCardFood = `food${id}`
        }
    }

    if (type === "drink") {
        drinkSelected = id;

        itemsSelected.drink = drinkSelected;

        if (selectedCardDrink === null) {
            var card = document.getElementById(`drink${id}`);
            card.classList.add("selected");
            selectedCardDrink = `drink${id}`
        } else {
            var removeCard = document.getElementById(selectedCardDrink);
            removeCard.classList.remove("selected")
            var card = document.getElementById(`drink${id}`);
            card.classList.add("selected");
            selectedCardDrink = `drink${id}`
        }
    }

    if (type === "dessert") {
        dessertSelected = id;

        itemsSelected.dessert = dessertSelected;


        if (selectedCardDessert === null) {
            var card = document.getElementById(`dessert${id}`);
            card.classList.add("selected");
            selectedCardDessert = `dessert${id}`
        } else {
            var removeCard = document.getElementById(selectedCardDessert);
            removeCard.classList.remove("selected")
            var card = document.getElementById(`dessert${id}`);
            card.classList.add("selected");
            selectedCardDessert = `dessert${id}`
        }
    }
}

function verifyselectedItens() {}