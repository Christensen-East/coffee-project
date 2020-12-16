"use strict"

function renderCoffee(coffee) {
	var html = '<div class="coffee">';
	// html += '<p>' + coffee.id + '</p>';
	html += '<p>' + coffee.name + '</p>';
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

function updateCoffees(e, searchText) {
	e.preventDefault(); // don't submit the form, we just want to update the data
	var selectedRoast = roastSelection.value;
	var roastCoffees = [];
	var searchText = input.value;
	console.log(searchText);
	coffees.forEach(function (coffee) {
		if (coffee.roast === selectedRoast) {
			roastCoffees.push(coffee);
			console.log("Roast filter fired")
		}
	});
	coffees.forEach(function (coffee) {
		if (coffee.name.toLowerCase().includes(searchText.toLowerCase())) {
			coffeeFlavors.push(coffee);
		}});


	if(coffeeFlavors.length>=1) {
		document.getElementById('coffees').innerHTML = renderCoffees(coffeeFlavors);
	} else {
		document.getElementById('coffees').innerHTML = renderCoffees(roastCoffees);

	}

	// document.getElementById('coffees').innerHTML = renderCoffees(roastCoffees);
}

//also search by name here
var coffeeFlavors = []
//

// if (searchText !== undefined && searchText !== "") {
//
// }


var input = document.querySelector('input')
var log = document.getElementById('coffees')


// function updateSearch() {
// 	// console.log(searchText); //filter coffees based on this text
//
//
// 	var fakeEvent = document.createEvent('Event');
// 	fakeEvent.initEvent('build', true, true);
// 	updateCoffees(fakeEvent, searchText);
// }

// input.addEventListener('change', updateSearch)


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


var nameSelection = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');

nameSelection.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);
