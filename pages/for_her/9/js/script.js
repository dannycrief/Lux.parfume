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
	"Lancome Attraction 100 ml",
	"Lanvin Jeanne La Rose 100 ml",
	"Lanvin Jeanne La Plume 100 ml",
	"Lanvin Jeanne Lanvin Couture 100 ml",
	"Lancome Climat 14 ml",
	"Lanvin Rumeur 2 Rose 100 ml",
	"Lanvin Marry Me 75 ml",
	"Lancome Magie Noire Туалетная вода 50 ml",
	"Lanvin Eclat de Fleurs 100ml",
	"Lady Gaga Fame Black Fluid 100 ml",
	"Versace Versense 100 ml",
	"Lacoste L.12.12 Pour Elle Magnetic 100 ml",
	"Lacoste L.12.12 Pour Elle Sparkling 100 ml",
	"Lacoste Touch of Pink 90 ml",
	"Lacoste Eau De Lacoste Sensuelle 90 ml",
	"Lacoste Eau de Lacoste L.12.12 Pour Elle Natural 100 ml",
	"Lacoste Eau de Lacoste 90 ml",
	"Lacoste L.12.12 Pour Elle Elegant Lacoste 100 ml",
	"Lacoste Lacoste Pour Femme 90 ml",
	"Kenzo Madly Kenzo! edp 80 ml",
	"L`Eau Par Kenzo ICE Pour Femme Kenzo 100 ml",
	"Kenzo L’Eau 2 Kenzo pour Femme 100 ml",
	"Kenzo Flower Tag 50 ml",
	"Kenzo Flower In The Air 100 ml"
];

items = {
	"Lancome Attraction 100 ml": "Attraction Lancome – женский аромат, относится к мускусным древесно-цветочным. Attraction создан известными парфюмерными мастерами Christian Biecher и Daniela Roche-Andrier в 2003 году. Отлично носиться на вечерних, дневных и романтических встречах. Флакон исполнен в оригинальной форме, цветовая гамма – золото и изящное стекло.    Верхние ноты аромата созданы иланг-иланга, нероли и гарденией, сердечные ноты очерчены розой болгарской, утонченным жасмином, свежим цветом апельсина, нарциссом, ирисом и туберозой, база подчеркнута амброй светлой, кедром, пряной ванилью, мускусом и пачули.",
	"Lanvin Jeanne La Rose 100 ml": "Духи Jeanne La Rose от Lanvin это новая вариация классического аромата. Здесь преимущественно главную роль играет роза, которая приобретает какое-то мистическое очертание. Оно будет рисовать в воображении времена Шекспира. Старинные замки, которые окружены пышными кустами роз.",
	"Lanvin Jeanne La Plume 100 ml": "Jeanne La Plume от Lanvin это новый аромат, который был построен на сочетании сочных, ярких цветочно-фруктовых нот. Эти духи стали третьими в коллекции парфюмера, которые вдохновлены нежностью и легкостью. Парфюмерная вода придется по душе нежным и романтичным натурам, которые парят с легкостью по жизни. В парфюмерную композицию аромата вошли ноты персика, абрикоса, апельсина, фрезии, малины, мускуса и сандалового дерева.",
	"Lanvin Jeanne Lanvin Couture 100 ml": "Относится композиция к семейству цветочных ароматов, к подсемейству древесно-мускусных парфюмов. Лучше всего парфюм подходит для молодых современных женщин. Верхние ноты Jeanne Lanvin Couture от Lanvin представлены малиной, листиками фиалки и утренней росой. Доминирует среди них малина. Она чувствуется уже на первом вдохе. Водяные ноты делают аромат свежим. Сердце парфюма создано с помощью магнолии. Это один из самых чувственных цветков. Также присутствует и пион. Базовые ноты формируют кедр и мускус.",
	"Lancome Climat 14 ml": "Climat Lancome – классический женский аромат, относится к зеленым цветочным. Climat создан домом парфюмерии Lancome в 1967 году. Над оригинальным дизайном флакона работал Serge Mansau. Прекрасно подойдет для вечернего и дневного ношения, а также особенных встреч.   Для романтичных, разносторонних, женственных и элегантных натур. Верхние ноты созданы нарциссом, розой, бергамотом, ландышем, жасмином, персиком и фиалкой; сердечные ноты очерчены туберозой, розмарином и альдегидами; база подчеркнута ветивера, бамбуком, циветтой, мускусом, амброй, бобами Тонка, древесиной сандала. ",
	"Lanvin Rumeur 2 Rose 100 ml": "Rumeur 2 Rose источает из своего сердца чувственный аромат благоухающего розового букета, смешанного с жимолостью и магнолией, ландышем и жасмином. Все это великолепие дивно сочетается с верхними фруктовыми нотами груши и бергамота, лимона и апельсина. А базой аромата стали мускус, пачули и амбра. ",
	"Lanvin Marry Me 75 ml": "Marry Me от Lanvin создан для счастливых в жизни женщин. Таких, которых любит тот единственный и неповторимый мужчина. Парфюмер аромата сделал свою композицию особо торжественной и чувственной, запоминающийся и трогательной, чтобы владелица в любое время смогла вспоминать самые прекрасные моменты в своей жизни. В парфюмерную композицию аромата вошли ноты горького апельсина, фрезии, персика, жасмина, розы, мускуса, виргинского кедра и амбры.",
	"Lancome Magie Noire Туалетная вода 50 ml": "Magie Noire Lancome – классический женский аромат, относится к цветочным восточным. Magie создан парфюмером дома Lancome Gerard Coupy в 1978 году и принадлежит к ароматам серии Magie. Аромат великолепно носиться на свиданиях, праздниках, вечеринках, осенью, весной и зимой.   Начальные ноты созданы розой болгарской, бергамотом, гиацинтом, гальбанумом, малиной, бутонами и листьями смородины черной; сердечные ноты очерчены нарциссом, кедром, ландышем, иланг-иланга, жасмином, корнем ириса, туберозой и медом; база подчеркнута ветивера, мхом дуба, циветтой, мускусом, пачули, амброй, древесиной сандала и специями.",
	"Lanvin Eclat de Fleurs 100ml": " Букет этого аромата захватывает эйфорией и радостью летнего дня в окружении цветущих лугов. Вдохновением для создания композиции стали картины импрессионистов, изображающие цветущий зеленый луг. В качестве прелюдии к звучанию парфюма появляется вкусный сочный аккорд груши, создающий настроение счастья и беззаботного веселья. Прозрачные, тонкие, эфирные ноты вступительного аккорда медленно перетекают в сердце композиции, где, опираясь на лучистое сияние фруктовых нот, звучит игристый аромат фрезии и шелковисто-пряный запах чувственной розы в тонком ореоле аравийского жасмина.",
	"Lady Gaga Fame Black Fluid 100 ml": "Королева эпатажа Lady Gaga представляет свой дебютный аромат Black Fluid Fame. Впервые в мире выпущен парфюм абсолютно черного цвета, который при попадании на кожу становится бесцветным. В композиции Black Fluid Fame, необычной и непредзказуемой, как сама певица, переплелись магия белладонны и нежность жасмина, сладость меда и прохлада ладана. ",
	"Versace Versense 100 ml": "Свежий и опьяняющий парфюм Versense словно сотворила сама природа специально для женщин, которые уверены в себе, энергичны и чувственны. Верхние ноты композиции включают бергамот, инжир и мандарин. Ноты сердца состоят из лилии, жасмина и зеленого кардамона. Ноты базы представлены звучанием сандалового дерева, виргинского кедра, оливкового дерева и мускуса.",
	"Lacoste L.12.12 Pour Elle Magnetic 100 ml": "Восхитительный фруктово-цветочный аромат Eau de Lacoste L.12.12 Pour Elle Magnetic в 2016 году занял исключительное место в парфюмерной линейке, посвященной культовым моделям знаменитого бренда. Нежный и игривый, свежий и теплый, мягкий и пряный аромат напоминает завораживающее колыхание складочек ткани вокруг женских ножек. Цитрусы вспыхивают солнечным сиянием, за которым прячется сладкая мякоть манго. Головокружительные чувственные, шелковистые и пряные, акценты гелиотропа и жасмина смягчаются по-королевски величественным спокойствием бархатистых ноток розы. Финальные аккорды обволакивают теплом темных лесных тонов пачули и солнечным светом ванили.",
	"Lacoste L.12.12 Pour Elle Sparkling 100 ml": "Третий аромат коллекции  - Sparkling - это непосредственный, сладкий парфюм с игривым французским характером, который витает среди свежих и сахарно-цветочных оттенков. Ноты фруктов делают парфюм искрящимся, а база из пряно-древесных акцентов привносит завершенность и изысканность.",
	"Lacoste Touch of Pink 90 ml": "Этот свежий цветочный аромат способен пробудить чувства и создать атмосферу радости. В каждой ноте парфюма чувствуется легкость и нежность. Верхние ноты ароматной композиции представлены апельсином, кориандром, персиком и кардамоном. Ноты сердца состоят из аккордов семян моркови, кориандра, жасмина, листа фиалки и кардамона. Базовые ноты звучат в виде сандалового дерева, ванили, а также мускуса",
	"Lacoste Eau De Lacoste Sensuelle 90 ml": "Парфюм Eau De Lacoste Sensuelle подчеркивает элегантность своей обладательницы, аромат подходит для повседневного использования и создает ощущение приближения вечера с предстоящим веселым праздником. Парфюм подготавливает вас для предстоящей ночи. Аромат является цветочным парфюмом с выразительными гурманскими нотами. Букет композиции строится вокруг насыщенных сладких аккордов, которые дополняются умеренными акцентами розы и нотами янтаря, а также более тонкими ароматами мягких специй и легкими пикантными оттенками.",
	"Lacoste Eau de Lacoste L.12.12 Pour Elle Natural 100 ml": "Первый аромат - Natural - воздушный, легкий, привлекательный и теплый букет с зелеными акцентами, которые подчеркивают обаяние и естественную красоту. Акценты освежающих фруктов привносят в композицию чувственность, а пудровый ирисовый аккорд создает ауру изысканности и легкости. Состоит аромат из начальных тонов листьев малины, ананаса и мандарина. 'Середина' звучания наполнена розовыми нотами, запахами жасмина и ириса. В базе чувствуется кокос, амбра и сандал.",
	"Lacoste Eau de Lacoste 90 ml": "Изысканный, нежный, немного простой и элегантный парфюм придется по душе многим представительницам прекрасного пола. Композиция аромата Lacoste Eau de Lacoste довольно сложна и многогранна, начинает свое звучание верхними аккордами мандарина и белого ананаса. В сердце можно различить ноты жасмина. Завершает композиционное звучание базовый аккорд ванили.",
	"Lacoste L.12.12 Pour Elle Elegant Lacoste 100 ml": "Фруктово-цитрусовые ноты начала композиции объединяются с легким пряным аккордом, а их яркость смягчается нежностью цветов. Древесно-пудровый характер базы привносит теплоту и чувственность. В составе Elegant начальные ноты звучат розовым перцем, цитрусами, бутоном черной смородины. 'Сердечные' аккорды - это ландыши, мимоза и фиалка. Завершающие оттенки - гелиотроп, ветивер и ваниль.",
	"Lacoste Lacoste Pour Femme 90 ml": " Это великолепное парфюмерное творение пробуждает искреннюю женскую непосредственность и приводит окружающих мужчин в полный восторг. Этот аромат от парфюмерного дома Lacoste наполнен возбуждающей мягкостью, удивительной чувственностью и притягательным очарованием. Верхние ноты парфюмерной композиции представлены перцем, фрезией и зеленым яблоком. Ноты сердца состоят из аккордов фиалки, гибискуса, жасмина, гелиотропа и розы. Ноты базы включают сандаловое дерево, лабданум, ладан, кедр и кожу.",
	"Kenzo Madly Kenzo! edp 80 ml": "Предпочтительное время года для использования этого аромата: весна. Madly Kenzo! Kenzo – это дневной аромат, который допускает использование в качестве вечернего. Он подходит жизнерадостным, игривым и независимым женщинам. Стиль одежды: креативный/оригинальный. Начальные ноты: апельсиновый цвет, мадагаскарский розовый перец. Средние ноты: гелиотроп, роза, ладан. Ноты базы: ваниль, мускус, виргинский кедр.",
	"L`Eau Par Kenzo ICE Pour Femme Kenzo 100 ml": "L`Eau Par Kenzo ICE Pour Femme Kenzo – это дневной аромат, уместный для использования в офисе. Он подходит молодым, жизнерадостным и активным девушкам и женщинам. Стиль одежды: повседневный/летний/спортивный. Начальные ноты аромата: голубая мята, лимон, имбирь. Средние ноты: фрезия. Ноты базы: ваниль, египетский ветивер, амбрета.",
	"Kenzo L’Eau 2 Kenzo pour Femme 100 ml": "Это лёгкий, женственный и искрящийся энергией аромат. Очень чистая, освежающая парфюмерная композиция, идеальна для использования в жаркое время года. Парфюм  олицетворяет летние приключения, которые ожидают обладателей парфюма в шумных, больших городах, таких, к примеру, как Рим.",
	"Kenzo Flower Tag 50 ml": "Предпочтительное время года для использования этого аромата: осень. Flower Tag Kenzo – это дневной аромат. Создан для молодых, творческих и свободолюбивых девушек. Начальные ноты: чёрная смородина, мандарин, ревень. Средние ноты: жасмин, ландыш, пион. Ноты базы: ваниль, мускус, чай.",
	"Kenzo Flower In The Air 100 ml": "Легкие духи представляют группу цветочных ароматов, они являются вариацией оригинального парфюма Flower by Kenzo, дебютировавшего в 2000 году, и символизируют свободно парящие в пространстве красные маки. Обладательницы аромата Flower In The Air оптимистичны и страстны, индивидуальны и раскованны, эротичны и прелестны. Композиция Kenzo - Flower In The Air слышна верхними нотами розового пиона и малины; сердечными нотами: гардении, магнолии и розы; базовой нотой белого мускуса."

};