// IMPORT RECIPE DATA
import recipe from "./recipe.json" assert { type: "json" };

//DISPLAY RECIPE TITLE - OK
const recipeTitle = document.querySelector(".title h1");
recipeTitle.innerText = recipe.title;

// DISPLAY INGREDIENTS - OK
const table = document.querySelector("table");

recipe.ingredients.forEach(element => {
	const newRow = table.insertRow();

	const newIngredient = newRow.insertCell();
	newIngredient.innerText = element.name;

	let newQty = newRow.insertCell();
	newQty.innerText = element.quantity;
	newQty.classList.add('quantity');

	const newUnit = newRow.insertCell();
	newUnit.innerText = element.unit;
});


let displayedQuantities = document.getElementsByClassName('quantity');

// SET GUEST COUNTER - OK
let guestCounter = 1; // 1 by default
const displayedGuestNumber = document.getElementById("guests--counter-number");
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');

btnPlus.addEventListener('click', increment);
btnMinus.addEventListener('click', decrement);


//--------FUNCTIONS-------- OK

function increment(){
	if (guestCounter < 12) {
		//Max guests : 12
		guestCounter++;
		displayedGuestNumber.innerText = guestCounter;

		// Increment quantities
		for (let i=0; i < displayedQuantities.length; i++){
			displayedQuantities[i].innerText = ((displayedQuantities[i].innerText * 1) + recipe.ingredients[i].quantity);
		}
	}
};

function decrement(){
	if (guestCounter > 1) {
		// Min guests = 1
		guestCounter--;
		displayedGuestNumber.innerText = guestCounter;

		// Decrement quantities
		for (let i=0; i < displayedQuantities.length; i++){
			displayedQuantities[i].innerText = ((displayedQuantities[i].innerText * 1) - recipe.ingredients[i].quantity);
		}
	}
};

