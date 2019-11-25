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
	"Agent Provocateur Agent Provocateur 100 ml"
];
items = {
	"Agent Provocateur Agent Provocateur 100 ml": "В каждом ее движении и жесте – провокация и вызов, откровенная сексуальность и безрассудство! Иногда может казаться, что ей до Тебя дела никакого нет, но это не так! Она пристально следит за тобой, она наблюдает, усыпляя твою бдительность и делая тебя более уверенным и решительным, чтобы ты собрался с духом и сам подошел к ней. Играет Она, сменив вызывающую дерзость на легкую игривость, чтобы заинтриговать тебя еще больше, но и не спугнуть свою «добычу». Смущение и застенчивость – не ее козыри, у нее совсем иная миссия. Она - Провокатор! Композиция: индийский шафран, российский кориандр, магнолия, египетский жасмин, гардения, гаитянский ветивер, кедр, мускус, амбра"
};