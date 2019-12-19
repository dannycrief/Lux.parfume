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
	"Montale Pretty Fruity 100ml",1
	"Montale Pure Gold 100ml",2
	"Montale Dark Purple 100 ml",3
	"Новая Заря Тайна парфюм 16 ml",4
	"Bvlgari Omnia Coral 65 ml",5
	"Armand Basi Happy In Red 100 ml",6
	"Armand Basi In Red Eau de Parfum 100 ml",7
	"Armand Basi In Red Blooming Bouquet 100 ml",8
	"Montale Mukhallat 100 ml",9
	"Montale Mango Manga 100 ml",10
	"Montale Wild Pears 100ml",11
	"Antonio Banderas Splash Blue Seduction 100ml",12
	"Antonio Banderas Her Secret 80 ml",
	"Antonio Banderas Her Golden Secret 80 ml",
	"Antonio Banderas Electric Seduction for woman 100 ml",
	"Antonio Banderas Blue Cool Seduction For Women 100 ml",
	"Antonio Banderas Blue Seduction for woman 100",
	"Angel Schlesser So Essential 100 Ml",
	"Angel Schlesser Essential Woman100 ml",
	"Angel Schlesser Femme 50 ml",
	"Agent Provocateur Maitresse Eau Provocateur",
	"Agent Provocateur Maitresse 100 ml",
	"Agent Provocateur L Agent 100 ml",
	"Agent Provocateur Fatale 100 ml"
];

items = {
	"Montale Pretty Fruity 100ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Весенний аромат под названием Pretty Fruity, Монталь адресовал молодым и страстным особам, для которых в самовыражении хороши все средства - будь то короткое облегающее платье или же экстравагантная прическа. Пьер Монталь предлагает изменить свой радикальный подход к покорению мужских сердец и воспользоваться проверенным временем оружием - туалетной водой, которая вселяет в ее обладательницу оптимизм и жизнерадостность. Ведь ничто так не украшает женщину, как задорная улыбка и искренний смех, способный пробудить в мужчине глубоко дремлющий инстинкт охотника. Аромат Pretty Fruity - это по-настоящему весенний взрыв эмоций, чувственный и яркий коктейль, в котором собраны самые свежие и ароматные фрукты. Парфюм Pretty Fruity настолько необычен и оригинален, что его обладательница без особых усилий может привлечь к себе внимание - ее образ, дерзкий и вызывающий, станет соблазнительной ловушкой для многих представителей сильного пола и предметом зависти соперниц.",
	"Montale Pure Gold 100ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Роскошный и дерзкий, томный и жизнеутверждающий, нежный, манящий и обескураживающий – именно таков аромат «Pure Gold», созданный французским парфюмером Пьером Монталем в 2009 году. Для него подлинное золото, мягкое и податливое, воплотилось в божественной цветочной композиции, где свежесть фледоранжа и мандарина соседствуют с яркими оттенками нероли и жасмина, сочной нежностью абрикоса и сладостью ванили. Пьянящие нотки белого мускуса и горьковатая терпкость пачули придают аромату легкую терпкость, соблазнительность и возвышенность.",
	"Montale Dark Purple 100 ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Восточный аромат Dark Purple от Montale, который с первых дней своего существования завоевал огромную аудиторию поклонниц, страстных и стремительных, темпераментных и соблазнительных. Взрывная композиция Montale Dark Purple создает атмосферу интриги и опасности, тайны и полной неизвестности, его обладательница способна на любой шокирующий поступок! Сплетение аромата сливы и сочного апельсина, герани, нежной розы и пачули не дают покоя, а тиковое дерево и красные ягоды, амбра и мускус удачно дополняют аромат и придают изысканности.",
	"Новая Заря Тайна парфюм 16 ml": "Завораживающая композиция парфюма Mystere от бренда Novaya Zarya начинается нежными нотами фиалковых листьев; в «сердце» аромата – страстность розы, сладость пачулей и легкая пряность кориандра; влекущий шлейф создают базовые ноты амбры и древесного мха. Чарующий аромат Mystere от бренда Novaya Zarya подчеркнет загадочность и непредсказуемость женщины.",
	"Bvlgari Omnia Coral 65 ml": "Такое произведения искусства в мире ароматных композиций как Bvlgari Omnia Coral предназначено не только для молодых девушек, но и для зрелых женщин, которые не стесняются быть сексуальными и чувственными, в пределах разумного, конечно же. Этот аромат, вышедший в серии Omnia, таит в себе магию кораллового камня, как и остальные ароматы серии, описывающие характер драгоценных камней.   Этот аромат не простой, открывает композицию свежий бергамот и экзотические ягоды годжи. Как и полагается, в самом центре расположились ноты манящего гибискуса и терпкого, страстного красного граната, а немного нежности и чистоты водяной лилии прибавит легкости букету чувств. В завершении звучит властный кедр и соблазнительный мускус.",
	"Armand Basi Happy In Red 100 ml": "Armand Basi Happy In Red это новая вариация свежести и цитрусового всплеска от создательницы парфюма Сильвии Фишер. Он занимает достойную позицию в ряде шипровых, цветочно-древесных ароматов. Этот аромат насыщен бодрящей музыкой. Потому он предназначен для молодых и действующих дам, которые пританцовывают под музыку проезжающих авто, поют в душе и звучат в унисон с собой под ритмичный всплеск Happy In Red.   Это яркое весеннее настроение начинается с зажигающих нот цитрусов и фруктов. Мандариново-лимонный всплеск очаровывает и закручивает свой танец с розовым перцем. Экзотический и ароматный поток цветов подчеркивает легкость и загадочность своей обладательницы. Древесная база обрамляет уникальность аромата, а свежий ветивер добавляет в него особенный ритм.",
	"Armand Basi In Red Eau de Parfum 100 ml": "Armand Basi In Red Eau de Parfum – аромат для тех, кто желает испытать более ярче и насыщеннее впечатления по сравнению с ароматом In Rеd. Этот тот головокружительный и манящий вихрь эмоций, вызываемый ароматами цветов, утренней росы и запахом свежей землей. Он один из самых насыщенных в коллекции испанского бренда. Он предназначен легкой, уверенной в себе женщине, страстной и открытой.   Верхней нотой открывается жгучий имбирь, немного ярких акцентов добавляют бергамот, кардамон и нотки мандарина. Потоком нежности лучится «сердце» аромата – лист фиалки, чувственная лилия, жасмин и страстная роза. Страстный и особенный характер аромата раскрывается в самом конце благодаря древесным нотам, мускусу и дубовому мху.   Весь этот уникальный образ заключен в флаконе знаменитого дизайнера Pati Nunez. Однако он имеет очевидное отличие – яркий и страстный цвет, что подчеркивает уникальность самого аромата.",
	"Armand Basi In Red Blooming Bouquet 100 ml": "Armand Basi In Red Blooming Bouquet - это одна из интерпретаций так хорошо знакомого In Red от Armand Basi. В его сердце сохранились нотки классического варианта аромата, но весь букет приобрел страсти и дерзости, при этом не теряя изысканности и женственности.    Аромат встречает свою обладательницу верхними нотами листьев фиалки с волной мандарина, которые теснятся с пряностью имбиря и прохладными водными аккордами. Знакомство с ароматом ближе открывает букет цветов из грациозной розы, нежного ландыша, дерзкой гардении и чувственного жасмина. Элегантный шлейф прокладывают мускус и кедр. Эти древесные нотки вносят особую изюминку в эту композицию. Флакон тоже очень схож с классическим вариантом, однако на нем расположились веточки нежных, цветущих деревьев.",
	"Montale Mukhallat 100 ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Mukhallat от Montale – это аромат унисекса для праздника. Никогда не знаешь, что ждет тебя за поворотом. С парфюмом Mukhallat – это, скорее всего, будут яркие разноцветные шарики и веселый клоун, родом из детства, потому что клубнично-ванильное настроение, которое подарит аромат, не оставит равнодушным никого рядом. Веселье и искренняя радость окружающих будут ожидать обладательницу этого аромата юности и романтики. Всегда в жизни должно быть время для праздника!",
	"Montale Mango Manga 100 ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Mango Manga — аромат от Montale. Этот запах подойдет как для романтичных, так и для ветреных особ. Его сочный коктейль из фруктов окунает в мир диких соблазнов и больших желаний. Запах этих духов—это что-то воздушно-неуловимое, которое наполнено тонкими нюансами, неподдающимися мужской логике и недоступные их пониманию. Mango Manga—аромат-загадка, запах чувственности.",
	"Montale Wild Pears 100ml": "Данный аромат изготовлен во Франции на высококачественных компонентах. Аромат представлен в упрощенном флаконе объемом 100 мл.Благодаря высокому содержанию аромаконцентрата - 30%, стойкость ароматов составляет от 18 до 24 часов на коже, а на одежде еще больше.Wild Pears Montale – аромат-унисекс для женщин и мужчин. Он относится к группе фужерных фруктовых ароматов. Этот аромат – новинка 2011 года. Композиция Wild Pears была создана именитым парфюмером, создавшим всемирно известный бренд Montale. Этот аромат продолжает традиции, заложенные Монталем, сочетая экзотику и повседневность и являясь новой вехой в парфюмерном искусстве Европы. Wild Pears пополнил «серебряную» серию ароматов Montale удивительно свежими, яркими духами.",
	"Antonio Banderas Splash Blue Seduction 100ml":  " Antonio Banderas Splash Blue Seduction For Women в очередной раз поражает поклонников Антонио Бандераса. Это лимитированная версия аромата, которая идеально подойдет для весны и лета. Его обладательница получит легкие волны беззаботности и легкомыслия.  На коже этот аромат заиграет волной морского бриза с тянущими нотками цитруса. Разбавляют этот поток свежести волны сладких персиков и груш. Вдоволь насадившись свежестью в верхних нотах, на смену придет ансамбль кокетства цветов и фруктов. Океан сладости и ярких летних эмоций подчеркнет нота Смородины, придавая изящности всем этим забавам. В завершении наступает спокойный почти неслышный шлейф древесных нот и мускуса.",
	"Antonio Banderas Her Secret 80 ml": "Всем известный Antonio Banderas знает все тайны и секреты современных женщин, которые он раскрывает в коллекции ароматов The Secret. Достойным ее продолжением в 2012 году становится Antonio Banderas Her Secret. Он сохранил классические для этой линейки цитрусовые нотки, но автор добавил игривую сладость, чтобы сделать аромат еще больше приближенным к летней поре.    Как и обещалось, классика линейки сохранилась в верхних нотах, что дает с одного вдоха узнать известный бренд. Цитрусовая свежесть смешана с горечью грейпрута апельсина в сочетании с летней спелой земляникой. В самом сердце расположились цветущие тубероза и жасмин. Сладкая ваниль в сочетании с белым кедром обеспечивают стойкость и притягательность в восточном шлейфе аромата. Игру этих нот можно назвать эликсиром любви.",
	"Antonio Banderas Her Golden Secret 80 ml": "Продолжением линии загадочных ароматов Secret становится Antonio Banderas Her Golden Secret. Данная композиция раскрывает женщину с нового ракурса. Он выделяет ее чувственной, покорность и скрытность, не лишая необузданной сексуальности и независимости. Этот аромат предназначен для сильных, и самодостаточных женщин, которые испытывают страсть и поток нежности.    Интенсивный парфюм открывает занавес интригующей комбинацией свежести мандарина и зеленого яблока. Сладкий сочный персик добавляет немного красочности этой композиции. Под вуалью из нот бергамота раскрывается цветочный поток, который подталкивает к действию и поступкам. Усмиряет это рвение сладкая ваниль, бобы тонка и кедр в конечной ноте. Флакон Her Golden Secret имеет колпачок, который напоминает золотой слиток, а под ним разместился ключик к еще не познанным уголкам сознания, куда неизменно приведет этот аромат.",
	"Antonio Banderas Electric Seduction for woman 100 ml": "Новый и яркий фруктово-цитрусовый аромат Antonio Banderas Electric Seduction Blue For Women это тесный союз чувственности и игривости прекрасного пола. Это коктейль хорошего настроения и бодрости средь теплого летнего дня.   Верхние ноты приветствуют игрой вкусов, содержащий фруктовый коктейль, сладкую грушу и юзу с добавлением ломтиков ароматных цитрусов. В самой глубинке аромата переплетаются цветущая гардения и черная смородина. Доводит до совершенства этот аромат стойкий шлейф мускуса и пачулей, оттененных тонкими нотками кедра. Весь этот коктейль свежести и сладости раскрывает возвышенность, гармонию и пьянящий аромат наслаждения.",
	"Antonio Banderas Blue Cool Seduction For Women 100 ml": "Коллекции ароматов Антонио Бандераса поражают количеством оттенков, представленных в них. Однако Blue Cool Seduction For Women это что-то инное, потусторонне, отрывающее новые грани во вселенной. Их нельзя назвать тяжелыми или резкими. Они свежие, обволакивающие и влекущие на подвиги. Этот аромат идеально подойдет для смелых и целеустремленных дам, которые постоянно в движении и стремятся к своей цели.    На волнах морской воды сияют переливами ноты цитруса и сладость груши в самом верху аромата. Этот поток свежести очищает разум, делает все тело легким и невесомым. Готовит к новым подвигам. Далее игра цветов - гордая и самодостаточная роза теснится в одном букете с чувственным и нежным пионом. В завершение композиция из белого кедра и мускуса придает элегантности и чувственности аромату.",
	"Antonio Banderas Blue Seduction for woman 100": "Известный соблазнитель Antonio Banderas показал какой должен быть соблазнительный мужчина с помощью коллекции мужских ароматов, и в 2008 году этот бренд представил свое видение женщины во флаконе Antonio Banderas Blue Seduction For Women. Этот аромат – воплощение чувственности и таинственности, непредсказуемости.    На коже Blue Seduction For Women открывается сладостью груши и дыни, приторность которых убирается благодаря легким и свежим нотам бергамота и листьев фиалки. В средине аромата расцветаем сад цветов из пионов, ландышей, жасмина и розы. Это цветение олицетворяет становление настоящей женщины, ее переход из юности в зрелость. Завершается аромат ярким восточным шлейфом с добавлением капли малинового ликера.",
	"Angel Schlesser So Essential 100 Ml": "Лето – веселое время развлечений и праздников, беззаботная атмосфера отдыха и жизнерадостное настроение каникул. Чтобы солнечные летние дни длились как можно дольше, Анхель Шлессер создает дерзкий фруктовый коктейль так важно. Он дарит ощущение приятной прохлады и свежести, создает ту спокойную и умиротворяющую обстановку летнего полудня, которая располагает к расслабленному отдыху в тени деревьев, к неспешным прогулкам или дружескому чаепитию. Так что важно – с головой в лето! Композиция: киви, гранат, мандарин, нектарин, роза, душистый горошек, пачули, белый мускус",
	"Angel Schlesser Essential Woman100 ml": "Essential — цветочный, древесно-мускусный аромат для настоящих леди. Изысканный аромат наделяет свою обладательницу шармом, подчеркивает ее женственность, элегантность и грациозность. Essential Femme — парфюм, который сообщит окружающим о вашем появлении. Начальная фруктовая свежесть из бергамота и смородины перетекает в чувственное цветочное «сердце» состоящее из благородных представителей флоры: болгарской розы, восточного пиона и деликатной фрезии. Шлейф состоит из земных ароматов сандалового дерева и сухого ветивера, но мускус уравновешивает всю композицию и придает ей нотки уюта и тепла.",
	"Angel Schlesser Femme 50 ml": "Angel Schlesser Femme – безупречная композиция пряности, цветов и фруктов, которая поражает универсальностью, теплотой и пикантностью. Он мягкий и приятный, подходит для любой погоды и абсолютно разным обладательницам.    Желание слышать комплименты, покорять мужчин присуще дамам любого возраста, а с Angel Schlesser Femme это не будет задачей. Легкие, свежие и прозрачные начальные ноты это композиция бергамота, мандарина и нероли. Из сердца аромата чувствуется тонкая древесная струна, окутанная женственным ландышем, а элегантности добавляют красный и зеленый перец. Этот ансамбль завершается сплетенными нотами кардамона, шалфея и белого мускуса, что придает чувственности всей композиции.",
	"Agent Provocateur Maitresse Eau Provocateur": "Все мечты могут стать явью вместе с Agent Provocateur Maitresse Eau Provocateur. Этот нежный уникальный аромат принесет множество новых эмоций.Раскрывается этот аромат таинственностью и страстью загадочного ириса. Он будто завлекает за собой, тем самым создает интригу. Немного тепла добавляет жасмин, приносит умиротворение и помогает привести мысли в порядок. Тонкий, аристократический аромат розы выделяет женственность обладательницы аромата. Нота сердца заключается в свежести зеленого яблока. Этот аромат помогает взбодриться. Комфорт и спокойствие обеспечивают сладковато-медовые нотки мимозы. Глубина эмоций дарит насыщенность сандала, что является кульминацией аромата и разжигает огонь страсти. Оригинальность, легкость, шик и уверенность в своих силах заключает в себе туалетная вода Agent Provocateur Maitresse Eau Provocateur.",
	"Agent Provocateur Maitresse 100 ml": "Аромат Agent Provocateur Maitresse — это нежная свежесть для дам любого возраста. Вместе с ним вы отвлекаетесь от повседневных забот, отрываетесь от земли и парите где-то в облаках из жасмина и лотоса. Для многих девушек это аромат праздника и торжественности, которая приносит радость и всплеск эмоций. Парфюм тёплый, волнующий, естественный. Agent Provocateur Maitresse будет гармонично сочетаться не только с шёлковым платьем и сексуальными чулками, но и с деловым строгим костюмом. Антуража добавляет и оригинальный флакон от Agent Provocateur имеющий форму яйца, которое изготовлено с использованием китайских лаков, лазерной гравировки самого названия и тонкого золотого напыления.",
	"Agent Provocateur L Agent 100 ml": "Agent Provocateur предлагает новый образ «секретного агента», который пробуждает желания, завораживает и притягивает к себе - аромат L’Agent с феромонами! В его композиции собрано все, что нужно для соблазна: эротические нотки мускуса, чувственные цветы и колдовские восточные оттенки. Провокационный L’Agent создан для женщин с сильным характером, для тех, кто владеет всеми тайнами и хитростями соблазнения, и умеет показать свою красоту в правильном свете. Им нужно еще одно приворотное зелье – магический эликсир L’Agent! Композиция: розовый перец, палисандр, иланг-иланг, дягиль, полынь, бурбонская герань, майская роза, жасмин, тубероза, османтус, пачули, сандал, кристаллы амбры, бобы тонка, ладан, мирра, черный мускус.",
	"Agent Provocateur Fatale 100 ml": "Agent Provocateur Fatale - романтическое звучание аромата предназначено для тех женщин, которые влюблены в невинное благоухание сказочных цветов и, в то же время, не могут обойтись без должного внимания со стороны мужчин. Он нежно ласкает кожу, обволакивает теплом и создает ощущение уюта и спокойствия. Роскошный флакон огранен, как драгоценный камень, и украшен расписной стеклянной крышкой. Парфюмерная композиция Agent Provocateur Fatale состоит из нот розового перца и ароматной черной смородины в обрамлении аккордов гардении и манго, мускуса и ванильной орхидеи."

};