$(document).ready(function () {
	$("#my-menu").mmenu();
	let API = $("#my-menu").data("mmenu");
	new Mmenu( "#my-menu", {
		"extensions": [
		"pagedim-black",
		"position-right",
		"theme-dark"
		],

		"counters": true,
		"navbars": [
		{
			"position": "top",
			"content": [
			"searchfield"
			]
		}
		]	
	});

	$("#menu-button").click(function () {
		API.open();
	});

});