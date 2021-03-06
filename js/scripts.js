const items = [{
        id: 1,
        foodName: "Frango Yin Yang",
        amount: 14.9,
    },
    {
        id: 2,
        foodName: "Picanha Argentina",
        amount: 26.35,
    },
    {
        id: 3,
        foodName: "Lasanha",
        amount: 8.9,
    },
    {
        id: 4,
        foodName: "Coca Cola",
        amount: 3.5,
    },
    {
        id: 5,
        foodName: "Pepsi",
        amount: 2.8,
    },
    {
        id: 6,
        foodName: "Guarana",
        amount: 2.8,
    },
    {
        id: 7,
        foodName: "Pudim",
        amount: 6.8,
    },
    {
        id: 8,
        foodName: "Brownie",
        amount: 2.5,
    },
    {
        id: 9,
        foodName: "Bolo de chocolate",
        amount: 6.75,
    },
];

const itemsSelected = {
    food: null,
    drink: null,
    dessert: null,
};

var selectedCardFood = null;
var selectedCardDrink = null;
var selectedCardDessert = null;

var food = [];
var dessert = [];
var drink = [];

var nome = "";
var address = "";

function selectFood(type, id) {
    if (type === "food") {
        foodSelected = id;

        itemsSelected.food = foodSelected;

        if (selectedCardFood === null) {
            var card = document.getElementById(`food${id}`);
            card.classList.add("selected");
            selectedCardFood = `food${id}`;
        } else {
            var removeCard = document.getElementById(selectedCardFood);
            removeCard.classList.remove("selected");
            var card = document.getElementById(`food${id}`);
            card.classList.add("selected");
            selectedCardFood = `food${id}`;
        }
        verifyselectedItens();
    }

    if (type === "drink") {
        drinkSelected = id;

        itemsSelected.drink = drinkSelected;

        if (selectedCardDrink === null) {
            var card = document.getElementById(`drink${id}`);
            card.classList.add("selected");
            selectedCardDrink = `drink${id}`;
        } else {
            var removeCard = document.getElementById(selectedCardDrink);
            removeCard.classList.remove("selected");
            var card = document.getElementById(`drink${id}`);
            card.classList.add("selected");
            selectedCardDrink = `drink${id}`;
        }
        verifyselectedItens();
    }

    if (type === "dessert") {
        dessertSelected = id;

        itemsSelected.dessert = dessertSelected;

        if (selectedCardDessert === null) {
            var card = document.getElementById(`dessert${id}`);
            card.classList.add("selected");
            selectedCardDessert = `dessert${id}`;
        } else {
            var removeCard = document.getElementById(selectedCardDessert);
            removeCard.classList.remove("selected");
            var card = document.getElementById(`dessert${id}`);
            card.classList.add("selected");
            selectedCardDessert = `dessert${id}`;
        }
        verifyselectedItens();
    }
}

function verifyselectedItens() {
    if (
        itemsSelected.food != null &&
        itemsSelected.drink != null &&
        itemsSelected.dessert != null
    ) {
        var btnMoreItens = document.getElementById("btnMoreItens");
        btnMoreItens.classList.add("hidden");

        var btnCloseOrder = document.getElementById("buttomCloseOrder");
        btnCloseOrder.classList.remove("hidden");
    }
}

function closeOrder() {
    nome = prompt("Qual o seu nome ?");
    address = prompt("QUal o seu endere??o ?");

    food = items.find((item) => item.id === itemsSelected.food);
    drink = items.find((item) => item.id === itemsSelected.drink);
    dessert = items.find((item) => item.id === itemsSelected.dessert);

    total = food.amount + drink.amount + dessert.amount;

    var orderScreen = document.getElementById("orderScreen");
    orderScreen.innerHTML = `
    <div class="modalOrder">
        <div class="dataOrder">
            <h1>Confirme seu pedido</h1>
            <div class="dataOrderAmount">
                <p>${food.foodName}</p>
                <p>R$${food.amount.toFixed(2)}</p>
            </div>
            <div class="dataOrderAmount">
                <p>${drink.foodName}</p>
                <p>R$${drink.amount.toFixed(2)}</p>
            </div>
            <div class="dataOrderAmount">
                <p>${dessert.foodName}</p>
                <p>R$${dessert.amount.toFixed(2)}</p>
            </div>
            <div class="dataOrderTotal">
                <p>TOTAL</p>
                <p>R$${total.toFixed(2)}</p>
            </div>
                <div class="dataOrderAmount">
                <p>Nome</p>
                <p>${nome}</p>
            </div>
            <div class="dataOrderAmount">
                <p>Endere??o</p>
                <p>${address}</p>
            </div>
            <button class="btnOk" onclick="sendOrder()">
                Tudo certo, pode pedir!
            </button>
            <button class="btnCancel" onclick="closeModal()">
                Cancelar
            </button>
        </div>
    </div>
    `;
    orderScreen.classList.remove("hidden");
    orderScreen.classList.add("closeOrderScreen");
}

function closeModal() {
    var orderScreen = document.getElementById("orderScreen");
    orderScreen.classList.add("hidden");
    orderScreen.classList.remove("closeOrderScreen");
}

function sendOrder() {
    var text = `
        Ol??, gostaria de fazer o pedido: 
        - Prato: ${food.foodName}
        - Bebida: ${drink.foodName}
        - Sobremesa: ${dessert.foodName}
        Total: R$${total.toFixed(2)}


        Nome: ${nome}
        Endere??o: ${address}
    `;

    var textEncoded = encodeURIComponent(text)

    var phoneNumber = "351939194540"

    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${textEncoded}`);

}