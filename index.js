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
if (valMonths==1&&valMonths==2||valMonths==12){
    partOfYear='зима';
}   else if(valMonths>=3&&valMonths<=5){
    partOfYear='весна';
}   else if(valMonths>=6&&valMonths<=8){
    partOfYear='лето';
}   else if(valMonths>=9&&valMonths<=11){
    partOfYear='осень';
}   else{
    partOfYear='Такого месяца нет';
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
let x=prompt('координаты Х');
let y=prompt('координаты Y');
let z=prompt('радиус круга');
let r2=(x*x+y*y);
if (r2>r1**2){
    console.log('точка принадлежить внешней части круга');
}   else{
    console.log('точка принадлежить внутренней части круга');
}

//циклы if while
let n=5, i=1;
while(i<=n){
    console.log('*')
    i=i+1;
}
while(n>0){
    console.log('*');
    n--;
}
let n=10, i=1;
while(i<=10){
    console.log(i)
    i++
}
//нечетные
let i=1,n=10;
while(i<=n){
    console.log(i);
    i=i+2;
}
let i=2,n=10;
while(i<=n){
    console.log(i);
    i=i+2;
}
let i=0,n=30;
while(i<=n){
    console.log(i);
    i=i+5;
}

let result=0;
i=1;
n=10;
while(i<=n){
    result+=i;
    i++;
}
/*i=1;
1<=10? result+=1;
i=2;
2<=10? result+=2;
...
i=11;
11<=10? exit;*/
let i=1, n=10;
result=1;
while(i<=n){
    result=result*i;
    i++;
}
console.log(result);

i = 1;
n = 10;
result = 1;
while(i <= n){
    result = result * i;
    i = i + 2;
}
console.log(result);

i = 1;
n = 10;
result = 0;
do{
    result = result + i;
    i = i + 1;
}   while(i<=n);
console.log(result);
//i=1 do: result=result+1=1, 1=1+1=2 while(2<=10)
//i=2 do: result=1+2=3, 1=2+1=3 while(3<=10)

//вычислить сумму нечетных чисел от 1 до 30
let num=1/*start*/, n=30/*end*/;
result=0;
while(num<=n){
    result+=num;
    num+=2;
}
console.log(result);

//вывести первых 5 значений степени 2
//оператор **, счетчик i отвечает за кол-во операций(5)
result=1;
(i=1), (n=5);
while(i<=n){
    result=2**i;
    console.log(result);
    i++
}
//или
result=1;
(i=1), (n=5);
while(i<=n){
    result=result*2;
    console.log(result);
    i++
}

//вывести первые 5 значений степени 8
result=1;
(i=1), (n=5);
while(i<=n){
    result=result*8;
    console.log(result);
    i++
}

//спросить у пользователя общеизвестный факт и проверить, правильный ответ или нет
let userAnswer, rightAnswer, i, n;
userAnswer=prompt('2+2=?');
rightAnswer=4;
i=1;
n=3;
if(userAnswer==rightAnswer){
    console.log('Cool!');
}   else{
    console.log('Wrong! Try again!');
} do{
    userAnswer=prompt('2+2=?');
    i = i + 1;
}   while(i<=n);

let userAnswer, rightAnswer, i, n;
userAnswer=prompt('2+2=?');
rightAnswer=4;
if(userAnswer==rightAnswer){
    console.log('Cool!');
}   else{
    userAnswer=prompt('2+2=?');
    if(userAnswer==rightAnswer){
        console.log('Cool!');
    }   else{
        userAnswer=prompt('2+2=?');
        if(userAnswer==rightAnswer){
        console.log('Cool!');
        }   else{
            console.log('Wrong!');
        }
    }
}

let userAnswer, rightAnswer, i, n;
rightAnswer=4;
i=1;
while(i<=3){
    userAnswer=prompt('2+2=?');
    if (userAnswer==rightAnswer){
    console.log('Cool!');
    break; //выход и прекращение цикла
    }   else{
        console.log('Wrong!');
    }
    i++
}
//--
let userAnswer, rightAnswer, i, n;
rightAnswer=4;
i=1;
while(i<=99999){
    userAnswer=prompt('2+2=?');
    if (userAnswer==rightAnswer){
    console.log('Cool!');
    break; //выход и прекращение цикла
    }   else{
        console.log('Wrong!');
    }
    i++
}

let userAnswer, rightAnswer, i, n;
userAnswer=prompt('2+2=?');
rightAnswer=4;
while(userAnswer!=rightAnswer){
    console.log('Wrong!');
    userAnswer=prompt('2+2=?');
}
console.log('Yes!')

let userAnswer, rightAnswer, i, n;
userAnswer=prompt('2+2=?');
rightAnswer=4;
i=1;
n=3;
if(userAnswer==rightAnswer){
    console.log('Cool!');
}   else{
    console.log('Wrong! Try again!');
} do{
    userAnswer=prompt('2+2=?');
}   while(userAnswer!=rightAnswer){
    console.log('Yes!')
}

//while(true){
//    console.log('*');
//} вечный цикл

let userAnswer, rightAnswer;
rightAnswer=4;
while(true){
    userAnswer=prompt('2+2=?');
    if(userAnswer==rightAnswer){
        console.log('Yes!');
        break;
    }   else{
        console.log('No!');
    }
}

let userAnswer, rightAnswer;
rightAnswer=4;
while(true){
    userAnswer=prompt('2+2=?');
    if(userAnswer==rightAnswer){
        console.log('Yes!');
        break;
    }   console.log('No!');
}

let userAnswer, rightAnswer;
rightAnswer=4;
while(true){
    userAnswer=prompt('2+2=?');
    if(userAnswer!=rightAnswer){
        console.log('No!');
        continue;
    }   console.log('Yes!');
    break;
}

//диапазон
//таблица значений для функции y=-3x^2+5-2 для значений х от -2 до 2 с шагом 0,5
let x=-2, limitX=2, step=0.5, y;
while(x<=limitX){
    y=-3*x*x+5*x-2;
    console.log('x=',x, 'y=',y);
    x+=step;
}

//цикл for
//from 1 to 10

let n=10;
for(i=1;i<=10;i++){
    console.log(i);
}
//нечетные числа
let n=10;
for(i=1;i<=10;i=i+2){
    console.log(i);
}

let n=10;
for(i=2;i<=10;i=i+2){
    console.log(i);
}
//сумма чисел от 1 до 100
n=100;
result=0;
for(num=1;num<=n;num++){
    result+=num;
}
console.log(result)

//for (;;){} бесконечный цикл аналог while но нужно не забыть о break

//таблица умножения на 2 через вайл и фор
//таблица умножения  фор

n=10;
let base=2;
for(i=1;i<=10;i++){
    result=base*i;
    console.log(result);
}

n=10;
let base=2;
i=1;
while(i<=n){
    result=base*i;
    console.log(result);
    i++;
}

//
base=2;
for(i=1;i<=10;i++){
    result=base*i;
    console.log(result);
}
base=3;
for(i=1;i<=10;i++){
    result=base*i;
    console.log(result);
}
base=4;
for(i=1;i<=10;i++){
    result=base*i;
    console.log(`${base} * ${i} = ${result}`);
}
//
let startYear, endYear, isLeapYear=false;
startYear=2021;
endYear=2050;
for(i=startYear;i<=endYear;i++){
    if(i%4==0){
    console.log(i);
    isLeapYear=true;
    }
}
if (isLeapYear==false){
    console.log('No!');
}
//количество високостных годов
let startYear, endYear, countLeapYear=0;
startYear=2021;
endYear=2050;
for(i=startYear;i<=endYear;i++){
    if(i%4==0){
    console.log(i);
    countLeapYear++;
    }
}
console.log(countLeapYear);

//условие if-else{} альтернатива, выбор, условие задачи
//циклы for, while, do-while действие повторяется какое-то кол-во раз или постоянно и есть шаг изменений
//function название (список параметров){тело функции}
function printStars(countYourStars){
    //этот кусок видит только эта функция, их не видит основная программа
    while(countYourStars>0){
        console.log('*');
        countYourStars--;
    }
}
printStars(2);
printStars(50);

function sumNum(n){
    let result=0, num;
    for(num=1;num<=n;num++){
        result+=num;
    }
    return result;//возврат значения
}
let res;
res=sumNum(10);
console.log('sum from 1 to 10 is', res)

function sumNum2(limit1, limit2){
    let result=0, num;
    for(num=limit1;num<=limit2;num++){
        result+=num;
    }
    return result;//возврат значения
}
res=sumNum2(10,15);
console.log(res);

function sumNum2(limit1, limit2){
    let result=1, num;
    for(num=limit1;num<=limit2;num++){
        result*=num;
    }
    return result;//возврат значения
}
res=sumNum2(10,15);
console.log(res);

//високостные
function leapYearFunc (startYear, endYear){
    let isLeapYear=false;
    for(i=startYear;i<=endYear;i++){
        if(i%4==0){
            console.log(i);
            isLeapYear=true;
        }
    }
    if(isLeapYear==false){
        console.log('No!')
    }
}
leapYearFunc(2021,2050);

function leapYearFunc2 (startYear, endYear){
    let countLeapYear=0, i;
    for(i=startYear;i<=endYear;i++){
        if(i%4==0){
            console.log(i);
            countLeapYear++;
        }
    }
    if(countLeapYear==0){
        console.log('No!')
    }
    return countLeapYear;
}
res = leapYearFunc2(2021,2050);
console.log(res);

//значения по умолчанию для функции - дефолтные параметры, их задают в конец

function sumNum3(limit2, limit1=1){
    let result=0, num;
    for(num=limit1;num<=limit2;num++){
        result+=num;
    }
    return result;//возврат значения
}
console.log(sumNum3(1,10));
