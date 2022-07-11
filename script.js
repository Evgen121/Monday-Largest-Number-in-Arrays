/* var r = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];
var maxR = r.map(function(item) { //Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
    return Math.max.apply(null, item) //Метод Math.max() возвращает наибольшее из нуля или более чисел.
})
console.log(maxR); */

/* 
var arr = [
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
];

function largestOfFour(arr) {
    let largestArr = []; // пустой
    for (let i = 0; i < arr.length; i++) { //перебираем массив массивов
        let tempLarge = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) { //глубже, перебираем каждый отдельно
            let num = arr[i][j];
            if (num >= tempLarge) { //ищем максимум, сравниваем, сохраняем в переменную
                tempLarge = num
            }
        }
        largestArr.push(tempLarge)
    }
    return largestArr;
}
console.log(largestOfFour(arr)); */