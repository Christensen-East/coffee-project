"use strict"

function renderCoffee(coffee) {
	var html = '<div class="coffee">';
	// html += '<p>' + coffee.id + '</p>';
	html += '<h2>' + coffee.name + '</h2>';
	html += '<p>' + coffee.roast + '</p>';
	html += '</div>';

	return html;
}

function renderCoffees(coffees) {
	var html = '';
	for (var i = coffees.length - 1; i >= 0; i--) {
		html += renderCoffee(coffees[i]);
	}
	return html;
}



function updateCoffees(e) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var filteredCoffees = [];

	coffees.forEach(function (coffee) {
		if (coffee.roast === selectedRoast) {
			filteredCoffees.push(coffee);
			console.log("Roast filter fired")
		}
	});

	var moreFilteredCoffees = []


	coffees.forEach(function (coffee) {
		if(coffee.name[0].toLowerCase() === coffeeSearch.value.toLowerCase()) {
			moreFilteredCoffees.push(coffee)
			console.log("Name filter fired");
		}
		});


	if(moreFilteredCoffees.length>=1) {
		document.getElementById('coffees').innerHTML = renderCoffees(moreFilteredCoffees);
	} else {
		document.getElementById('coffees').innerHTML = renderCoffees(filteredCoffees);
	}

}

//


//
// input.addEventListener('input', updateValue)
//
// function updateValue(e) {
// 	log.textContent = e.coffeeSearch.value
// }



// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
	{id: 1, name: 'Light City', roast: 'light'},
	{id: 2, name: 'Half City', roast: 'light'},
	{id: 3, name: 'Cinnamon', roast: 'light'},
	{id: 4, name: 'City', roast: 'medium'},
	{id: 5, name: 'American', roast: 'medium'},
	{id: 6, name: 'Breakfast', roast: 'medium'},
	{id: 7, name: 'High', roast: 'dark'},
	{id: 8, name: 'Continental', roast: 'dark'},
	{id: 9, name: 'New Orleans', roast: 'dark'},
	{id: 10, name: 'European', roast: 'dark'},
	{id: 11, name: 'Espresso', roast: 'dark'},
	{id: 12, name: 'Viennese', roast: 'dark'},
	{id: 13, name: 'Italian', roast: 'dark'},
	{id: 14, name: 'French', roast: 'dark'},
];


var coffeeForm = document.querySelector('#coffees');
coffeeForm.innerHTML = renderCoffees(coffees);

//search
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.forms.coffeeSearch.filter;



submitButton.addEventListener('click', updateCoffees);
