// QUANTITY DISPLAY

let ingredientsQuantities = document.getElementsByClassName('quantity');
const initialQuantities = [].slice.call(ingredientsQuantities); // Create an array from HTML collection
let calculatedQuantities = initialQuantities;

// SET GUEST COUNTER

let guestCounter = 1 // 1 by default
let displayedGuestNumber = document.getElementById('guests--counter-number') 

increment = () => {
	if(guestCounter < 12){ //Max guests : 12
		guestCounter ++;
		console.log(guestCounter);
		displayedGuestNumber.innerText = guestCounter;

// ADD initial quantity to quantity calculated (Not multiply)

		calculatedQuantities.forEach(element => {
			element.innerText = (element.innerText + // initial quantity);
		});
	}
}

decrement = () => {
	if(guestCounter > 1){ // Min guests = 1
		guestCounter --;
		console.log(guestCounter);
		displayedGuestNumber.innerText = guestCounter;

		// quantitiesArray.forEach(element => {
		// 	element.innerText = (element.innerText * guestCounter);
		// });
	} 
}

// Prbolem at decrement

// quantitiesArray.forEach(element => { // Not worked
// 	element.innerText = element.innerText * guestCounter;
// })

