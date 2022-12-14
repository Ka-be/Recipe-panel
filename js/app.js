// QUANTITY DISPLAY

let ingredientsQuantities = document.getElementsByClassName('quantity');

let quantitiesArray = [].slice.call(ingredientsQuantities); // Create an array from HTML collection

// SET GUEST COUNTER

let guestCounter = 1 // 1 by default
let displayedGuestNumber = document.getElementById('guests--counter-number') 

increment = () => {
	if(guestCounter < 12){ //Max guests : 12
		guestCounter ++;
		console.log(guestCounter);
		displayedGuestNumber.innerText = guestCounter;

		// quantitiesArray.forEach(element => {
		// 	element.innerText = (element.innerText * guestCounter);
		// });
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

