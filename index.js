//Создайте переменные a=10 и b=20. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение c. Сложите переменные c и d, а результат запишите в переменную result.
let a=10, b=20, c=a-b, d=c, res=c+d;
console.log(c);
console.log(d);
console.log(res);

//Переделайте этот код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, - -
//let num = 100;
//num = num + 7;
//num = num - 18;
//num = num * 10;
//num = num / 15;
//num = num + 1;
//num = num - 1;
num += 7;
num -= 18;
num *= 10;
num /= 15;
num++;
num--;

//Пользователь вводит свой возраст. Проверьте совершеннолетний ли он.
let userAge;
userAge=prompt('Введите возраст')
if(userAge>=18){
    console.log('Пользователь совершеннолетний')
}   else{
    console.log('Пользователь несовершеннолетний')
}

//Спросите у пользователя число. Возведите это число в квадрат.
let userNum, res;
userNum=prompt('Введите число, которое необходимо возвести в квадрат');
res=userNum**2;
console.log(res);

//Спросите у пользователя номер месяца (это будет число из интервала от 1 до 12) . Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let valMonths=prompt('Введите номер месяца');
let partOfYear;
if (valMonths>=1&&valMonths<=2){
    partOfYear='зима';
}   else if(valMonths>=3&&valMonths<=5){
    partOfYear='весна';
}   else if(valMonths>=6&&valMonths<=8){
    partOfYear='лето';
}   else if(valMonths>=9&&valMonths<=11){
    partOfYear='осень';
}   else if(valMonths=12){
    partOfYear='зима';
}
console.log(`Время года - ${partOfYear}`);

//Если переменная a равна или меньше 1, а переменная b больше 5, то выведите сумму этих переменных, иначе выведите их разность.

let a=prompt('Введите первое значение'), b=prompt('Введите второе значение'), res;
if(a<=1&&b>5){
    console.log(+a+ +b);
}   else{
    console.log(+a- +b);
}

//Вычислите стоимость покупки (N штук товара по цене P). начислить 2% скидки, если сумма больше 500 грн и 3%, если сумма больше 800грн.
let n, priceN, sum;
n=prompt('Введите количество предметов');
priceN=5;
sum=n*priceN;
if(sum>=500&&sum<800){
    sum=sum*0.98;
    console.log(`Cтоимость покупки составляет ${sum1} грн.`)
}   else if(sum>=800){
    sum=sum*0.97;
    console.log(`Cтоимость покупки составляет ${sum} грн.`)
} else{
    console.log(`Cтоимость покупки составляет ${sum} грн.`)
}

//Определите к внешней или к внутренней части круга принадлежит введенная пользователем точка с координатами (x, y) если уравнение окружности в центре координат (0,0) будет x^2 + y^2 = r^2. Значение радиуса и координаты точки задаёт пользователь.
//Примечание : значком ^ отмечена степень числа.