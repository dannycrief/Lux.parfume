function showNext(){
	if($('#exampleModalScrollable').modal('show')){
		$('.fade').hide();
		$('#exampleModalScrollable').hide();
		$('#exampleModalCenter').modal('show');

		document.getElementById('item').value = nameItems[number];
	}	
}

function checkItem(number){
	window.number = number - 1;
	document.getElementById('exampleModalScrollableTitle').innerHTML = nameItems[number - 1] + " - реплика";
	document.getElementById('item_description').innerHTML = items[nameItems[number - 1]];
}

let nameItems = [ 
	"", 
	"",
	"", 
	"", 
	"",
	"",
	"", 
	"", 
	"", 
	"", 
	"", 
	"", 
	"", 
	"", 
	"",
	"", 
	"",
	"",
	"",
	"",
	"",
	"",
	"",
	"" 
];

items = {
	"": "", 
	"": "",
	"": "", 
	"": "", 
	"": "",
	"": "",
	"": "", 
	"": "", 
	"": "", 
	"": "", 
	"": "", 
	"": "", 
	"": "", 
	"": "", 
	"": "",
	"": "", 
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "",
	"": "" 
};
