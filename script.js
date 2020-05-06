/*jshint esversion: 6 */ 
// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt('Во сколько обойдется', '');
//     console.log('done');
//     appData.expenses[a] = b;
//     i++;
// }
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt('Во сколько обойдется', '');
//     console.log('done');
//     appData.expenses[a] = b;
//     i++;
// }
// while(i < 2)


let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt('Во сколько обойдется', '');
            
        if(typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
            && a != '' && b != '' && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    return alert("Ежедневный бюджет: " + appData.moneyPerDay);

}
detectDayBudget();



function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {

for(let i = 0; i < 3; i++) {
    let optExpenses = prompt("Статья необязательных расходов?");
    appData.optionalExpenses[i+1] = optExpenses;                   //i+1 for start counting from 1 and not from 0
    console.log(appData.optionalExpenses);
}

    
}

chooseOptExpenses();

