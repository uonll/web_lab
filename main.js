//задание 1
let ums=20, ukmh=36;
console.log(`${ukmh} м/c км/ч соответствует ${ukmh/3.6} м/c`);
console.log(`${ums} м/c соответствует ${ums*3.6} км/ч`);

//задание 2
console.log("");
let a=10, b=8, c=6;
let p=(a+b+c)/2;
if ((a+b>c) && (a+c>b) && (b+c>a))
    {
        console.log("треугольник существует");
        console.log(` периметр = ${a+b+c}`);
        console.log(` площадь = ${Math.sqrt(p*(p-a)*(p-b)*(p-c))}`);
        console.log(` соотношение = ${(a+b+c)/(Math.sqrt(p*(p-a)*(p-b)*(p-c)))}`);

    }    
else {console.log("треугольник не существует");}   


//задание 3
console.log("");
let n = prompt('Введите натуральное число:');
if (isNaN(n))
    {
        console.log("Вы не ввели число!");
    }
else
    {
        for (let i=0; i<=n; i++)
            {
                if (i%5==0 && i!=0) {console.log(`${i} fizz buzz`);}
                else
                    if (i%2==0) {console.log(`${i} buzz`);}
                    else {console.log(`${i} fizz`);}

            }
    }


//задание 4
console.log("");
let star = "*";
let grid = "#";
let line = "";
let numGrid = 2;
let numStar = 1;
let i=0;

for(i = 0; i <= 11; i++)
{
    if(i % 2 != 0)
        {           
            line += grid.repeat(numGrid);
            numGrid += 2; 
            line += "\n"; 
        }
    else
        {
            line += star.repeat(numStar);
            numStar += 2;
            line += "\n"
        }
}
line += "||";
console.log(line);

//задание 5
console.log("");
let num=11;
let z=NaN;
do
    {
        z = prompt('Введите целое число:');
        if (!isNaN(z))
            {
                if (z==num) {console.log("Вы угадали!");}
                else
                if (z>num) {console.log(`Число ${z} больше загаданного`);}
                    else {console.log(`Число ${z} меньше загаданного`);}
            }
        else {console.log("Вы не ввели число!");}    
    }
while (z!=num);

//задание 6
console.log("");
n=prompt('Введите целое ненулевое n');
x=prompt('Введите целое ненулевое x:');
y=prompt('Введите целое ненулевое y:');
console.log(`n=${n}, x=${x}, y=${y} => ${n%x===0 && n%y===0}`);

//задание 7
console.log("");
let m=prompt('Введите номер месяца:');
switch (m) {
    case '1':
    case '2':
    case '3':        
        console.log(`месяц ${m} - 1 квартал`);
        break;
    case '4':
    case '5':
    case '6':        
        console.log(`месяц ${m} - 2 квартал`);
        break;    
    case '7':
    case '8':
    case '9':        
        console.log(`месяц ${m} - 3 квартал`);
        break;
    case '10':
    case '11':
    case '12':        
        console.log(`месяц ${m} - 4 квартал`);
        break;
    default:
        console.log("Такого месяца не существует!");
}