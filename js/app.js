// IMPORT RECIPE DATA
import recipe from './recipe.json' assert {type : 'json'};
console.log(recipe.ingredients[0].quantity);


//DISPLAY RECIPE TITLE - OK
const recipeTitle = document.querySelector('.title h1');
recipeTitle.innerText = recipe.title;

// DISPLAY INGREDIENTS - OK
const table = document.querySelector('table');

recipe.ingredients.forEach(element => {
	let newRow = table.insertRow();
	newRow.insertCell().innerText = element.name;
	newRow.insertCell().innerText = element.quantity;
	newRow.insertCell().innerText = element.unit;
});




// QUANTITY DISPLAY

let ingredientsQuantities = document.getElementsByClassName("quantity");
const initialQuantities = [].slice.call(ingredientsQuantities); // Create an array from HTML collection
let calculatedQuantities = Array.from(initialQuantities);


// SET GUEST COUNTER

let guestCounter = 1; // 1 by default
let displayedGuestNumber = document.getElementById("guests--counter-number");

increment = () => {
	if (guestCounter < 12) {
		//Max guests : 12
		guestCounter++;
		console.log(guestCounter);
		displayedGuestNumber.innerText = guestCounter;

		// ADD initial quantity to quantity calculated (Not multiply)
		calculatedQuantities.forEach((element, index) => {
			element.innerText = parseFloat(element.innerText) + parseFloat(initialQuantities[index].innerText);
		})
	}
}

decrement = () => {
	if (guestCounter > 1) {
		// Min guests = 1
		guestCounter--;
		console.log(guestCounter);
		displayedGuestNumber.innerText = guestCounter;

		// quantitiesArray.forEach(element => {
		// 	element.innerText = (element.innerText * guestCounter);
		// });
	}
};

// Prbolem at decrement

// quantitiesArray.forEach(element => { // Not worked
// 	element.innerText = element.innerText * guestCounter;
// })
