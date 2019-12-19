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
	"Precision and Grace The Beautiful Mind Series 100 ml", 
	"Escentric Molecules Molecule 03 100 ml",
	"Escentric Molecules Molecule 02 100 ml", 
	"Escentric Molecules Escentric 01 100 ml", 
	"Clinique Happy For Men 100 ml",
	"Escentric Molecules Escentric 02 100 ml",
	"Dupont 58 Avenue Montaigne Pour Homme 100 ml",
	"DSQUARED Potion 100 ml", 
	"Christina Aguilera By Night 75 ml", 
	"Christina Aguilera 75 ml", 
	"DSQUARED Potion Blue Cadet 100 ml", 
	"Dolce & Gabbana 21 Le Fou 100 ml", 
	"Dolce&Gabbana The One Gentleman 100 ml", 
	"Dolce&Gabbana The One Sport 100 ml", 
	"Dolce&Gabbana The One Blue For Men 100 ml", 
	"Dolce&Gabbana The One For Men 100 ml",
	"Dolce&Gabbana Light Blue Pour Homme 125 ml", 
	"Dolce&Gabbana Intenso pour Homme 125 ml",
	"Diesel Only The Brave75 ml",
	"Donna Karan New York City for Men 100 ml",
	"Davidoff Hot Water 100 ml",
	"Davidoff Champion 90 ml",
	"Davidoff The Game 100 ml",
	"Davidoff Champion Energy 90 ml",
	
];

items = {
	"Precision and Grace The Beautiful Mind Series 100 ml": "Аромат балансирует между бодрящими фруктовыми нотами и нежным ароматом цветов, чуть подернутым легкой пудровостью, создавая легкий, парящий ароматический образ. Аромат начинает раскрываться сочной свежестью спелой, медовой груши сорта Вильямс-Спрингс с ее хрустящей сочной мякотью. Нежное облачко пряного розового перца придает вступительным нотам мягкую, почти светящуюся ауру. В сердце композиции звучит цветочно-фруктовый дуэт волнующего терпковато-медового египетского жасмина и сочной, бархатистой сливы. Гармонию их звучания подчеркивает нежный аромат мимозы, игристая фрезия и пряный османтус. Завершает композицию бархатисто сливочный сандал, чьи тонкие, пряные ноты переплетаются с тонкими струйками волнующего теплого мускуса.", 
	"Escentric Molecules Molecule 03 100 ml": "Escentric 03 – новый аромат для мужчин и женщин от немецкого бренда элитной парфюмерии Escentric Molecules, совершившего настоящую революцию в сфере создания парфюмов. Секрет духов от Escentric Molecules заключается в создании на натуральной основе и добавлении в ароматы (до 65%) сложных компонентов, получивших название iso e super. Действие этих веществ подобно сильному феромону. Верхние ноты: имбирь, перец и лайм; ноты сердца: чай, ирис и жасмин; ноты базы: мускус, ветивер, сандаловое дерево, кожа и виргинский кедр.",
	"Escentric Molecules Molecule 02 100 ml": "Molecule 02 – аромат для мужчин и женщин от немецкого бренда элитной парфюмерии Escentric Molecules, совершившего настоящую революцию в сфере создания парфюмов. Секрет духов от Escentric Molecules заключается в создании на натуральной основе и добавлении в ароматы (до 65%) сложных компонентов, получивших название iso e super. Действие этих веществ подобно сильному феромону. Простой, легкий и непритязательный аромат соединил в себе ноты: молекула iso e super, ветивер, фиалка, бузина, гедион, мускус, боронал и амбринол.", 
	"Escentric Molecules Escentric 01 100 ml": "Escentric 01 – аромат для мужчин и женщин от немецкого бренда элитной парфюмерии Escentric Molecules, совершившего настоящую революцию в сфере создания парфюмов. Секрет духов от Escentric Molecules заключается в создании на натуральной основе и добавлении в ароматы (до 65%) сложных компонентов, получивших название iso e super. Действие этих веществ подобно сильному феромону. Композиция запаха соединила в себе ноты: ириса, лимона, мадагаскарского розового перца и iso e super.", 
	"Clinique Happy For Men 100 ml": "Clinique Happy для мужчин от Clinique, созданный в 1998 году - это цитрусовый фужерный аромат. Сочетание зеленый и цитрусовых нот накрывает волной солнца и свежести. Clinique Happy - удивительно позитивный аромат, не признающий чопорности и условностей. Он смывает все границы и разливается морем прекрасного настроения. Отличный выбор для повседневного использования, придает бодрости и дарит прекрасное настроение. Ноты: сочный лайм, прохладные зелёные ноты, сладкий мандарин, зрелые цитрусы, освежающие морские ноты, фрезия, хрупкий жасмин, весенний ландыш, нежная роза, кипарис, мускус, дерево Гуаяк и кедр",
	"Escentric Molecules Escentric 02 100 ml": "Давно блуждаете по просторам магазинов в поисках по-настоящему эксклюзивного парфюма? Поздравляем, ваши поиски увенчались успехом! Только что вы отыскали туалетную воду Escentric 02 от Escentric    Molecules и она – это именно то, что вам нужно. Об уникальности данного аромата говорит его база, представленная молекулой  iso e super. Этот таинственный элемент сочетает в себе запахи сандалового дерева и стойкого мускуса. Сердечный аккорд композиции громко звучит благородными ароматами бузины и ветивера. А вступительная терция радует благоуханием сладкого ириса.   Подойдет ли вам аромат данной туалетной воды? Непременно, если вы успешная и уверенная в себе особа. Если вы всегда видите цель и не замечаете препятствий.",
	"Dupont 58 Avenue Montaigne Pour Homme 100 ml": "Наполненные духом современного города ароматы 58 Avenue Montaigne названы в честь дома ST Dupont, главный бутик которого и расположен на улице, ставшей символом настоящей роскоши не только для Парижа и Франции. Сегодня 58 авеню Монтень во всем, без преувеличения, мире ассоциируется с высочайшей модой, неизменно высочайшим качеством изделий и высочайшим уровнем буржуазной роскоши. Здесь любые понятия — элегантность, романтизм, изящество обретают особое звучание, в разговоре о них приемлемы лишь превосходные степени. Это все относится и к чарующему армату 58 Avenue Montaigne pour Homme. Никогда еще мужской парфюм не был столь роскошным, в нем слышен высочайший стиль во всем — обольщении, самоутверждении самовыражении.", 
	"DSQUARED Potion 100 ml": "Два брата – близнеца из Канады Dan и Dean Caten создали известный современный бренд Dsquared2. Начав свою карьеру в создании коллекций одежды Dsquared2 в 1983 году, они использовали необычный стиль, чем и покорили публику. В 1994 году в Милане состоялся первый показ их работ. Успех к дизайнерам Dsquared2 пришел в результате талантливого сочетания при создании коллекций художественного мастерства, современных тенденций и музыки. Первой поклонницей бренда Dsquared2 стала Мадонна, затем к ней присоединились и другие знаменитости – Рикки Мартин, Нелли Фуртадо. Все коллекции бренда Dsquared2 пронизаны энергией и самонадеянностью молодости, дерзостью и иронией. В 2007 году состоялось открытие в Милане первого бутика успешной торговой марки Dsquared2. Английский стиль в сочетании с итальянским кроем и шикарной богемностью привлекли к бренду Dsquared2 внимание многих известных клиентов. Ароматы марки Dsquared2 наряду с ярко выраженным сексуальным оттенком имеют энергичные, живые, жизнерадостные нотки.", 
	"Christina Aguilera By Night 75 ml": "Таинственный и загадочный, как атмосфера сказочной ночи, парфюм Christina Aguilera by Night от Christina Aguilera рассыпается на коже мириадами звездных искр, очаровывает и окутывает. Пленительный, сладкий и манящий, он создаст вокруг вас неповторимый, завораживающий ореол благоухания. Парфюм был создан в 2009 году только для прекрасных дам. Верхние ноты мелодично рассыпаются акцентами фрезии и миндаля, чью приятную горечь скрадывают аккорды красного яблока и задорного мандарина. Базовый состав парфюма Christina Aguilera by Night от Christina Aguilera: сладковатая ваниль с оттенком благородной амбры", 
	"Christina Aguilera 75 ml": "Есть вещи с приставкой «супер». Парфюм Christina Aguilera от Christina Aguilera – это супер-женский аромат. Он подойдет всем без исключения женщинам: рыжим, блондинкам, брюнеткам, русым; ветреным и серьезным, непоседам и спокойном степенным домоседкам, романтичным натурам и прагматичным леди. Для каждой из них аромат Christina Aguilera от Christina Aguilera раскроется по-своему. Он был выпущен в 2007 году и относится к группе цветочных восточных ароматов. В сердце аромата дрожат мелодией аккорды соблазнительного пиона, сливы, весеннего жасмина и скромного ландыша. Базовый состав искрится акцентами мускуса, сладковатой ванили и благородного сандалового дерева. Шлейф аромата окутывает нотами свежесорванной черной смородины и игривого персика", 
	"DSQUARED Potion Blue Cadet 100 ml": "Dsquared  Potion Blue Cadet - одеколон для джентльменов, разработанный парфюмером Mathilde Bijaoui. «Голубой кадет», как переводится название, предназначен для молодого, обаятельного мужчины. Акцентируя в названии цвет аромата, дизайнеры сделали отсылку к одному из его компонентов - к синему болиголову, терпкому и свежему запаху, подчеркнутому ноткой свежей смородины и древесной коры.", 
	"Dolce & Gabbana 21 Le Fou 100 ml": "Dolce and Gabbana представили новый аромат посвященный карте Таро «шут», назвав его 21 Le Fou. Композиция создает образ веселого, беспечного счастливчика, шагающего по жизни радостно и беззаботно. Игривый, немного дерзкий тон 21 Le Fou предназначен представителям сильного пола, живущим непринужденно и немного взбалмошно. Но где-то в глубине звучит загадочная, таинственная нотка, и не зря, герой-балагур уже задумывается о вечных вопросах бытия. Флакон прозрачного, утолщенного стекла прост и легок, как и все в жизни его обладателя.", 
	"Dolce&Gabbana The One Gentleman 100 ml": "Утончённый, благородный, восточный аромат Dolce&Gabbana The One Gentleman воплотил в себе элегантность и благородство современного джентльмена. Он эффектно подчёркивает лучшие черты характера и создаёт изысканный образ. Идеален для свидания, для торжественных случаев, для моментов, когда вы хотите быть замеченным.  Эта парфюмерная композиция являет собой целое море волнующих и пикантных оттенков. Мягкая, чувственная аура прямо ощущается окружающими. Акцентируется внимание на ощущениях, которые данный запах должен вызывать. Стойкий, манящий и совсем не тяжёлый шлейф следует за вами повсюду, врезаясь в память.   Эталон оптимизма и силы, изящный, уравновешенный, этот аромат напомнит о временах, когда были в почёте джентльмены и леди. Мужское благородство, которого так мало в современном мире – вот основная черта мужчины, который найдёт себя в данном парфюме.", 
	"Dolce&Gabbana The One Sport 100 ml": "Смысл, скрытый в аромате Dolce & Gabbana The One Sport, заключается в идее о том, что спорт и здоровье являются самыми важными элементами в жизни мужчины. Еще с детства всем нам известно, что, как говорится, в здоровом теле – здоровый дух.  Этой простой истине вслед за древними греками и римлянами продолжают следовать многие поколения. Для хорошего внешнего вида и подержания организма в тонусе спорт, конечно же, необходим.  Не менее важным аспектом является также и профессиональный уход за телом. Еще наши предки предавали ему огромное значение. С давних времен нам известны целебные свойства термов, воздух в которых наполнялся определенным спектром естественных хербальных ароматов. ", 
	"Dolce&Gabbana The One Blue For Men 100 ml": " Dolce & Gabbana The One Blue Man это аромат, который прекрасно ляжет на кожу своего обладателя, смешается с натуральным запахом кожи и идеально впишется в образ. The One Blue Man стал первым среди спортивных запахов от модного дома D&G, и сразу же завел себе огромную аудиторию поклонников.  Открывающий аромат розмарин придает Dolce & Gabbana The One Blue Man свежести, энергии и заряда бодрости. Ноты кардамона и секвойи продолжают звучание свежести и легкости, оттеняя их пряностью и древесным ароматом.",
	"Dolce&Gabbana The One For Men 100 ml": "Роскошный аромат туалетной воды Dolce&Gabbana The One for Men давно занял высокие рейтинги в мужской парфюмерии. Экстравагантную композицию, вышедшую вслед за своим женским эквивалентом (The One for Women), буквально за несколько лет начали считать классикой качественной мужской парфюмерии. ", 
	"Dolce&Gabbana Light Blue Pour Homme 125 ml": "Туалетная вода Dolce&Gabbana Light Blue pour Homme – свежий и очень глубокий аромат, насыщенный цитрусовыми и древесными нотками. Парфюмерам удалось создать настоящий фейерверк из яркого и по-настоящему  летнего настроения в сочетании с холодноватой мужской сдержанностью.  Туалетная вода Dolce&Gabbana Light Blue pour Homme как нельзя лучше подходит в качестве аксессуара на вечерних свиданиях с любимой женщиной или дневных деловых встречах. Аромат похож на освежающий ветер, пахнущий странствиями и настоящими приключениями.",
	"Dolce&Gabbana Intenso pour Homme 125 ml": "Pour Homme Intenso – изысканный древесно-ароматический мужской парфюм от знаменитого бренда Dolce&Gabbana. Аромат выходит в 2014 году и является фланкером популярного парфюма «Intenso», выходившего в 1994 году. Новая редакция стала более яркой и современной. Аромат открывается светящимися водными нотами – прохладными и словно текучими. К ним добавляется нежный аромат лаванды и пряная зелень базилика.   Сердечный аккорд дарит удивительно гармоничный аромат древесины южно-американского дерева moepel, нежный, пряный запах свежего сена, дымный табак и запах отрубей. Завершает композицию насыщенный, сладкий травянистый аромат лабданума, пряно-хвойный запах кипариса и бархатисто-сливочный сандал. Парфюм, заключенный в изысканный угольно-черный флакон с золотистым колпачком, является самим воплощением элегантности дома Dolce&Gabbana.",
	"Diesel Only The Brave75 ml": "Only The Brave является удивительным ароматом для мужчин от всемирно известной парфюмерной компании из Италии Diesel. Туалетная вода вышла в 2009 году, а ее разработкой занимались знаменитые мастера Alienor Massenet (Алеонор Массенет), Olivier Polge (Оливье Полж) и Pierre Wargnye (Пьер Варнье), которые взяли за основу семейства восточных пряных запахов.   Дизайнеры Diesel используют в составе аромата Only The Brave такие ноты, как ноты французского лабданума, амбры, стиракса, кожи и мандарина. Аромат является сильным, мужественным и невероятно ярким. Стоит отметить, что ему присуща и чувственная привлекательность, которая вкупе с элегантностью делает его по-настоящему современным.",
	"Donna Karan New York City for Men 100 ml": "Donna Karan DKNY City for Men – неповторимый, стильный парфюм, созданный для настоящих мужчин. Принадлежит он к семейству древесных пряных ароматов. Парфюм был выпущен в свет американским домом моды Donna Karan в 2013 году. Аромат является олицетворением яркой городской жизни Нью-Йорка, с его бурным ритмом, множеством удивительных развлечений и соблазнов.    Композиция аромата Donna Karan DKNY City for Men неповторима, сложна, современна и многогранна,  создана удивительным переплетением верхних аккордов белого перца, кориандра и помело. В сердце легко услышать ноты фиалки и ландыша. Завершается композиционное звучание базовыми аккордами шалфея, махагони и ветивера. ",
	"Davidoff Hot Water 100 ml": "Известный бренд Davidoff представил свой новый аромат Hot Water в 2009 году. Композиция принадлежит к группе ароматов восточные пряные. Hot Water от Davidoff бодрящий, полный энергичности и чувственности парфюм, который способен пробуждать эмоции и разжигать чувства. Сексуальный, влекущий и запоминающийся аромат для истинного мужчины.  Прекрасное сочетание контрастных ингредиентов вошедших в парфюмерную композицию Hot Water от Davidoff придают аромату стойкий, запоминающийся характер. В состав вошел пьянящий абсент, пачули, красный перец, гвоздика, бензойная смола, стиракс и красный базилик.",
	"Davidoff Champion 90 ml": "Новый мужской аромат Champion представил известный бренд Davidoff в 2010 году. Парфюмером является Aurelien Guichard. Композиция относится к группе ароматов древесные фужерные. Сдержанный и немногословный Champion от Davidoff создан для мужчин с чувством достоинства и превосходства. Аромат насыщен нотами мускатного шалфея, бергамота, дубового мха, лимона, кедра и гальбанума.   Флакон духов сделан в форме гантели, что подчеркивает его цельность, мощь и самодостаточность. Champion от Davidoff подарит силу, энергию, веру в себя и позитивный настрой. Композиция включает в себя ноты лимона, бергамота, мускатного шалфея, гальбанума, кедра и дубового мха.",
	"Davidoff The Game 100 ml": "The Game от Davidoff – парфюмерная новинка для мужчин. Относится он к группе мускусных ароматов. Эта новейшая туалетная вода появилась в 2012 году.  Парфюм The Game вдохновлен игрой в покер.   Большинство мужчин обожают азартные игры, а также совершают рискованные поступки. Новая парфюмерная вода бренда Davidoff прекрасно подойдет для азартных и смелых мужчин, иногда рискующих, чтобы выиграть либо проиграть. Такой мужчина легко идет по жизни, будто играючи, имеет успех у женщин и всегда одерживает победу. Темный флакончик этих духов похож на сложенные в столбик фишки из казино. Этот дизайн дополнительно подчеркивает концепцию парфюма, посвященную игре, делающей жизнь авантюрнее и интереснее.   Ожидается, что звучание этой парфюмерной композиции будет контрастным, ярким и запоминающимся, но официально эта информация, а также состав компонентов, держится в секрете. ",
	"Davidoff Champion Energy 90 ml": "Известный бренд Davidoff представил свой мужской аромат Champion Energy в 2011 году. Он относится к группе ароматов фужерные пряные. Автором этой композиции стал Guichard. Champion Energy от Davidoff как и его предшественник, представлен в форме гантели, но теперь белого и серебристого металлических цветов. Открывают парфюмерную композицию энергичные цитрусовые ноты, в виде освежающего бергамота и сочного грейпфрута. В нотах сердца – холодные свежие пряности и гальбанум, а шлейфе – благородный кедр и дубовый мох. Аромат станет прекрасным повседневным подарком для сильных и уверенных в себе мужчин." 
};
