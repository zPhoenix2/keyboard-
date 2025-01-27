const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));
const textExample = document.querySelector("#textExample");
const symbolsPerMinute = document.querySelector("#symbolsPerMinute");
const errorPercent = document.querySelector("#errorPercent");
const wordsPerMinute = document.querySelector("#wordsPerMinute");
const select = document.querySelector('#select');

const textRu = `Думы мои, думы мои,
Беда мне с вами!
Зачем стали на бумаге
Грустными рядами?..
Почему вас ветер не развеял
В степи, как Пылину?
Почему вас беда не усыпила,
Как своего ребенка?...
По Карии глазки,
По чернии брови
Сердце рвалось, смеялась,
Изливало язык,
Изливало, как умело,
По темной ночи,
За Вишневый сад зеленый,
За ласки девичьи...
За степи и за могилы,
Что на Украине,
Сердце млело, не хотело
Поют на чужбине...
Не хотелось в снегу, в лесу,
Казацкую общину
С булавами, с бунчуками
Собирают на совет.
Пусть души казацкие
В Украйне витают -
Там широко, там весело
От края к краю...
Как та воля, что прошла,
Днепр широкий-море,
Степь и степь, ревущие пороги,
И могилы-горы, -
Там родилась, гарцевала
Казацкая воля;
Там шляхтой, татарами
Заседало поле,
Засевала трупом поле,
Пока не остыло...`;

const textRu_1 =`ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао
пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр
фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж
гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс
йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь
ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ ищ`;

const textRu_2 = `кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т
цушщ? цушщ? цущш? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ?
якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг
йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж йщиж
тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб`;

const textRu_3 = `УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ УКИЮ
СьИх, СьИх, СьИ, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх,
ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО. ИфсО.`;

const textRu_4 =`право; право; право; право; право; право; право; право; право;
родина: родина: родина: родина: родина: родина: родина: родина: 
Россия! Россия! Россия! Россия! Россия! Россия! Россия!
Могучий СССР! Могучий СССР! Могучий СССР! Могучий СССР! Могучий СССР!`;

const textRu_5 = `ав ал ав ал ав ал ав ал ав ал ав ал ав ал ав ал ав ал ав ал
тр пл тр пл тр пл тр пл тр пл тр пл тр пл тр пл тр пл тр пл
жз йч жз йч жз йч жз йч жз йч жз йч жз йч жз йч жз йч жз йч
сх фг сх фг сх фг сх фг сх фг сх фг сх фг сх фг сх фг сх фг
чь чя чь чя чь чя чь чя чь чя чь чя чь чя чь чя чь чя чь чя`;

const textRu_6 = `123пр 123пр 123пр 123пр 123пр 123пр 123пр 123пр 123пр 
йцук7йцук йцук7йцук йцук7йцук йцук7йцук йцук7йцук йцук7йцук 
вмрт;лт вмрт;лт вмрт;лт вмрт;лт вмрт;лт вмрт;лт вмрт;лт вмрт;лт 
бьчщ,г. бьчщ,г. бьчщ,г. бьчщ,г. бьчщ,г. бьчщ,г. бьчщ,г. бьчщ,г.`;

const textRu_7 = `ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 ЛесО1 
Река;5 Река;5 Река;5 Река;5 Река;5 Река;5 Река;5 Река;5 Река;5 
ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?! ПолЯ?!
где-Там где-Там где-Там где-Там где-Там где-Там где-Там где-Там где-Там`;

const textRu_8 = `своБоДа!2 своБоДа!2 своБоДа!2 своБоДа!2 своБоДа!2 своБоДа!2 своБоДа!2
МиР:77 МиР:77 МиР:77 МиР:77 МиР:77 МиР:77 МиР:77 МиР:77 МиР:77
ЕдиНсТвО?! ЕдиНсТвО?! ЕдиНсТвО?! ЕдиНсТвО?! ЕдиНсТвО?! ЕдиНсТвО?! 
борьба;66 борьба;66 борьба;66 борьба;66 борьба;66 борьба;66 борьба;66`;

const textRu_9 = `снеГ;202!в снеГ;202!в снеГ;202!в снеГ;202!в снеГ;202!в
зиМа!55&п зиМа!55&п зиМа!55&п зиМа!55&п зиМа!55&п
моРоз?13:л моРоз?13:л моРоз?13:л моРоз?13:л моРоз?13:л
тёпЛый-чаЙ5! тёпЛый-чаЙ5! тёпЛый-чаЙ5! тёпЛый-чаЙ5! тёпЛый-чаЙ5!`;

const textRu_10 = `ВдохНовеНие1+! ВдохНовеНие1+! ВдохНовеНие1+! ВдохНовеНие1+!
ДвиЖение:35;у ДвиЖение:35;у ДвиЖение:35;у ДвиЖение:35;у
МеЧта!99=ц МеЧта!99=ц МеЧта!99=ц МеЧта!99=ц МеЧта!99=ц
ГармониЯ+Жизнь ГармониЯ+Жизнь ГармониЯ+Жизнь ГармониЯ+Жизнь`;

const textRu_11 = `ДостиЖение!83&и ДостиЖение!83&и ДостиЖение!83&и ДостиЖение!83&и
Успех-РаботА3! Успех-РаботА3! Успех-РаботА3! Успех-РаботА3!
Баланс_СиЛа+89 Баланс_СиЛа+89 Баланс_СиЛа+89 Баланс_СиЛа+89
цель:100%$у цель:100%$у цель:100%$у цель:100%$у цель:100%$у`;

const textRu_12 = `россиЯ-страНа!5 россИя-страНа!5 россИя-страНа!5 россИя-страНа!5
СибирЬ:ТайГа4% СибирЬ:ТайГа4% СибирЬ:ТайГа4% СибирЬ:ТайГа4%
Москва+КремЛь66 Москва+КремЛь66 Москва+КремЛь66 Москва+КремЛь66
Горы,Море!3;ц Горы,Море!3;ц Горы,Море!3;ц Горы,Море!3;ц`;

const textRu_13 = `ДружБа=НавСегДа5 ДружБа=НавСегДа5 ДружБа=НавСегДа5 ДружБа=НавСегДа5
Вера;НадежДа7% Вера;НадежДа7% Вера;НадежДа7% Вера;НадежДа7%
Семья+Любовь3& Семья+Любовь3& Семья+Любовь3& Семья+Любовь3&
Добро!Мир?8;з Добро!Мир?8;з Добро!Мир?8;з Добро!Мир?8;з`;

const textRu_14 = `Лес1,РекА2!п Лес1,РекА2!п Лес1,РекА2!п Лес1,РекА2!п
Природа:СиЛа!9 Природа:СиЛа!9 Природа:СиЛа!9 Природа:СиЛа!9
Воздух+ВоДа7:ц Воздух+ВоДа7:ц Воздух+ВоДа7:ц Воздух+ВоДа7:ц
Огонь;ЗеМля8$ Огонь;ЗеМля8$ Огонь;ЗеМля8$ Огонь;ЗеМля8$`;

const textRu_15 = `кульТура:ТеАтР1!п кульТура:ТеАтР1!п кульТура:ТеАтР1!п
история+ВреМя2?ц история+ВреМя2?ц история+ВреМя2?ц история+ВреМя2?ц
НауКа?ТехнолоГии3! НауКа?ТехнолоГии3! НауКа?ТехнолоГии3!
ИскуСство;МуЗыКа4+д ИскуСство;МуЗыКа4+д ИскуСство;МуЗыКа4+д`;

const textEn =`One, two,
Buckle my shoe;
Three, four,
Knock at the door;
Five, six,
Pick up sticks;
Seven, eight,
Lay them straight:
Nine, ten,
A big fat hen;
Eleven, twelve,
Dig and delve;
Thirteen, fourteen,
Maids a-courting;
Fifteen, sixteen,
Maids in the kitchen;
Seventeen, eighteen,
Maids a-waiting
Nineteen, twenty,
My plate's empty`;

const textEn_1 =`fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj
gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh
vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu
wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi
bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn`;

const textEn_2 =`qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm
woei woei woei woei woei woei woei woei woei woei woei woei woei woei
cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla
zbros zbros zbros zbros zbros zbros zbros zbros zbros zbros zbros`;

const textEn_3 =`EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO
Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq,
jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl.
BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU><`;

const textEn_4 = `QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr QwEr
TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi TyUi
PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD PoAsD
FgHl: FgHl: FgHl: FgHl: FgHl: FgHl: FgHl: FgHl: FgHl: FgHl:`;

const textEn_5 = `kLm> kLm> kLm> kLm> kLm> kLm> kLm> kLm> kLm> kLm> kLm>
XzCp? XzCp? XzCp? XzCp? XzCp? XzCp? XzCp? XzCp? XzCp? XzCp?
AvBn! AvBn! AvBn! AvBn! AvBn! AvBn! AvBn! AvBn! AvBn! AvBn!
QtYs# QtYs# QtYs# QtYs# QtYs# QtYs# QtYs# QtYs# QtYs# QtYs#`;

const textEn_6 = `RuNk1 RuNk1 RuNk1 RuNk1 RuNk1 RuNk1 RuNk1 RuNk1 RuNk1
WiEr2, WiEr2, WiEr2, WiEr2, WiEr2, WiEr2, WiEr2, WiEr2, WiEr2
QpZm<3 QpZm<3 QpZm<3 QpZm<3 QpZm<3 QpZm<3 QpZm<3 QpZm<3
FgHl?4 FgHl?4 FgHl?4 FgHl?4 FgHl?4 FgHl?4 FgHl?4 FgHl?4`;

const textEn_7 = `TrUi#56 TrUi#56 TrUi#56 TrUi#56 TrUi#56 TrUi#56 TrUi#56
MnOp$78 MnOp$78 MnOp$78 MnOp$78 MnOp$78 MnOp$78 MnOp$78
YvCx<90 YvCx<90 YvCx<90 YvCx<90 YvCx<90 YvCx<90 YvCx<90
JkLp>12 JkLp>12 JkLp>12 JkLp>12 JkLp>12 JkLp>12 JkLp>12`;

const textEn_8 = `ErTy!43 ErTy!43 ErTy!43 ErTy!43 ErTy!43 ErTy!43 ErTy!43
UiOp?56 UiOp?56 UiOp?56 UiOp?56 UiOp?56 UiOp?56 UiOp?56
AsDf:78 AsDf:78 AsDf:78 AsDf:78 AsDf:78 AsDf:78 AsDf:78
JkLq+99 JkLq+99 JkLq+99 JkLq+99 JkLq+99 JkLq+99 JkLq+99`;

const textEn_9 = `XpYr>21! XpYr>21! XpYr>21! XpYr>21! XpYr>21! XpYr>21!
QzLc:34& QzLc:34& QzLc:34& QzLc:34& QzLc:34& QzLc:34&
AvBn?45$ AvBn?45$ AvBn?45$ AvBn?45$ AvBn?45$ AvBn?45$
TyUi=67^ TyUi=67^ TyUi=67^ TyUi=67^ TyUi=67^ TyUi=67^`;

const textEn_10 = `WqEr?67&> WqEr?67&> WqEr?67&> WqEr?67&> WqEr?67&> WqEr?67&>
TyOp!89;# TyOp!89;# TyOp!89;# TyOp!89;# TyOp!89;# TyOp!89;#
UiDf^12%= UiDf^12%= UiDf^12%= UiDf^12%= UiDf^12%= UiDf^12%=
JkLm$45^# JkLm$45^# JkLm$45^# JkLm$45^# JkLm$45^# JkLm$45^#`;

const textEn_11 = `AsXc>90!& AsXc>90!& AsXc>90!& AsXc>90!& AsXc>90!&
RtYp<12^# RtYp<12^# RtYp<12^# RtYp<12^# RtYp<12^# RtYp<12^#
JkLm%34&> JkLm%34&> JkLm%34&> JkLm%34&> JkLm%34&> JkLm%34&>
QzXv:56*^ QzXv:56*^ QzXv:56*^ QzXv:56*^ QzXv:56*^ QzXv:56*^`;

const textEn_12 = `WqEr$12>!% WqEr$12>!% WqEr$12>!% WqEr$12>!%
UiTy^34?&< UiTy^34?&< UiTy^34?&< UiTy^34?&< UiTy^34?&<
XpYz#56=^> XpYz#56=^> XpYz#56=^> XpYz#56=^> XpYz#56=^>
JkLm*78:$% JkLm*78:$% JkLm*78:$% JkLm*78:$% JkLm*78:$%`;

const textEn_13 = `QwEr^12*># QwEr^12*># QwEr^12*># QwEr^12*># QwEr^12*>#
TyOp:34%^! TyOp:34%^! TyOp:34%^! TyOp:34%^! TyOp:34%^!
UiDf$56?&< UiDf$56?&< UiDf$56?&< UiDf$56?&< UiDf$56?&<
JkLm+78:#> JkLm+78:#> JkLm+78:#> JkLm+78:#> JkLm+78:#>`;

const textEn_14 = `RtYp>12$#& RtYp>12$#& RtYp>12$#& RtYp>12$#&
XpYz^34*!% XpYz^34*!% XpYz^34*!% XpYz^34*!% XpYz^34*!%
QzXc=56>^* QzXc=56>^* QzXc=56>^* QzXc=56>^* QzXc=56>^*
JkLm:78%$@ JkLm:78%$@ JkLm:78%$@ JkLm:78%$@ JkLm:78%$@`;

const textEn_15 = `WqEr^12*>#@ WqEr^12*>#@ WqEr^12*>#@ WqEr^12*>#@
UiTy:34&%^! UiTy:34&%^! UiTy:34&%^! UiTy:34&%^!
XpYz$56=*!^ XpYz$56=*!^ XpYz$56=*!^ XpYz$56=*!^
JkLm+78:#&>@ JkLm+78:#&>@ JkLm+78:#&>@ JkLm+78:#&>@`;







const keyHide = document.querySelector(".key-hide");
const textShow = document.querySelector(".texterea");
const texterea = document.querySelector("#text");
const button = document.querySelector("#submit");
const el = document.querySelector("#optionText");
const darckT = document.querySelector(".darck-t");
const lightT = document.querySelector(".light-t");
const clr = document.querySelectorAll(".clr");
const resultsTitle = document.querySelectorAll(".results-title");
const r_s_t_1 = document.querySelectorAll(".r_s_t-1");
const r_s_t_2 = document.querySelectorAll(".r_s_t-2");
const pHolder=document.querySelector("#input");


r_s_t_1.forEach(element => {
	element.style='display:inline-block;';
});

// Стили для светлой/темной темы сайта
document.querySelector('.darck-t').onclick = function() {
	darckT.style='display:none;';
	lightT.style='display:block; border-bottom-color:#8899a6;';
	document.body.style='background:#141d26';
	clr.forEach(element => {
		element.style.color='#8899a6';
	});
	select.style='color: #8899a6; background: content-box; border-color: #8899a6;';
	input.style='background: #1b2836; color:#8899a6';
	texterea.style='background: #1b2836; color:#8899a6';
	button.style='color:white';

	document.querySelector('#textExample').style='color:#8899a6';

	document.querySelector(".text_error").classList.add("darckT");
}
document.querySelector('.light-t').onclick = function() {
	darckT.style='display:block; border-bottom-color:#000;';
	lightT.style='display:none';
	document.body.style='background:none';
	clr.forEach(element => {
		element.style.color='black';
	});
	select.style='color: black; border-color: groove;';
	input.style='background: none; color:#000';
	texterea.style='background: none; color:#000';
	button.style='color:black';

	document.querySelector('#textExample').style='color:#000';

	document.querySelector(".text_error").classList.remove("darckT");
}


// Проверка на выбранный язык и уровень
select.addEventListener("change", function() {

	function textHide() {
		keyHide.style.display = "block";
		textShow.classList.add("text-hide");
	}
	function displayResultRU() {
		r_s_t_1.forEach(element => {
			element.style='display:inline-block;';
		});
		r_s_t_2.forEach(element => {
			element.style='display:none;';
		});
		pHolder.placeholder="Поле для ввода текста";
	}
	function displayResultEN() {
		r_s_t_1.forEach(element => {
			element.style='display:none;';
		});
		r_s_t_2.forEach(element => {
			element.style='display:inline-block;';
		});
		pHolder.placeholder="Text input field";
	}

	let party = createParty('');
	const element = document.querySelector('#select');
	if (element.value === "English") {
		party = createParty(textEn);
		textHide();
		displayResultEN();
	} if (element.value === "1_e") {
		party = createParty(textEn_1);
		textHide();
		displayResultEN();
	} if (element.value === "2_e") {
		party = createParty(textEn_2);
		textHide();
		displayResultEN();
	} if (element.value === "3_e") {
		party = createParty(textEn_3);
		textHide();
		displayResultEN();
	} if (element.value === "4_e") {
		party = createParty(textEn_4);
		textHide();
		displayResultEN();
	} if (element.value === "5_e") {
		party = createParty(textEn_5);
		textHide();
		displayResultEN();
	} if (element.value === "6_e") {
		party = createParty(textEn_6);
		textHide();
		displayResultEN();
	} if (element.value === "7_e") {
		party = createParty(textEn_7);
		textHide();
		displayResultEN();
	} if (element.value === "8_e") {
		party = createParty(textEn_8);
		textHide();
		displayResultEN();
	} if (element.value === "9_e") {
		party = createParty(textEn_9);
		textHide();
		displayResultEN();
	} if (element.value === "10_e") {
		party = createParty(textEn_10);
		textHide();
		displayResultEN();
	} if (element.value === "11_e") {
		party = createParty(textEn_11);
		textHide();
		displayResultEN();
	} if (element.value === "12_e") {
		party = createParty(textEn_12);
		textHide();
		displayResultEN();
	} if (element.value === "13_e") {
		party = createParty(textEn_13);
		textHide();
		displayResultEN();
	} if (element.value === "14_e") {
		party = createParty(textEn_14);
		textHide();
		displayResultEN();
	} if (element.value === "15_e") {
		party = createParty(textEn_15);
		textHide();
		displayResultEN();
	}if (element.value === "en") {
		// textHide();
		displayResultEN();
	}


	if (element.value === "Русский"){
		party = createParty(textRu);
		textHide();
		displayResultRU();
	} if (element.value === "1_у"){
		party = createParty(textRu_1);
		textHide();
		displayResultRU();
	} if (element.value === "2_у"){
		party = createParty(textRu_2);
		textHide();
		displayResultRU();
	} if (element.value === "3_у"){
		party = createParty(textRu_3);
		textHide();
		displayResultRU();
	} if (element.value === "4_у"){
		party = createParty(textRu_4);
		textHide();
		displayResultRU();
	} if (element.value === "5_у"){
		party = createParty(textRu_5);
		textHide();
		displayResultRU();
	} if (element.value === "6_у"){
		party = createParty(textRu_6);
		textHide();
		displayResultRU();
	} if (element.value === "7_у"){
		party = createParty(textRu_7);
		textHide();
		displayResultRU();
	} if (element.value === "8_у"){
		party = createParty(textRu_8);
		textHide();
		displayResultRU();
	} if (element.value === "9_у"){
		party = createParty(textRu_9);
		textHide();
		displayResultRU();
	} if (element.value === "10_у"){
		party = createParty(textRu_10);
		textHide();
		displayResultRU();
	} if (element.value === "11_у"){
		party = createParty(textRu_11);
		textHide();
		displayResultRU();
	} if (element.value === "12_у"){
		party = createParty(textRu_12);
		textHide();
		displayResultRU();
	} if (element.value === "13_у"){
		party = createParty(textRu_13);
		textHide();
		displayResultRU();
	} if (element.value === "14_у"){
		party = createParty(textRu_14);
		textHide();
		displayResultRU();
	} if (element.value === "15_у"){
		party = createParty(textRu_15);
		textHide();
		displayResultRU();
	}if (element.value === "ru") {
		// textHide();
		displayResultRU();
	}
	
	if (element.value === "text"){
		keyHide.style.display = "none";
		textShow.classList.remove("text-hide");		

		function click(){
			if (texterea.value!='') {
				party = createParty(texterea.value);
				textHide();
				viewUpdate();
			}else{
				document.querySelector(".container_text_error").classList.add("block");
			}	
		}
		button.addEventListener('click', click, false);

		document.querySelector(".btn-close").addEventListener('click', function(){
			document.querySelector(".container_text_error").classList.remove("block");
		}, false);
	}
	

// Вызов функции, вызывающей 2 метода при нажатии клавиши и отжиме
// let l = 0;

init();

function init() {
	input.addEventListener("keydown", keydownHandler);
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

// Функция что прорабатывает нажать клавиши
function keydownHandler(event) {
	event.preventDefault();
	// const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	// получение нажатой клавиши
	const letter = letters.filter((x) => x.dataset.letters.includes(event.key));
	
	let key = event.key.toLowerCase();
	
	if (key === " ") {
		key = "space";
		press(" ");
	}

	if (key === "enter") {
		press("\n");
	}
	
	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
		return;
	}

	console.warn("Не известный вид клавиши.", event);
	if (letter) {
		if (element.value === "Русский" || element.value === "1_у" || element.value === "2_у" || element.value === "3_у" || element.value === "4_у") {	
			if(event.key === ',' || event.key === '.'){
				letter.forEach(function(spec, i) {
					if (i==1) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
			if(event.key === ';' || event.key === ':' || event.key === '?'){
				letter.forEach(function(spec, i) {
					if (i==0) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
		}
		if (element.value === "English" || element.value === "1_e" || element.value === "2_e" || element.value === "3_e" || element.value === "4_e"){
			if(event.key === ',' || event.key === '.'){
				letter.forEach(function(spec, i) {
					if (i==0) {
						spec.classList.add("pressed");
					} } );
				press(event.key);
				return;
			}
			if(event.key === ';' || event.key === ':' || event.key === '"' || event.key === '?'){
				letter.forEach(function(spec, i) {
					if (i==1) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
		}
		letter.forEach((spec) => spec.classList.add("pressed"));
		press(event.key);
		return;
	}
	// if (letter) {
	// 	letter.classList.add("pressed");
	// 	press(event.key);
	// 	return;
	// }
}

// Функция что прорабатывает клавиши, которые были отпущены после их нажатия
function keyupHandler(event) {
	event.preventDefault();

	const letter = letters.filter((x) => x.dataset.letters.includes(event.key));

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
		return;
	}

	if (letter) {
		letter.forEach((spec) => spec.classList.remove("pressed"));

		return;
	}	
}

function createParty(text) {
	const party = {
		text,
		strings: [],
		maxStringLength: 70,
		maxShowStrings: 1,
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		started: false,

		statisticFlag: false,
		timerCounter: 0,
		startTimer: 0,
		errorCounter: 0,
		commonCounter: 0,
	};

	party.text = party.text.replace(/\n/g, "\n ");
	const words = party.text.split(" ");

	// Цикл для проработки напечатанной строки и перехода на новый, в строке ввода
	let string = [];
	for (const word of words) {
		const newStringLength =
			[...string, word].join(" ").length + !word.includes("\n");
		if (newStringLength > party.maxStringLength) {
			party.strings.push(string.join(" ") + " ");
			string = [];
		}

		string.push(word);

		if (word.includes("\n")) {
			party.strings.push(string.join(" "));
			string = [];
		}
	}

	if (string.length) {
		party.strings.push(string.join(" "));
	}

	return party;
}

// Функция в которой происходит расчет ошибок и отображение ошибок в строке
function press(letter) {
	party.started = true;

	if (!party.statisticFlag) {
		party.statisticFlag = true;
		party.startTimer = Date.now();
	}

	const string = party.strings[party.currentStringIndex];
	const mustLetter = string[party.currentPressedIndex];
	let psl = party.strings.length-1;
	
	if (letter === mustLetter) {
		party.currentPressedIndex++;
		
		if (string.length <= party.currentPressedIndex) {
			party.currentPressedIndex = 0;
			if (party.currentStringIndex === psl) {
				const doneClass = document.querySelector('.text');
				const finishClass =document.querySelector('.textFinish');
				doneClass.classList.add('hide');
				finishClass.classList.remove('show');
			}else{
				party.currentStringIndex++;
			}
			party.statisticFlag = false;
			party.timerCounter = Date.now() - party.startTimer;
			party.errors.length=0;
		}
	} else if (!party.errors.includes(mustLetter)) {
		party.errors.push(mustLetter);
		party.errorCounter++;
	}
	party.commonCounter++;

	viewUpdate();
}

// Функция для отображения текста, который вы хотите ввести
function viewUpdate() {
	const string = party.strings[party.currentStringIndex];
	const showedStrings = party.strings.slice(
		party.currentStringIndex,
		party.currentStringIndex + party.maxShowStrings
	);

		// console.log(showedStrings);
		
	const div = document.createElement("div");
	const firstLine = document.createElement("div");
	firstLine.classList.add("lineS");
	div.append(firstLine);

	const done = document.createElement("span");
	done.classList.add("done");
	done.textContent = string.slice(0, party.currentPressedIndex);
	
	firstLine.append(
		done,
		...string
			.slice(party.currentPressedIndex)
			.split("")
			.map((letter) => {
				// if (letter === " ") {
				// 	return "·";
				// }

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;	
				}

				return letter;
			})
	);

	for (let i = 1; i < showedStrings.length; i++) {
		const line = document.createElement("div");
		line.classList.add("lineS");
		div.append(line);

		line.append(
			...showedStrings[i].split("").map((letter) => {
				// if (letter === " ") {
				// 	return "·";
				// }

				if (letter === "\n") {
					return "¶";
				}

				// if (party.errors.includes(letter)) {
				// 	const errorSpan = document.createElement("span");
				// 	errorSpan.classList.add("hint");
				// 	errorSpan.textContent = letter;
				// 	return errorSpan;
				// }
				return letter;
			})
		);
	}

	// Методы отображения статистики пользователя
	textExample.innerHTML = "";
	textExample.append(div);

	input.value = string.slice(0, party.currentPressedIndex);

	const wordsMinute = string.match(/[^\s]+/g);

	if (!party.statisticFlag && party.started) {
		
		wordsPerMinute.textContent = Math.round(
			(60000 * wordsMinute.length) / party.timerCounter
		);

		symbolsPerMinute.textContent = Math.round(
			(60000 * party.commonCounter) / party.timerCounter
		);

		errorPercent.textContent = Math.floor((10000 * party.errorCounter) / party.commonCounter) / 100 + "%";
	}
}
});





