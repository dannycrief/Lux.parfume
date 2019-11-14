function showNext(){
	if($('#exampleModalScrollable').modal('show')){
		$('.fade').hide();
		$('#exampleModalScrollable').hide();
		$('#exampleModalCenter').modal('show');

		document.getElementById('item').value = nameItems[number];
	}	
}


let nameItems = [ 
	"GIVENCHY L'INTERDIT 80 ML",
	"CHRISTIAN DIOR JOY BY DIOR 90 ML",
	"DOLCE&GABBANA LIGHT BLUE ITALIAN ZEST 100 ML",
	"CHANEL PARIS-DEAUVILLE 125 ML",
	"CHANEL COCO MADEMOISELLE EAU DE",
	"LACOSTE EAU DE LACOSTE L.12.12 POUR LUI EAU",
	"GUERLAIN CHAMPS-ELYSEES 50 ML",
	"CHANEL PARIS-DEAUVILLE 125 ML",
	"NINA RICCI LUNA BLOSSOM 80 ML",
	"BURBERRY MY BURBERRY BLUSH 90 ML",
	"HERMES TWILLY D`HERMES 85 ML",
	"NINA RICCI CHANT D'EXTASE 80 ML"
];

function checkItem(number){
	window.number = number - 1;
}
