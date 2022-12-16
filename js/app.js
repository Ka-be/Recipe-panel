// IMPORT RECIPE DATA
import recipe from "./recipe.json" assert { type: "json" };

//DISPLAY RECIPE TITLE
const recipeTitle = document.querySelector(".title h1");
recipeTitle.innerText = recipe.title;

// DISPLAY INGREDIENTS
const table = document.querySelector("table");

recipe.ingredients.forEach(element => {
	const newRow = table.insertRow();

	const newIngredient = newRow.insertCell();
	newIngredient.innerText = element.name;
	newIngredient.classList.add('ingredient')

	const newQty = newRow.insertCell();
	newQty.innerText = element.quantity;
	newQty.classList.add('quantity');

	const newUnit = newRow.insertCell();
	newUnit.innerText = element.unit;
	newUnit.classList.add('unit')
});

// DISPLAY STEPS
const stepList = document.querySelector('.step-list');
recipe.steps.forEach(element => {
	let newStep = stepList.appendChild(document.createElement('li'));
	newStep.textContent = element.step;
})

// SET GUEST COUNTER
let guestCounter = 1; // 1 by default
const displayedGuestNumber = document.getElementById("guests--counter-number");
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');

btnPlus.addEventListener('click', increment);
btnMinus.addEventListener('click', decrement);


//--------FUNCTIONS INCREMENT & DECREMENT-------- 
let displayedQuantities = document.getElementsByClassName('quantity');

function increment(){
	if (guestCounter < 12) {
		//Max guests : 12
		guestCounter++;
		displayedGuestNumber.innerText = guestCounter;

		// Increment quantities (Only if quantity is specified - avoid a NaN)
		for (let i=0; i < displayedQuantities.length; i++){
			if(recipe.ingredients[i].quantity != ""){
				displayedQuantities[i].innerText = ((displayedQuantities[i].innerText * 1) + recipe.ingredients[i].quantity);
			}
		}
	}
};

function decrement(){
	if (guestCounter > 1) {
		// Min guests = 1
		guestCounter--;
		displayedGuestNumber.innerText = guestCounter;

		// Decrement quantities (Only if quantity is specified - avoid a NaN)
		for (let i=0; i < displayedQuantities.length; i++){
			if(recipe.ingredients[i].quantity != ""){
				displayedQuantities[i].innerText = ((displayedQuantities[i].innerText * 1) - recipe.ingredients[i].quantity);
			}
		}
	}
};

