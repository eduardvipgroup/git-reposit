/*первое задание*/
// первый способ
var i = 2;
while (i <= 100) {
	var j = 2;
	var simple = 1; // 1 = true
	while (j < i) { //   while(j <= 9){
		if (i % j == 0) { //     if(i % j == 0 && i != j){
			simple = 0; // 0 = false
			break;
		}
		j++;
	}
	if (simple) console.log(i);
	i++
}
// второй способ
function itSimple(min, max) {
	if (min < 2) min = 2;
	var i = min;
	while (i <= max) {
		var j = 2;
		var simple = true;
		while (j <= 9) {
			if (i % j == 0 && i != j) {
				simple = false;
				break;
			}
			j++;
		}
		if (simple) console.log(i);
		i++;
	}
}
itSimple(1, 100);// вызываем функцию, передавая ей аргументы
/*второе задание*/
var i = 0;
do {
	if (i === 0) {
		console.log(i + '- это ноль');
	}
	else if ((i % 2) === 0) {
		console.log(i + '- это четное число');
	}
	else {
		console.log(i + '- это нечетное число');
	}
	i++;
}
while (i <= 10);
/* третье задание*/
for (i = 0; i < 9; i++, console.log(i)) {}
/* четвертое задание*/
var a = "X";
var i = 0;
while (i < 20) {
	console.log(a);
	a += 'X';
	i++;
}
console.log(typeof a);