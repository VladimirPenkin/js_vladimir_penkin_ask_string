function inputString () {

//получаем фразу от пользователся и преобразуем её в массив
let inputText = document.querySelector("#inputText").value;
let inputArray  = inputText.split(" ");

//создаём список из слов фразы
let result = "";
for (let i = 0; i < inputArray.length; i++) {
	result += "<li>" + inputArray[i] + "</li>"
};
document.querySelector("#output").innerHTML = "<ul>" + result + "</ul>";

//делаем первое слово в списке UPPERCASE
let getLi = document.getElementsByTagName("li");
getLi[0].innerHTML = getLi[0].innerHTML.toUpperCase();

//делаем все оставшиеся слова в списке lowercase
for (let i = 1; i < getLi.length; i ++) {
	getLi[i].innerHTML = getLi[i].innerHTML.toLowerCase();
};

//считаем букву "a" (кирилица) и выводим результат подсчёта модальным окном
let sum = 0; 

for (let i = 0; i < inputText.length; i++) {
	if (inputText[i].indexOf("а") != -1) {
		sum++;
	};
};
alert("In your phrase: " + sum + " letters \'a\'");

//обнуляем поле ввода
document.querySelector("#inputText").value = "";
};



